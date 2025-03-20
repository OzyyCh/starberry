// Данные об удобрениях для клубники
const fertilizerData = {
  // Описания удобрений
  descriptions: {
    'МКР': 'Моно Калий Фосфат - комплексное минеральное удобрение, способствует развитию корневой системы, повышает устойчивость к болезням',
    'KNO3': 'Калиевая селитра - источник калия и азота, способствует созреванию плодов и повышению их качества',
    'Ca(NO3)2': 'Кальциевая селитра - источник кальция и азота, предотвращает вершинную гниль, укрепляет клеточные стенки',
    'TeraFlex S': 'Комплексное удобрение с серой для развития растений и формирования качественных плодов',
    'MgNO3': 'Магниевая селитра - источник магния и азота, компонент хлорофилла, активирует ферменты',
    'Bombardier': 'Жидкое удобрение для стимуляции роста и развития растений',
    'NH4NO3': 'Аммиачная селитра - быстродействующий источник азота для роста зеленой массы',
    'Amifort': 'Жидкое листовое удобрение для опрыскивания по листу, улучшает усвоение питательных веществ',
    'Fruka': 'Специализированная добавка для формирования плодов и повышения урожайности',
    'Rhyzo': 'Удобрение для развития корневой системы и повышения устойчивости растений'
  },

  // Схемы удобрений
  schemes: [
    {
      name: "Отрастание цветоносов (температура почвы +8 +10)",
      description: "Период начального роста и формирования цветоносов в начале сезона",
      icon: "seedling",
      phases: [
        {
          week: 1,
          fertilizers: [
            { name: "МКР", amount: "10 кг" },
            { name: "KNO3", amount: "15 кг" },
            { name: "NH4NO3", amount: "15 кг" },
            { name: "Rhyzo", amount: "1 кг" }
          ]
        },
        {
          week: 2,
          fertilizers: [
            { name: "МКР", amount: "10 кг" },
            { name: "KNO3", amount: "15 кг" },
            { name: "NH4NO3", amount: "15 кг" },
            { name: "Ca(NO3)2", amount: "10 кг" },
            { name: "Bombardier", amount: "7 л" }
          ]
        },
        {
          week: 3,
          fertilizers: [
            { name: "МКР", amount: "10 кг" },
            { name: "KNO3", amount: "15 кг" },
            { name: "NH4NO3", amount: "15 кг" },
            { name: "Ca(NO3)2", amount: "10 кг" },
            { note: "Опрыскивание по листу - Amifort 3 л + Fruka 1 кг" }
          ]
        }
      ]
    },
    {
      name: "Цветение и образование ягод",
      description: "Период цветения и начала формирования плодов",
      icon: "flower",
      phases: [
        {
          week: 1,
          fertilizers: [
            { name: "МКР", amount: "5 кг" },
            { name: "KNO3", amount: "10 кг" },
            { name: "Ca(NO3)2", amount: "10 кг" },
            { name: "TeraFlex S", amount: "30 кг" },
            { note: "Опрыскивание по листу - Fruka 1 кг" }
          ]
        },
        {
          week: 2,
          fertilizers: [
            { name: "МКР", amount: "5 кг" },
            { name: "KNO3", amount: "10 кг" },
            { name: "Ca(NO3)2", amount: "10 кг" },
            { name: "TeraFlex S", amount: "30 кг" },
            { note: "Опрыскивание по листу - Amifort 3 л + Fruka 1 кг" }
          ]
        }
      ]
    },
    {
      name: "Начало созревания и сбор ягод",
      description: "Период созревания и активного плодоношения",
      icon: "strawberry",
      phases: [
        {
          week: 1,
          fertilizers: [
            { name: "МКР", amount: "10 кг" },
            { name: "KNO3", amount: "20 кг" },
            { name: "Ca(NO3)2", amount: "10 кг" },
            { name: "TeraFlex S", amount: "20 кг" },
            { name: "MgNO3", amount: "10 кг" },
            { name: "Bombardier", amount: "7 л" }
          ]
        },
        {
          week: 2,
          fertilizers: [
            { name: "МКР", amount: "5 кг" },
            { name: "KNO3", amount: "20 кг" },
            { name: "Ca(NO3)2", amount: "10 кг" },
            { name: "TeraFlex S", amount: "15 кг" },
            { name: "MgNO3", amount: "10 кг" },
            { note: "Опрыскивание по листу - Amifort 5 л" }
          ]
        },
        {
          week: 3,
          fertilizers: [
            { name: "KNO3", amount: "20 кг" },
            { name: "Ca(NO3)2", amount: "15 кг" },
            { name: "TeraFlex S", amount: "15 кг" },
            { name: "MgNO3", amount: "10 кг" },
            { name: "Bombardier", amount: "7 л" }
          ]
        },
        {
          week: 4,
          fertilizers: [
            { name: "KNO3", amount: "15 кг" },
            { name: "Ca(NO3)2", amount: "15 кг" },
            { name: "TeraFlex S", amount: "15 кг" }
          ]
        },
        {
          week: 5,
          fertilizers: [
            { name: "KNO3", amount: "15 кг" },
            { name: "Ca(NO3)2", amount: "15 кг" },
            { name: "TeraFlex S", amount: "15 кг" },
            { name: "Bombardier", amount: "7 л" }
          ]
        },
        {
          week: 6,
          fertilizers: [
            { name: "KNO3", amount: "10 кг" },
            { name: "Ca(NO3)2", amount: "10 кг" },
            { name: "TeraFlex S", amount: "10 кг" }
          ]
        }
      ]
    },
    {
      name: "Закладка цветочных почек (Август-Сентябрь)",
      description: "Период закладки почек для следующего сезона",
      icon: "seedling",
      phases: [
        {
          week: 1,
          fertilizers: [
            { name: "МКР", amount: "13 кг" },
            { name: "KNO3", amount: "15 кг" },
            { name: "Ca(NO3)2", amount: "5 кг" },
            { name: "TeraFlex S", amount: "5 кг" }
          ]
        },
        {
          week: 2,
          fertilizers: [
            { name: "МКР", amount: "10 кг" },
            { name: "Ca(NO3)2", amount: "10 кг" },
            { name: "TeraFlex S", amount: "5 кг" },
            { name: "Bombardier", amount: "7 л" }
          ]
        },
        {
          week: 3,
          fertilizers: [
            { name: "MgNO3", amount: "5 кг" },
            { name: "KNO3", amount: "15 кг" },
            { name: "Ca(NO3)2", amount: "5 кг" }
          ]
        }
      ]
    }
  ]
};