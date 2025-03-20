/**
 * Калькулятор удобрений для клубники - локальная версия
 * Эта версия позволяет использовать калькулятор без подключения к серверу
 */

// Данные о стадиях
const STAGES = {
    'growth': 'Отрастание цветоносов',
    'flowering': 'Цветение и образование ягод',
    'fruiting': 'Начало созревания и сбор ягод',
    'dormant': 'Закладка цветочных почек',
};

// Количество недель в каждой фазе
const WEEKS_PER_STAGE = {
    'growth': 3,
    'flowering': 2,
    'fruiting': 6,
    'dormant': 3,
};

/**
 * Расчет удобрений для клубники
 */
function calculateFertilizer(bedLength, numBeds, selectedFertilizers, stage, week) {
    // Найдем индекс стадии
    let stageData = null;
    for (const scheme of fertilizerData.schemes) {
        if (getStageKeyFromName(scheme.name) === stage) {
            stageData = scheme;
            break;
        }
    }

    if (!stageData) {
        return { "error": `Стадия '${stage}' не найдена` };
    }

    // Найдем неделю
    const weekIndex = parseInt(week) - 1;
    let phaseData = null;
    
    if (stageData.phases && weekIndex >= 0 && weekIndex < stageData.phases.length) {
        phaseData = stageData.phases[weekIndex];
    }
    
    if (!phaseData) {
        return { "error": `Неделя ${week} не найдена для стадии '${stage}'` };
    }

    // Расчёт площади в гектарах (га)
    // Рассчитываем общую длину всех билонов в метрах
    const totalBedLength = bedLength * numBeds;
    
    // Рассчитываем площадь участка в гектарах
    // Стандартный билон 60 м длиной, 15 билонов на 12 сотках (0.12 га)
    // Соотношение длины билонов к площади: 60*15 / 0.12 = 900 / 0.12 = 7500 м/га
    const areaHectares = totalBedLength / 7500;
    
    // Рассчитываем количество кустов (на гектаре стандартно 50000 кустов)
    const plantsCount = Math.floor(areaHectares * 50000);
    
    // Результаты расчета
    const results = {};
    
    // Добавляем информацию о площади и количестве растений
    results._metadata = {
        area_hectares: areaHectares,
        plants_count: plantsCount
    };
    
    // Рассчитываем для каждого удобрения из стандартного списка
    for (const fertilizerEntry of phaseData.fertilizers) {
        // Обрабатываем записи только с примечаниями (обычно опрыскивание)
        if (!fertilizerEntry.name && fertilizerEntry.note) {
            // Добавляем запись об опрыскивании с типом spray
            results['Опрыскивание'] = {
                note: fertilizerEntry.note,
                type: 'spray',
                is_spray: true
            };
            console.log('Обнаружена запись об опрыскивании:', fertilizerEntry);
            continue;
        }
        
        const name = fertilizerEntry.name;
        
        // Пропускаем если не входит в выбранные удобрения
        if (selectedFertilizers && selectedFertilizers.length > 0 && !selectedFertilizers.includes(name)) {
            continue;
        }
        
        // Проверяем наличие свойства amount
        if (!fertilizerEntry.amount || typeof fertilizerEntry.amount !== 'string') {
            console.error("Отсутствует или некорректное свойство amount для удобрения", name);
            continue;
        }
        
        // Парсим количество удобрения (например, "10 кг" -> [10, "кг"])
        const amountParts = fertilizerEntry.amount.split(' ');
        const value = parseFloat(amountParts[0]);
        const unit = amountParts.length > 1 ? amountParts[1] : "";
        
        // Проверяем корректность значения
        if (isNaN(value)) {
            console.error("Некорректное значение количества для удобрения", name);
            continue;
        }
        
        // Рассчитываем количество удобрения для текущей площади
        // Значения указаны для гектара, поэтому умножаем на площадь в гектарах
        const calculatedValue = value * areaHectares;
        
        // Добавляем в результаты
        results[name] = {
            amount: `${calculatedValue.toFixed(2)} ${unit}`,
            value: calculatedValue,
            unit: unit,
            is_custom: false
        };
        
        // Добавляем примечание, если есть
        if (fertilizerEntry.note) {
            results[name].note = fertilizerEntry.note;
        }
    }
    
    // Добавляем пользовательские удобрения (загружаются из localStorage)
    const customFertilizers = getCustomFertilizersForStageWeek(stage, parseInt(week));
    
    for (const customEntry of customFertilizers) {
        const name = customEntry.name;
        
        // Пропускаем если не входит в выбранные удобрения
        if (selectedFertilizers && selectedFertilizers.length > 0 && !selectedFertilizers.includes(name)) {
            continue;
        }
        
        // Парсим количество удобрения
        const amountValue = parseFloat(customEntry.amount);
        const unit = customEntry.unit || "";
        
        // Рассчитываем количество удобрения для текущей площади
        const calculatedValue = amountValue * areaHectares;
        
        // Добавляем в результаты
        results[name] = {
            amount: `${calculatedValue.toFixed(2)} ${unit}`,
            value: calculatedValue,
            unit: unit,
            is_custom: true
        };
        
        // Добавляем примечание, если есть
        if (customEntry.note) {
            results[name].note = customEntry.note;
        }
    }
    
    return results;
}

/**
 * Получение ключа стадии по ее названию
 */
function getStageKeyFromName(stageName) {
    if (stageName.includes('Отрастание')) return 'growth';
    if (stageName.includes('Цветение')) return 'flowering';
    if (stageName.includes('созревания')) return 'fruiting';
    if (stageName.includes('Закладка')) return 'dormant';
    return null;
}

/**
 * Получение пользовательских удобрений для конкретной стадии и недели
 */
function getCustomFertilizersForStageWeek(stageKey, week) {
    const customData = loadCustomFertilizersFromLocalStorage();
    const result = [];
    
    if (!customData.fertilizers) return result;
    
    for (const fert of customData.fertilizers) {
        if (fert.stage === stageKey && parseInt(fert.week) === week) {
            result.push(fert);
        }
    }
    
    return result;
}

/**
 * Загрузка пользовательских удобрений из localStorage
 */
function loadCustomFertilizersFromLocalStorage() {
    try {
        const data = localStorage.getItem('customFertilizers');
        return data ? JSON.parse(data) : { fertilizers: [] };
    } catch (e) {
        console.error("Ошибка при загрузке пользовательских удобрений:", e);
        return { fertilizers: [] };
    }
}

/**
 * Сохранение пользовательского удобрения в localStorage
 */
function saveCustomFertilizerToLocalStorage(name, description, stage, week, amount, unit, note = "") {
    try {
        let customData = loadCustomFertilizersFromLocalStorage();
        
        if (!customData.fertilizers) {
            customData.fertilizers = [];
        }
        
        // Добавляем новое удобрение
        customData.fertilizers.push({
            name,
            description,
            stage,
            week: parseInt(week),
            amount,
            unit,
            note
        });
        
        // Сохраняем обновленные данные
        localStorage.setItem('customFertilizers', JSON.stringify(customData));
        return true;
    } catch (e) {
        console.error("Ошибка при сохранении пользовательского удобрения:", e);
        return false;
    }
}

/**
 * Удаление пользовательского удобрения из localStorage
 */
function deleteCustomFertilizerFromLocalStorage(name, stage, week) {
    try {
        let customData = loadCustomFertilizersFromLocalStorage();
        
        if (!customData.fertilizers) return false;
        
        // Найдем индекс удобрения для удаления
        const index = customData.fertilizers.findIndex(f => 
            f.name === name && 
            f.stage === stage && 
            parseInt(f.week) === parseInt(week));
        
        if (index === -1) return false;
        
        // Удаляем удобрение
        customData.fertilizers.splice(index, 1);
        
        // Сохраняем обновленные данные
        localStorage.setItem('customFertilizers', JSON.stringify(customData));
        return true;
    } catch (e) {
        console.error("Ошибка при удалении пользовательского удобрения:", e);
        return false;
    }
}

/**
 * Перенаправление API-вызовов на локальные функции 
 * вместо серверных запросов
 */
// Переопределение fetch для перехвата API-запросов
const originalFetch = window.fetch;
window.fetch = function(url, options) {
    // Перехватываем только запросы к нашему API
    if (typeof url === 'string' && url.startsWith('/api/')) {
        // Расчет удобрений
        if (url === '/api/fertilizer/calculate' && options && options.method === 'POST') {
            return new Promise((resolve) => {
                const data = JSON.parse(options.body);
                const result = calculateFertilizer(
                    parseFloat(data.bed_length),
                    parseInt(data.num_beds),
                    data.fertilizers || null,
                    data.stage,
                    data.week
                );
                
                resolve({
                    ok: true,
                    json: () => Promise.resolve(result)
                });
            });
        }
        
        // Получение данных о стадиях
        if (url === '/api/fertilizer/stages') {
            return new Promise((resolve) => {
                const result = {
                    stages: Object.keys(STAGES).map(key => ({
                        key: key,
                        name: STAGES[key],
                        weeks: WEEKS_PER_STAGE[key]
                    }))
                };
                
                resolve({
                    ok: true,
                    json: () => Promise.resolve(result)
                });
            });
        }
        
        // Получение данных об удобрениях
        if (url === '/api/fertilizer/data') {
            return new Promise((resolve) => {
                resolve({
                    ok: true,
                    json: () => Promise.resolve(fertilizerData)
                });
            });
        }
        
        // Получение пользовательских удобрений
        if (url === '/api/custom-fertilizer' && (!options || options.method === 'GET')) {
            return new Promise((resolve) => {
                const customData = loadCustomFertilizersFromLocalStorage();
                resolve({
                    ok: true,
                    json: () => Promise.resolve(customData)
                });
            });
        }
        
        // Добавление пользовательского удобрения
        if (url === '/api/custom-fertilizer/add' && options && options.method === 'POST') {
            return new Promise((resolve) => {
                const data = JSON.parse(options.body);
                const result = saveCustomFertilizerToLocalStorage(
                    data.name,
                    data.description,
                    data.stage,
                    data.week,
                    data.amount,
                    data.unit,
                    data.note || ""
                );
                
                resolve({
                    ok: true,
                    json: () => Promise.resolve({ success: result })
                });
            });
        }
        
        // Удаление пользовательского удобрения
        if (url === '/api/custom-fertilizer/remove' && options && options.method === 'POST') {
            return new Promise((resolve) => {
                const data = JSON.parse(options.body);
                const result = deleteCustomFertilizerFromLocalStorage(
                    data.name,
                    data.stage,
                    data.week
                );
                
                resolve({
                    ok: true,
                    json: () => Promise.resolve({ success: result })
                });
            });
        }
    }
    
    // Для всех остальных запросов используем оригинальный fetch
    return originalFetch.apply(window, arguments);
};

// Функция для расчета количества препарата для другого объема воды
function calculateSprayAmount(amount, targetWaterVolume) {
    // Стандартный объем воды - 16 литров
    const standardWaterVolume = 16;
    
    // Проверяем, что все параметры являются числами
    if (typeof amount !== 'number' || isNaN(amount)) {
        console.error('Ошибка: amount не является числом:', amount);
        return 0;
    }
    
    if (typeof targetWaterVolume !== 'number' || isNaN(targetWaterVolume)) {
        console.error('Ошибка: targetWaterVolume не является числом:', targetWaterVolume);
        return 0;
    }
    
    // Расчет пропорции: (amount / standardWaterVolume) = (x / targetWaterVolume)
    // x = amount * targetWaterVolume / standardWaterVolume
    return (amount * targetWaterVolume) / standardWaterVolume;
}

// При запуске страницы добавляем информацию о том, что это автономная версия
document.addEventListener('DOMContentLoaded', function() {
    // Работаем в автономном режиме
    
    // Автономный режим без отображения индикатора
});