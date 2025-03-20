// Обработка схем удобрений для клубники - GitHub Pages версия
// Работает полностью на клиентской стороне (без серверных запросов)
// Константы STAGES и WEEKS_PER_STAGE импортированы из standalone.js

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация тёмной темы
    initTheme();
    
    // Создание диаграммы жизненного цикла
    createLifecycleChart();
    
    // Создание вкладок с фазами
    createSchemeTabs();
    
    // Настройка модального окна с информацией об удобрениях
    setupFertilizerModal();
    
    // Настройка калькулятора площади
    setupAreaCalculator();
    
    // Автономный режим без отображения уведомления
});

// Инициализация темы
function initTheme() {
    const themeSwitch = document.getElementById('themeSwitch');
    
    // Проверка сохраненной темы
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeSwitch.checked = true;
    }
    
    // Обработчик переключения темы
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Создание диаграммы жизненного цикла
function createLifecycleChart() {
    const ctx = document.getElementById('lifecycleChart').getContext('2d');
    
    // Цвета для фаз
    const colors = [
        'rgba(76, 175, 80, 0.7)',  // Отрастание
        'rgba(233, 30, 99, 0.7)',   // Цветение
        'rgba(156, 39, 176, 0.7)',  // Созревание
        'rgba(255, 152, 0, 0.7)'    // Закладка почек
    ];
    
    // Создание диаграммы
    window.lifecycleChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: fertilizerData.schemes.map(scheme => scheme.name),
            datasets: [{
                data: [25, 25, 25, 25], // Равномерное распределение
                backgroundColor: colors,
                borderColor: 'white',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '50%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14
                        },
                        padding: 20,
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return fertilizerData.schemes[context.dataIndex].description;
                        }
                    }
                }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    showSchemeContent(index);
                    
                    // Подсветка соответствующей вкладки
                    document.querySelectorAll('.tab-button').forEach((btn, i) => {
                        btn.classList.toggle('active', i === index);
                    });
                }
            }
        }
    });
    
    // Обновление цветов при изменении темы
    document.getElementById('themeSwitch').addEventListener('change', updateChartColors);
}

// Обновление цветов диаграммы при смене темы
function updateChartColors() {
    if (window.lifecycleChart) {
        window.lifecycleChart.options.plugins.legend.labels.color = 
            getComputedStyle(document.documentElement).getPropertyValue('--text-color');
        window.lifecycleChart.update();
    }
}

// Создание вкладок с фазами
function createSchemeTabs() {
    const tabButtonsContainer = document.getElementById('schemeTabButtons');
    
    // Создание вкладок на основе данных
    fertilizerData.schemes.forEach((scheme, index) => {
        const button = document.createElement('button');
        button.className = 'tab-button';
        button.innerHTML = `
            <span class="icon icon-${scheme.icon}"></span>
            <span>${scheme.name}</span>
        `;
        
        button.addEventListener('click', () => {
            // Активация вкладки
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Обновление содержимого
            showSchemeContent(index);
            
            // Обновление диаграммы
            window.lifecycleChart.setActiveElements([{
                datasetIndex: 0,
                index: index
            }]);
            window.lifecycleChart.update();
        });
        
        tabButtonsContainer.appendChild(button);
    });
}

// Отображение содержимого схемы
function showSchemeContent(index) {
    const scheme = fertilizerData.schemes[index];
    const container = document.getElementById('schemeContent');
    
    // Очистка контейнера
    container.innerHTML = '';
    
    // Создание заголовка
    const header = document.createElement('div');
    header.className = 'scheme-header';
    header.innerHTML = `
        <h2>${scheme.name}</h2>
        <p>${scheme.description}</p>
    `;
    container.appendChild(header);
    
    // Создание вкладок с неделями
    const weekTabs = document.createElement('div');
    weekTabs.className = 'week-tabs';
    
    scheme.phases.forEach((phase, phaseIndex) => {
        const weekTab = document.createElement('button');
        weekTab.className = `week-tab ${phaseIndex === 0 ? 'active' : ''}`;
        weekTab.textContent = `Неделя ${phase.week}`;
        
        weekTab.addEventListener('click', () => {
            document.querySelectorAll('.week-tab').forEach(tab => tab.classList.remove('active'));
            weekTab.classList.add('active');
            
            showWeekContent(scheme, phaseIndex);
        });
        
        weekTabs.appendChild(weekTab);
    });
    
    container.appendChild(weekTabs);
    
    // Создание контейнера для содержимого недели
    const weekContentContainer = document.createElement('div');
    weekContentContainer.id = 'weekContent';
    weekContentContainer.className = 'week-content';
    container.appendChild(weekContentContainer);
    
    // Показать содержимое первой недели
    showWeekContent(scheme, 0);
}

// Отображение содержимого недели
function showWeekContent(scheme, weekIndex) {
    const phase = scheme.phases[weekIndex];
    const container = document.getElementById('weekContent');
    
    // Очистка контейнера
    container.innerHTML = '';
    
    // Таблица с удобрениями
    if (phase.fertilizers && phase.fertilizers.length > 0) {
        const table = document.createElement('table');
        table.className = 'fertilizer-table';
        
        // Заголовок таблицы
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>Удобрение</th>
                <th>Количество на 1 га</th>
            </tr>
        `;
        table.appendChild(thead);
        
        // Тело таблицы
        const tbody = document.createElement('tbody');
        
        phase.fertilizers.forEach(fertilizer => {
            if (fertilizer.name) {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${fertilizer.name}</td>
                    <td>${fertilizer.amount}</td>
                `;
                tbody.appendChild(tr);
            }
        });
        
        table.appendChild(tbody);
        container.appendChild(table);
    }
    
    // Примечание (опрыскивание и т.д.)
    phase.fertilizers.forEach(fertilizer => {
        if (fertilizer.note) {
            const noteBox = document.createElement('div');
            noteBox.className = 'note-box';
            noteBox.textContent = fertilizer.note;
            container.appendChild(noteBox);
        }
    });
}

// Определение типа удобрения по его названию
function getFertilizerType(name) {
    // Можно определить тип удобрения по имени или другим характеристикам
    const lowerName = name.toLowerCase();
    if (lowerName.includes('no3') || lowerName.includes('азот') || lowerName.includes('n') && !lowerName.includes('p') && !lowerName.includes('k')) {
        return 'nitrogen'; // Азотные
    } else if (lowerName.includes('p') || lowerName.includes('фосфор') || lowerName.includes('mkp') || lowerName.includes('мкр')) {
        return 'phosphorus'; // Фосфорные
    } else if (lowerName.includes('k') || lowerName.includes('калий') || lowerName.includes('kno3')) {
        return 'potassium'; // Калийные
    } else if (lowerName.includes('ca') || lowerName.includes('кальций')) {
        return 'calcium'; // Кальцийсодержащие
    } else if (lowerName.includes('mg') || lowerName.includes('магний')) {
        return 'magnesium'; // Магнийсодержащие
    } else if (lowerName.includes('bomba') || lowerName.includes('бомба')) {
        return 'stimulant'; // Стимуляторы
    } else if (lowerName.includes('amifort') || lowerName.includes('амифорт') || lowerName.includes('лист')) {
        return 'foliar'; // Листовые подкормки
    } else {
        return 'complex'; // Комплексные удобрения
    }
}

// Получение HTML для иконки удобрения
function getFertilizerIconHTML(type) {
    const iconMap = {
        'nitrogen': '<span class="fert-icon nitrogen-icon" title="Азотное удобрение">N</span>',
        'phosphorus': '<span class="fert-icon phosphorus-icon" title="Фосфорное удобрение">P</span>',
        'potassium': '<span class="fert-icon potassium-icon" title="Калийное удобрение">K</span>',
        'calcium': '<span class="fert-icon calcium-icon" title="Кальцийсодержащее удобрение">Ca</span>',
        'magnesium': '<span class="fert-icon magnesium-icon" title="Магнийсодержащее удобрение">Mg</span>',
        'stimulant': '<span class="fert-icon stimulant-icon" title="Стимулятор роста">St</span>',
        'foliar': '<span class="fert-icon foliar-icon" title="Листовая подкормка">L</span>',
        'complex': '<span class="fert-icon complex-icon" title="Комплексное удобрение">NPK</span>'
    };
    
    return iconMap[type] || '';
}

// Получение названия типа удобрения
function getFertilizerTypeName(type) {
    const typeNames = {
        'nitrogen': 'Азотное',
        'phosphorus': 'Фосфорное',
        'potassium': 'Калийное',
        'calcium': 'Кальцийсодержащее',
        'magnesium': 'Магнийсодержащее',
        'stimulant': 'Стимулятор роста',
        'foliar': 'Листовая подкормка',
        'complex': 'Комплексное'
    };
    
    return typeNames[type] || 'Другое';
}

// Настройка модального окна с информацией об удобрениях
function setupFertilizerModal() {
    const modal = document.getElementById('fertilizerInfoModal');
    const link = document.getElementById('fertilizerInfoLink');
    const closeBtn = modal.querySelector('.close-modal');
    const fertilizerList = document.getElementById('fertilizerList');
    const addCustomFertilizerBtn = document.getElementById('addCustomFertilizerBtn');
    const manageFertilizersBtn = document.getElementById('manageFertilizersBtn');
    
    // Очистка списка перед загрузкой
    fertilizerList.innerHTML = '';
    
    // Группировка удобрений по типам
    const fertilizersByType = {};
    
    // Заполнение списка удобрений из локальных данных и группировка
    for (const fertilizer in fertilizerData.descriptions) {
        if (fertilizerData.descriptions.hasOwnProperty(fertilizer)) {
            const description = fertilizerData.descriptions[fertilizer];
            const fertilizerType = getFertilizerType(fertilizer);
            
            // Группировка по типам
            if (!fertilizersByType[fertilizerType]) {
                fertilizersByType[fertilizerType] = [];
            }
            
            fertilizersByType[fertilizerType].push({
                name: fertilizer,
                description: description
            });
        }
    }
    
    // Создаем группы по типам
    for (const [type, fertilizers] of Object.entries(fertilizersByType)) {
        // Заголовок группы
        const typeHeader = document.createElement('div');
        typeHeader.className = 'fertilizer-type-header';
        typeHeader.innerHTML = `
            <h2>${getFertilizerIconHTML(type)} ${getFertilizerTypeName(type)} удобрения</h2>
        `;
        fertilizerList.appendChild(typeHeader);
        
        // Контейнер для карточек этого типа
        const typeContainer = document.createElement('div');
        typeContainer.className = 'fertilizer-type-container';
        
        // Добавляем карточки удобрений этого типа
        fertilizers.forEach((fert, index) => {
            const card = document.createElement('div');
            card.className = `fertilizer-card ${type}`;
            
            card.innerHTML = `
                <div class="fertilizer-card-header">
                    <h3>${getFertilizerIconHTML(type)} ${fert.name}</h3>
                </div>
                <div class="fertilizer-card-body">
                    <p>${fert.description}</p>
                </div>
                <div class="fertilizer-card-footer">
                    <span class="fertilizer-type-tag">${getFertilizerTypeName(type)}</span>
                </div>
            `;
            
            // Добавляем анимацию появления с задержкой
            card.style.animationDelay = `${index * 0.05}s`;
            
            typeContainer.appendChild(card);
        });
        
        fertilizerList.appendChild(typeContainer);
    }
    
    // Загрузка и отображение пользовательских удобрений из localStorage
    loadCustomFertilizers();
    
    // Открытие модального окна
    if (link) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Предотвращение прокрутки
        });
    }
    
    // Закрытие модального окна
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Открытие модального окна для добавления пользовательского удобрения
    if (addCustomFertilizerBtn) {
        addCustomFertilizerBtn.addEventListener('click', () => {
            openCustomFertilizerModal();
        });
    }
    
    // Открытие модального окна для управления пользовательскими удобрениями
    if (manageFertilizersBtn) {
        manageFertilizersBtn.addEventListener('click', () => {
            openManageFertilizersModal();
        });
    }
    
    // Закрытие при клике вне модального окна
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Загрузка пользовательских удобрений из localStorage
function loadCustomFertilizers() {
    // Получаем пользовательские удобрения из localStorage
    const customFertilizersStr = localStorage.getItem('customFertilizers');
    if (!customFertilizersStr) {
        return; // Нет пользовательских удобрений
    }
    
    try {
        const customFertilizers = JSON.parse(customFertilizersStr);
        if (!customFertilizers || Object.keys(customFertilizers).length === 0) {
            return; // Нет пользовательских удобрений
        }
        
        const fertilizerList = document.getElementById('fertilizerList');
        let index = 0;
        
        // Перебираем все стадии
        for (const stageKey in customFertilizers) {
            // Получаем название стадии
            const stageName = STAGES[stageKey] || stageKey;
            
            // Перебираем все недели в стадии
            for (const week in customFertilizers[stageKey]) {
                // Перебираем все удобрения в неделе
                customFertilizers[stageKey][week].forEach(fertilizer => {
                    const card = document.createElement('div');
                    card.className = 'fertilizer-card custom-fertilizer-card';
                    
                    // Определение типа на основе названия
                    const fertilizerType = getFertilizerType(fertilizer.name);
                    
                    card.innerHTML = `
                        <div class="fertilizer-card-header">
                            <h3>${getFertilizerIconHTML(fertilizerType)} ${fertilizer.name} <span class="custom-badge">Моё</span></h3>
                        </div>
                        <div class="fertilizer-card-body">
                            <p>${fertilizer.description}</p>
                            <div class="custom-fert-stages">
                                <small>Применение:</small>
                                <span class="custom-fert-stage">${stageName} - Неделя ${week}</span>
                            </div>
                        </div>
                        <div class="fertilizer-card-footer">
                            <span class="fertilizer-type-tag">${getFertilizerTypeName(fertilizerType)}</span>
                        </div>
                    `;
                    
                    // Добавляем анимацию появления
                    card.style.animationDelay = `${index * 0.05}s`;
                    index++;
                    
                    fertilizerList.appendChild(card);
                });
            }
        }
    } catch (err) {
        console.error('Ошибка при загрузке пользовательских удобрений:', err);
    }
}

// Открытие модального окна для добавления пользовательского удобрения
function openCustomFertilizerModal() {
    const modal = document.getElementById('customFertilizerModal');
    const fertInfoModal = document.getElementById('fertilizerInfoModal');
    
    // Закрываем справочник и открываем окно добавления
    fertInfoModal.style.display = 'none';
    modal.style.display = 'block';
    
    // Настройка формы
    setupCustomFertilizerForm();
}

// Настройка формы добавления удобрения
function setupCustomFertilizerForm() {
    const form = document.getElementById('customFertilizerForm');
    const stageSelect = document.getElementById('fertStage');
    const weekSelect = document.getElementById('fertWeek');
    const closeBtn = document.getElementById('closeCustomFertModal');
    const cancelBtn = document.getElementById('cancelCustomFert');
    
    // Проверяем наличие элементов
    if (!form || !stageSelect || !weekSelect) return;
    
    // Заполняем селект стадий
    stageSelect.innerHTML = '';
    const stageOptions = [
        { value: 'growth', text: 'Отрастание цветоносов' },
        { value: 'flowering', text: 'Цветение и образование ягод' },
        { value: 'fruiting', text: 'Начало созревания и сбор ягод' },
        { value: 'dormant', text: 'Закладка цветочных почек' }
    ];
    
    stageOptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.textContent = option.text;
        stageSelect.appendChild(opt);
    });
    
    // Обработчик изменения стадии для обновления недель
    stageSelect.addEventListener('change', function() {
        updateWeekOptions(this.value);
    });
    
    // Начальное заполнение недель для первой стадии
    updateWeekOptions(stageSelect.value);
    
    // Настройка кнопок закрытия
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            document.getElementById('customFertilizerModal').style.display = 'none';
        });
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            document.getElementById('customFertilizerModal').style.display = 'none';
        });
    }
    
    // Обработчик отправки формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        addCustomFertilizer(this);
    });
    
    // Вспомогательная функция для обновления недель
    function updateWeekOptions(stage) {
        const weekSelect = document.getElementById('fertWeek');
        if (!weekSelect) return;
        
        // Очистка текущих опций
        weekSelect.innerHTML = '';
        
        // Определение количества недель для каждой стадии из константы WEEKS_PER_STAGE
        const weeksCount = WEEKS_PER_STAGE[stage] || 3;
        
        // Создание опций
        for (let i = 1; i <= weeksCount; i++) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = `Неделя ${i}`;
            weekSelect.appendChild(opt);
        }
    }
    
    // Функция добавления пользовательского удобрения
    function addCustomFertilizer(form) {
        // Получение значений из формы
        const name = form.name.value.trim();
        const description = form.description.value.trim();
        const stage = form.stage.value;
        const week = parseInt(form.week.value);
        const amount = parseFloat(form.amount.value);
        const unit = form.unit.value;
        const note = form.note.value.trim();
        
        // Проверка валидности
        if (!name || !description || isNaN(amount) || amount <= 0) {
            alert('Пожалуйста, заполните все обязательные поля корректно.');
            return;
        }
        
        // Загрузка текущих пользовательских удобрений
        const customFertilizers = loadCustomFertilizersFromLocalStorage();
        
        // Создание объекта нового удобрения
        const newFertilizer = {
            name,
            description,
            amount,
            unit,
            note
        };
        
        // Добавление нового удобрения в структуру
        if (!customFertilizers[stage]) {
            customFertilizers[stage] = {};
        }
        
        if (!customFertilizers[stage][week]) {
            customFertilizers[stage][week] = [];
        }
        
        // Проверка, не существует ли уже такое удобрение
        const existingIndex = customFertilizers[stage][week].findIndex(f => f.name === name);
        if (existingIndex >= 0) {
            // Если существует, обновляем
            customFertilizers[stage][week][existingIndex] = newFertilizer;
        } else {
            // Если нет, добавляем новое
            customFertilizers[stage][week].push(newFertilizer);
        }
        
        // Сохранение обновленной структуры
        try {
            localStorage.setItem('customFertilizers', JSON.stringify(customFertilizers));
            alert(`Удобрение "${name}" успешно добавлено!`);
            
            // Закрываем модальное окно
            document.getElementById('customFertilizerModal').style.display = 'none';
            
            // Обновляем список пользовательских удобрений если открыто окно управления
            if (document.getElementById('manageFertilizersModal').style.display === 'block') {
                loadCustomFertilizersList();
            }
        } catch (err) {
            console.error('Ошибка при сохранении пользовательского удобрения:', err);
            alert('Ошибка при добавлении удобрения. Пожалуйста, попробуйте снова.');
        }
    }
    
    // Вспомогательная функция для загрузки из localStorage
    function loadCustomFertilizersFromLocalStorage() {
        const customFertilizersStr = localStorage.getItem('customFertilizers');
        if (!customFertilizersStr) {
            return {};
        }
        
        try {
            return JSON.parse(customFertilizersStr);
        } catch (err) {
            console.error('Ошибка при загрузке пользовательских удобрений:', err);
            return {};
        }
    }
}

// Открытие модального окна для управления удобрениями
function openManageFertilizersModal() {
    const modal = document.getElementById('manageFertilizersModal');
    const fertInfoModal = document.getElementById('fertilizerInfoModal');
    
    // Закрываем справочник и открываем окно управления
    fertInfoModal.style.display = 'none';
    modal.style.display = 'block';
    
    // Загрузка списка пользовательских удобрений
    loadCustomFertilizersList();
}

// Загрузка списка пользовательских удобрений для управления
function loadCustomFertilizersList() {
    const container = document.getElementById('customFertilizersList');
    if (!container) return;
    
    // Очистка контейнера
    container.innerHTML = '';
    
    // Получаем пользовательские удобрения из localStorage
    const customFertilizersStr = localStorage.getItem('customFertilizers');
    if (!customFertilizersStr) {
        container.innerHTML = '<p class="no-items-message">У вас пока нет добавленных удобрений.</p>';
        return;
    }
    
    try {
        const customFertilizers = JSON.parse(customFertilizersStr);
        
        // Проверка наличия пользовательских удобрений
        if (Object.keys(customFertilizers).length === 0) {
            container.innerHTML = '<p class="no-items-message">У вас пока нет добавленных удобрений.</p>';
            return;
        }
        
        // Создание структуры для отображения
        for (const [stageKey, stageData] of Object.entries(customFertilizers)) {
            // Определение имени стадии
            const stageName = STAGES[stageKey] || stageKey;
            
            // Создание заголовка стадии
            const stageHeader = document.createElement('div');
            stageHeader.className = 'custom-fertilizer-stage';
            stageHeader.innerHTML = `<h3>${stageName}</h3>`;
            container.appendChild(stageHeader);
            
            // Обработка недель в стадии
            for (const [weekNum, fertilizers] of Object.entries(stageData)) {
                // Создание заголовка недели
                const weekHeader = document.createElement('div');
                weekHeader.className = 'custom-fertilizer-week';
                weekHeader.innerHTML = `<h4>Неделя ${weekNum}</h4>`;
                container.appendChild(weekHeader);
                
                // Создание списка удобрений
                const fertilizersList = document.createElement('div');
                fertilizersList.className = 'custom-fertilizers-list';
                
                // Добавление карточек удобрений
                fertilizers.forEach(fert => {
                    const card = document.createElement('div');
                    card.className = 'custom-fertilizer-card';
                    card.innerHTML = `
                        <div class="fertilizer-info">
                            <div class="fertilizer-name">${fert.name}</div>
                            <div class="fertilizer-description">${fert.description}</div>
                            <div class="fertilizer-details">
                                <span class="fertilizer-amount">${fert.amount} ${fert.unit}</span>
                                ${fert.note ? `<span class="fertilizer-note">${fert.note}</span>` : ''}
                            </div>
                        </div>
                        <div class="fertilizer-actions">
                            <button class="delete-fertilizer" data-name="${fert.name}" data-stage="${stageKey}" data-week="${weekNum}">
                                Удалить
                            </button>
                        </div>
                    `;
                    fertilizersList.appendChild(card);
                });
                
                container.appendChild(fertilizersList);
            }
        }
        
        // Добавление обработчиков для кнопок удаления
        setupDeleteFertilizerButtons();
    } catch (err) {
        console.error('Ошибка при загрузке списка пользовательских удобрений:', err);
        container.innerHTML = '<p class="error-message">Ошибка при загрузке списка пользовательских удобрений</p>';
    }
    
    // Настройка кнопок удаления
    function setupDeleteFertilizerButtons() {
        const deleteButtons = document.querySelectorAll('.delete-fertilizer');
        
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const name = this.getAttribute('data-name');
                const stage = this.getAttribute('data-stage');
                const week = this.getAttribute('data-week');
                
                // Запрос подтверждения
                if (confirm(`Вы уверены, что хотите удалить удобрение "${name}"?`)) {
                    deleteFertilizer(name, stage, week);
                }
            });
        });
    }
    
    // Удаление удобрения
    function deleteFertilizer(name, stage, week) {
        // Загрузка текущих пользовательских удобрений
        let customFertilizers;
        try {
            const customFertilizersStr = localStorage.getItem('customFertilizers');
            if (!customFertilizersStr) {
                return false; // Нет таких удобрений
            }
            
            customFertilizers = JSON.parse(customFertilizersStr);
        } catch (err) {
            console.error('Ошибка при загрузке пользовательских удобрений:', err);
            return false;
        }
        
        // Проверка существования структуры
        if (!customFertilizers[stage] || !customFertilizers[stage][week]) {
            return false; // Нет такого удобрения
        }
        
        // Поиск индекса удобрения
        const index = customFertilizers[stage][week].findIndex(f => f.name === name);
        if (index === -1) {
            return false; // Нет такого удобрения
        }
        
        // Удаление удобрения
        customFertilizers[stage][week].splice(index, 1);
        
        // Если массив стал пустым, удаляем и вышестоящие объекты
        if (customFertilizers[stage][week].length === 0) {
            delete customFertilizers[stage][week];
            
            // Если в стадии не осталось недель, удаляем и стадию
            if (Object.keys(customFertilizers[stage]).length === 0) {
                delete customFertilizers[stage];
            }
        }
        
        // Сохранение обновленной структуры
        try {
            localStorage.setItem('customFertilizers', JSON.stringify(customFertilizers));
            
            // Обновление списка после удаления
            loadCustomFertilizersList();
            
            return true;
        } catch (err) {
            console.error('Ошибка при удалении пользовательского удобрения:', err);
            return false;
        }
    }
}

// Настройка калькулятора площади
function setupAreaCalculator() {
    const areaInput = document.getElementById('areaSize');
    const calculateBtn = document.getElementById('calculateForArea');
    const resultsContainer = document.getElementById('areaResults');
    
    calculateBtn.addEventListener('click', () => {
        const area = parseFloat(areaInput.value);
        
        if (!area || area <= 0) {
            resultsContainer.innerHTML = '<p class="error-message">Пожалуйста, введите корректное значение площади</p>';
            return;
        }
        
        // Очистка результатов
        resultsContainer.innerHTML = '';
        
        // Расчет для всех схем
        fertilizerData.schemes.forEach((scheme, schemeIndex) => {
            const schemeContainer = document.createElement('div');
            schemeContainer.className = 'area-phase';
            
            // Заголовок схемы
            const schemeHeader = document.createElement('h3');
            schemeHeader.textContent = scheme.name;
            schemeContainer.appendChild(schemeHeader);
            
            // Недели
            scheme.phases.forEach((phase) => {
                const weekContainer = document.createElement('div');
                weekContainer.className = 'area-week';
                
                const weekHeader = document.createElement('h4');
                weekHeader.textContent = `Неделя ${phase.week}`;
                weekContainer.appendChild(weekHeader);
                
                // Таблица удобрений
                const table = document.createElement('table');
                table.className = 'fertilizer-table';
                
                const thead = document.createElement('thead');
                thead.innerHTML = `
                    <tr>
                        <th>Удобрение</th>
                        <th>Количество на ${area} га</th>
                    </tr>
                `;
                table.appendChild(thead);
                
                const tbody = document.createElement('tbody');
                
                // Расчет пропорционально площади
                phase.fertilizers.forEach(fertilizer => {
                    if (fertilizer.name) {
                        const amount = fertilizer.amount;
                        const value = parseFloat(amount.match(/\d+(\.\d+)?/)[0]);
                        const unit = amount.replace(/\d+(\.\d+)?/, '').trim();
                        
                        // Расчет для указанной площади
                        const calculatedValue = (value * area).toFixed(2);
                        
                        const tr = document.createElement('tr');
                        tr.innerHTML = `
                            <td>${fertilizer.name}</td>
                            <td>${calculatedValue} ${unit}</td>
                        `;
                        tbody.appendChild(tr);
                    }
                });
                
                table.appendChild(tbody);
                weekContainer.appendChild(table);
                
                // Примечания
                phase.fertilizers.forEach(fertilizer => {
                    if (fertilizer.note) {
                        const noteBox = document.createElement('div');
                        noteBox.className = 'note-box';
                        noteBox.textContent = fertilizer.note;
                        weekContainer.appendChild(noteBox);
                    }
                });
                
                schemeContainer.appendChild(weekContainer);
            });
            
            resultsContainer.appendChild(schemeContainer);
        });
    });
}