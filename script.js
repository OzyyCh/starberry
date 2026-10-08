const AGRO_STAGES = {
            growth: {
                id: "growth",
                title: "I. Отрастание",
                subtitle: "+8...+10 °C в почве",
                icon: "🌱",
                nkRatio: "N:K = 1:1.0",
                firmness: "Вегетативный рост",
                weeks: {
                    1: {
                        week: 1,
                        targetEC: "1.0 – 1.2 mS/cm",
                        targetPH: "5.8 – 6.2",
                        ecAdvice: "Начало сезона: корни нежные, держите ЕС мягким (1.0–1.2), чтобы не обжечь молодые волоски корней.",
                        szrBadge: "Старт / Очистка",
                        szrAdvice: "Искореняющая обработка после зимы: медные препараты (Косайд / Медян Экстра) от пятнистостей до выдвижения бутонов. Пролив корней стимулятором Rhyzo.",
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
                        szrBadge: "Клещ и долгоносик",
                        szrAdvice: "Просыпается земляничный клещ и долгоносик! Обязательная обработка до цветения: Вертимек или Маврик. Через 7–10 дней повторить от отрождающихся личинок.",
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
                        szrBadge: "Перед цветением",
                        szrAdvice: "Последнее окно перед раскрытием цветков! Чистка от трипса (Маврик/Вертимек). По листу: Amifort + Fruka для защиты завязи от заморозков.",
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
                nkRatio: "N:K = 1:1.5",
                firmness: "Закладка плотности",
                weeks: {
                    1: {
                        week: 1,
                        targetEC: "1.3 – 1.5 mS/cm",
                        targetPH: "5.8 – 6.2",
                        ecAdvice: "Бутонизация и цветение. В Бак А идёт Teraflex S с микроэлементами. Fruka по листу улучшает опыление.",
                        szrBadge: "Серая гниль (Switch)",
                        szrAdvice: "Раскрытие 20–30% цветков: главная обработка от серой гнили (Свитч или Сигнум). Работать строго вечером, чтобы не навредить пчёлам!",
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
                        szrBadge: "Цветение 80%",
                        szrAdvice: "Массовое цветение: повторить защиту от серой гнили другим фунгицидом (Сигнум или Скала). Опрыскивание Fruka для идеальной ровной ягоды.",
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
                nkRatio: "N:K = 1:2.2 (Высокий сахар)",
                firmness: "Плотность и Brix",
                weeks: {
                    1: {
                        week: 1,
                        targetEC: "1.5 – 1.6 mS/cm",
                        targetPH: "5.8 – 6.2",
                        ecAdvice: "Налив первых ягод. Магниевая селитра стимулирует фотосинтез при высокой нагрузке ягодой.",
                        szrBadge: "БИО-защита ягоды",
                        szrAdvice: "Химия ЗАПРЕЩЕНА! Только биопрепараты: Триходерма / Фитоспорин по ягоде от гнилей. От трипса — Актофит / Фитоверм (ожидание 2 дня).",
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
                        szrBadge: "Сбор / Контроль гнили",
                        szrAdvice: "При сырости серая гниль сжигает ягоду за сутки. Своевременно снимайте перезревшие ягоды. После каждой волны сбора — профилактика биофунгицидом!",
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
                        szrBadge: "Трипс во время сбора",
                        szrAdvice: "Если ягода становится бронзовой/матовой — это трипс! Обработайте вечером Актофитом (80–100 мл на 10 л). Сбор возможен уже через 48 часов.",
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
                        szrBadge: "Плотность ягоды",
                        szrAdvice: "В жару ягода быстро размягчается. Кальций в Бак Б держит стенку ягоды. Полив строго под корень, не мочите ягоду сверху!",
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
                        szrBadge: "Вторая волна",
                        szrAdvice: "Поддержите куст биопрепаратом Триходерма под корень. От паутинного клеща — биоакарициды.",
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
                        szrBadge: "Финал сбора",
                        szrAdvice: "Снимите остатки ягоды, подготовьте плантацию к чистке и скашиванию старых листьев.",
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
                nkRatio: "N:K = 1:1.2",
                firmness: "Подготовка к зиме",
                weeks: {
                    1: {
                        week: 1,
                        targetEC: "1.2 – 1.4 mS/cm",
                        targetPH: "6.0 – 6.4",
                        ecAdvice: "Закладка цветоносов на следующий год. Высокий фосфор (MKP 13 кг/га) стимулирует закладку урожая.",
                        szrBadge: "Чистка и скашивание",
                        szrAdvice: "После скашивания листа: мощная искореняющая обработка от пятнистостей и клеща (Фалькон / Топсин-М + акарицид).",
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
                        szrBadge: "Молодой лист",
                        szrAdvice: "Защита нового нарастающего листа от мучнистой росы и клещей. Обработка серой или биофунгицидом.",
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
                        szrBadge: "Подготовка к зиме",
                        szrAdvice: "Финальная промывка капельной ленты кислотой от солей перед консервацией. Осенняя защита от корневых гнилей.",
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
        let isRainMode = false;
        let currentSplit = 1; // 1, 2, or 3 times per week
        let currentTankAItems = [];
        let currentTankBItems = [];
        let journalEntries = [];

        // DOM Elements
        const bedLengthInput = document.getElementById('bedLength');
        const bedCountInput = document.getElementById('bedCount');
        const rowWidthInput = document.getElementById('rowWidth');
        const sprayerVolumeInput = document.getElementById('sprayerVolume');
        const lakePhInput = document.getElementById('lakePhInput');
        const acidTypeSelect = document.getElementById('acidTypeSelect');

        const metricTape = document.getElementById('metricTape');
        const metricArea = document.getElementById('metricArea');
        const metricPlants = document.getElementById('metricPlants');

        const quickAreaText = document.getElementById('quickAreaText');
        const quickPlantsText = document.getElementById('quickPlantsText');
        const quickAcidDoseText = document.getElementById('quickAcidDoseText');

        const targetEcVal = document.getElementById('targetEcVal');
        const targetPhVal = document.getElementById('targetPhVal');
        const targetEcAdvice = document.getElementById('targetEcAdvice');
        const nkRatioText = document.getElementById('nkRatioText');
        const firmnessStatusText = document.getElementById('firmnessStatusText');
        const targetSzrAdvice = document.getElementById('targetSzrAdvice');
        const szrActionBadge = document.getElementById('szrActionBadge');
        const rainAlertNotice = document.getElementById('rainAlertNotice');
        const acidDoseResult = document.getElementById('acidDoseResult');
        const splitNoticeTag = document.getElementById('splitNoticeTag');

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
            setupOperatorMode();
        }

        function setupEventListeners() {
            [bedLengthInput, bedCountInput, rowWidthInput, sprayerVolumeInput, lakePhInput, acidTypeSelect].forEach(input => {
                input?.addEventListener('input', () => {
                    calculateAll();
                    saveSettings();
                });
            });

            document.getElementById('calculateAndGoBtn')?.addEventListener('click', () => {
                calculateAll();
                switchToTab('calcPage');
            });

            document.getElementById('editParamsQuickBtn')?.addEventListener('click', () => {
                switchToTab('paramsPage');
            });

            // Split Feeding Buttons
            document.querySelectorAll('.split-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const splitVal = parseInt(btn.dataset.split) || 1;
                    setSplitFeeding(splitVal);
                });
            });

            // Weather Modes
            const heatBtn = document.getElementById('heatModeBtn');
            const rainBtn = document.getElementById('rainModeBtn');

            heatBtn?.addEventListener('click', () => {
                isHeatMode = !isHeatMode;
                heatBtn.classList.toggle('heat-active', isHeatMode);
                calculateAll();
            });

            rainBtn?.addEventListener('click', () => {
                isRainMode = !isRainMode;
                rainBtn.classList.toggle('rain-active', isRainMode);
                calculateAll();
            });

            // Dark Mode Toggle
            document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme');
                const next = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem('starberry_theme', next);
            });

            // Share Buttons
            document.getElementById('shareTgBtn')?.addEventListener('click', shareToTelegram);
            document.getElementById('shareWaBtn')?.addEventListener('click', shareToWhatsApp);
            document.getElementById('copyTaskBtn')?.addEventListener('click', copyTaskToClipboard);

            // Journal & Logging
            document.getElementById('logTodayBtn')?.addEventListener('click', addJournalEntry);
            document.getElementById('clearJournalBtn')?.addEventListener('click', () => {
                if (confirm('Очистить все записи журнала?')) {
                    journalEntries = [];
                    saveJournal();
                    renderJournal();
                }
            });
        }

        function setSplitFeeding(splitCount) {
            currentSplit = splitCount;
            document.querySelectorAll('.split-btn').forEach(b => {
                b.classList.toggle('active', parseInt(b.dataset.split) === currentSplit);
            });

            if (splitNoticeTag) {
                if (currentSplit === 1) {
                    splitNoticeTag.textContent = "100% на 1 полив";
                } else if (currentSplit === 2) {
                    splitNoticeTag.textContent = "50% на 1 полив (2 полива/нед)";
                } else {
                    splitNoticeTag.textContent = "33% на 1 полив (3 полива/нед)";
                }
            }
            calculateAll();
        }

        // Unified Tab Switching Function
        function switchToTab(pageId) {
            document.querySelectorAll('.tab-page').forEach(el => el.classList.remove('active-page'));
            document.querySelectorAll('.nav-item, .nav-item-desktop').forEach(el => {
                el.classList.toggle('active', el.dataset.page === pageId);
            });
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.add('active-page');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function setupNavigationTabs() {
            document.querySelectorAll('.nav-item, .nav-item-desktop').forEach(btn => {
                btn.addEventListener('click', () => {
                    const pageId = btn.dataset.page;
                    if (pageId) switchToTab(pageId);
                });
            });

            // Brix Help Toggle
            document.getElementById('toggleBrixHelpBtn')?.addEventListener('click', () => {
                const help = document.getElementById('brixHelpContent');
                if (help) {
                    help.style.display = help.style.display === 'none' ? 'block' : 'none';
                }
            });
        }

        function setupOperatorMode() {
            const overlay = document.getElementById('operatorOverlay');
            const openBtns = [document.getElementById('openOperatorBtn'), document.getElementById('openOperatorHeaderBtn')];
            openBtns.forEach(b => {
                b?.addEventListener('click', () => {
                    updateOperatorView();
                    overlay?.classList.add('active');
                });
            });
            document.getElementById('closeOperatorBtn')?.addEventListener('click', () => {
                overlay?.classList.remove('active');
            });
        }

        function updateOperatorView() {
            const stage = AGRO_STAGES[currentStage];
            document.getElementById('opMetaSubtitle').textContent = `${stage.title} • Неделя ${currentWeek} (Полив: ${currentSplit === 1 ? '100% нормы' : 'порция 1 из ' + currentSplit})`;
            document.getElementById('opEcVal').textContent = isHeatMode ? '1.2 mS/cm (Жара)' : stage.weeks[currentWeek].targetEC;
            
            const opA = document.getElementById('opTankABody');
            const opB = document.getElementById('opTankBBody');
            if (opA) {
                opA.innerHTML = '';
                if (currentTankAItems.length === 0) {
                    opA.innerHTML = '<div style="color:#94a3b8; padding:8px 0; font-size:1.1rem;">В этот бак препараты не вносятся</div>';
                } else {
                    currentTankAItems.forEach(it => {
                        const row = document.createElement('div');
                        row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08);';
                        row.innerHTML = `<span class="op-fert-name">${it.name}</span><span class="op-fert-val">${it.dose}</span>`;
                        opA.appendChild(row);
                    });
                }
            }
            if (opB) {
                opB.innerHTML = '';
                if (currentTankBItems.length === 0) {
                    opB.innerHTML = '<div style="color:#94a3b8; padding:8px 0; font-size:1.1rem;">В этот бак препараты не вносятся</div>';
                } else {
                    currentTankBItems.forEach(it => {
                        const row = document.createElement('div');
                        row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08);';
                        row.innerHTML = `<span class="op-fert-name">${it.name}</span><span class="op-fert-val">${it.dose}</span>`;
                        opB.appendChild(row);
                    });
                }
            }
            const opAcid = document.getElementById('opAcidDoseText');
            if (opAcid) opAcid.textContent = acidDoseResult ? acidDoseResult.textContent : '';
        }

        function renderStages() {
            stageSelector.innerHTML = '';
            Object.values(AGRO_STAGES).forEach(stage => {
                const weeksCount = Object.keys(stage.weeks).length;
                const btn = document.createElement('div');
                btn.className = `stage-card-btn ${stage.id === currentStage ? 'active' : ''}`;
                btn.innerHTML = `
                    <div>
                        <div class="stage-card-icon">${stage.icon}</div>
                        <div class="stage-card-title">${stage.title}</div>
                        <div class="stage-card-sub">${stage.subtitle}</div>
                    </div>
                    <div style="font-size:0.75rem; font-weight:800; color:var(--text-muted); margin-top:8px;">
                        ${weeksCount} ${weeksCount === 1 ? 'неделя' : 'недели'}
                    </div>
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
            Object.values(stage.weeks).forEach(w => {
                const chip = document.createElement('div');
                chip.className = `week-chip ${w.week === currentWeek ? 'active' : ''}`;
                chip.innerHTML = `
                    <div class="week-chip-title">Неделя ${w.week}</div>
                    <div class="week-chip-date">${w.targetEC}</div>
                `;
                chip.addEventListener('click', () => {
                    currentWeek = w.week;
                    renderWeeks();
                    calculateAll();
                });
                weekSelector.appendChild(chip);
            });
        }

        function getCalculatedArea() {
            const length = parseFloat(bedLengthInput.value) || 0;
            const count = parseFloat(bedCountInput.value) || 0;
            const rowWidth = parseFloat(rowWidthInput.value) || 1.40;
            return length * count * rowWidth;
        }

        function getCalculatedPlants() {
            const length = parseFloat(bedLengthInput.value) || 0;
            const count = parseFloat(bedCountInput.value) || 0;
            const totalBedMeters = length * count;
            const step = 0.25;
            const rowsOnBed = 2;
            return Math.round(totalBedMeters * (rowsOnBed / step));
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

            // In Heat mode, fertilizer concentration is reduced by 25%
            if (isHeatMode) {
                haRatio = haRatio * 0.75;
            }

            // Spoon-Feeding division (divide by 1, 2, or 3)
            haRatio = haRatio / currentSplit;

            // Metrics Display on Page 1 & 2
            if (metricTape) metricTape.textContent = totalBedMeters.toLocaleString('ru-RU');
            if (metricArea) metricArea.textContent = areaSotkas;
            if (metricPlants) metricPlants.textContent = totalPlants.toLocaleString('ru-RU');

            if (quickAreaText) quickAreaText.textContent = `${areaSotkas} соток`;
            if (quickPlantsText) quickPlantsText.textContent = `${totalPlants.toLocaleString('ru-RU')} кустов`;

            // Acid Lake water calculation
            const rawPh = parseFloat(lakePhInput?.value) || 8.1;
            const acidType = acidTypeSelect?.value || 'ortho';
            const deltaPh = Math.max(0, rawPh - 5.9);
            const coeff = acidType === 'ortho' ? 85 : 115;
            const mlPerM3 = Math.round(deltaPh * coeff);
            const acidMsg = `~${mlPerM3} мл ${acidType === 'ortho' ? 'ортофосфорной' : 'азотной'} кислоты на 1 м³ воды озера для pH 5.8-6.0`;
            if (acidDoseResult) acidDoseResult.textContent = acidMsg;
            if (quickAcidDoseText) quickAcidDoseText.textContent = `Подкисление: ${acidMsg}`;

            // Fertigation Data
            const stage = AGRO_STAGES[currentStage];
            const weekData = stage.weeks[currentWeek];
            if (!weekData) return;

            // Update Target EC and pH Monitor
            if (targetEcVal) {
                targetEcVal.textContent = isHeatMode ? "1.1 – 1.3 mS/cm (ЖАРА)" : weekData.targetEC;
            }
            if (targetPhVal) targetPhVal.textContent = weekData.targetPH;
            if (targetEcAdvice) {
                if (isHeatMode) {
                    targetEcAdvice.innerHTML = "🔥 <strong style='color:#b45309;'>Включен режим жары:</strong> дозировка солей снижена на 25%. Поливайте рано утром (до 8:00) или вечером.";
                } else {
                    targetEcAdvice.textContent = weekData.ecAdvice;
                }
            }

            if (nkRatioText) nkRatioText.textContent = stage.nkRatio || "N:K = 1:1.5";
            if (firmnessStatusText) {
                if (isRainMode) {
                    firmnessStatusText.innerHTML = "⚠️ <strong style='color:#ef4444;'>Сырость: риск водянистости и серой гнили!</strong>";
                } else {
                    firmnessStatusText.textContent = stage.firmness || "Оптимум";
                }
            }

            // Visual Phase Gauge & Accuracy Badge
            const brixBarFill = document.getElementById('brixBarFill');
            const stageAccuracyBadge = document.getElementById('stageAccuracyBadge');
            if (brixBarFill) {
                if (currentStage === 'growth') {
                    brixBarFill.style.width = '20%';
                    if (stageAccuracyBadge) stageAccuracyBadge.textContent = '✅ Норма Фазы I: фокус на корень и лист';
                } else if (currentStage === 'budding') {
                    brixBarFill.style.width = '55%';
                    if (stageAccuracyBadge) stageAccuracyBadge.textContent = '✅ Норма Фазы II: фокус на цветки и бутоны';
                } else if (currentStage === 'fruiting') {
                    brixBarFill.style.width = '100%';
                    if (stageAccuracyBadge) stageAccuracyBadge.textContent = '✅ Норма Фазы III: калий х2 на сахар и плотность';
                } else {
                    brixBarFill.style.width = '40%';
                    if (stageAccuracyBadge) stageAccuracyBadge.textContent = '✅ Норма Фазы IV: закладка почек';
                }
            }

            const brixExplainer = document.getElementById('brixPlainExplainer');
            if (brixExplainer) {
                if (currentStage === 'growth') {
                    brixExplainer.innerHTML = "🌱 <strong>Фаза I (Отрастание):</strong> Всё рассчитано строго по схеме Agrostrimedit! Сейчас у куста ещё нет ягод, поэтому калий для сладости не нужен. Удобрения сбалансированы 1:1.0, чтобы направить 100% сил на наращивание мощных листьев и новых белых корней.";
                } else if (currentStage === 'budding') {
                    brixExplainer.innerHTML = "🌸 <strong>Фаза II (Цветение):</strong> Баланс 1:1.5. Доля калия повышена в 1.5 раза для подготовки к завязыванию плодов и укрепления стенок будущих ягод.";
                } else if (currentStage === 'fruiting') {
                    brixExplainer.innerHTML = "🍓 <strong>Фаза III (Сбор ягоды):</strong> Шкала на максимуме! Калия в 2 с лишним раза больше азота (1:2.0 – 1:2.2). Это даёт максимальный сахар (Brix) и плотность — <strong>ягода не течёт в ящиках при перевозке</strong>.";
                } else if (currentStage === 'post') {
                    brixExplainer.innerHTML = "🌿 <strong>Фаза IV (После сбора):</strong> Баланс 1:1.2 для восстановления куста и закладки цветочных почек на следующий сезон.";
                }
                if (isRainMode) {
                    brixExplainer.innerHTML += "<br><span style='color:#ef4444; font-weight:700;'>🌧️ Сырая погода: риск размягчения мякоти. Кальций из Бака Б защитит от растрескивания и серой гнили!</span>";
                }
            }

            if (targetSzrAdvice) targetSzrAdvice.textContent = weekData.szrAdvice || "";
            if (szrActionBadge) szrActionBadge.textContent = weekData.szrBadge || "Защита";
            if (rainAlertNotice) rainAlertNotice.style.display = isRainMode ? 'block' : 'none';

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

            currentTankAItems = tankAItems;
            currentTankBItems = tankBItems;

            const tankAFormatted = tankAWeightGrams >= 1000 ? `${(tankAWeightGrams/1000).toFixed(2)} кг` : `${Math.round(tankAWeightGrams)} г`;
            const tankBFormatted = tankBWeightGrams >= 1000 ? `${(tankBWeightGrams/1000).toFixed(2)} кг` : `${Math.round(tankBWeightGrams)} г`;

            if (tankAWeight) tankAWeight.textContent = tankAFormatted;
            if (tankBWeight) tankBWeight.textContent = tankBFormatted;

            // Mobile Sticky Bar update
            const stickyA = document.getElementById('stickyTankA');
            const stickyB = document.getElementById('stickyTankB');
            const stickyEc = document.getElementById('stickyEc');
            if (stickyA) stickyA.textContent = tankAFormatted;
            if (stickyB) stickyB.textContent = tankBFormatted;
            if (stickyEc) stickyEc.textContent = isHeatMode ? '1.2' : (weekData.targetEC.split('–')[0].trim());

            renderTankItems(tankABody, tankAItems);
            renderTankItems(tankBBody, tankBItems);
            renderFoliarItems(weekData.foliar, (areaM2 / 10000));
        }

        function renderTankItems(container, items) {
            container.innerHTML = '';
            if (items.length === 0) {
                container.innerHTML = `<div style="text-align:center; padding: 24px; color: var(--text-muted); font-size: 0.95rem; font-weight:700;">В этот бак на текущий полив препараты не вносятся.</div>`;
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

                const displayPerSprayer = dosePerSprayer < 1000 ? `${Math.round(dosePerSprayer)} ${item.unit === 'л' ? 'мл' : 'г'}` : `${(dosePerSprayer/1000).toFixed(2)} ${item.unit}`;
                const displayTotal = totalForPlantation < 1 ? `${Math.round(totalForPlantation * (item.unit === 'л' ? 1000 : 1000))} ${item.unit === 'л' ? 'мл' : 'г'}` : `${totalForPlantation.toFixed(2)} ${item.unit}`;

                const el = document.createElement('div');
                el.className = 'fert-row';
                el.innerHTML = `
                    <div>
                        <div class="fert-title">${item.name}</div>
                        <div class="fert-sub">${item.formula} • всего на поле: ${displayTotal}</div>
                    </div>
                    <div>
                        <div class="fert-dose" style="border-color:var(--secondary); color:var(--secondary);">${displayPerSprayer} <small style="font-size:0.75rem;">/ 16 л</small></div>
                    </div>
                `;
                foliarContent.appendChild(el);
            });
        }

        function buildShareText() {
            const stage = AGRO_STAGES[currentStage];
            const weekData = stage.weeks[currentWeek];
            const area = (getCalculatedArea() / 100).toFixed(1);
            const plants = getCalculatedPlants().toLocaleString('ru-RU');
            const portionText = currentSplit === 1 ? '100% нормы (1 полив в нед)' : `порция 1 из ${currentSplit} (${Math.round(100/currentSplit)}% нормы)`;

            let msg = `🍓 Starberry Pro • Наряд на полив\n`;
            msg += `📅 ${new Date().toLocaleDateString('ru-RU')} | ${stage.title} • Неделя ${currentWeek}\n`;
            msg += `🌱 Поле: ${area} сот. (${plants} кустов) | Режим: ${portionText}\n\n`;

            msg += `📦 БАК А (Основной) — всего ${tankAWeight.textContent}:\n`;
            if (currentTankAItems.length > 0) {
                currentTankAItems.forEach(it => {
                    msg += `  • ${it.name}: ${it.dose}\n`;
                });
            } else {
                msg += `  (нет удобрений)\n`;
            }

            msg += `\n📦 БАК Б (ТОЛЬКО Кальций) — всего ${tankBWeight.textContent}:\n`;
            if (currentTankBItems.length > 0) {
                currentTankBItems.forEach(it => {
                    msg += `  • ${it.name}: ${it.dose}\n`;
                });
            } else {
                msg += `  (в этот полив не вносится)\n`;
            }

            if (acidDoseResult) {
                msg += `\n💧 Озеро: ${acidDoseResult.textContent.replace('~', '')}\n`;
            }
            msg += `🎯 Раствор в капельнице: EC ${targetEcVal?.textContent || ''}, pH ${targetPhVal?.textContent || '5.8-6.2'}\n`;

            if (weekData && weekData.foliar && weekData.foliar.length > 0) {
                msg += `\n🌿 ОПРЫСКИВАТЕЛЬ (по листу):\n`;
                weekData.foliar.forEach(item => {
                    msg += `  • ${item.name} (${item.formula}): по схеме\n`;
                });
            }

            return msg;
        }

        function shareToTelegram() {
            const rawText = buildShareText();
            const encodedText = encodeURIComponent(rawText);
            const siteUrl = window.location.href ? window.location.href.split('#')[0] : 'https://ozyych.github.io/starberry/';
            const encodedUrl = encodeURIComponent(siteUrl);

            copyTextToClipboardSilently(rawText);

            const tgUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
            window.open(tgUrl, '_blank');
        }

        function shareToWhatsApp() {
            const text = encodeURIComponent(buildShareText());
            window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
        }

        function copyTaskToClipboard() {
            const text = buildShareText();
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    alert('📋 Наряд на полив скопирован в буфер обмена!\nМожно отправить рабочим в любой мессенджер (Viber, SMS и др.).');
                }).catch(() => fallbackCopy(text));
            } else {
                fallbackCopy(text);
            }
        }

        function fallbackCopy(text) {
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            alert('📋 Наряд на полив скопирован в буфер обмена!');
        }

        function copyTextToClipboardSilently(text) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).catch(() => {});
            }
        }

        function addJournalEntry() {
            const stage = AGRO_STAGES[currentStage];
            const dateStr = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
            const entry = {
                id: Date.now(),
                date: dateStr,
                stageTitle: stage.title,
                weekNum: currentWeek,
                portion: currentSplit === 1 ? '100%' : `1/${currentSplit}`,
                tankA: tankAWeight.textContent,
                tankB: tankBWeight.textContent,
                isHeat: isHeatMode,
                isRain: isRainMode
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
                list.innerHTML = `<p style="text-align:center; padding:30px; color:var(--text-muted); font-size:1rem; font-weight:600;">В журнале пока нет записей. Нажмите зелёную кнопку «Записать полив» на экране питания!</p>`;
                return;
            }

            list.innerHTML = '';
            journalEntries.forEach(item => {
                const el = document.createElement('div');
                el.className = 'fert-row';
                el.style.cssText = 'flex-direction:column; align-items:flex-start; gap:8px; margin-bottom:12px;';
                el.innerHTML = `
                    <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
                        <strong style="font-size:1.05rem; color:var(--primary);">${item.date} — ${item.stageTitle}, Неделя ${item.weekNum}</strong>
                        <span style="font-size:0.8rem; background:var(--primary-light); color:var(--primary); padding:3px 8px; border-radius:6px; font-weight:800;">Порция ${item.portion}</span>
                    </div>
                    <div style="font-size:0.95rem; color:var(--text-main);">
                        БАК А: <strong>${item.tankA}</strong> | БАК Б: <strong>${item.tankB}</strong>
                        ${item.isHeat ? ' • <span style="color:#b45309; font-weight:700;">ЖАРА</span>' : ''}
                        ${item.isRain ? ' • <span style="color:#2563eb; font-weight:700;">СЫРОСТЬ</span>' : ''}
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
                try { journalEntries = JSON.parse(saved); } catch(e) {}
            }
            renderJournal();
        }

        function setupHandbook() {
            const container = document.getElementById('handbookCatalogContainer');
            if (!container) return;
            container.innerHTML = '';
            FERTILIZERS_HANDBOOK.forEach(item => {
                const el = document.createElement('div');
                el.className = 'handbook-entry';
                el.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; flex-wrap:wrap; gap:4px;">
                        <h4 style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin:0;">${item.name}</h4>
                        <span style="font-size:0.8rem; font-weight:700; background:var(--primary-light); color:var(--primary); padding:3px 10px; border-radius:6px;">${item.formula}</span>
                    </div>
                    <p style="font-size:0.92rem; color:var(--text-muted); margin:0; line-height:1.45;">${item.desc}</p>
                `;
                container.appendChild(el);
            });
        }

        function saveSettings() {
            const data = {
                bedLength: bedLengthInput.value,
                bedCount: bedCountInput.value,
                rowWidth: rowWidthInput.value,
                sprayerVolume: sprayerVolumeInput.value,
                lakePh: lakePhInput?.value,
                acidType: acidTypeSelect?.value
            };
            localStorage.setItem('starberry_settings', JSON.stringify(data));
        }

        function loadSavedSettings() {
            const savedTheme = localStorage.getItem('starberry_theme');
            if (savedTheme) {
                document.documentElement.setAttribute('data-theme', savedTheme);
            }

            const saved = localStorage.getItem('starberry_settings');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (parsed.bedLength) bedLengthInput.value = parsed.bedLength;
                    if (parsed.bedCount) bedCountInput.value = parsed.bedCount;
                    if (parsed.rowWidth) rowWidthInput.value = parsed.rowWidth;
                    if (parsed.sprayerVolume) sprayerVolumeInput.value = parsed.sprayerVolume;
                    if (parsed.lakePh && lakePhInput) lakePhInput.value = parsed.lakePh;
                    if (parsed.acidType && acidTypeSelect) acidTypeSelect.value = parsed.acidType;
                } catch(e) {}
            }
        }

        // PWA Service Worker Registration
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./sw.js')
                    .then(reg => console.log('Starberry Pro PWA active!'))
                    .catch(err => console.log('SW error:', err));
            });
        }

        window.addEventListener('DOMContentLoaded', initApp);