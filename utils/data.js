const boilers = [
  {
    path: "paku-500-kvt-1k-nr",
    imgSrc: new URL(
      "/public/images/boilers/paku-500-kvt-1k-nr/1.png",
      import.meta.url
    ).href,
    images: [
      new URL(
        "/public/images/boilers/paku-500-kvt-1k-nr/1.png",
        import.meta.url
      ).href,
      new URL(
        "/public/images/boilers/paku-500-kvt-1k-nr/2.png",
        import.meta.url
      ).href,
      new URL(
        "/public/images/boilers/paku-500-kvt-1k-nr/3.jpg",
        import.meta.url
      ).href,
      new URL(
        "/public/images/boilers/paku-500-kvt-1k-nr/4.jpg",
        import.meta.url
      ).href,
      new URL(
        "/public/images/boilers/paku-500-kvt-1k-nr/5.jpg",
        import.meta.url
      ).href,
      new URL(
        "/public/images/boilers/paku-500-kvt-1k-nr/6.jpg",
        import.meta.url
      ).href,
    ],
    type: "ПАКУ 500 кВт 1К (Н/Р)",
    purpose: "Теплоснабжение",
    typeDescription: "Блочно-модульная автоматизированная котельная",
    manufactureDate: "Февраль - 2023г",
    boiler: "Wiesberg Steel 501",
    boilerCount: 1,
    available: 2,
    fullDescription:
      "Котельная предназначена для обеспечения потребителей тепловой энергией в виде теплоснабжения (отопление), а так же для растопки ледовых покрытий. Котельная автоматизирована и работает без постоянного присутствия обслуживающего персонала. После доставки котла на место установки подключение к коммуникациям занимает не более двух часов, пуск котла и выход его на номинальные параметры также занимают около двух часов. В состав оборудования котельной входит котёл, горелочное устройство, насос циркуляционный фланцевый. ПАКУ имеет небольшие габариты и малый вес, что позволяет устанавливать котел в кузов грузового транспортного средства (газель) и работать непосредственно с него.",
    serviceLife: "Не менее 10 лет",
    electricPower: "6 кВт",
    electricalPowerConsumption: "8 кВт",
    weight: "Не более 1,5 т.",
    fuelType: "ГАЗ/Дизель",
    power: "500 кВт",
    fuelConsumption: "20-60 л/час",
    coolantTemperature: "95°С",
    burnersCount: "1",
    burnerType:
      "Мазутно-дизельная двухступенчатая Baltur TBL 60P 200 - 600 кВт",
    coolantPressure: "0,6-0,5 МПа",
    fuelTank: "наружный (кубик)",
    heatingCapacity: "0,43 Гкал/ч",
    boilerEfficiency: "93%",
    LxWxH: "2580x1300x1900 мм",
    boilerUnit: "1шт.",
    itemPasport: "1ком.",
    userManual: "да",
    mobileDescription: "Передвижная котельная установка 0,5 МВт, 1 котел",
  },

  {
    path: "bmak-1000-kvt-2k",
    imgSrc: new URL(
      "/public/images/boilers/bmak-1000-kvt-2k/1.png",
      import.meta.url
    ).href,
    images: [
      new URL("/public/images/boilers/bmak-1000-kvt-2k/1.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1000-kvt-2k/2.jpg", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1000-kvt-2k/3.jpg", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1000-kvt-2k/4.jpg", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1000-kvt-2k/5.jpg", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1000-kvt-2k/6.jpg", import.meta.url)
        .href,
    ],
    type: "ПАКУ 1000 кВт 2К (Н/Р)",
    purpose: "Теплоснабжение",
    typeDescription: "Блочно-модульная автоматизированная котельная",
    manufactureDate: "Январь - 2024г",
    fuelType: "ГАЗ/Дизель",
    bmkBuilding: "На базе морского контейнера 20футов",
    boiler: "Buderus Logano SK755",
    boilerCount: 2,
    available: 5,
    power: "1000 кВт",
    burnerType: "Мазутно-дизельная двухступенчатая Uret UM3 226-564 кВт",
    burnersCount: "2",
    pump: "CNP/Purity с устройством плавного пуска",
    fuelTank: "6,0м3",
    fuelConsumption: "110 л/час",
    heatingSystem: "Независимая (двухконтурная с теплообменником)",
    boilerCircuit: "пропиленгликоль -55°С",
    boilerCircuitTemperature: "100-75°С",
    heatCarrier: "гликоли/вода",
    heatCarrierTemp: "95-70°С",
    electricPower: "22 кВт",
    electricalPowerConsumption: "15 кВт",
    backupPowerSupply: "Встроенной Бензогенератор TSS SGG 18000EH3LA с АВР",
    boilerCircuitCoolantPressure: "0,2-0,6 Мпа",
    networkCircuitCoolantPressure: "0,2-1,2 Мпа",
    temperatureControl: "Качественное",
    boilerEfficiency: "94-96%",
    heatingCapacity: "0,859 Гкал/ч",
    fireSecurityAlarm: "ВЕРС ПК2",
    dispatching:
      "На базе ПЛК ОВЕН (удалённый мониторинг и управление котельной, архивация данных 90 суток)",
    fullDescription:
      "Котельная автоматизирована и работает без постоянного присутствия персонала - полностью дистанционный доступ управления котельной. В состав котельной входит резервный генератор, на случай отключения электричества. Блочно-модульная автоматизированная котельная обладает высокой степенью эксплуатационной готовности. Монтаж котельной на фундаменте и подключение к коммуникациям занимает не более 2-х суток.",
    stovepipe: "быстросъёмные, секционные сэндвич из нержавеющей стали",
    weight: "Не более 10 т",
    LxWxH: "6060x2440x2590 мм",
    boilerPlant: "1 шт.",
    boilerPassport: "1 шт.",
    userManual: "1 шт.",
    passportAndManualOfTheControlPanel: "1 шт.",
    mobileDescription: "Котельная 1,0 МВт, 2 котла",
  },
  {
    path: "bmak-1040-kvt-1k",
    imgSrc: new URL(
      "/public/images/boilers/bmak-1040-kvt-1k/1.png",
      import.meta.url
    ).href,
    images: [
      new URL("/public/images/boilers/bmak-1040-kvt-1k/1.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1040-kvt-1k/2.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1040-kvt-1k/3.jpg", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1040-kvt-1k/4.jpg", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1040-kvt-1k/5.jpg", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1040-kvt-1k/6.jpg", import.meta.url)
        .href,
    ],
    type: "БМАК 1040 кВт 1К",
    purpose: "Теплоснабжение",
    typeDescription: "Блочно-модульная автоматизированная котельная",
    manufactureDate: "Январь - 2024г",
    bmkBuilding: "На базе морского контейнера 20футов",
    boiler: "Buderus Logano SK755",
    boilerCount: 1,
    power: "1040 кВт",
    available: 5,
    burnerType: "Мазутно-дизельная двухступенчатая Uret UM5 451-1240кВт",
    burnersCount: "1",
    pump: "CNP/Purity с устройством плавного пуска",
    fuelTank: "5,4 м3",
    fuelConsumption: "130 л/час",
    heatingSystem: "независимая (двухконтурная с теплообменником)",
    boilerCircuitTemperature: "100-75°С",
    boilerCircuit: "пропиленгликоль -55°С.",
    heatCarrierTemp: "95-70°С",
    heatCarrier: "гликоли/вода",
    electricPower: "22 кВт",
    electricalPowerConsumption: "15 кВт",
    backupPowerSupply: "Встроенной Бензогенератор TSS SGG 18000EH3LA с АВР",
    boilerCircuitCoolantPressure: "0,2-0,6 Мпа",
    boilerCircuitCoolantPressure: "0,2-1,2 Мпа",
    fuelType: "ГАЗ/Дизель",
    coolantTemperature: "95-70°С",
    coolantPressure: "0,6-0,5 МПа",
    boilerEfficiency: "94-96%",
    temperatureControl: "Качественное",
    heatingCapacity: "0,859 Гкал/ч",
    fireSecurityAlarm: "ВЕРС ПК2",
    dispatching:
      "На базе ПЛК ОВЕН (удалённый мониторинг и управление котельной, архивация данных 90 суток)",
    fullDescription:
      "Котельная автоматизирована и работает без постоянного присутствия персонала - полностью дистанционный доступ управления котельной. В состав котельной входит резервный генератор, на случай отключения электричества. Блочно-модульная автоматизированная котельная обладает высокой степенью эксплуатационной готовности. Монтаж котельной на фундаменте и подключение к коммуникациям занимает не более 2-х суток.",
    stovepipe: "быстросъёмные, секционные сэндвич из нержавеющей стали",
    weight: "Не более 10 т",
    LxWxH: "6060x2440x2590 мм",
    boilerPlant: "1 шт.",
    boilerPassport: "1 шт.",
    userManual: "1 шт.",
    passportAndManualOfTheControlPanel: "1 шт.",
    mobileDescription: "Котельная 1,04 МВт, 1 котел",
  },
  {
    path: "bmak-1200-kvt-1k",
    imgSrc: new URL(
      "/public/images/boilers/bmak-1200-kvt-1k/1.png",
      import.meta.url
    ).href,
    images: [
      new URL("/public/images/boilers/bmak-1200-kvt-1k/1.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1200-kvt-1k/2.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1200-kvt-1k/3.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1200-kvt-1k/4.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1200-kvt-1k/5.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1200-kvt-1k/6.png", import.meta.url)
        .href,
    ],
    type: "БМАК 1200 кВт 1К",
    purpose: "Теплоснабжение",
    typeDescription: "Блочно-модульная автоматизированная котельная",
    manufactureDate: "Ноябрь - 2022г",
    boiler: "Temron WL-1250",
    boilerCount: 1,
    minUsingFuel: "22 Нм3/час",
    maxUsingFuel: "153 Нм3/час",
    serviceLife: "Не менее 10 лет",
    electricPower: "30 кВт",
    electricalPowerConsumption: "18 кВт",
    weight: "Не более 9 т.",
    fuelType: "ГАЗ/Дизель",
    power: "1200 кВт",
    available: 5,
    LxWxH: "5960x2440x2700 мм",
    fullDescription:
      "Котельная автоматизирована и работает без постоянного присутствия персонала - полностью дистанционный доступ управления котельной. В состав котельной входит резервный генератор, на случай отключения электричества. Блочно-модульная автоматизированная котельная обладает высокой степенью эксплуатационной готовности. Монтаж котельной на фундаменте и подключение к коммуникациям занимает не более 2-х суток.",
    bmak_1_2: "1шт.",
    itemPasport: "1 шт.",
    chimneys: "специализированная нержавеющая сталь 1 шт.",
    mobileDescription: "Котельная 1,2 МВт, 1 котел",
  },
  {
    path: "bmak-1400-kvt-1k",
    imgSrc: new URL(
      "/public/images/boilers/bmak-1400-kvt-1k/1.png",
      import.meta.url
    ).href,
    images: [
      new URL("/public/images/boilers/bmak-1400-kvt-1k/1.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1400-kvt-1k/2.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1400-kvt-1k/3.jpg", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1400-kvt-1k/4.jpg", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1400-kvt-1k/5.jpg", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1400-kvt-1k/6.jpg", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1400-kvt-1k/7.jpg", import.meta.url)
        .href,
    ],
    type: "БМАК 1400 кВт 1К",
    purpose: "Теплоснабжение",
    typeDescription: "Блочно-модульная автоматизированная котельная",
    manufactureDate: "Декабрь - 2022г.",
    boiler: "Buderus Logano SK755",
    boilerCount: 1,
    serviceLife: "Не менее 10 лет",
    electricPower: "22 кВт",
    electricalPowerConsumption: "17 кВт",
    weight: "Не более 8,5 т.",
    fuelType: "ГАЗ/Дизель",
    power: "1400 кВт",
    fuelConsumption: "60-180 л/час",
    coolantTemperature: "95-70°С",
    burnersCount: "1",
    burnerType: "Мазутно-дизельная двухступенчатая Uret UM7 564-1692 кВт",
    coolantPressure: "0,6-0,5 МПа",
    fuelTank: "5,8 м3",
    boilerEfficiency: "92%",
    fuelTank: "5,8 м3",
    LxWxH: "6060x2440x2590 мм",
    available: 5,
    fullDescription:
      "Котельная автоматизирована и работает без постоянного присутствия персонала - полностью дистанционный доступ управления котельной. В состав котельной входит резервный генератор, на случай отключения электричества. Блочно-модульная автоматизированная котельная обладает высокой степенью эксплуатационной готовности. Монтаж котельной на фундаменте и подключение к коммуникациям занимает не более 2-х суток.",
    boilerPlant: "1 шт.",
    boilerPassport: "1 шт.",
    userManual: "1 шт.",
    passportAndManualOfTheControlPanel: "1 шт.",
    mobileDescription: "Котельная 1,4 МВт, 1 котел",
  },
  {
    path: "bmak-1600-kvt-1k",
    imgSrc: new URL(
      "/public/images/boilers/bmak-1600-kvt-1k/1.png",
      import.meta.url
    ).href,
    images: [
      new URL("/public/images/boilers/bmak-1600-kvt-1k/1.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1600-kvt-1k/2.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1600-kvt-1k/3.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1600-kvt-1k/4.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1600-kvt-1k/5.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1600-kvt-1k/6.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-1600-kvt-1k/7.png", import.meta.url)
        .href,
    ],
    type: "БМАК 1600 кВт 1К",
    purpose: "Теплоснабжение",
    typeDescription: "Автоматизированная газовая горелка",
    manufactureDate: "Ноябрь - 2022г.",
    boiler: "Temron WL-1750",
    boilerCount: 1,
    power: "1600 кВт",
    available: 5,
    minUsingFuel: "29 Нм3/час",
    maxUsingFuel: "204 Нм3/час",
    serviceLife: "Не менее 10 лет",
    electricPower: "30 кВт",
    electricalPowerConsumption: "18 кВт",
    bmkBuilding: "Не более 9 т.",
    fuelType: "ГАЗ/Дизель",
    LxWxH: "5960x2440x2700 мм",
    fullDescription:
      "Котельная автоматизирована и работает без постоянного присутствия персонала - полностью дистанционный доступ управления котельной. В состав котельной входит резервный генератор, на случай отключения электричества. Блочно-модульная автоматизированная котельная обладает высокой степенью эксплуатационной готовности. Монтаж котельной на фундаменте и подключение к коммуникациям занимает не более 2-х суток.",
    bmak_1_6: "1 шт.",
    chimneys: "1 шт.",
    itemPasport: "1 шт.",
    mobileDescription: "Котельная 1,6 МВт, 1 котел",
  },
  {
    path: "bmak-4800-kvt-2k",
    imgSrc: new URL(
      "/public/images/boilers/bmak-4800-kvt-2k/1.png",
      import.meta.url
    ).href,
    images: [
      new URL("/public/images/boilers/bmak-4800-kvt-2k/1.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-4800-kvt-2k/2.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-4800-kvt-2k/3.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-4800-kvt-2k/4.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-4800-kvt-2k/5.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-4800-kvt-2k/6.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-4800-kvt-2k/7.png", import.meta.url)
        .href,
    ],
    type: "БМАК 4800 кВт 2К",
    purpose: "Теплоснабжение",
    typeDescription: "Автоматизированная газовая горелка",
    manufactureDate: "Ноябрь - 2022г.",
    boiler: "Sibiria 2,5 кВт",
    boilerCount: 2,
    minUsingFuel: "80 Нм3/час",
    maxUsingFuel: "650 Нм3/час",
    weight: "Не более 18т.",
    power: "4800 кВт",
    fuelType: "ГАЗ/Дизель",
    LxWxH: "12190x2440x2800 мм",
    available: 5,
    fullDescription:
      "Котельная автоматизирована и работает без постоянного присутствия персонала - полностью дистанционный доступ управления котельной. В состав котельной входит резервный генератор, на случай отключения электричества. Блочно-модульная автоматизированная котельная обладает высокой степенью эксплуатационной готовности. Монтаж котельной на фундаменте и подключение к коммуникациям занимает не более 2-х суток.",
    bmak_4_8: "1 шт.",
    chimneys: "специализированная нержавеющая сталь 2 шт.",
    itemPasport: "1 шт.",
    mobileDescription: "Котельная 4,8 МВт, 2 котла",
  },
  {
    path: "bmak-6000-kvt-2k",
    imgSrc: new URL(
      "/public/images/boilers/bmak-6000-kvt-2k/1.png",
      import.meta.url
    ).href,
    images: [
      new URL("/public/images/boilers/bmak-6000-kvt-2k/1.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-6000-kvt-2k/2.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-6000-kvt-2k/3.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-6000-kvt-2k/4.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-6000-kvt-2k/5.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-6000-kvt-2k/6.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-6000-kvt-2k/7.png", import.meta.url)
        .href,
    ],
    type: "БМАК 6000 кВт 2К",
    purpose: "Теплоснабжение",
    typeDescription: "Автоматизированная газовая горелка",
    manufactureDate: "Ноябрь - 2022г.",
    boiler: "Sibiria 3,0 кВт",
    boilerCount: 2,
    minUsingFuel: "110 Нм3/час",
    maxUsingFuel: "765 Нм3/час",
    serviceLife: "Не менее 10 лет",
    electricPower: "100 кВт",
    electricalPowerConsumption: "60 кВт",
    weight: "Не более 18 т.",
    fuelType: "ГАЗ/Дизель",
    power: "6000 кВт",
    LxWxH: "12190x2440x2800 мм",
    available: 5,
    fullDescription:
      "Котельная автоматизирована и работает без постоянного присутствия персонала - полностью дистанционный доступ управления котельной. В состав котельной входит резервный генератор, на случай отключения электричества. Блочно-модульная автоматизированная котельная обладает высокой степенью эксплуатационной готовности. Монтаж котельной на фундаменте и подключение к коммуникациям занимает не более 2-х суток.",
    bmak_6: "1 шт.",
    chimneys: "специализированная нержавеющая сталь 2 шт.",
    itemPasport: "1 шт.",
    mobileDescription: "Котельная 6 МВт, 2 котла",
  },
  {
    path: "bmak-6100-kvt-2k",
    imgSrc: new URL(
      "/public/images/boilers/bmak-6100-kvt-2k/1.png",
      import.meta.url
    ).href,
    images: [
      new URL("/public/images/boilers/bmak-6100-kvt-2k/1.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-6100-kvt-2k/2.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-6100-kvt-2k/3.png", import.meta.url)
        .href,
    ],
    type: "БМАК 6100 кВт 2К",
    purpose: "Теплоснабжение",
    typeDescription: "Автоматизированная газовая горелка",
    manufactureDate: "Ноябрь - 2022г.",
    boiler: "Bosch UT-L24",
    boilerCount: 2,
    minUsingFuel: "110 Нм3/час",
    maxUsingFuel: "765 Нм3/час",
    serviceLife: "Не менее 10 лет",
    electricPower: "100 кВт",
    electricalPowerConsumption: "60 кВт",
    weight: "Не более 18 т.",
    fuelType: "Дизель",
    heatingCapacityAtMaxGW: "4649 кВт",
    maxUsingPowerGWS: "1451 кВт",
    power: "6100 кВт",
    LxWxH: "12190x2440x2800 мм",
    available: 5,
    fullDescription:
      "Котельная автоматизирована и работает без постоянного присутствия персонала - полностью дистанционный доступ управления котельной. В состав котельной входит резервный генератор, на случай отключения электричества. Блочно-модульная автоматизированная котельная обладает высокой степенью эксплуатационной готовности. Монтаж котельной на фундаменте и подключение к коммуникациям занимает не более 2-х суток.",
    bmak_6_GWS: "1 шт.",
    chimneys: "специализированная нержавеющая сталь 2 шт.",
    itemPasport: "1 шт.",
    mobileDescription: "Котельная 6,1 МВт, 2 котла",
  },
  {
    path: "bmak-7400-kvt-2k",
    imgSrc: new URL(
      "/public/images/boilers/bmak-7400-kvt-2k/1.png",
      import.meta.url
    ).href,
    images: [
      new URL("/public/images/boilers/bmak-7400-kvt-2k/1.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-7400-kvt-2k/2.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-7400-kvt-2k/3.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-7400-kvt-2k/4.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-7400-kvt-2k/5.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-7400-kvt-2k/6.png", import.meta.url)
        .href,
      new URL("/public/images/boilers/bmak-7400-kvt-2k/7.png", import.meta.url)
        .href,
    ],
    type: "БМАК 7400 кВт 2К",
    purpose: "Теплоснабжение",
    typeDescription: "Автоматизированная газовая горелка",
    manufactureDate: "Ноябрь - 2022г.",
    boiler: "Bosch UT-L28",
    boilerCount: 2,
    minUsingFuel: "110 Нм3/час",
    maxUsingFuel: "994 Нм3/час",
    serviceLife: "Не менее 10 лет",
    electricPower: "100 кВт",
    electricalPowerConsumption: "60 кВт",
    weight: "Не более 18 т.",
    fuelType: "ГАЗ/Дизель",
    power: "7400 кВт",
    available: 5,
    fullDescription:
      "Котельная автоматизирована и работает без постоянного присутствия персонала - полностью дистанционный доступ управления котельной. В состав котельной входит резервный генератор, на случай отключения электричества. Блочно-модульная автоматизированная котельная обладает высокой степенью эксплуатационной готовности. Монтаж котельной на фундаменте и подключение к коммуникациям занимает не более 2-х суток.",
    LxWxH: "12190x2440x2800 мм",
    bmak_6: "1 шт.",
    chimneys: "специализированная нержавеющая сталь 2 шт.",
    itemPasport: "1 шт.",
    mobileDescription: "Котельная 7,4 МВт, 2 котла",
  },
];

const car = [
  {
    imgSrc: "/images/car/car1.png",
    images: ["/images/car/car1.png"],
    name: "Мобильная котельная установка на базе фургона Ford Transit",
  },
];

export { boilers, car };
