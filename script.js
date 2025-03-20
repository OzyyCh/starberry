// Скрипт для калькулятора удобрений для клубники - GitHub Pages версия
// Работает полностью на клиентской стороне (без серверных запросов)
// Константы STAGES и WEEKS_PER_STAGE импортированы из standalone.js

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация приложения
    initApp();
});

// Инициализация приложения
function initApp() {
    // Переключатель темы
    const themeSwitch = document.getElementById('themeSwitch');
    
    // Проверка сохраненной темы
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeSwitch.checked = true;
    }
    
    // Убран функционал калькулятора площади
    
    // Обработчик переключения темы
    themeSwitch.addEventListener('change', toggleTheme);
    
    // Обработчик кнопки расчета
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', doCalculation);
    
    // Настройка калькулятора опрыскивания
    setupSprayCalculator();
    
    // Инициализация экспорта в PDF и печати
    // Эти кнопки находятся внутри модального окна результатов
    const modalExportButton = document.getElementById('modalExportButton');
    if (modalExportButton) {
        modalExportButton.addEventListener('click', exportToPdf);
    }
    
    // Инициализация печати
    const modalPrintButton = document.getElementById('modalPrintButton');
    if (modalPrintButton) {
        modalPrintButton.addEventListener('click', function() {
            window.print();
        });
    }
    
    // Инициализация калькулятора опрыскивания
    const modalSprayCalcButton = document.getElementById('modalSprayCalcButton');
    if (modalSprayCalcButton) {
        modalSprayCalcButton.addEventListener('click', function() {
            // Открываем модальное окно калькулятора опрыскивания с формулой по умолчанию
            openSprayCalculatorModal('50г/10л воды');
        });
    }
    
    // Инициализация данных в локальной версии
    setupStageCards(STAGES);
    selectStage('growth'); // По умолчанию первая стадия
    
    // Установка обработчиков для карточек стадий
    const stageCards = document.querySelectorAll('.stage-card');
    stageCards.forEach(card => {
        card.addEventListener('click', function() {
            const stage = this.getAttribute('data-stage');
            selectStage(stage);
        });
    });
    
    // Установка обработчиков для карточек недель
    const weekCards = document.querySelectorAll('.week-card');
    weekCards.forEach(card => {
        card.addEventListener('click', function() {
            const week = this.getAttribute('data-week');
            selectWeek(week);
        });
    });
    
    // Загрузка данных об удобрениях для модального окна
    setupFertilizerModal();
    
    // Загружаем пользовательские удобрения, если они есть
    // loadCustomFertilizers(); // Временно отключено
    
    // Настройка модальных окон и форм
    setupCustomFertilizerForm();
    setupManageFertilizersModal();
    
    // Закрытие модальных окон
    setupModalCloseButtons();
}

// Настройка кнопок закрытия модальных окон
function setupModalCloseButtons() {
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Закрытие при нажатии на кнопку "Закрыть" в модальном окне результатов
    const modalCloseButton = document.getElementById('modalCloseButton');
    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', function() {
            document.getElementById('resultsModal').style.display = 'none';
        });
    }
}

// Настройка карточек стадий роста
function setupStageCards(stages) {
    const stageCards = document.querySelectorAll('.stage-card');
    
    stageCards.forEach(card => {
        card.addEventListener('click', function() {
            stageCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const stageKey = this.getAttribute('data-stage');
            selectStage(stageKey);
        });
    });
}

// Настройка модального окна с информацией об удобрениях
function setupFertilizerModal() {
    const fertilizerInfoLink = document.getElementById('fertilizerInfoLink');
    const fertilizerInfoModal = document.getElementById('fertilizerInfoModal');
    const closeModal = fertilizerInfoModal.querySelector('.close-modal');
    const fertilizerList = document.getElementById('fertilizerList');
    
    // Обработчик открытия модального окна по ссылке
    fertilizerInfoLink.addEventListener('click', function(e) {
        e.preventDefault();
        fertilizerInfoModal.style.display = 'block';
    });
    
    // Очищаем список и заполняем его данными
    fertilizerList.innerHTML = '';
    
    // Создаем группы по типам удобрений
    const fertilizersByType = {};
    
    // Группируем удобрения по типам
    for (const [name, description] of Object.entries(fertilizerData.descriptions)) {
        const type = getFertilizerType(name);
        if (!fertilizersByType[type]) {
            fertilizersByType[type] = [];
        }
        fertilizersByType[type].push({ name, description });
    }
    
    // Добавляем заголовки групп и удобрения
    for (const [type, fertilizers] of Object.entries(fertilizersByType)) {
        // Создаем заголовок группы
        const groupTitle = document.createElement('h3');
        groupTitle.className = 'fertilizer-type-title';
        groupTitle.innerHTML = `${getFertilizerIconHTML(type)} ${getFertilizerTypeName(type)}`;
        fertilizerList.appendChild(groupTitle);
        
        // Создаем карточки для каждого удобрения
        fertilizers.forEach(fert => {
            const card = document.createElement('div');
            card.className = 'fertilizer-card';
            card.innerHTML = `
                <div class="fertilizer-card-header">
                    <h3>${fert.name}</h3>
                    <div class="fertilizer-type-tag">${getFertilizerTypeName(type)}</div>
                </div>
                <div class="fertilizer-card-body">
                    <p>${fert.description}</p>
                </div>
            `;
            fertilizerList.appendChild(card);
        });
    }
    
    // Кнопка добавления пользовательского удобрения
    const addCustomFertilizerBtn = document.getElementById('addCustomFertilizerBtn');
    addCustomFertilizerBtn.addEventListener('click', openCustomFertilizerModal);
    
    // Кнопка управления удобрениями
    const manageFertilizersBtn = document.getElementById('manageFertilizersBtn');
    manageFertilizersBtn.addEventListener('click', openManageFertilizersModal);
}

// Выбор стадии роста
function selectStage(stage) {
    // Активируем выбранную стадию в интерфейсе
    const stageCards = document.querySelectorAll('.stage-card');
    stageCards.forEach(card => {
        if (card.getAttribute('data-stage') === stage) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
    
    const weekCards = document.querySelectorAll('.week-card');
    
    // Очищаем все карточки недель
    weekCards.forEach(card => {
        card.style.display = 'none';
        card.classList.remove('active');
    });
    
    // Отображаем недели только для выбранной стадии
    const weeksForStage = WEEKS_PER_STAGE[stage] || 3;
    for (let i = 1; i <= weeksForStage; i++) {
        const weekCard = document.querySelector(`.week-card[data-week="${i}"]`);
        if (weekCard) {
            weekCard.style.display = 'block';
        }
    }
    
    // Активируем первую неделю для выбранной стадии
    const firstWeekCard = document.querySelector(`.week-card[data-week="1"]`);
    if (firstWeekCard) {
        firstWeekCard.classList.add('active');
    }
    
    // Добавляем обработчики клика для недель
    setupWeekCards();
}

// Выбор недели
function selectWeek(week) {
    // Активируем выбранную неделю в интерфейсе
    const weekCards = document.querySelectorAll('.week-card');
    weekCards.forEach(card => {
        if (card.getAttribute('data-week') === week) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
    
    console.log(`Выбрана неделя: ${week}`);
}

// Настройка карточек недель
function setupWeekCards() {
    const weekCards = document.querySelectorAll('.week-card');
    
    weekCards.forEach(card => {
        // Удаляем старые обработчики, чтобы избежать дублирования
        const clonedCard = card.cloneNode(true);
        card.parentNode.replaceChild(clonedCard, card);
        
        // Добавляем новый обработчик события
        clonedCard.addEventListener('click', function() {
            // Проверяем, что карточка видима (не скрыта)
            if (this.style.display !== 'none') {
                const week = this.getAttribute('data-week');
                selectWeek(week);
                console.log(`Выбрана неделя: ${week}`);
            }
        });
    });
}

// Функция калькулятора площади удалена

function doCalculation() {
    const bedLength = parseFloat(document.getElementById('bedLength').value) || 0;
    const numBeds = parseInt(document.getElementById('bedCount').value) || 0;
    
    // Проверка входных данных
    if (bedLength <= 0 || numBeds <= 0) {
        alert('Пожалуйста, введите корректные значения для длины и количества билонов');
        return;
    }
    
    const activeStage = document.querySelector('.stage-card.active').getAttribute('data-stage');
    const activeWeek = document.querySelector('.week-card.active').getAttribute('data-week');
    
    try {
        console.log('Расчет удобрений для параметров:', {
            bedLength,
            numBeds,
            activeStage,
            activeWeek
        });
        
        // Импортированная функция calculateFertilizer из standalone.js
        // Создаем временную функцию, чтобы избежать конфликта имен
        const standaloneFunctionCalculate = window.calculateFertilizer;
        
        if (typeof standaloneFunctionCalculate !== 'function') {
            throw new Error('Функция расчета не найдена');
        }
        
        // Вызываем функцию из standalone.js
        const results = standaloneFunctionCalculate(bedLength, numBeds, null, activeStage, activeWeek);
        
        console.log('Результаты расчета:', results);
        
        // Проверяем, есть ли данные об опрыскивании
        if (results['Опрыскивание']) {
            console.log('Обнаружены данные опрыскивания:', results['Опрыскивание']);
        }
        
        if (!results || Object.keys(results).length === 0) {
            throw new Error('Нет результатов расчета');
        }
        
        // Форматируем результаты для отображения
        const formattedResults = {};
        for (const [key, value] of Object.entries(results)) {
            // Пропускаем метаданные
            if (key === '_metadata') continue;
            
            // Если это объект с флагом is_spray, сохраняем его как есть
            if (typeof value === 'object' && value !== null && value.is_spray) {
                formattedResults[key] = value;
            }
            // Если значение - объект c value свойством, берем его value свойство
            else if (typeof value === 'object' && value !== null && 'value' in value) {
                formattedResults[key] = value.value;
            } else {
                // Иначе используем значение как есть
                formattedResults[key] = parseFloat(value) || 0;
            }
        }
        
        // Отображаем результаты в модальном окне
        displayResults(formattedResults, bedLength, numBeds, activeStage, activeWeek);
        
        // Открываем модальное окно с результатами
        document.getElementById('resultsModal').style.display = 'block';
    } catch (error) {
        console.error('Ошибка при расчете удобрений:', error);
        alert('Произошла ошибка при расчете удобрений: ' + error.message);
    }
}

// Отображение результатов расчета
function displayResults(results, bedSize, bedCount, stage, week) {
    console.log('Отображение результатов расчета');
    
    // Заполняем данные в модальном окне
    document.getElementById('modalBedSize').textContent = bedSize;
    document.getElementById('modalBedCount').textContent = bedCount;
    
    // Преобразуем ключи стадий в читаемый текст
    let stageText = '';
    switch(stage) {
        case 'growth':
            stageText = 'Отрастание';
            break;
        case 'flowering':
            stageText = 'Цветение';
            break;
        case 'fruiting':
            stageText = 'Плодоношение';
            break;
        case 'dormant':
            stageText = 'Закладка почек';
            break;
        default:
            stageText = stage;
    }
    
    document.getElementById('modalStage').textContent = stageText;
    document.getElementById('modalWeek').textContent = week;
    
    // Контейнер для карточек удобрений
    const fertilizerCardsContainer = document.getElementById('modalFertilizerCards');
    fertilizerCardsContainer.innerHTML = '';
    
    // Заголовок секции с иконкой
    const titleElement = document.querySelector('.fertilizer-results-title');
    if (titleElement) {
        titleElement.innerHTML = '<i class="fas fa-leaf"></i> Необходимые удобрения';
    }
    
    // Задержка для анимированного появления карточек
    let delay = 0;
    
    // Создаем карточки для каждого удобрения
    for (const [name, data] of Object.entries(results)) {
        // Пропускаем метаданные и нулевые значения
        if (name === '_metadata' || !data || (typeof data === 'number' && data <= 0)) continue;
        
        // Если это запись об опрыскивании
        if (data.is_spray || (data.note && data.note.toLowerCase().includes('опрыскивание'))) {
            console.log('Отображение карточки опрыскивания:', data);
            
            // Создаем специальную карточку для опрыскивания
            const card = document.createElement('div');
            card.className = `fertilizer-card-result spray`;
            card.style.animation = `fadeInUp 0.5s ease-out ${delay}s both`;
            card.style.width = 'auto'; // Автоматическая ширина для лучшего размещения в сетке
            
            // Получаем текст опрыскивания
            const sprayText = data.note || `Опрыскивание`;
            console.log('Текст опрыскивания:', sprayText);
            
            card.innerHTML = `
                <div class="fertilizer-icon">
                    <div class="fert-icon spray-icon" title="Опрыскивание"><i class="fas fa-spray-can"></i></div>
                </div>
                <div class="fertilizer-info">
                    <h3 class="fertilizer-name">Опрыскивание</h3>
                    <div class="quote-container">
                        <blockquote class="spray-quote">
                            <p class="spray-text">${sprayText}</p>
                        </blockquote>
                    </div>
                    <button class="calculate-spray-btn" onclick="openSprayCalculatorModal('${sprayText.replace(/'/g, "\\'")}')">
                        Рассчитать опрыскивание
                    </button>
                </div>
            `;
            
            fertilizerCardsContainer.appendChild(card);
            delay += 0.1;
            continue;
        }
        
        // Получаем значение и единицу измерения для обычных удобрений
        let amount, unit;
        if (typeof data === 'number') {
            amount = data;
            unit = 'кг';
        } else {
            amount = data.value || data.amount;
            unit = data.unit || 'кг';
            if (typeof amount === 'string') {
                amount = parseFloat(amount.replace(/[^\d.-]/g, ''));
            }
        }
        
        // Проверяем, что значение числовое и больше 0
        if (typeof amount !== 'number' || amount <= 0) continue;
        
        // Определяем тип удобрения и проверяем, пользовательское ли оно
        const isCustom = data.is_custom || name.includes('Пользовательское');
        const fertType = isCustom ? 'custom' : getFertilizerType(name);
        
        // Создаем карточку
        const card = document.createElement('div');
        card.className = `fertilizer-card-result ${fertType}`;
        card.style.animation = `fadeInUp 0.5s ease-out ${delay}s both`;
        
        // Форматируем имя (убираем префикс "Пользовательское: " если есть)
        const displayName = name.replace('Пользовательское: ', '');
        
        // Добавляем метку пользовательского удобрения если нужно
        const customBadge = isCustom ? '<span class="custom-badge">Моё</span>' : '';
        
        // Форматируем числовое значение с двумя знаками после запятой
        const formattedAmount = amount.toFixed(2);
        
        card.innerHTML = `
            <div class="fertilizer-icon">
                ${getFertilizerIconHTML(fertType)}
            </div>
            <div class="fertilizer-info">
                <h3 class="fertilizer-name">${displayName} ${customBadge}</h3>
                <p class="fertilizer-amount">${formattedAmount} ${unit}</p>
                ${data.note ? `<p class="fertilizer-note-user">${data.note}</p>` : ''}
            </div>
        `;
        
        fertilizerCardsContainer.appendChild(card);
        
        delay += 0.1; // Инкрементируем задержку для следующей карточки
    }
    
    // Создаем график
    createChart(results);
    
    // Показываем модальное окно
    document.getElementById('resultsModal').style.display = 'block';
}

// Создание графика распределения удобрений
function createChart(results, canvasId = 'modalFertilizerChart') {
    // Проверяем, есть ли данные для графика
    if (!results || Object.keys(results).length === 0) {
        document.getElementById('modalChartContainer').style.display = 'none';
        return;
    }
    
    // Показываем контейнер графика
    document.getElementById('modalChartContainer').style.display = 'block';
    
    // Подготавливаем данные для графика
    const labels = [];
    const data = [];
    const backgroundColors = [];
    
    for (const [name, amount] of Object.entries(results)) {
        // Пропускаем метаданные и записи опрыскивания
        if (name === '_metadata' || 
            (typeof amount === 'object' && amount !== null && amount.is_spray)) {
            continue;
        }
        
        // Преобразуем в число, если это объект
        let numericAmount = amount;
        if (typeof amount === 'object' && amount !== null) {
            numericAmount = amount.value || 0;
        }
        
        // Проверяем, что это действительно число, и оно больше 0
        if (typeof numericAmount !== 'number' || numericAmount <= 0) continue;
        
        labels.push(name);
        data.push(numericAmount.toFixed(2));
        
        // Выбираем цвет в зависимости от типа удобрения
        const type = getFertilizerType(name);
        let color = '#607d8b'; // Default color
        
        switch(type) {
            case 'nitrogen':
                color = '#3498db';
                break;
            case 'phosphorus':
                color = '#e67e22';
                break;
            case 'potassium':
                color = '#9b59b6';
                break;
            case 'calcium':
                color = '#95a5a6';
                break;
            case 'magnesium':
                color = '#1abc9c';
                break;
            case 'stimulant':
                color = '#f1c40f';
                break;
            case 'foliar':
                color = '#2ecc71';
                break;
            case 'complex':
                color = '#e74c3c';
                break;
        }
        
        backgroundColors.push(color);
    }
    
    // Проверяем существование canvas и предыдущего графика
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    // Пытаемся уничтожить предыдущий график
    const chartInstance = Chart.getChart(canvasId);
    if (chartInstance) {
        chartInstance.destroy();
    }
    
    // Создаем новый график
    try {
        new Chart(canvas, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColors,
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw} кг`;
                            }
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Ошибка при создании графика:', error);
        document.getElementById('modalChartContainer').style.display = 'none';
    }
}

// Получение типа удобрения по его названию
function getFertilizerType(name) {
    // Проверка на пользовательское удобрение
    if (name.startsWith('Пользовательское')) {
        return 'custom';
    }
    
    // Определение типа удобрения по его названию
    const lowerName = name.toLowerCase();
    
    // Определение типов для конкретных удобрений из нашего справочника
    if (name === 'МКР') {
        return 'phosphorus'; // Моно Калий Фосфат - фосфорное удобрение
    } else if (name === 'KNO3') {
        return 'potassium'; // Калиевая селитра - калийное удобрение
    } else if (name === 'Ca(NO3)2') {
        return 'calcium'; // Кальциевая селитра - кальциевое удобрение
    } else if (name === 'TeraFlex S') {
        return 'complex'; // Комплексное удобрение
    } else if (name === 'MgNO3') {
        return 'magnesium'; // Магниевая селитра - магниевое удобрение
    } else if (name === 'Bombardier') {
        return 'stimulant'; // Стимулятор роста
    } else if (name === 'NH4NO3') {
        return 'nitrogen'; // Аммиачная селитра - азотное удобрение
    } else if (name === 'Amifort' || name === 'Fruka') {
        return 'foliar'; // Листовые подкормки
    } else if (name === 'Rhyzo') {
        return 'stimulant'; // Стимулятор роста для корней
    }
    
    // Определение по общим шаблонам, если не найдено конкретное соответствие
    if (lowerName.includes('азот') || lowerName.includes('аммиачн') || lowerName.includes('мочевин') || lowerName.includes('nh4')) {
        return 'nitrogen';
    } else if (lowerName.includes('фосфор') || lowerName.includes('суперфосфат')) {
        return 'phosphorus';
    } else if (lowerName.includes('калий') || lowerName.includes('сульфат калия')) {
        return 'potassium';
    } else if (lowerName.includes('кальций') || lowerName.includes('селитра')) {
        return 'calcium';
    } else if (lowerName.includes('магни')) {
        return 'magnesium';
    } else if (lowerName.includes('стимул') || lowerName.includes('янтар') || lowerName.includes('гумат')) {
        return 'stimulant';
    } else if (lowerName.includes('листов') || lowerName.includes('foliar') || lowerName.includes('хелат')) {
        return 'foliar';
    } else if (lowerName.includes('нпк') || lowerName.includes('комплекс') || lowerName.includes('compound')) {
        return 'complex';
    }
    
    return 'complex'; // По умолчанию вместо 'default'
}

// Получение HTML иконки для типа удобрения
function getFertilizerIconHTML(type) {
    let icon = '';
    
    switch(type) {
        case 'nitrogen':
            icon = '<div class="fert-icon nitrogen-icon" title="Азотное удобрение"><i class="fas fa-flask"></i></div>';
            break;
        case 'phosphorus':
            icon = '<div class="fert-icon phosphorus-icon" title="Фосфорное удобрение"><i class="fas fa-atom"></i></div>';
            break;
        case 'potassium':
            icon = '<div class="fert-icon potassium-icon" title="Калийное удобрение"><i class="fas fa-tint"></i></div>';
            break;
        case 'calcium':
            icon = '<div class="fert-icon calcium-icon" title="Кальцийсодержащее удобрение"><i class="fas fa-bone"></i></div>';
            break;
        case 'magnesium':
            icon = '<div class="fert-icon magnesium-icon" title="Магнийсодержащее удобрение"><i class="fas fa-leaf"></i></div>';
            break;
        case 'stimulant':
            icon = '<div class="fert-icon stimulant-icon" title="Стимулятор роста"><i class="fas fa-bolt"></i></div>';
            break;
        case 'foliar':
            icon = '<div class="fert-icon foliar-icon" title="Листовая подкормка"><i class="fas fa-spray-can"></i></div>';
            break;
        case 'complex':
            icon = '<div class="fert-icon complex-icon" title="Комплексное удобрение"><i class="fas fa-cubes"></i></div>';
            break;
        case 'custom':
            icon = '<div class="fert-icon custom-icon" title="Пользовательское удобрение"><i class="fas fa-star"></i></div>';
            break;
        default:
            icon = '<div class="fert-icon default-icon" title="Удобрение"><i class="fas fa-vial"></i></div>';
    }
    
    return icon;
}

// Получение названия типа удобрения
function getFertilizerTypeName(type) {
    switch(type) {
        case 'nitrogen':
            return 'Азотные';
        case 'phosphorus':
            return 'Фосфорные';
        case 'potassium':
            return 'Калийные';
        case 'calcium':
            return 'Кальциевые';
        case 'magnesium':
            return 'Магниевые';
        case 'stimulant':
            return 'Стимуляторы';
        case 'foliar':
            return 'Листовые подкормки';
        case 'complex':
            return 'Комплексные';
        case 'custom':
            return 'Пользовательские';
        default:
            return 'Комплексные'; // Изменено с 'Другие' на 'Комплексные'
    }
}

// Настройка формы добавления пользовательского удобрения
function setupCustomFertilizerForm() {
    const customFertilizerForm = document.getElementById('customFertilizerForm');
    const fertStageSelect = document.getElementById('fertStage');
    const fertWeekSelect = document.getElementById('fertWeek');
    const cancelCustomFertBtn = document.getElementById('cancelCustomFert');
    
    // Заполняем список стадий
    fertStageSelect.innerHTML = '';
    Object.entries(STAGES).forEach(([key, value]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = value;
        fertStageSelect.appendChild(option);
    });
    
    // Обновляем список недель при изменении стадии
    fertStageSelect.addEventListener('change', function() {
        updateWeekOptions(this.value);
    });
    
    // Инициализация с первой стадией
    updateWeekOptions(fertStageSelect.value);
    
    // Обработчик отмены
    cancelCustomFertBtn.addEventListener('click', function() {
        document.getElementById('customFertilizerModal').style.display = 'none';
    });
    
    // Обработчик отправки формы
    customFertilizerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addCustomFertilizer(this);
    });
    
    // Функция обновления списка недель
    function updateWeekOptions(stage) {
        fertWeekSelect.innerHTML = '';
        const weeksCount = WEEKS_PER_STAGE[stage] || 3;
        
        for (let i = 1; i <= weeksCount; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Неделя ${i}`;
            fertWeekSelect.appendChild(option);
        }
    }
}

// Открытие модального окна добавления пользовательского удобрения
function openCustomFertilizerModal() {
    document.getElementById('fertilizerInfoModal').style.display = 'none';
    document.getElementById('customFertilizerModal').style.display = 'block';
}

// Добавление пользовательского удобрения
function addCustomFertilizer(form) {
    const formData = new FormData(form);
    const name = formData.get('name');
    const description = formData.get('description');
    const stage = formData.get('stage');
    const week = formData.get('week');
    const amount = formData.get('amount');
    const unit = formData.get('unit');
    const note = formData.get('note') || '';
    
    // Проверка обязательных полей
    if (!name || !description || !stage || !week || !amount || !unit) {
        alert('Пожалуйста, заполните все обязательные поля');
        return;
    }
    
    // Создаем название с префиксом
    const fullName = `Пользовательское: ${name}`;
    
    // Сохраняем в localStorage
    saveCustomFertilizerToLocalStorage(fullName, description, stage, week, amount, unit, note);
    
    // Закрываем модальное окно
    document.getElementById('customFertilizerModal').style.display = 'none';
    
    // Показываем уведомление
    alert('Удобрение успешно добавлено!');
    
    // Сбрасываем форму
    form.reset();
    
    // Обновляем список пользовательских удобрений
    loadCustomFertilizers();
}

// Настройка модального окна управления пользовательскими удобрениями
function setupManageFertilizersModal() {
    const backToFertInfoBtn = document.getElementById('backToFertInfoBtn');
    
    backToFertInfoBtn.addEventListener('click', function() {
        document.getElementById('manageFertilizersModal').style.display = 'none';
        document.getElementById('fertilizerInfoModal').style.display = 'block';
    });
}

// Открытие модального окна управления пользовательскими удобрениями
function openManageFertilizersModal() {
    // Загружаем список пользовательских удобрений
    loadCustomFertilizersList();
    
    // Скрываем модальное окно справочника и показываем модальное окно управления
    document.getElementById('fertilizerInfoModal').style.display = 'none';
    document.getElementById('manageFertilizersModal').style.display = 'block';
}

// Загрузка списка пользовательских удобрений для управления
function loadCustomFertilizersList() {
    const customFertilizersList = document.getElementById('customFertilizersList');
    customFertilizersList.innerHTML = '';
    
    // Загружаем пользовательские удобрения из localStorage
    const customFertilizers = loadCustomFertilizersFromLocalStorage();
    
    if (!customFertilizers || Object.keys(customFertilizers).length === 0) {
        customFertilizersList.innerHTML = '<p class="no-fertilizers-message">У вас пока нет добавленных удобрений</p>';
        return;
    }
    
    // Создаем карточки для каждого удобрения
    for (const [key, fertilizer] of Object.entries(customFertilizers)) {
        const [name, stage, week] = key.split('|');
        
        const card = document.createElement('div');
        card.className = 'fertilizer-card custom-fertilizer-card';
        
        // Форматируем стадию роста для отображения
        let stageText = '';
        switch(stage) {
            case 'growth':
                stageText = 'Отрастание';
                break;
            case 'flowering':
                stageText = 'Цветение';
                break;
            case 'fruiting':
                stageText = 'Плодоношение';
                break;
            case 'dormant':
                stageText = 'Закладка почек';
                break;
            default:
                stageText = stage;
        }
        
        card.innerHTML = `
            <div class="fertilizer-card-header">
                <h3>${name.replace('Пользовательское: ', '')}</h3>
                <button class="delete-fertilizer-btn" data-name="${name}" data-stage="${stage}" data-week="${week}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="fertilizer-card-body">
                <p>${fertilizer.description}</p>
                <p><strong>Количество:</strong> ${fertilizer.amount} ${fertilizer.unit}</p>
                ${fertilizer.note ? `<p><strong>Примечание:</strong> ${fertilizer.note}</p>` : ''}
            </div>
            <div class="custom-fert-stages">
                <small>Применяется на:</small>
                <span class="custom-fert-stage">${stageText}, Неделя ${week}</span>
            </div>
        `;
        
        customFertilizersList.appendChild(card);
    }
    
    // Добавляем обработчики для кнопок удаления
    setupDeleteFertilizerButtons();
}

// Настройка кнопок удаления пользовательских удобрений
function setupDeleteFertilizerButtons() {
    const deleteButtons = document.querySelectorAll('.delete-fertilizer-btn');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const stage = this.getAttribute('data-stage');
            const week = this.getAttribute('data-week');
            
            if (confirm(`Вы уверены, что хотите удалить удобрение "${name.replace('Пользовательское: ', '')}"?`)) {
                deleteFertilizer(name, stage, week);
            }
        });
    });
}

// Удаление пользовательского удобрения
function deleteFertilizer(name, stage, week) {
    // Удаляем из localStorage
    deleteCustomFertilizerFromLocalStorage(name, stage, week);
    
    // Обновляем список
    loadCustomFertilizersList();
    loadCustomFertilizers();
    
    // Показываем уведомление
    alert('Удобрение успешно удалено');
}

// Настройка калькулятора опрыскивания
function setupSprayCalculator() {
    const calculateSprayBtn = document.getElementById('calculateSprayBtn');
    const closeSprayCalcBtn = document.getElementById('closeSprayCalcBtn');
    const closeModalX = document.getElementById('closeSprayCalcModal');
    const waterVolumeInput = document.getElementById('waterVolume');
    
    // Обновляем выбранный объем при изменении значения
    waterVolumeInput.addEventListener('input', function() {
        document.getElementById('selectedVolume').textContent = this.value;
    });
    
    // Обработчик расчета
    calculateSprayBtn.addEventListener('click', function() {
        calculateSprayMixture();
        
        // Добавляем анимацию пульсации для кнопки
        this.classList.add('pulse-animation');
        setTimeout(() => {
            this.classList.remove('pulse-animation');
        }, 500);
    });
    
    // Обработчик расчета по нажатию Enter в поле ввода
    waterVolumeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            calculateSprayMixture();
        }
    });
    
    // Обработчики закрытия модального окна
    closeSprayCalcBtn.addEventListener('click', function() {
        document.getElementById('sprayCalculatorModal').style.display = 'none';
    });
    
    closeModalX.addEventListener('click', function() {
        document.getElementById('sprayCalculatorModal').style.display = 'none';
    });
    
    // Автоматический расчет при открытии окна
    document.addEventListener('sprayCalculatorOpened', function() {
        calculateSprayMixture();
    });
}

// Открытие модального окна калькулятора опрыскивания
function openSprayCalculatorModal(sprayFormula) {
    console.log('Открытие калькулятора опрыскивания с формулой:', sprayFormula);
    
    // Упрощенное отображение формулы опрыскивания
    const sprayFormulaElement = document.getElementById('sprayFormula');
    
    // Сначала очищаем
    sprayFormulaElement.innerHTML = ''; 
    
    // Добавляем иконку
    const iconElement = document.createElement('i');
    iconElement.className = 'fas fa-flask';
    sprayFormulaElement.appendChild(iconElement);
    
    // Добавляем текст формулы единым стилем
    const textSpan = document.createElement('span');
    textSpan.className = 'spray-text';
    textSpan.textContent = ' ' + sprayFormula;
    sprayFormulaElement.appendChild(textSpan);
    
    // Очищаем предыдущие результаты
    document.getElementById('standardVolumeResult').innerHTML = '';
    document.getElementById('customVolumeResult').innerHTML = '';
    
    // Устанавливаем стандартное значение объема воды
    document.getElementById('waterVolume').value = 16;
    document.getElementById('selectedVolume').textContent = 16;
    
    // Открываем модальное окно и устанавливаем повышенный z-index
    const modal = document.getElementById('sprayCalculatorModal');
    modal.style.display = 'block';
    modal.style.zIndex = '2000'; // Устанавливаем z-index выше, чем у других модальных окон
    
    // Генерируем событие открытия калькулятора для автоматического расчета
    document.dispatchEvent(new Event('sprayCalculatorOpened'));
    
    // Фокусируем поле ввода объема воды
    setTimeout(() => {
        document.getElementById('waterVolume').focus();
    }, 300);
}

// Расчет смеси для опрыскивания
function calculateSprayMixture() {
    const sprayFormula = document.getElementById('sprayFormula').textContent;
    const waterVolume = parseFloat(document.getElementById('waterVolume').value) || 16;
    
    console.log('Расчет смеси для опрыскивания с формулой:', sprayFormula);
    console.log('Объем воды:', waterVolume, 'л');
    
    // Обновляем отображаемый объем
    document.getElementById('selectedVolume').textContent = waterVolume;
    
    // Извлекаем компоненты из формулы опрыскивания в формате "Опрыскивание по листу - Amifort 3 л + Fruka 1 кг"
    // Ищем все вхождения формата "Имя число единица"
    const components = [];
    const componentMatches = sprayFormula.matchAll(/([A-Za-zА-Яа-я]+)\s+(\d+(?:\.\d+)?)\s*(г|мл|кг|л)/gi);
    
    for (const match of componentMatches) {
        const component = {
            name: match[1].trim(),
            amount: parseFloat(match[2]),
            unit: match[3].toLowerCase()
        };
        components.push(component);
        console.log('Обнаружен компонент:', component);
    }
    
    if (components.length === 0) {
        console.error('Не удалось распознать компоненты в формуле:', sprayFormula);
        alert('Не удалось распознать компоненты в формуле опрыскивания');
        return;
    }
    
    // Стандартный объем воды для опрыскивания
    const standardVolume = 16; // л
    
    // Отображаем стандартную дозировку
    const standardResult = document.getElementById('standardVolumeResult');
    let standardHTML = '';
    
    components.forEach(component => {
        // Определяем иконку для компонента
        let componentIcon = 'flask';
        if (component.unit === 'л' || component.unit === 'мл') {
            componentIcon = 'tint';
        } else if (component.unit === 'кг' || component.unit === 'г') {
            componentIcon = 'prescription-bottle';
        }
        
        standardHTML += `
            <div class="spray-result-item-value">
                <span class="component-name"><i class="fas fa-${componentIcon}"></i> ${component.name}</span>
                <span class="component-amount">${component.amount} ${component.unit}</span>
            </div>
        `;
    });
    
    standardHTML += `<p class="spray-result-item-info text-center mt-3">на ${standardVolume} л воды</p>`;
    standardResult.innerHTML = standardHTML;
    
    // Рассчитываем для выбранного объема
    const customResult = document.getElementById('customVolumeResult');
    let customHTML = '';
    
    components.forEach(component => {
        try {
            // Пересчитываем пропорцию для каждого компонента
            const calculatedAmount = calculateSprayAmount(component.amount, waterVolume, standardVolume);
            console.log(`Расчет для ${component.name}: ${component.amount} * ${waterVolume} / ${standardVolume} = ${calculatedAmount}`);
            
            // Определяем иконку для компонента
            let componentIcon = 'flask';
            if (component.unit === 'л' || component.unit === 'мл') {
                componentIcon = 'tint';
            } else if (component.unit === 'кг' || component.unit === 'г') {
                componentIcon = 'prescription-bottle';
            }
            
            // Проверяем, что результат является числом
            if (isNaN(calculatedAmount)) {
                console.error('Ошибка расчета для компонента:', component);
                customHTML += `
                    <div class="spray-result-item-value">
                        <span class="component-name"><i class="fas fa-${componentIcon}"></i> ${component.name}</span>
                        <span class="component-amount error">Ошибка расчета</span>
                    </div>
                `;
            } else {
                customHTML += `
                    <div class="spray-result-item-value">
                        <span class="component-name"><i class="fas fa-${componentIcon}"></i> ${component.name}</span>
                        <span class="component-amount">${calculatedAmount.toFixed(2)} ${component.unit}</span>
                    </div>
                `;
            }
        } catch (error) {
            console.error('Ошибка при расчете компонента:', component, error);
            customHTML += `
                <div class="spray-result-item-value">
                    <span class="component-name"><i class="fas fa-exclamation-triangle"></i> ${component.name}</span>
                    <span class="component-amount error">Ошибка расчета</span>
                </div>
            `;
        }
    });
    
    customHTML += `<p class="spray-result-item-info text-center mt-3">на ${waterVolume} л воды</p>`;
    customResult.innerHTML = customHTML;
    
    // Анимация эффекта обновления результатов
    const resultItems = document.querySelectorAll('.spray-result-item');
    resultItems.forEach(item => {
        item.classList.add('updated');
        setTimeout(() => {
            item.classList.remove('updated');
        }, 500);
    });
}

// Расчет количества препарата для опрыскивания
function calculateSprayAmount(amount, targetWaterVolume, standardVolume = 16) {
    // Проверяем, что все параметры являются числами
    if (typeof amount !== 'number' || isNaN(amount)) {
        console.error('Ошибка: amount не является числом:', amount);
        return 0;
    }
    
    if (typeof targetWaterVolume !== 'number' || isNaN(targetWaterVolume)) {
        console.error('Ошибка: targetWaterVolume не является числом:', targetWaterVolume);
        return 0;
    }
    
    if (typeof standardVolume !== 'number' || isNaN(standardVolume) || standardVolume === 0) {
        console.error('Ошибка: standardVolume не является числом или равен нулю:', standardVolume);
        return 0;
    }
    
    // Расчет пропорции
    return (amount * targetWaterVolume) / standardVolume;
}

// Экспорт результатов в PDF
function exportToPdf() {
    alert('Функция экспорта в PDF будет доступна в следующих обновлениях');
}

// Переключение темы
function toggleTheme() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}