const AGRO_STAGES = {
            growth: {
                id: "growth",
                title: "I. Отрастание",
                subtitle: "+8...+10 °C в почве",
                icon: "🌱",
                weeks: {
                    1: {
                        week: 1,
                        targetEC: "1.0 – 1.2 mS/cm",
                        targetPH: "5.8 – 6.2",
                        ecAdvice: "Начало сезона: корни нежные, держите ЕС мягким (1.0–1.2), чтобы не обжечь молодые волоски корней.",
                        compatNotice: "На 1-й неделе кальциевая селитра не вносится. Всё питание идёт через Бак А (МКФ, селитры, Rhyzo).",
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 10, unit: "кг", tank: "A" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 15, unit: "кг", tank: "A" },
                            { id: "nh4no3", name: "Аммиачная селитра (NH4NO3)", formula: "34.4% N", normHa: 15, unit: "кг", tank: "A" },
                            { id: "rhyzo", name: "Rhyzo (укоренитель/ризосфера)", formula: "Биостимулятор корней", normHa: 1, unit: "кг", tank: "A" }
                        ],
                        foliar: null
                    },
                    2: {
                        week: 2,
                        targetEC: "1.2 – 1.3 mS/cm",
                        targetPH: "5.8 – 6.2",
                        ecAdvice: "Активный рост молодых листьев. Включается кальциевая селитра в Бак Б и Bombardier в Бак А.",
                        compatNotice: "Внимание: в Баке Б растворяется ТОЛЬКО Кальциевая селитра. Всё остальное — в Бак А!",
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 10, unit: "кг", tank: "A" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 15, unit: "кг", tank: "A" },
                            { id: "nh4no3", name: "Аммиачная селитра (NH4NO3)", formula: "34.4% N", normHa: 15, unit: "кг", tank: "A" },
                            { id: "bombardier", name: "Bombardier (биостимулятор)", formula: "Фульвокислоты + аминокислоты", normHa: 7, unit: "л", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "B" }
                        ],
                        foliar: null
                    },
                    3: {
                        week: 3,
                        targetEC: "1.2 – 1.4 mS/cm",
                        targetPH: "5.8 – 6.2",
                        ecAdvice: "Выдвижение цветоносов. Обязательна первая листовая обработка (Amifort + Fruka) для защиты от перепадов температур.",
                        compatNotice: "Кальций — в Бак Б, фосфор и селитры — в Бак А. Опрыскивание Amifort + Fruka проводится отдельно по листу!",
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 10, unit: "кг", tank: "A" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 15, unit: "кг", tank: "A" },
                            { id: "nh4no3", name: "Аммиачная селитра (NH4NO3)", formula: "34.4% N", normHa: 15, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "B" }
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
                title: "II. Цветение",
                subtitle: "Бутонизация и завязь",
                icon: "🌸",
                weeks: {
                    1: {
                        week: 1,
                        targetEC: "1.3 – 1.5 mS/cm",
                        targetPH: "5.8 – 6.2",
                        ecAdvice: "Бутонизация и цветение. В Бак А идёт Teraflex S с микроэлементами. Fruka по листу улучшает опыление.",
                        compatNotice: "Teraflex S содержит фосфаты и серу — строго в Бак А! В Бак Б только Кальций.",
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 5, unit: "кг", tank: "A" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 10, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S (спец. для ягод)", formula: "NPK + Micro", normHa: 30, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "B" }
                        ],
                        foliar: [
                            { id: "fruka", name: "Fruka (стимулятор цветения/микроэлементы)", normHa: 1, unit: "кг" }
                        ]
                    },
                    2: {
                        week: 2,
                        targetEC: "1.4 – 1.5 mS/cm",
                        targetPH: "5.8 – 6.2",
                        ecAdvice: "Массовое цветение и завязывание. Кальций формирует плотную клеточную структуру будущей ягоды.",
                        compatNotice: "В Бак Б — только Кальций. В Бак А — Терафлекс, МКФ и калий.",
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 5, unit: "кг", tank: "A" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 10, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S (спец. для ягод)", formula: "NPK + Micro", normHa: 30, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "B" }
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
                title: "III. Сбор ягоды",
                subtitle: "Налив и сахаристость",
                icon: "🍓",
                weeks: {
                    1: {
                        week: 1,
                        targetEC: "1.5 – 1.6 mS/cm",
                        targetPH: "5.8 – 6.2",
                        ecAdvice: "Налив первых ягод. Магниевая селитра стимулирует фотосинтез при высокой нагрузке ягодой.",
                        compatNotice: "Бак А: МКФ, калий, магний, Терафлекс и Bombardier. Бак Б: только Кальций.",
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 10, unit: "кг", tank: "A" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 20, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 20, unit: "кг", tank: "A" },
                            { id: "mgno3", name: "Магниевая селитра (Mg(NO3)2)", formula: "11% N, 16% MgO", normHa: 10, unit: "кг", tank: "A" },
                            { id: "bombardier", name: "Bombardier (биостимулятор)", formula: "Фульвокислоты", normHa: 7, unit: "л", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "B" }
                        ],
                        foliar: null
                    },
                    2: {
                        week: 2,
                        targetEC: "1.5 – 1.7 mS/cm",
                        targetPH: "5.8 – 6.2",
                        ecAdvice: "Массовый налив и первые спелые ягоды. Калий (KNO3) отвечает за сладость и плотность.",
                        compatNotice: "Кальций защищает ягоду от серой гнили и мягкости — держите его отдельно в Баке Б.",
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 5, unit: "кг", tank: "A" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 20, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 15, unit: "кг", tank: "A" },
                            { id: "mgno3", name: "Магниевая селитра (Mg(NO3)2)", formula: "11% N, 16% MgO", normHa: 10, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "B" }
                        ],
                        foliar: [
                            { id: "amifort", name: "Amifort (аминокислоты/листовое питание)", normHa: 3, unit: "л" }
                        ]
                    },
                    3: {
                        week: 3,
                        targetEC: "1.6 – 1.8 mS/cm",
                        targetPH: "5.8 – 6.2",
                        ecAdvice: "Пик сбора ягоды. Высокий ЕС даёт плотную сладкую ягоду. В сильную жару (>30°C) держите ЕС около 1.4–1.5.",
                        compatNotice: "На пике сбора доза кальция увеличена до 15 кг/га в Бак Б.",
                        fertilizers: [
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 20, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 15, unit: "кг", tank: "A" },
                            { id: "mgno3", name: "Магниевая селитра (Mg(NO3)2)", formula: "11% N, 16% MgO", normHa: 10, unit: "кг", tank: "A" },
                            { id: "bombardier", name: "Bombardier (биостимулятор)", formula: "Фульвокислоты", normHa: 7, unit: "л", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 15, unit: "кг", tank: "B" }
                        ],
                        foliar: null
                    },
                    4: {
                        week: 4,
                        targetEC: "1.5 – 1.7 mS/cm",
                        targetPH: "5.8 – 6.2",
                        ecAdvice: "Продолжение сбора урожая. Кальций 15 кг/га предотвращает размягчение ягоды в жару.",
                        compatNotice: "Бак А: калиевая селитра + Терафлекс. Бак Б: 15 кг/га кальциевой селитры.",
                        fertilizers: [
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 15, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 15, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 15, unit: "кг", tank: "B" }
                        ],
                        foliar: null
                    },
                    5: {
                        week: 5,
                        targetEC: "1.4 – 1.6 mS/cm",
                        targetPH: "5.8 – 6.2",
                        ecAdvice: "Вторая волна сбора. Повторный ввод Bombardier поддерживает микрофлору и корни.",
                        compatNotice: "Bombardier добавляется в Бак А к калию и Терафлексу. В Баке Б — чистый кальций.",
                        fertilizers: [
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 15, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 15, unit: "кг", tank: "A" },
                            { id: "bombardier", name: "Bombardier (биостимулятор)", formula: "Фульвокислоты", normHa: 7, unit: "л", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 15, unit: "кг", tank: "B" }
                        ],
                        foliar: null
                    },
                    6: {
                        week: 6,
                        targetEC: "1.3 – 1.5 mS/cm",
                        targetPH: "5.8 – 6.2",
                        ecAdvice: "Завершающие сборы. Дозировки плавно снижаются, подготавливая растения к послеуборочному периоду.",
                        compatNotice: "Завершение сбора. Бак А: калий + Терафлекс. Бак Б: кальций.",
                        fertilizers: [
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 10, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 10, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "B" }
                        ],
                        foliar: null
                    }
                }
            },
            budding: {
                id: "budding",
                title: "IV. Почки",
                subtitle: "Август-Сентябрь",
                icon: "🍂",
                weeks: {
                    1: {
                        week: 1,
                        targetEC: "1.2 – 1.4 mS/cm",
                        targetPH: "6.0 – 6.4",
                        ecAdvice: "Закладка цветоносов на следующий год. Высокий фосфор (MKP 13 кг/га) стимулирует закладку урожая.",
                        compatNotice: "Фосфор (MKP) строго в Бак А, Кальций — в Бак Б.",
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 13, unit: "кг", tank: "A" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 15, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 5, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 5, unit: "кг", tank: "B" }
                        ],
                        foliar: null
                    },
                    2: {
                        week: 2,
                        targetEC: "1.2 – 1.3 mS/cm",
                        targetPH: "6.0 – 6.4",
                        ecAdvice: "Укрепление корневой шейки и корней перед осенним охлаждением почвы.",
                        compatNotice: "Бак А: MKP + Терафлекс + Bombardier. Бак Б: Кальциевая селитра.",
                        fertilizers: [
                            { id: "mkp", name: "Монокалийфосфат (MKP)", formula: "0-52-34", normHa: 10, unit: "кг", tank: "A" },
                            { id: "teraflex", name: "Teraflex S", formula: "NPK + Micro", normHa: 5, unit: "кг", tank: "A" },
                            { id: "bombardier", name: "Bombardier (биостимулятор)", formula: "Фульвокислоты", normHa: 7, unit: "л", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 10, unit: "кг", tank: "B" }
                        ],
                        foliar: null
                    },
                    3: {
                        week: 3,
                        targetEC: "1.1 – 1.3 mS/cm",
                        targetPH: "6.0 – 6.4",
                        ecAdvice: "Финальная подкормка сезона. Калий и магний повышают зимостойкость сердечка куста.",
                        compatNotice: "Завершающий осенний полив: Бак А (магний и калиевая селитра), Бак Б (кальциевая селитра).",
                        fertilizers: [
                            { id: "mgno3", name: "Магниевая селитра (Mg(NO3)2)", formula: "11% N, 16% MgO", normHa: 5, unit: "кг", tank: "A" },
                            { id: "kno3", name: "Калиевая селитра (KNO3)", formula: "13-0-46", normHa: 15, unit: "кг", tank: "A" },
                            { id: "cano3", name: "Кальциевая селитра (Ca(NO3)2)", formula: "15.5% N, 26.5% CaO", normHa: 5, unit: "кг", tank: "B" }
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
                desc: "Высококонцентрированное фосфорно-калийное удобрение. Вносится строго в БАК А (вместе с NPK), ни в коем случае не с кальцием!"
            },
            {
                name: "Калиевая селитра (KNO3)",
                formula: "13-0-46",
                desc: "Источник нитратного азота и калия. Отвечает за налив ягод, сахаристость (Brix) и плотность. Вносится в Бак А."
            },
            {
                name: "Кальциевая селитра (Ca(NO3)2)",
                formula: "15.5% N, 26.5% CaO",
                desc: "Фундаментальный элемент для клубники. Укрепляет стенки клеток, защищает от серой гнили. Растворяется строго изолированно в БАКЕ Б."
            },
            {
                name: "Магниевая селитра (Mg(NO3)2)",
                formula: "11% N, 16% MgO",
                desc: "Магний активирует фотосинтез и предотвращает хлороз листьев при нагрузке ягодой. Вносится в Бак А."
            },
            {
                name: "Аммиачная селитра (NH4NO3)",
                formula: "34.4% N",
                desc: "Быстрый весенний старт вегетации при холодной почве (+8...+10 °C). Вносится в Бак А."
            },
            {
                name: "Teraflex S (Терафлекс Ягодный)",
                formula: "Комплекс NPK + Micro",
                desc: "Сбалансированное хелатное удобрение для ягодных культур. Вносится строго в Бак А."
            },
            {
                name: "Bombardier (Бомбардир)",
                formula: "Фульвокислоты + аминокислоты",
                desc: "Органический почвенный биостимулятор. Улучшает микрофлору, стимулирует поглощение элементов. Вносится в Бак А."
            },
            {
                name: "Rhyzo (Ризо)",
                formula: "Стимулятор ризосферы",
                desc: "Укоренитель для активного деления клеток корневой системы в начале сезона. Вносится в Бак А."
            },
            {
                name: "Amifort (Амифорт)",
                formula: "Аминокислоты по листу",
                desc: "Листовой антистрессант. Повышает иммунитет при перепадах температур и засухе."
            },
            {
                name: "Fruka (Фрука)",
                formula: "Бор, цинк, молибден + стимуляторы",
                desc: "Листовой комплекс для стимулирования опыления, цветения и устранения деформации ягод."
            }
        ];

        // State
        let currentStage = 'growth';
        let currentWeek = 1;
        let isHeatMode = false;
        let journalEntries = [];

        // DOM Inputs
        const bedLengthInput = document.getElementById('bedLength');
        const bedCountInput = document.getElementById('bedCount');
        const rowWidthInput = document.getElementById('rowWidth');
        const sprayerVolumeInput = document.getElementById('sprayerVolume');
        const heatModeToggle = document.getElementById('heatModeToggle');

        // Metrics Display
        const metricTape = document.getElementById('metricTape');
        const metricArea = document.getElementById('metricArea');
        const metricPlants = document.getElementById('metricPlants');

        // Monitor elements
        const targetEcVal = document.getElementById('targetEcVal');
        const targetPhVal = document.getElementById('targetPhVal');
        const targetEcAdvice = document.getElementById('targetEcAdvice');
        const compatNoticeText = document.getElementById('compatNoticeText');

        // Containers
        const stageSelector = document.getElementById('stageSelector');
        const weekSelector = document.getElementById('weekSelector');
        const tankABody = document.getElementById('tankABody');
        const tankBBody = document.getElementById('tankBBody');
        const tankAWeight = document.getElementById('tankAWeight');
        const tankBWeight = document.getElementById('tankBWeight');
        const foliarBox = document.getElementById('foliarBox');
        const foliarContent = document.getElementById('foliarContent');
        const foliarFluidInfo = document.getElementById('foliarFluidInfo');

        function initApp() {
            loadSavedSettings();
            loadJournal();
            renderStages();
            renderWeeks();
            calculateAll();
            setupEventListeners();
            setupHandbook();
            setupNavigationTabs();
        }

        function setupEventListeners() {
            [bedLengthInput, bedCountInput, rowWidthInput, sprayerVolumeInput].forEach(el => {
                if (el) el.addEventListener('input', calculateAll);
            });

            heatModeToggle?.addEventListener('change', (e) => {
                isHeatMode = e.target.checked;
                calculateAll();
            });

            document.getElementById('saveParamsBtn')?.addEventListener('click', () => {
                saveSettings();
                alert('Параметры участка сохранены!');
            });

            document.getElementById('logTodayBtn')?.addEventListener('click', () => {
                addJournalEntry();
            });

            document.getElementById('clearJournalBtn')?.addEventListener('click', () => {
                if (confirm('Очистить все записи журнала?')) {
                    journalEntries = [];
                    localStorage.removeItem('starberry_journal');
                    renderJournal();
                }
            });

            document.getElementById('printBtn')?.addEventListener('click', () => {
                window.print();
            });

            const themeBtn = document.getElementById('themeToggleBtn');
            themeBtn?.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', newTheme);
                themeBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
                localStorage.setItem('starberry_theme', newTheme);
            });

            const savedTheme = localStorage.getItem('starberry_theme');
            if (savedTheme) {
                document.documentElement.setAttribute('data-theme', savedTheme);
                if (themeBtn) themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
            }
        }

        function setupNavigationTabs() {
            const tabs = [
                { btn: 'tabFertBtn', page: 'calcPage' },
                { btn: 'tabParamsBtn', page: 'paramsPage' },
                { btn: 'tabSzrBtn', page: 'szrPage' },
                { btn: 'tabJournalBtn', page: 'journalPage' }
            ];

            tabs.forEach(t => {
                const b = document.getElementById(t.btn);
                b?.addEventListener('click', () => {
                    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
                    document.querySelectorAll('.tab-page').forEach(el => el.classList.remove('active-page'));
                    b.classList.add('active');
                    document.getElementById(t.page)?.classList.add('active-page');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });

            document.getElementById('tabHandbookNavBtn')?.addEventListener('click', () => {
                document.getElementById('handbookModal')?.classList.add('open');
            });
        }

        function renderStages() {
            stageSelector.innerHTML = '';
            Object.values(AGRO_STAGES).forEach(stage => {
                const weeksCount = Object.keys(stage.weeks).length;
                const btn = document.createElement('div');
                btn.className = `stage-card-btn ${stage.id === currentStage ? 'active' : ''}`;
                btn.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span class="stage-card-icon">${stage.icon}</span>
                        <span class="stage-card-weeks">${weeksCount} нед.</span>
                    </div>
                    <div class="stage-card-title">${stage.title}</div>
                    <div class="stage-card-weeks">${stage.subtitle}</div>
                `;
                btn.addEventListener('click', () => {
                    currentStage = stage.id;
                    currentWeek = 1;
                    renderStages();
                    renderWeeks();
                    calculateAll();
                });
                stageSelector.appendChild(btn);
            });
        }

        function renderWeeks() {
            weekSelector.innerHTML = '';
            const stage = AGRO_STAGES[currentStage];
            Object.keys(stage.weeks).forEach(w => {
                const weekNum = parseInt(w);
                const btn = document.createElement('button');
                btn.className = `week-btn ${weekNum === currentWeek ? 'active' : ''}`;
                btn.textContent = `Неделя ${weekNum}`;
                btn.addEventListener('click', () => {
                    currentWeek = weekNum;
                    renderWeeks();
                    calculateAll();
                });
                weekSelector.appendChild(btn);
            });
        }

        function getCalculatedArea() {
            const length = parseFloat(bedLengthInput.value) || 0;
            const count = parseFloat(bedCountInput.value) || 0;
            const width = parseFloat(rowWidthInput.value) || 1.35;
            return Math.round(length * count * width * 100) / 100;
        }

        function getCalculatedPlants() {
            const length = parseFloat(bedLengthInput.value) || 0;
            const count = parseFloat(bedCountInput.value) || 0;
            const totalBedMeters = length * count;
            const lines = 2;
            const stepMeters = 0.25;
            return Math.round((totalBedMeters * lines) / stepMeters);
        }

        function calculateAll() {
            const length = parseFloat(bedLengthInput.value) || 0;
            const count = parseFloat(bedCountInput.value) || 0;
            const totalBedMeters = length * count;
            const areaM2 = getCalculatedArea();
            const areaSotkas = (areaM2 / 100).toFixed(1);
            const totalPlants = getCalculatedPlants();

            // Direct area ratio from 1 hectare (10,000 m2)
            let haRatio = areaM2 / 10000;

            // In Heat mode, fertilizer concentration is reduced by 25% to protect roots from osmotic stress
            if (isHeatMode) {
                haRatio = haRatio * 0.75;
            }

            // Metrics Display
            if (metricTape) metricTape.textContent = totalBedMeters.toLocaleString('ru-RU');
            if (metricArea) metricArea.textContent = areaSotkas;
            if (metricPlants) metricPlants.textContent = totalPlants.toLocaleString('ru-RU');

            // Fertigation Data
            const stage = AGRO_STAGES[currentStage];
            const weekData = stage.weeks[currentWeek];
            if (!weekData) return;

            // Target EC & pH Monitor
            if (targetEcVal) {
                if (isHeatMode) {
                    targetEcVal.textContent = "1.1 – 1.3 mS/cm (ЖАРА)";
                } else {
                    targetEcVal.textContent = weekData.targetEC;
                }
            }
            if (targetPhVal) targetPhVal.textContent = weekData.targetPH;
            if (targetEcAdvice) {
                if (isHeatMode) {
                    targetEcAdvice.innerHTML = "🔥 <strong style='color:#b45309;'>Включен режим жары:</strong> дозировка солей снижена на 25%. Поливайте рано утром (до 8:00) или вечером. Увеличьте пролив чистой водой.";
                } else {
                    targetEcAdvice.textContent = weekData.ecAdvice;
                }
            }
            if (compatNoticeText) compatNoticeText.textContent = weekData.compatNotice || "";

            let tankAItems = [];
            let tankBItems = [];
            let tankAWeightGrams = 0;
            let tankBWeightGrams = 0;

            weekData.fertilizers.forEach(fert => {
                const exactDoseKg = fert.normHa * haRatio;
                let displayDose = "";
                let gramVal = exactDoseKg * 1000;

                if (fert.unit === 'л') {
                    const exactDoseL = fert.normHa * haRatio;
                    displayDose = exactDoseL < 1 ? `${Math.round(exactDoseL * 1000)} мл` : `${exactDoseL.toFixed(2)} л`;
                } else {
                    displayDose = exactDoseKg < 1 ? `${Math.round(exactDoseKg * 1000)} г` : `${exactDoseKg.toFixed(2)} кг (${Math.round(exactDoseKg * 1000)} г)`;
                }

                const itemData = {
                    name: fert.name,
                    formula: fert.formula,
                    dose: displayDose,
                    normHa: `${fert.normHa} ${fert.unit}/га`
                };

                if (fert.id === 'cano3') {
                    tankBItems.push(itemData);
                    tankBWeightGrams += gramVal;
                } else {
                    tankAItems.push(itemData);
                    tankAWeightGrams += gramVal;
                }
            });

            // Update Tank Header Totals
            if (tankAWeight) tankAWeight.textContent = tankAWeightGrams >= 1000 ? `${(tankAWeightGrams/1000).toFixed(2)} кг` : `${Math.round(tankAWeightGrams)} г`;
            if (tankBWeight) tankBWeight.textContent = tankBWeightGrams >= 1000 ? `${(tankBWeightGrams/1000).toFixed(2)} кг` : `${Math.round(tankBWeightGrams)} г`;

            renderTankItems(tankABody, tankAItems);
            renderTankItems(tankBBody, tankBItems);
            renderFoliarItems(weekData.foliar, (areaM2 / 10000));
        }

        function renderTankItems(container, items) {
            container.innerHTML = '';
            if (items.length === 0) {
                container.innerHTML = `<div style="text-align:center; padding: 20px; color: var(--text-muted); font-size: 0.88rem; font-weight:600;">В этот бак на текущей неделе препараты не вносятся.</div>`;
                return;
            }

            items.forEach(item => {
                const el = document.createElement('div');
                el.className = 'fert-row';
                el.innerHTML = `
                    <div>
                        <div class="fert-title">${item.name}</div>
                        <div class="fert-sub">${item.formula} • норма: ${item.normHa}</div>
                    </div>
                    <div>
                        <div class="fert-dose">${item.dose}</div>
                    </div>
                `;
                container.appendChild(el);
            });
        }

        function renderFoliarItems(foliarData, haRatio) {
            foliarContent.innerHTML = '';
            if (!foliarData || foliarData.length === 0) {
                foliarBox.style.display = 'none';
                return;
            }

            foliarBox.style.display = 'block';
            const sprayerVolumeLiters = parseFloat(sprayerVolumeInput.value) || 16;
            const haFluidNormLiters = 300;
            const plantationFluidLiters = haFluidNormLiters * haRatio;
            const tanksNeeded = Math.max(1, (plantationFluidLiters / sprayerVolumeLiters)).toFixed(1);

            if (foliarFluidInfo) {
                foliarFluidInfo.textContent = `~${plantationFluidLiters.toFixed(1)} л на всё поле (~${tanksNeeded} заправок)`;
            }

            foliarData.forEach(item => {
                const dosePerLiter = (item.normHa * (item.unit === 'л' ? 1000 : 1000)) / haFluidNormLiters;
                const dosePerSprayer = dosePerLiter * sprayerVolumeLiters;

                const totalForPlantation = item.normHa * haRatio;
                let totalDisplay = "";
                if (item.unit === 'л') {
                    totalDisplay = totalForPlantation < 1 ? `${Math.round(totalForPlantation * 1000)} мл` : `${totalForPlantation.toFixed(2)} л`;
                } else {
                    totalDisplay = totalForPlantation < 1 ? `${Math.round(totalForPlantation * 1000)} г` : `${totalForPlantation.toFixed(2)} кг`;
                }

                const row = document.createElement('div');
                row.className = 'fert-row';
                row.innerHTML = `
                    <div>
                        <div class="fert-title" style="color: var(--secondary);">✨ ${item.name}</div>
                        <div class="fert-sub">Дозировка: <strong>${Math.round(dosePerSprayer)} ${item.unit === 'л' ? 'мл' : 'г'}</strong> на 1 опрыскиватель (${sprayerVolumeLiters} л)</div>
                    </div>
                    <div>
                        <div class="fert-dose" style="color: var(--secondary);">${totalDisplay}</div>
                        <div class="fert-norm-tag">на всё поле</div>
                    </div>
                `;
                foliarContent.appendChild(row);
            });
        }

        function addJournalEntry() {
            const stage = AGRO_STAGES[currentStage];
            const dateStr = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
            const entry = {
                id: Date.now(),
                date: dateStr,
                stageTitle: stage.title,
                weekNum: currentWeek,
                tankA: tankAWeight.textContent,
                tankB: tankBWeight.textContent,
                isHeat: isHeatMode
            };
            journalEntries.unshift(entry);
            saveJournal();
            renderJournal();
            alert('Полив успешно занесён в журнал агронома!');
        }

        function renderJournal() {
            const list = document.getElementById('journalListContainer');
            if (!list) return;
            if (journalEntries.length === 0) {
                list.innerHTML = `<p style="text-align:center; padding:20px; color:var(--text-muted); font-size:0.9rem;">В журнале пока нет записей. Нажмите зелёную кнопку «Записать полив» на главном экране!</p>`;
                return;
            }

            list.innerHTML = '';
            journalEntries.forEach(item => {
                const el = document.createElement('div');
                el.className = 'log-entry';
                el.innerHTML = `
                    <div>
                        <div class="log-date">${item.date} ${item.isHeat ? '🔥 ЖАРА' : ''}</div>
                        <div class="log-title">${item.stageTitle} • Неделя ${item.weekNum}</div>
                        <div class="log-sub">Бак А: ${item.tankA} | Бак Б (кальций): ${item.tankB}</div>
                    </div>
                `;
                list.appendChild(el);
            });
        }

        function saveJournal() {
            localStorage.setItem('starberry_journal', JSON.stringify(journalEntries));
        }

        function loadJournal() {
            const saved = localStorage.getItem('starberry_journal');
            if (saved) {
                try {
                    journalEntries = JSON.parse(saved);
                    renderJournal();
                } catch(e) {}
            }
        }

        function setupHandbook() {
            const modal = document.getElementById('handbookModal');
            const openBtn = document.getElementById('openHandbookBtn');
            const closeBtn = document.getElementById('closeHandbookModal');
            const scrollBox = document.getElementById('handbookScroll');

            scrollBox.innerHTML = '';
            FERTILIZERS_HANDBOOK.forEach(item => {
                const el = document.createElement('div');
                el.className = 'handbook-entry';
                el.innerHTML = `
                    <h4>${item.name} <span style="font-size:0.75rem; background:var(--bg-card-subtle); padding:2px 6px; border-radius:4px; font-weight:700;">${item.formula}</span></h4>
                    <p>${item.desc}</p>
                `;
                scrollBox.appendChild(el);
            });

            openBtn?.addEventListener('click', () => modal?.classList.add('open'));
            closeBtn?.addEventListener('click', () => modal?.classList.remove('open'));
            modal?.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.remove('open');
            });
        }

        function saveSettings() {
            const settings = {
                bedLength: bedLengthInput.value,
                bedCount: bedCountInput.value,
                rowWidth: rowWidthInput.value,
                sprayerVolume: sprayerVolumeInput.value
            };
            localStorage.setItem('starberry_settings_v35', JSON.stringify(settings));
        }

        function loadSavedSettings() {
            const saved = localStorage.getItem('starberry_settings_v35');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (parsed.bedLength) bedLengthInput.value = parsed.bedLength;
                    if (parsed.bedCount) bedCountInput.value = parsed.bedCount;
                    if (parsed.rowWidth) rowWidthInput.value = parsed.rowWidth;
                    if (parsed.sprayerVolume) sprayerVolumeInput.value = parsed.sprayerVolume;
                } catch(e) {}
            }
        }

        window.addEventListener('DOMContentLoaded', initApp);