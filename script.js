// Agronomic Data Model based on Agrostrimedit recommendations
        const AGRO_STAGES = {
            growth: {
                id: "growth",
                title: "I. Отрастание цветоносов",
                subtitle: "Температура почвы +8...+10 °C",
                icon: "🌱",
                weeks: {
                    1: {
                        week: 1,
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 10, unit: "кг", tank: "B" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 15, unit: "кг", tank: "A" },
                            { id: "nh4no3", name: "Аммиачная селитра (NH4NO3)", formula: "34.4% N", normHa: 15, unit: "кг", tank: "A" },
                            { id: "rhyzo", name: "Rhyzo (укоренитель/ризосфера)", formula: "Биостимулятор корней", normHa: 1, unit: "кг", tank: "B" }
                        ],
                        foliar: null
                    },
                    2: {
                        week: 2,
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 10, unit: "кг", tank: "B" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 15, unit: "кг", tank: "A" },
                            { id: "nh4no3", name: "Аммиачная селитра (NH4NO3)", formula: "34.4% N", normHa: 15, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "A" },
                            { id: "bombardier", name: "Bombardier (биостимулятор)", formula: "Фульвокислоты + аминокислоты", normHa: 7, unit: "л", tank: "B" }
                        ],
                        foliar: null
                    },
                    3: {
                        week: 3,
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 10, unit: "кг", tank: "B" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 15, unit: "кг", tank: "A" },
                            { id: "nh4no3", name: "Аммиачная селитра (NH4NO3)", formula: "34.4% N", normHa: 15, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "A" }
                        ],
                        foliar: [
                            { id: "amifort", name: "Amifort (аминокислоты/антистресс)", normHa: 3, unit: "л" },
                            { id: "fruka", name: "Fruka (стимулятор цветения/микроэлементы)", normHa: 1, unit: "кг" }
                        ]
                    }
                }
            },
            flowering: {
                id: "flowering",
                title: "II. Цветение и завязывание",
                subtitle: "Бутонизация, цветение, образование ягод",
                icon: "🌸",
                weeks: {
                    1: {
                        week: 1,
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 5, unit: "кг", tank: "B" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 10, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S (спец. для ягод)", formula: "NPK + Micro", normHa: 30, unit: "кг", tank: "B" }
                        ],
                        foliar: [
                            { id: "fruka", name: "Fruka (стимулятор цветения/микроэлементы)", normHa: 1, unit: "кг" }
                        ]
                    },
                    2: {
                        week: 2,
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 5, unit: "кг", tank: "B" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 10, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S (спец. для ягод)", formula: "NPK + Micro", normHa: 30, unit: "кг", tank: "B" }
                        ],
                        foliar: [
                            { id: "amifort", name: "Amifort (аминокислоты)", normHa: 3, unit: "л" },
                            { id: "fruka", name: "Fruka (стимулятор цветения/завязи)", normHa: 1, unit: "кг" }
                        ]
                    }
                }
            },
            fruiting: {
                id: "fruiting",
                title: "III. Созревание и сбор",
                subtitle: "Налив ягод, сахаристость и сбор урожая",
                icon: "🍓",
                weeks: {
                    1: {
                        week: 1,
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 10, unit: "кг", tank: "B" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 20, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 20, unit: "кг", tank: "B" },
                            { id: "mgno3", name: "Магниевая селитра (Mg(NO3)2)", formula: "11% N, 16% MgO", normHa: 10, unit: "кг", tank: "B" },
                            { id: "bombardier", name: "Bombardier (биостимулятор)", formula: "Фульвокислоты", normHa: 7, unit: "л", tank: "B" }
                        ],
                        foliar: null
                    },
                    2: {
                        week: 2,
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 5, unit: "кг", tank: "B" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 20, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 15, unit: "кг", tank: "B" },
                            { id: "mgno3", name: "Магниевая селитра (Mg(NO3)2)", formula: "11% N, 16% MgO", normHa: 10, unit: "кг", tank: "B" }
                        ],
                        foliar: [
                            { id: "amifort", name: "Amifort (аминокислоты/листовое питание)", normHa: 3, unit: "л" }
                        ]
                    },
                    3: {
                        week: 3,
                        fertilizers: [
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 20, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 15, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 15, unit: "кг", tank: "B" },
                            { id: "mgno3", name: "Магниевая селитра (Mg(NO3)2)", formula: "11% N, 16% MgO", normHa: 10, unit: "кг", tank: "B" },
                            { id: "bombardier", name: "Bombardier (биостимулятор)", formula: "Фульвокислоты", normHa: 7, unit: "л", tank: "B" }
                        ],
                        foliar: null
                    },
                    4: {
                        week: 4,
                        fertilizers: [
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 15, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 15, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 15, unit: "кг", tank: "B" }
                        ],
                        foliar: null
                    },
                    5: {
                        week: 5,
                        fertilizers: [
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 15, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 15, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 15, unit: "кг", tank: "B" },
                            { id: "bombardier", name: "Bombardier (биостимулятор)", formula: "Фульвокислоты", normHa: 7, unit: "л", tank: "B" }
                        ],
                        foliar: null
                    },
                    6: {
                        week: 6,
                        fertilizers: [
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 10, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 10, unit: "кг", tank: "B" }
                        ],
                        foliar: null
                    }
                }
            },
            budding: {
                id: "budding",
                title: "IV. Закладка почек",
                subtitle: "Август-Сентябрь (задел под будущий сезон)",
                icon: "🍂",
                weeks: {
                    1: {
                        week: 1,
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 13, unit: "кг", tank: "B" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 15, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 5, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 5, unit: "кг", tank: "B" }
                        ],
                        foliar: null
                    },
                    2: {
                        week: 2,
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 10, unit: "кг", tank: "B" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 5, unit: "кг", tank: "B" },
                            { id: "bombardier", name: "Bombardier (биостимулятор)", formula: "Фульвокислоты", normHa: 7, unit: "л", tank: "B" }
                        ],
                        foliar: null
                    },
                    3: {
                        week: 3,
                        fertilizers: [
                            { id: "mgno3", name: "Магниевая селитра (Mg(NO3)2)", formula: "11% N, 16% MgO", normHa: 5, unit: "кг", tank: "B" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 15, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 5, unit: "кг", tank: "A" }
                        ],
                        foliar: null
                    }
                }
            }
        };

        const FERTILIZERS_HANDBOOK = [
            {
                name: "Монокалийфосфат (MKP)",
                formula: "0-52-34 (KH2PO4)",
                desc: "Высококонцентрированное фосфорно-калийное водорастворимое удобрение. Стимулирует мощное развитие корневой системы на старте, закладку цветоносов и цветение. Вносится строго в Бак Б."
            },
            {
                name: "Калиевая селитра (KNO3)",
                formula: "13-0-46",
                desc: "Идеальный источник легкодоступного нитратного азота и калия. Отвечает за налив ягод, накопление сахаров (Brix), плотность мякоти и товарный вид. Отлично сочетается с кальциевой селитрой в Баке А."
            },
            {
                name: "Кальциевая селитра (Ca(NO3)2)",
                formula: "15.5% N, 26.5% CaO",
                desc: "Фундаментальный элемент для клубники. Укрепляет стенки клеток, защищает от серой гнили (ботритиса), предотвращает размягчение ягоды при сборе. Нельзя смешивать с сульфатами и фосфатами (выпадает гипс)! Вносится в Бак А."
            },
            {
                name: "Магниевая селитра (Mg(NO3)2)",
                formula: "11% N, 16% MgO",
                desc: "Магний входит в состав хлорофилла и активирует фотосинтез. Предотвращает межжилковый хлороз листьев, особенно при высокой нагрузке ягодой. Вносится в Бак Б."
            },
            {
                name: "Аммиачная селитра (NH4NO3)",
                formula: "34.4% N",
                desc: "Быстрый весенний старт вегетации при холодной почве (+8...+10 °C). Содержит как аммонийный, так и нитратный азот. Вносится в Бак А."
            },
            {
                name: "Teraflex S (Терафлекс Ягодный)",
                formula: "Комплекс NPK + Micro",
                desc: "Специализированное сбалансированное хелатное водорастворимое удобрение, разработанное специально для клубники и ягодных культур. Вносится в Бак Б."
            },
            {
                name: "Bombardier (Бомбардир)",
                formula: "Фульвокислоты + аминокислоты",
                desc: "Мощный органический почвенный биостимулятор природного происхождения. Улучшает микрофлору почвы, снимает пестицидный стресс, стимулирует поглощение минеральных элементов. Вносится в Бак Б."
            },
            {
                name: "Rhyzo (Ризо)",
                formula: "Стимулятор ризосферы",
                desc: "Специализированный укоренитель для активного пробуждения и деления клеток корневой системы в начале сезона."
            },
            {
                name: "Amifort (Амифорт)",
                formula: "Аминокислоты по листу",
                desc: "Листовой антистрессант и стимулятор. Повышает иммунитет растений при перепадах температур и засухе, усиливает фотосинтез."
            },
            {
                name: "Fruka (Фрука)",
                formula: "Бор, цинк, молибден + стимуляторы",
                desc: "Листовой комплекс для стимулирования опыления, прорастания пыльцы, дружного цветения и устранения искривления ягод."
            }
        ];

        // State
        let currentStage = 'growth';
        let currentWeek = 1;
        let displayMode = 'tanks'; // 'tanks', 'days', 'all'

        // DOM Elements
        const bedLengthInput = document.getElementById('bedLength');
        const bedCountInput = document.getElementById('bedCount');
        const rowWidthInput = document.getElementById('rowWidth');
        const linesPerRowSelect = document.getElementById('linesPerRow');
        const plantStepInput = document.getElementById('plantStep');
        const waterPerPlantInput = document.getElementById('waterPerPlant');
        const sprayerVolumeInput = document.getElementById('sprayerVolume');

        // Metrics Display
        const metricTape = document.getElementById('metricTape');
        const metricArea = document.getElementById('metricArea');
        const metricPlants = document.getElementById('metricPlants');
        const metricHaRatio = document.getElementById('metricHaRatio');

        // Containers
        const stageButtonsContainer = document.getElementById('stageButtonsContainer');
        const weekChipsContainer = document.getElementById('weekChipsContainer');
        const tankABody = document.getElementById('tankABody');
        const tankBBody = document.getElementById('tankBBody');
        const tankATotalWeight = document.getElementById('tankATotalWeight');
        const tankBTotalWeight = document.getElementById('tankBTotalWeight');
        const tanksResultContainer = document.getElementById('tanksResultContainer');
        const chemicalAlert = document.getElementById('chemicalAlert');
        const foliarSection = document.getElementById('foliarSection');
        const foliarBody = document.getElementById('foliarBody');
        const foliarTanksCount = document.getElementById('foliarTanksCount');

        // Water Stats
        const statWaterVolume = document.getElementById('statWaterVolume');
        const statConcentration = document.getElementById('statConcentration');
        const statEC = document.getElementById('statEC');

        // Init
        function initApp() {
            loadSavedSettings();
            renderStages();
            renderWeeks();
            calculateAll();
            setupEventListeners();
            setupHandbook();
        }

        function setupEventListeners() {
            [bedLengthInput, bedCountInput, rowWidthInput, linesPerRowSelect, plantStepInput, waterPerPlantInput, sprayerVolumeInput].forEach(el => {
                el.addEventListener('input', calculateAll);
            });

            document.getElementById('modeTanksBtn').addEventListener('click', () => setDisplayMode('tanks'));
            document.getElementById('modeDaysBtn').addEventListener('click', () => setDisplayMode('days'));
            document.getElementById('modeAllBtn').addEventListener('click', () => setDisplayMode('all'));

            document.getElementById('savePresetBtn').addEventListener('click', () => {
                saveSettings();
                alert('Параметры вашей плантации успешно сохранены в памяти браузера!');
            });

            document.getElementById('printJobBtn').addEventListener('click', () => {
                const stage = AGRO_STAGES[currentStage];
                const area = (getCalculatedArea() / 100).toFixed(1);
                const plants = getCalculatedPlants().toLocaleString('ru-RU');
                document.getElementById('printMeta').textContent = 
                    `${stage.title} • Неделя ${currentWeek} | Участок: ${area} соток (${plants} кустов) | Дата: ${new Date().toLocaleDateString('ru-RU')}`;
                window.print();
            });

            // Theme toggle
            const themeBtn = document.getElementById('themeToggleBtn');
            themeBtn.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', newTheme);
                themeBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
                localStorage.setItem('starberry_theme', newTheme);
            });

            const savedTheme = localStorage.getItem('starberry_theme');
            if (savedTheme) {
                document.documentElement.setAttribute('data-theme', savedTheme);
                themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
            }
        }

        function setDisplayMode(mode) {
            displayMode = mode;
            document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
            if (mode === 'tanks') document.getElementById('modeTanksBtn').classList.add('active');
            if (mode === 'days') document.getElementById('modeDaysBtn').classList.add('active');
            if (mode === 'all') document.getElementById('modeAllBtn').classList.add('active');
            calculateAll();
        }

        function renderStages() {
            stageButtonsContainer.innerHTML = '';
            Object.values(AGRO_STAGES).forEach(stage => {
                const weeksCount = Object.keys(stage.weeks).length;
                const btn = document.createElement('div');
                btn.className = `stage-btn ${stage.id === currentStage ? 'active' : ''}`;
                btn.dataset.stageId = stage.id;
                btn.innerHTML = `
                    <div class="stage-btn-header">
                        <span class="stage-btn-icon">${stage.icon}</span>
                        <span class="stage-btn-weeks">${weeksCount} нед.</span>
                    </div>
                    <div>
                        <div class="stage-btn-title">${stage.title}</div>
                        <div class="stage-btn-subtitle">${stage.subtitle}</div>
                    </div>
                `;
                btn.addEventListener('click', () => {
                    currentStage = stage.id;
                    currentWeek = 1;
                    renderStages();
                    renderWeeks();
                    calculateAll();
                });
                stageButtonsContainer.appendChild(btn);
            });
        }

        function renderWeeks() {
            weekChipsContainer.innerHTML = '';
            const stage = AGRO_STAGES[currentStage];
            Object.keys(stage.weeks).forEach(w => {
                const weekNum = parseInt(w);
                const chip = document.createElement('button');
                chip.className = `week-chip ${weekNum === currentWeek ? 'active' : ''}`;
                chip.textContent = `Неделя ${weekNum}`;
                chip.addEventListener('click', () => {
                    currentWeek = weekNum;
                    renderWeeks();
                    calculateAll();
                });
                weekChipsContainer.appendChild(chip);
            });
        }

        function getCalculatedArea() {
            const length = parseFloat(bedLengthInput.value) || 0;
            const count = parseFloat(bedCountInput.value) || 0;
            const width = parseFloat(rowWidthInput.value) || 1.4;
            return length * count * width; // m²
        }

        function getCalculatedPlants() {
            const length = parseFloat(bedLengthInput.value) || 0;
            const count = parseFloat(bedCountInput.value) || 0;
            const lines = parseInt(linesPerRowSelect.value) || 2;
            const stepMeters = (parseFloat(plantStepInput.value) || 30) / 100;
            const totalTape = length * count;
            return Math.round((totalTape * lines) / stepMeters);
        }

        function calculateAll() {
            const length = parseFloat(bedLengthInput.value) || 0;
            const count = parseFloat(bedCountInput.value) || 0;
            const totalTape = length * count;
            const areaM2 = getCalculatedArea();
            const haRatio = areaM2 / 10000;
            const plants = getCalculatedPlants();

            // Update Metrics Display
            metricTape.textContent = totalTape.toLocaleString('ru-RU');
            metricArea.textContent = (areaM2 / 100).toFixed(1);
            metricPlants.textContent = plants.toLocaleString('ru-RU');
            metricHaRatio.textContent = haRatio.toFixed(3);

            // Water Calculation
            const waterPerPlantLiters = parseFloat(waterPerPlantInput.value) || 0.4;
            const totalWaterLiters = Math.round(plants * waterPerPlantLiters);
            const totalWaterM3 = (totalWaterLiters / 1000).toFixed(2);
            statWaterVolume.innerHTML = `${totalWaterM3} <small>м³ (${totalWaterLiters.toLocaleString('ru-RU')} л)</small>`;

            // Fertigation Data
            const stage = AGRO_STAGES[currentStage];
            const weekData = stage.weeks[currentWeek];
            if (!weekData) return;

            let tankAItems = [];
            let tankBItems = [];
            let allItems = [];
            let totalFertGrams = 0;

            weekData.fertilizers.forEach(fert => {
                const exactDoseKg = fert.normHa * haRatio;
                let displayDose = "";
                let gramVal = exactDoseKg * 1000;
                totalFertGrams += gramVal;

                if (fert.unit === 'л') {
                    const exactDoseL = fert.normHa * haRatio;
                    if (exactDoseL < 1) {
                        displayDose = `${Math.round(exactDoseL * 1000)} мл`;
                    } else {
                        displayDose = `${exactDoseL.toFixed(2)} л`;
                    }
                } else {
                    if (exactDoseKg < 1) {
                        displayDose = `${Math.round(exactDoseKg * 1000)} г`;
                    } else {
                        displayDose = `${exactDoseKg.toFixed(2)} кг (${Math.round(exactDoseKg * 1000)} г)`;
                    }
                }

                const itemData = {
                    name: fert.name,
                    formula: fert.formula,
                    dose: displayDose,
                    normHa: `${fert.normHa} ${fert.unit}/га`,
                    tank: fert.tank
                };

                allItems.push(itemData);
                if (fert.tank === 'A') {
                    tankAItems.push(itemData);
                } else {
                    tankBItems.push(itemData);
                }
            });

            // Diagnostics (EC and Concentration)
            if (totalWaterLiters > 0) {
                const concGL = (totalFertGrams / totalWaterLiters).toFixed(2);
                statConcentration.innerHTML = `${concGL} <small>г/л</small>`;
                
                // Estimated EC: baseline ~0.4 mS/cm from tap water + ~0.9 mS/cm per 1 g/l of salts
                const estEC = (0.4 + (concGL * 0.85)).toFixed(2);
                statEC.innerHTML = `~${estEC} <small>mS/cm</small>`;
                if (estEC > 1.8) {
                    statEC.style.color = '#ef4444';
                    statEC.title = "Внимание: Высокая концентрация! Опасность засоления корней. Разделите полив на 2 дня.";
                } else {
                    statEC.style.color = 'var(--secondary)';
                    statEC.title = "Оптимальная концентрация для корневой системы клубники";
                }
            }

            // Render Fertigation Output depending on mode
            renderFertigationResults(tankAItems, tankBItems, allItems);

            // Foliar Spraying Calculation
            renderFoliarResults(weekData.foliar, haRatio);
        }

        function renderFertigationResults(tankA, tankB, all) {
            tankABody.innerHTML = '';
            tankBBody.innerHTML = '';

            if (displayMode === 'tanks') {
                chemicalAlert.style.display = 'flex';
                tanksResultContainer.style.gridTemplateColumns = window.innerWidth > 640 ? 'repeat(2, 1fr)' : '1fr';
                document.querySelector('.tank-a-header span').textContent = "📦 БАК А (Кальций + Селитры)";
                document.querySelector('.tank-b-header span').textContent = "📦 БАК Б (Фосфор, Калий, Магний, Био)";
                
                populateTankList(tankABody, tankA);
                populateTankList(tankBBody, tankB);
                document.querySelector('.tank-b-header').parentElement.style.display = 'block';
            } else if (displayMode === 'days') {
                chemicalAlert.style.display = 'flex';
                chemicalAlert.innerHTML = `
                    <span style="font-size: 18px;">📅</span>
                    <div>
                        <strong>Схема полива по дням (для 1 бака):</strong> Вносите удобрения из Дня 1 и Дня 2 с интервалом в 2–3 дня чистой воды, чтобы предотвратить выпадение осадка в почве.
                    </div>
                `;
                document.querySelector('.tank-a-header span').textContent = "📆 ДЕНЬ 1 (Полив кальцием и селитрой)";
                document.querySelector('.tank-b-header span').textContent = "📆 ДЕНЬ 2 (Полив калием, фосфором и магнием)";
                populateTankList(tankABody, tankA);
                populateTankList(tankBBody, tankB);
                document.querySelector('.tank-b-header').parentElement.style.display = 'block';
            } else {
                chemicalAlert.style.display = 'none';
                tanksResultContainer.style.gridTemplateColumns = '1fr';
                document.querySelector('.tank-a-header span').textContent = "📋 ВСЕ УДОБРЕНИЯ НА ЭТУ НЕДЕЛЮ";
                populateTankList(tankABody, all);
                document.querySelector('.tank-b-header').parentElement.style.display = 'none';
            }
        }

        function populateTankList(container, items) {
            if (items.length === 0) {
                container.innerHTML = `<div style="text-align:center; padding: 20px; color: var(--text-muted); font-size: 0.88rem;">В этот бак на текущей неделе препараты не вносятся.</div>`;
                return;
            }

            items.forEach(item => {
                const el = document.createElement('div');
                el.className = 'fert-item';
                el.innerHTML = `
                    <div>
                        <div class="fert-name">${item.name}</div>
                        <div class="fert-formula">${item.formula}</div>
                    </div>
                    <div class="fert-amount-box">
                        <div class="fert-amount">${item.dose}</div>
                        <div class="fert-ha-norm">норма: ${item.normHa}</div>
                    </div>
                `;
                container.appendChild(el);
            });
        }

        function renderFoliarResults(foliarData, haRatio) {
            foliarBody.innerHTML = '';
            if (!foliarData || foliarData.length === 0) {
                foliarSection.style.display = 'none';
                return;
            }

            foliarSection.style.display = 'block';
            const sprayerVolumeLiters = parseFloat(sprayerVolumeInput.value) || 16;
            // Standard working fluid rate for strawberry: 300 Liters per 1 ha
            const haFluidNormLiters = 300;
            const plantationFluidLiters = haFluidNormLiters * haRatio;
            const tanksNeeded = Math.max(1, (plantationFluidLiters / sprayerVolumeLiters)).toFixed(1);

            foliarTanksCount.textContent = `На участок: ~${plantationFluidLiters.toFixed(1)} л раствора (~${tanksNeeded} заправок опрыскивателя)`;

            foliarData.forEach(item => {
                // Calculation on 1 sprayer (e.g. 16L):
                // Item dose on 1 ha / 300L * sprayerVolume
                const dosePerLiter = (item.normHa * (item.unit === 'л' ? 1000 : 1000)) / haFluidNormLiters; // in ml or g per liter
                const dosePerSprayer = dosePerLiter * sprayerVolumeLiters;

                // Total for entire plantation
                const totalForPlantation = item.normHa * haRatio;
                let totalDisplay = "";
                if (item.unit === 'л') {
                    totalDisplay = totalForPlantation < 1 ? `${Math.round(totalForPlantation * 1000)} мл` : `${totalForPlantation.toFixed(2)} л`;
                } else {
                    totalDisplay = totalForPlantation < 1 ? `${Math.round(totalForPlantation * 1000)} г` : `${totalForPlantation.toFixed(2)} кг`;
                }

                const row = document.createElement('div');
                row.className = 'fert-item';
                row.innerHTML = `
                    <div>
                        <div class="fert-name" style="color: var(--secondary);">✨ ${item.name}</div>
                        <div class="fert-formula">Дозировка: <strong>${Math.round(dosePerSprayer)} ${item.unit === 'л' ? 'мл' : 'г'}</strong> на 1 опрыскиватель (${sprayerVolumeLiters} л)</div>
                    </div>
                    <div class="fert-amount-box">
                        <div class="fert-amount" style="color: var(--secondary);">${totalDisplay}</div>
                        <div class="fert-ha-norm">на всю площадь плантации</div>
                    </div>
                `;
                foliarBody.appendChild(row);
            });
        }

        function setupHandbook() {
            const modal = document.getElementById('handbookModal');
            const openBtn = document.getElementById('openHandbookBtn');
            const closeBtn = document.getElementById('closeHandbookBtn');
            const container = document.getElementById('handbookContent');

            container.innerHTML = '';
            FERTILIZERS_HANDBOOK.forEach(item => {
                const el = document.createElement('div');
                el.className = 'handbook-item';
                el.innerHTML = `
                    <div class="handbook-name">${item.name} <span class="handbook-formula">${item.formula}</span></div>
                    <div class="handbook-desc">${item.desc}</div>
                `;
                container.appendChild(el);
            });

            openBtn.addEventListener('click', () => modal.classList.add('open'));
            closeBtn.addEventListener('click', () => modal.classList.remove('open'));
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.remove('open');
            });
        }

        function saveSettings() {
            const settings = {
                bedLength: bedLengthInput.value,
                bedCount: bedCountInput.value,
                rowWidth: rowWidthInput.value,
                linesPerRow: linesPerRowSelect.value,
                plantStep: plantStepInput.value,
                waterPerPlant: waterPerPlantInput.value,
                sprayerVolume: sprayerVolumeInput.value
            };
            localStorage.setItem('starberry_settings', JSON.stringify(settings));
        }

        function loadSavedSettings() {
            const saved = localStorage.getItem('starberry_settings');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (parsed.bedLength) bedLengthInput.value = parsed.bedLength;
                    if (parsed.bedCount) bedCountInput.value = parsed.bedCount;
                    if (parsed.rowWidth) rowWidthInput.value = parsed.rowWidth;
                    if (parsed.linesPerRow) linesPerRowSelect.value = parsed.linesPerRow;
                    if (parsed.plantStep) plantStepInput.value = parsed.plantStep;
                    if (parsed.waterPerPlant) waterPerPlantInput.value = parsed.waterPerPlant;
                    if (parsed.sprayerVolume) sprayerVolumeInput.value = parsed.sprayerVolume;
                } catch(e) {}
            }
        }

        // Start
        window.addEventListener('DOMContentLoaded', initApp);