import { Language, Tour, Review } from '../types';

type Translations = {
  [key in Language]: {
    header: {
      name: string;
      about: string;
      transfer: string;
      tours: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
      description: string;
      telegramButton: string;
    };
    introAbout: {
      title: string;
      imageOverlay: {
        line1: string;
        line2: string;
      };
      textSections: {
        title: string;
        content: string;
      }[];
      ctaButton: string;
    };
    services: {
        title: string;
        transfers: { title: string; description: string; };
        tours: { title: string; description: string; };
        rentals: { title: string; description: string; };
        accommodation: { title: string; description: string; };
    };
    pricing: {
        title: string;
        subtitle: string;
        hcm: string;
        cxr: string;
        sedan: string;
        minivan: string;
        minibus: string;
        note: string;
        ctaButton: string;
    };
    tours: {
        title: string;
        buttonAll: string;
        cardButton: string;
        tourList: Tour[];
        customTourDescription: string[];
        modalTitles: {
            program: string;
            included: string;
            recommendations: string;
            duration: string;
            bookButton: string;
            price: string;
        }
    };
    about: {
        title: string;
        experience: { title: string; description: string; };
        reliability: { title: string; description: string; };
        guides: { title: string; description: string; };
        fleet: { title: string; description: string; };
        support: { title: string; description: string; };
        videoOverlay: {
            line1: string;
            line2: string;
        };
    };
    testimonials: {
        title: string;
        reviews: Review[];
    };
    contact: {
        title: string;
        subtitle: string;
        details: {
            title: string;
            hours: string;
            addressLabel: string;
            addressValue: string;
            phonesLabel: string;
            phoneValues: string[];
            emailLabel: string;
            emailValue: string;
            socialLabel: string;
            socialButtons: {
                whatsapp: string;
                telegram: string;
                facebook: string;
            }
        };
        // FIX: Add form translations
        form: {
            name: string;
            contact: string;
            service: string;
            serviceOptions: {
                transfer: string;
                tour: string;
                other: string;
            };
            request: string;
            button: string;
            orWriteTo: string;
            telegram: string;
        };
    };
    footer: {
        copyright: string;
        creator: string;
        aiCredit: string;
        contactTitle: string;
        address: string;
        phone: string;
    };
    // FIX: Add modal translations
    aboutModal: {
        title: string;
        subtitle: string;
        intro: string;
        guaranteesTitle: string;
        guarantees: {
            meet: string;
            experience: string;
            support: string;
            price: string;
        };
        extraServicesTitle: string;
        extraServices: {
            tours: string;
            visa: string;
            exchange: string;
            rentals: string;
        };
        ctaTitle: string;
        ctaDescription: string;
        ctaButton1: string;
        ctaButton2: string;
        contactsTitle: string;
    };
    contactModal: {
        title: string;
        sendingMessage: string;
        successMessage: string;
        errorMessage: string;
    };
  }
};

const toursRU: Tour[] = [
    {
      id: "taku-mountain",
      title: "Гора Таку и маяк Ке Га",
      price: "от $50",
      short_description: "Поездка на священную гору с самой большой статуей лежащего Будды во Вьетнаме и посещение старейшего маяка.",
      image: "https://picsum.photos/seed/taku/800/600",
      video: "https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/Muine_%20KeGa.MP4",
      full_description: "Основа - поездка на гору Таку к статуе Лежащего Будды и посещение старинного маяка Ке Га, построенного французами.",
      program: [
        "Подъем на гору Таку по канатной дороге",
        "Посещение пагоды Линь Шон Чыонг Тхо",
        "Осмотр статуи Лежащего Будды (49 метров)",
        "Поездка к маяку Ке Га"
      ],
      included: ["Трансфер", "Услуги русскоговорящего гида", "Входные билеты", "Билеты на канатную дорогу"],
      recommendations: "Наденьте удобную обувь. Для посещения храма одежда должна закрывать плечи и колени."
    },
    {
      id: "dalat-one-day-80",
      title: "Далат за один день",
      price: "от $45",
      short_description: "Откройте для себя 'город вечной весны' с его французской архитектурой, водопадами и цветочными садами.",
      image: "https://picsum.photos/seed/dalat-lake/800/600",
      video: "https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_Dalat/Datanla%20Waterfall_Dalat.mov",
      full_description: "Экспресс-тур в горный курорт Далат, основанный французами. Вы увидите самые знаковые места этого уникального города, насладитесь прохладным климатом и живописными пейзажами.",
      program: [
        "Посещение водопадов (например, Пренн или Датанла)",
        "Осмотр отеля 'Crazy House'",
        "Посещение цветочных садов Далата",
        "Канатная дорога и буддийский монастырь Чук Лам"
      ],
      included: ["Трансфер", "Услуги русскоговорящего гида", "Входные билеты", "Обед"],
      recommendations: "Возьмите с собой легкую куртку или кофту, в Далате прохладнее, чем на побережье."
    },
    {
      id: "saigon",
      title: "Сайгон",
      price: "$60",
      short_description: "Погрузитесь в историю и динамику 'Жемчужины Дальнего Востока', самого крупного мегаполиса Вьетнама.",
      image: "https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/Saigon.jpeg",
      full_description: "Хошимин, Сайгон, «Жемчужина Дальнего Востока», «Париж Востока» — все эти названия относятся к этому городу. Он является историческим, политическим, индустриальным и туристическим центром Вьетнама, его сердцем и душой.",
      program: [
        "Кафедральный собор Notre Dame de Saigon",
        "Буддистская пагода Винь Нгьем (Vinh Nghiem)",
        "Музей Военной Истории",
        "Рынок Ben Thanh Market для шоппинга",
        "Посещение выставки лаковых изделий"
      ],
      included: ["Трансфер", "Услуги русскоговорящего гида", "Входные билеты"],
      recommendations: "Рекомендуется удобная обувь для пеших прогулок по центру города."
    },
    {
      id: "dalat-extended",
      title: "Далат (расширенный тур)",
      price: "$55",
      duration: "12-14 часов (с 5 утра до 18 вечера)",
      short_description: "Полный день в горном курорте с посещением водопадов, пагод, кофейных плантаций и знаменитого 'Сумасшедшего Дома'.",
      video: "https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_Dalat/Lam%20Vien%20Square_Dalat.mov",
      image: "https://picsum.photos/seed/dalat-crazy-house/800/600",
      full_description: "Далат – единственное во Вьетнаме место, где производят вино. Французы основали этот горный курорт на высоте 1500 метров над уровнем моря. Мы посетим самые интересные места, включая уникальную гостиницу Ханг Нга, известную как 'Сумасшедший дом', и фабрику шелковых мастеров.",
      program: [
        "Два водопада: Понгур и Датанла",
        "Монастырь ЧукЛам",
        "Гостиница 'Сумасшедший Дом' (Ханг Нга)",
        "Завод-магазин чая и кофе",
        "Храм Сидящего Будды",
        "Фабрика-выставка шелковых мастеров",
        "Остановка на кофейной плантации",
        "Смотровая площадка на горном серпантине",
        "Катание на американских горках, страусах или слонах (по желанию)"
      ],
      included: ["Трансфер", "Услуги русскоговорящего гида", "Входные билеты", "Обед с далатским вином"],
      recommendations: "Не забудьте фотоаппарат и теплую кофту."
    },
    {
      id: "mekong-delta",
      title: "Дельта Меконга",
      price: "$60",
      short_description: "Путешествие в 'рисовую корзину' Вьетнама. Прогулки на лодках, экзотические фрукты и знакомство с бытом местных жителей.",
      image: "https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/Mekong_delta.jpeg",
      full_description: "Кто побывал в дельте Меконга, может смело сказать, что видел Азию. Здесь сконцентрировано все: рисовые поля, соломенные лачуги, прекрасные фруктовые сады, старинные храмы и плавучие дома со своей уникальной культурой.",
      program: [
        "Переезд в город Митхо",
        "Прогулка на катере по реке Меконг",
        "Посещение фруктового сада и пасеки, дегустация меда",
        "Выступление национальных музыкантов",
        "Прогулка на телеге, запряженной лошадью",
        "Поездка на деревянной лодке по узким каналам",
        "Знакомство с местным производством: кокосовые конфеты, изделия из кожи",
        "Обед в ресторане Diem Phuong",
        "Посещение змеиного питомника Донг Там"
      ],
      included: ["Трансфер", "Услуги русскоговорящего гида", "Входные билеты", "Обед", "Все прогулки на лодках"],
      recommendations: "Возьмите головной убор для защиты от солнца и репеллент."
    },
    {
      id: "cuchi-tunnels",
      title: "Туннели Кучи",
      price: "$60",
      short_description: "Посетите легендарную подземную базу вьетнамских партизан времен войны во Вьетнаме.",
      image: "https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/Mekong.jpeg",
      full_description: "Партизанские туннели Кучи — это огромная система катакомб, где во время войны располагались операционные, кухни, склады и жилые помещения. Посещение туннелей дает возможность понять природу духа и упорство вьетнамаского народа.",
      program: [
        "Осмотр документального фильма",
        "Посещение выставки партизанских ловушек",
        "Прогулка по джунглям, осмотр тайных входов, воронок от бомб и подбитых танков",
        "Демонстрация полевой кухни «Хоанг Кам»",
        "Возможность спуститься в туннели",
        "Посещение полигона со стрельбой по мишеням (оплачивается отдельно)",
        "Дегустация партизанской еды (чай и маниока)"
      ],
      included: ["Трансфер", "Услуги русскоговорящего гида", "Входные билеты"],
      recommendations: "Рекомендуется для интересующихся военной историей. Не подходит людям с клаустрофобией."
    },
    {
      id: "nhatrang-vinpearl",
      title: "Нячанг: Жемчужный остров",
      price: "$60",
      duration: "с 4 утра до 8 вечера",
      short_description: "День развлечений в пятизвездочном комплексе Vinpearl Land с аквапарком, аттракционами и океанариумом.",
      image: "https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/nachang(inetphoto)01.jpeg",
      full_description: "Vinpearl Land – это пятизвездочный туристический комплекс международной категории на живописном острове. Здесь есть океанариум, большое количество магазинов, разнообразные аттракционы, аквапарк и прекрасный пляж.",
      program: [
        "Переезд в Нячанг",
        "Переправа на остров по канатной дороге над морем",
        "Свободное время на острове (4-5 часов) для посещения аквапарка, аттракционов, океанариума и пляжа"
      ],
      included: ["Трансфер", "Входные билеты на остров и все развлечения"],
      recommendations: "Не забудьте купальник, полотенце и солнцезащитный крем."
    },
    {
      id: "nhaphu-bay",
      title: "Бухта Ньяфу",
      price: "$55",
      duration: "с 4 утра до 8 вечера",
      short_description: "Морская прогулка по трем островам: остров Оленей, остров Орхидей и знаменитый остров Обезьян.",
      image: "https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/palm_Muine.jpeg",
      full_description: "Увлекательная морская прогулка по живописной бухте Ньяфу с посещением трех уникальных островов. Вы сможете покормить ручных оленей и страусов, увидеть шоу животных и, конечно, пообщаться с многочисленными обезьянами.",
      program: [
        "Посещение острова Хон Тхи (олени и страусы)",
        "Посещение Острова Орхидей (хон Лан) с коллекцией орхидей и пляжным отдыхом",
        "Просмотр шоу медведей и слонов",
        "Обед на острове",
        "Посещение Острова Обезьян, кормление обезьян, цирковое представление"
      ],
      included: ["Трансфер", "Морская прогулка на корабле", "Входные билеты на все острова", "Обед"],
      recommendations: "Будьте осторожны с личными вещами на Острове Обезьян."
    },
    {
      id: "tour-2-days-nhatrang-dalat",
      title: "Нячанг + Далат (2 дня)",
      price: "от $110",
      short_description: "Насыщенный двухдневный тур, объединяющий пляжный отдых и развлечения Нячанга с горной прохладой Далата.",
      image: "https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_Dalat/dalat_012.jpg",
      full_description: "Насыщенный двухдневный тур, объединяющий пляжный отдых и развлечения Нячанга с горной прохладой Далата.",
      program: [
        "День 1: Посещение Чамских башен в Нячанге, переезд на остров Vinpearl, свободное время.",
        "День 2: Экскурсия по Далату (водопады Пренн и Датанла, монастырь Чук Лам, 'Crazy House', храм Сидящего Будды, шелковая фабрика)."
      ],
      included: ["Трансфер", "Русскоговорящий гид", "Входные билеты", "Обед с далатским вином", "Ночевка в гостинице"]
    },
    {
      id: "tour-2-days-dalat",
      title: "Далат (2 дня)",
      price: "от $110",
      short_description: "Полное погружение в атмосферу Далата. Один день по стандартной программе и второй день на ваш выбор.",
      image: "https://picsum.photos/seed/2day2/800/600",
      video: "https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_Dalat/Lavender_Dalat.MOV",
      full_description: "Полное погружение в атмосферу Далата. Один день по стандартной программе и второй день на ваш выбор.",
      program: [
        "День 1: Стандартная программа (водопады, монастырь, 'Crazy House' и т.д.).",
        "День 2 (на выбор): 1) Канатная дорога, парк цветов, царский дворец; 2) Золотая долина, деревня, вершина Ланг Бианг; 3) Монастырь, золотая долина, шелковая деревня."
      ],
      included: ["Трансфер", "Русскоговорящий гид", "Входные билеты", "Два обеда с далатским вином", "Ночевка в гостинице"]
    },
    {
      id: "tour-2-days-nhatrang",
      title: "Нячанг (2 дня)",
      price: "от $110",
      short_description: "Два дня в Нячанге: день в парке развлечений Vinpearl и день морской прогулки по островам бухты Ньяфу.",
      image: "https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/nachang(inetphoto)02.jpg",
      full_description: "Два дня в Нячанге: день в парке развлечений Vinpearl и день морской прогулки по островам бухты Ньяфу.",
      program: [
        "День 1: Посещение Чамских башен и полный день на Жемчужном острове Vinpearl.",
        "День 2: Экскурсия по бухте Ньяфу (3 острова)."
      ],
      included: ["Трансфер", "Русскоговорящий гид", "Входные билеты", "Два обеда", "Ночевка в гостинице"]
    }
];

const tourDetailsEN: Omit<Tour, 'id' | 'price' | 'image' | 'video' | 'duration'>[] = [
    {
        title: "Taku Mountain and Ke Ga Lighthouse",
        short_description: "A trip to a sacred mountain with the largest reclining Buddha statue in Vietnam and a visit to the oldest lighthouse.",
        full_description: "The core of this trip is a visit to Taku Mountain to see the Reclining Buddha statue and the historic Ke Ga Lighthouse, built by the French.",
        program: [
            "Ascend Taku Mountain by cable car",
            "Visit Linh Son Truong Tho Pagoda",
            "View the Reclining Buddha statue (49 meters)",
            "Trip to Ke Ga Lighthouse"
        ],
        included: ["Transfer", "English-speaking guide", "Entrance tickets", "Cable car tickets"],
        recommendations: "Wear comfortable shoes. For temple visits, clothing should cover shoulders and knees."
    },
    {
        title: "Dalat in One Day",
        short_description: "Discover the 'city of eternal spring' with its French architecture, waterfalls, and flower gardens.",
        full_description: "An express tour to the mountain resort of Dalat, founded by the French. You will see the most iconic places of this unique city, enjoy the cool climate and picturesque landscapes.",
        program: [
            "Visit waterfalls (e.g., Prenn or Datanla)",
            "View the 'Crazy House' hotel",
            "Visit Dalat's flower gardens",
            "Cable car and Truc Lam Buddhist Monastery"
        ],
        included: ["Transfer", "English-speaking guide", "Entrance tickets", "Lunch"],
        recommendations: "Bring a light jacket or sweater; it's cooler in Dalat than on the coast."
    },
    {
        title: "Saigon",
        short_description: "Immerse yourself in the history and dynamics of the 'Pearl of the Far East', Vietnam's largest metropolis.",
        full_description: "Ho Chi Minh City, Saigon, 'Pearl of the Far East', 'Paris of the East'—all these names refer to this city. It is the historical, political, industrial, and tourist center of Vietnam, its heart and soul.",
        program: [
            "Notre Dame Cathedral of Saigon",
            "Vinh Nghiem Buddhist Pagoda",
            "War Remnants Museum",
            "Ben Thanh Market for shopping",
            "Visit a lacquerware exhibition"
        ],
        included: ["Transfer", "English-speaking guide", "Entrance tickets"],
        recommendations: "Comfortable shoes are recommended for walking around the city center."
    },
    {
        title: "Dalat (Extended Tour)",
        short_description: "A full day in a mountain resort visiting waterfalls, pagodas, coffee plantations, and the famous 'Crazy House'.",
        full_description: "Dalat is the only place in Vietnam that produces wine. The French founded this mountain resort at an altitude of 1500 meters above sea level. We will visit the most interesting places, including the unique Hang Nga Guesthouse, known as the 'Crazy House', and a silk masters' factory.",
        program: [
            "Two waterfalls: Pongour and Datanla",
            "Truc Lam Monastery",
            "'Crazy House' Hotel (Hang Nga)",
            "Tea and coffee factory store",
            "Sitting Buddha Temple",
            "Silk masters' factory and exhibition",
            "Stop at a coffee plantation",
            "Viewing point on the mountain pass",
            "Roller coaster rides, ostrich or elephant riding (optional)"
        ],
        included: ["Transfer", "English-speaking guide", "Entrance tickets", "Lunch with Dalat wine"],
        recommendations: "Don't forget your camera and a warm sweater."
    },
    {
        title: "Mekong Delta",
        short_description: "A journey into the 'rice basket' of Vietnam. Boat trips, exotic fruits, and an introduction to the local way of life.",
        full_description: "Anyone who has been to the Mekong Delta can confidently say they have seen Asia. Everything is concentrated here: rice fields, thatched huts, beautiful fruit orchards, ancient temples, and floating houses with their unique culture.",
        program: [
            "Travel to My Tho city",
            "Boat trip on the Mekong River",
            "Visit a fruit orchard and a bee farm, with honey tasting",
            "Performance by national musicians",
            "Ride in a horse-drawn cart",
            "Trip on a wooden boat through narrow canals",
            "Introduction to local production: coconut candies, leather goods",
            "Lunch at Diem Phuong restaurant",
            "Visit Dong Tam snake farm"
        ],
        included: ["Transfer", "English-speaking guide", "Entrance tickets", "Lunch", "All boat trips"],
        recommendations: "Bring a hat for sun protection and insect repellent."
    },
    {
        title: "Cu Chi Tunnels",
        short_description: "Visit the legendary underground base of the Vietnamese partisans from the Vietnam War.",
        full_description: "The Cu Chi Tunnels are a vast system of catacombs that housed operating rooms, kitchens, warehouses, and living quarters during the war. A visit to the tunnels offers an insight into the spirit and perseverance of the Vietnamese people.",
        program: [
            "Watch a documentary film",
            "Visit an exhibition of partisan traps",
            "Walk through the jungle, see secret entrances, bomb craters, and destroyed tanks",
            "Demonstration of the 'Hoang Cam' field kitchen",
            "Opportunity to go down into the tunnels",
            "Visit a shooting range (paid separately)",
            "Tasting of partisan food (tea and cassava)"
        ],
        included: ["Transfer", "English-speaking guide", "Entrance tickets"],
        recommendations: "Recommended for those interested in military history. Not suitable for people with claustrophobia."
    },
    {
        title: "Nha Trang: Vinpearl Land",
        short_description: "A day of entertainment at the five-star Vinpearl Land complex with a water park, amusement rides, and an aquarium.",
        full_description: "Vinpearl Land is a five-star international tourist complex on a picturesque island. It features an aquarium, numerous shops, various amusement rides, a water park, and a beautiful beach.",
        program: [
            "Travel to Nha Trang",
            "Cross to the island by the sea-crossing cable car",
            "Free time on the island (4-5 hours) to visit the water park, amusement rides, aquarium, and beach"
        ],
        included: ["Transfer", "Entrance tickets to the island and all attractions"],
        recommendations: "Don't forget your swimsuit, towel, and sunscreen."
    },
    {
        title: "Nha Phu Bay (3 Islands)",
        short_description: "A sea excursion to three islands: Deer Island, Orchid Island, and the famous Monkey Island.",
        full_description: "An exciting sea trip through the picturesque Nha Phu Bay, visiting three unique islands. You can feed tame deer and ostriches, watch animal shows, and, of course, interact with the numerous monkeys.",
        program: [
            "Visit Hon Thi Island (deer and ostriches)",
            "Visit Orchid Island (Hon Lan) with an orchid collection and beach relaxation",
            "Watch a bear and elephant show",
            "Lunch on the island",
            "Visit Monkey Island, feed the monkeys, watch a circus performance"
        ],
        included: ["Transfer", "Boat trip", "Entrance tickets to all islands", "Lunch"],
        recommendations: "Be careful with your personal belongings on Monkey Island."
    },
    {
        title: "Nha Trang + Dalat (2 Days)",
        short_description: "An action-packed two-day tour combining the beach fun of Nha Trang with the cool mountain air of Dalat.",
        full_description: "This intensive two-day tour combines the beach relaxation and entertainment of Nha Trang with the cool mountain climate of Dalat.",
        program: [
            "Day 1: Visit the Po Nagar Cham Towers in Nha Trang, transfer to Vinpearl island, free time.",
            "Day 2: Tour of Dalat (Prenn and Datanla waterfalls, Truc Lam Monastery, 'Crazy House', Sitting Buddha Temple, silk factory)."
        ],
        included: ["Transfer", "English-speaking guide", "Entrance tickets", "Lunch with Dalat wine", "Overnight hotel stay"]
    },
    {
        title: "Dalat (2 Days)",
        short_description: "A full immersion into the atmosphere of Dalat. One day on a standard program and a second day of your choice.",
        full_description: "Fully immerse yourself in the atmosphere of Dalat. The first day follows the standard program, and the second day is tailored to your choice.",
        program: [
            "Day 1: Standard program (waterfalls, monastery, 'Crazy House', etc.).",
            "Day 2 (choose one): 1) Cable car, flower park, royal palace; 2) Golden Valley, village, Lang Biang peak; 3) Monastery, Golden Valley, silk village."
        ],
        included: ["Transfer", "English-speaking guide", "Entrance tickets", "Two lunches with Dalat wine", "Overnight hotel stay"]
    },
    {
        title: "Nha Trang (2 Days)",
        short_description: "Two days in Nha Trang: a day at Vinpearl amusement park and a day of sea excursion around the islands of Nha Phu Bay.",
        full_description: "Two days in Nha Trang: one day at Vinpearl amusement park and one day on a sea excursion to the islands of Nha Phu Bay.",
        program: [
            "Day 1: Visit the Po Nagar Cham Towers and spend a full day on Vinpearl Island.",
            "Day 2: Excursion around Nha Phu Bay (3 islands)."
        ],
        included: ["Transfer", "English-speaking guide", "Entrance tickets", "Two lunches", "Overnight hotel stay"]
    }
];

const tourDetailsVN: Omit<Tour, 'id' | 'price' | 'image' | 'video' | 'duration'>[] = [
    {
        title: "Núi Tà Cú và Hải đăng Kê Gà",
        short_description: "Chuyến đi đến núi thiêng với tượng Phật nằm lớn nhất Việt Nam và thăm hải đăng cổ nhất.",
        full_description: "Trọng tâm của chuyến đi là tham quan núi Tà Cú để chiêm ngưỡng tượng Phật Nằm và hải đăng Kê Gà lịch sử do người Pháp xây dựng.",
        program: [
            "Lên núi Tà Cú bằng cáp treo",
            "Viếng chùa Linh Sơn Trường Thọ",
            "Chiêm ngưỡng tượng Phật Nằm (dài 49 mét)",
            "Chuyến đi đến Hải đăng Kê Gà"
        ],
        included: ["Xe đưa đón", "Hướng dẫn viên nói tiếng Việt", "Vé vào cổng", "Vé cáp treo"],
        recommendations: "Mang giày dép thoải mái. Khi viếng chùa, trang phục cần che vai và đầu gối."
    },
    {
        title: "Đà Lạt trong một ngày",
        short_description: "Khám phá 'thành phố ngàn hoa' với kiến trúc Pháp, thác nước và vườn hoa.",
        full_description: "Tour du lịch nhanh đến khu nghỉ dưỡng trên núi Đà Lạt do người Pháp thành lập. Bạn sẽ được tham quan những địa điểm mang tính biểu tượng nhất của thành phố độc đáo này, tận hưởng khí hậu mát mẻ và phong cảnh hữu tình.",
        program: [
            "Tham quan các thác nước (ví dụ: Prenn hoặc Datanla)",
            "Tham quan khách sạn 'Crazy House'",
            "Tham quan các vườn hoa Đà Lạt",
            "Cáp treo và Thiền viện Trúc Lâm"
        ],
        included: ["Xe đưa đón", "Hướng dẫn viên nói tiếng Việt", "Vé vào cổng", "Ăn trưa"],
        recommendations: "Mang theo áo khoác nhẹ hoặc áo len, thời tiết ở Đà Lạt mát hơn so với ven biển."
    },
    {
        title: "Sài Gòn",
        short_description: "Đắm mình trong lịch sử và sự năng động của 'Hòn ngọc Viễn Đông', đô thị lớn nhất Việt Nam.",
        full_description: "Thành phố Hồ Chí Minh, Sài Gòn, 'Hòn ngọc Viễn Đông', 'Paris của phương Đông' - tất cả những tên gọi này đều chỉ thành phố này. Đây là trung tâm lịch sử, chính trị, công nghiệp và du lịch của Việt Nam, là trái tim và tâm hồn của đất nước.",
        program: [
            "Nhà thờ Đức Bà Sài Gòn",
            "Chùa Vĩnh Nghiêm",
            "Bảo tàng Chứng tích Chiến tranh",
            "Chợ Bến Thành để mua sắm",
            "Tham quan triển lãm đồ sơn mài"
        ],
        included: ["Xe đưa đón", "Hướng dẫn viên nói tiếng Việt", "Vé vào cổng"],
        recommendations: "Nên mang giày dép thoải mái để đi bộ tham quan trung tâm thành phố."
    },
    {
        title: "Đà Lạt (Tour mở rộng)",
        short_description: "Một ngày trọn vẹn tại khu nghỉ dưỡng trên núi, thăm thác nước, chùa chiền, đồn điền cà phê và 'Ngôi nhà điên' nổi tiếng.",
        full_description: "Đà Lạt là nơi duy nhất ở Việt Nam sản xuất rượu vang. Người Pháp đã thành lập khu nghỉ dưỡng trên núi này ở độ cao 1500 mét so với mực nước biển. Chúng ta sẽ tham quan những nơi thú vị nhất, bao gồm Biệt thự Hằng Nga độc đáo, được biết đến với tên gọi 'Ngôi nhà điên', và nhà máy của các nghệ nhân lụa.",
        program: [
            "Hai thác nước: Pongour và Datanla",
            "Thiền viện Trúc Lâm",
            "Khách sạn 'Ngôi nhà điên' (Biệt thự Hằng Nga)",
            "Cửa hàng nhà máy chè và cà phê",
            "Chùa Phật Ngồi",
            "Nhà máy và triển lãm của các nghệ nhân lụa",
            "Dừng chân tại đồn điền cà phê",
            "Điểm ngắm cảnh trên đèo núi",
            "Đi tàu lượn, cưỡi đà điểu hoặc voi (tùy chọn)"
        ],
        included: ["Xe đưa đón", "Hướng dẫn viên nói tiếng Việt", "Vé vào cổng", "Ăn trưa với rượu vang Đà Lạt"],
        recommendations: "Đừng quên máy ảnh và một chiếc áo len ấm."
    },
    {
        title: "Đồng bằng sông Cửu Long",
        short_description: "Hành trình đến 'vựa lúa' của Việt Nam. Đi thuyền, thưởng thức trái cây lạ và tìm hiểu cuộc sống người dân địa phương.",
        full_description: "Ai đã đến Đồng bằng sông Cửu Long có thể tự tin nói rằng họ đã thấy châu Á. Mọi thứ đều tập trung ở đây: những cánh đồng lúa, những túp lều tranh, những vườn cây ăn trái tuyệt đẹp, những ngôi chùa cổ và những ngôi nhà nổi với nền văn hóa độc đáo của riêng mình.",
        program: [
            "Di chuyển đến thành phố Mỹ Tho",
            "Đi thuyền trên sông Mekong",
            "Thăm vườn cây ăn trái và trại ong, nếm mật ong",
            "Buổi biểu diễn của các nhạc sĩ dân tộc",
            "Đi xe ngựa kéo",
            "Đi thuyền gỗ qua các con kênh hẹp",
            "Tìm hiểu về sản xuất địa phương: kẹo dừa, đồ da",
            "Ăn trưa tại nhà hàng Diễm Phương",
            "Thăm trại rắn Đồng Tâm"
        ],
        included: ["Xe đưa đón", "Hướng dẫn viên nói tiếng Việt", "Vé vào cổng", "Ăn trưa", "Tất cả các chuyến đi thuyền"],
        recommendations: "Mang theo mũ để chống nắng và thuốc chống côn trùng."
    },
    {
        title: "Địa đạo Củ Chi",
        short_description: "Tham quan căn cứ địa ngầm huyền thoại của du kích Việt Nam thời chiến tranh.",
        full_description: "Địa đạo Củ Chi là một hệ thống hầm ngầm rộng lớn, nơi đặt các phòng mổ, nhà bếp, kho và khu sinh hoạt trong chiến tranh. Chuyến thăm địa đạo mang lại cái nhìn sâu sắc về tinh thần và sự kiên trì của người dân Việt Nam.",
        program: [
            "Xem phim tài liệu",
            "Tham quan triển lãm các loại bẫy của du kích",
            "Đi bộ qua rừng, xem các lối vào bí mật, hố bom và xe tăng bị phá hủy",
            "Trình diễn bếp Hoàng Cầm",
            "Cơ hội xuống địa đạo",
            "Thăm trường bắn (trả phí riêng)",
            "Thưởng thức món ăn của du kích (trà và sắn)"
        ],
        included: ["Xe đưa đón", "Hướng dẫn viên nói tiếng Việt", "Vé vào cổng"],
        recommendations: "Đề xuất cho những ai quan tâm đến lịch sử quân sự. Không phù hợp với người mắc chứng sợ không gian hẹp."
    },
    {
        title: "Nha Trang: Vinpearl Land",
        short_description: "Một ngày giải trí tại khu phức hợp năm sao Vinpearl Land với công viên nước, trò chơi và thủy cung.",
        full_description: "Vinpearl Land là một khu du lịch phức hợp năm sao tiêu chuẩn quốc tế trên một hòn đảo đẹp như tranh vẽ. Nơi đây có thủy cung, nhiều cửa hàng, các trò chơi giải trí đa dạng, công viên nước và một bãi biển tuyệt đẹp.",
        program: [
            "Di chuyển đến Nha Trang",
            "Qua đảo bằng cáp treo vượt biển",
            "Thời gian tự do trên đảo (4-5 giờ) để tham quan công viên nước, các trò chơi giải trí, thủy cung và bãi biển"
        ],
        included: ["Xe đưa đón", "Vé vào cổng đảo và tất cả các điểm tham quan"],
        recommendations: "Đừng quên mang theo đồ bơi, khăn tắm và kem chống nắng."
    },
    {
        title: "Vịnh Nha Phu (3 đảo)",
        short_description: "Chuyến đi biển qua ba hòn đảo: Đảo Hươu, Đảo Hoa Lan và Đảo Khỉ nổi tiếng.",
        full_description: "Một chuyến đi biển thú vị qua vịnh Nha Phu đẹp như tranh vẽ, tham quan ba hòn đảo độc đáo. Bạn có thể cho hươu và đà điểu thuần hóa ăn, xem các chương trình biểu diễn của động vật, và tất nhiên, tương tác với vô số chú khỉ.",
        program: [
            "Tham quan Đảo Hòn Thị (hươu và đà điểu)",
            "Tham quan Đảo Hoa Lan (Hòn Lèo) với bộ sưu tập hoa lan và nghỉ ngơi trên bãi biển",
            "Xem chương trình biểu diễn của gấu và voi",
            "Ăn trưa trên đảo",
            "Tham quan Đảo Khỉ, cho khỉ ăn, xem xiếc"
        ],
        included: ["Xe đưa đón", "Đi thuyền", "Vé vào cổng tất cả các đảo", "Ăn trưa"],
        recommendations: "Hãy cẩn thận với đồ đạc cá nhân của bạn trên Đảo Khỉ."
    },
    {
        title: "Nha Trang + Đà Lạt (2 ngày)",
        short_description: "Tour hai ngày đầy hấp dẫn kết hợp niềm vui bãi biển Nha Trang với không khí mát mẻ của núi Đà Lạt.",
        full_description: "Chuyến tham quan hai ngày yoğun này kết hợp giữa thư giãn trên bãi biển và giải trí của Nha Trang với khí hậu mát mẻ của núi Đà Lạt.",
        program: [
            "Ngày 1: Tham quan Tháp Chàm Po Nagar ở Nha Trang, di chuyển đến đảo Vinpearl, thời gian tự do.",
            "Ngày 2: Tham quan Đà Lạt (thác Prenn và Datanla, Thiền viện Trúc Lâm, 'Ngôi nhà điên', Chùa Phật Ngồi, nhà máy lụa)."
        ],
        included: ["Xe đưa đón", "Hướng dẫn viên nói tiếng Việt", "Vé vào cổng", "Ăn trưa với rượu vang Đà Lạt", "Nghỉ đêm tại khách sạn"]
    },
    {
        title: "Đà Lạt (2 ngày)",
        short_description: "Trải nghiệm trọn vẹn không khí Đà Lạt. Một ngày theo chương trình chuẩn và một ngày tùy chọn.",
        full_description: "Đắm mình hoàn toàn trong không khí của Đà Lạt. Ngày đầu tiên theo chương trình tiêu chuẩn, và ngày thứ hai được thiết kế theo sự lựa chọn của bạn.",
        program: [
            "Ngày 1: Chương trình tiêu chuẩn (thác nước, thiền viện, 'Ngôi nhà điên', v.v.).",
            "Ngày 2 (chọn một): 1) Cáp treo, vườn hoa, cung điện hoàng gia; 2) Thung lũng Vàng, làng, đỉnh Lang Biang; 3) Thiền viện, Thung lũng Vàng, làng lụa."
        ],
        included: ["Xe đưa đón", "Hướng dẫn viên nói tiếng Việt", "Vé vào cổng", "Hai bữa trưa với rượu vang Đà Lạt", "Nghỉ đêm tại khách sạn"]
    },
    {
        title: "Nha Trang (2 ngày)",
        short_description: "Hai ngày tại Nha Trang: một ngày tại công viên giải trí Vinpearl và một ngày đi biển quanh các đảo của vịnh Nha Phu.",
        full_description: "Hai ngày ở Nha Trang: một ngày tại công viên giải trí Vinpearl và một ngày trên chuyến du ngoạn biển đến các đảo của Vịnh Nha Phu.",
        program: [
            "Ngày 1: Tham quan Tháp Chàm Po Nagar và dành cả ngày trên Đảo Vinpearl.",
            "Ngày 2: Du ngoạn quanh Vịnh Nha Phu (3 đảo)."
        ],
        included: ["Xe đưa đón", "Hướng dẫn viên nói tiếng Việt", "Vé vào cổng", "Hai bữa trưa", "Nghỉ đêm tại khách sạn"]
    }
];

const toursEN: Tour[] = toursRU.map((tour, index) => ({
    ...tour,
    ...tourDetailsEN[index]
}));

const toursVN: Tour[] = toursRU.map((tour, index) => ({
    ...tour,
    ...tourDetailsVN[index]
}));


const reviewsRU: Review[] = [
  { text: 'Отличный сервис! Трансфер из Хошимина прошел быстро и комфортно. Водитель очень вежливый. Рекомендую!', author: 'Александр Иванов', source: 'TripAdvisor' },
  { text: 'Брали экскурсию в Далат - это было восхитительно! Очень интересная программа и замечательный гид. Спасибо за впечатления!', author: 'Елена Петрова', source: 'Google Maps' },
  { text: 'Ездили в Нячанг на 2 дня, все было отлично организовано. Отель хороший, гид Виктор - молодец, все интересно рассказывал. Vinpearl - это просто сказка!', author: 'Мария и Алексей', source: 'ВКонтакте' },
  { text: 'Поездка в Дельту Меконга была невероятной! Увидели настоящую жизнь Вьетнама, плавали на лодках по каналам. Организация на высшем уровне. Большое спасибо Виктору!', author: 'Дмитрий Смирнов', source: 'Facebook' }
];

const reviewsEN: Review[] = [
  { text: 'Excellent service! The transfer from Ho Chi Minh City was fast and comfortable. The driver was very polite. I highly recommend!', author: 'John Smith', source: 'TripAdvisor' },
  { text: 'We took a tour to Dalat - it was amazing! A very interesting program and a wonderful guide. Thank you for the great experience!', author: 'Emily Johnson', source: 'Google Maps' },
  { text: 'We went to Nha Trang for 2 days, everything was perfectly organized. The hotel was good, guide Victor is great, told everything in an interesting way. Vinpearl is just a fairy tale!', author: 'Maria & Alexey', source: 'VKontakte' },
  { text: 'The trip to the Mekong Delta was incredible! We saw the real life of Vietnam, sailed on boats through the canals. The organization was top-notch. Many thanks to Victor!', author: 'David Williams', source: 'Facebook' }
];

const reviewsVN: Review[] = [
  { text: 'Dịch vụ xuất sắc! Chuyến đi từ Thành phố Hồ Chí Minh rất nhanh chóng và thoải mái. Tài xế rất lịch sự. Rất khuyến khích!', author: 'Nguyễn Văn An', source: 'TripAdvisor' },
  { text: 'Chúng tôi đã tham gia tour đi Đà Lạt - thật tuyệt vời! Chương trình rất thú vị và hướng dẫn viên tuyệt vời. Cảm ơn vì trải nghiệm tuyệt vời!', author: 'Trần Thị Bích', source: 'Google Maps' },
  { text: 'Chúng tôi đã đi Nha Trang 2 ngày, mọi thứ được tổ chức rất tốt. Khách sạn tốt, hướng dẫn viên Victor rất tuyệt, kể chuyện rất thú vị. Vinpearl thật sự là một câu chuyện cổ tích!', author: 'Lê Thị Hoa & Phạm Văn Hùng', source: 'VKontakte' },
  { text: 'Chuyến đi Đồng bằng sông Cửu Long thật không thể tin được! Chúng tôi đã thấy cuộc sống thực của Việt Nam, đi thuyền qua các con kênh. Tổ chức rất chuyên nghiệp. Cảm ơn Victor rất nhiều!', author: 'Hoàng Minh Tuấn', source: 'Facebook' }
];


export const translations: Translations = {
  [Language.EN]: {
    header: {
      name: 'Victor Tour',
      about: 'About Us',
      transfer: 'Transfers',
      tours: 'Tours',
      contact: 'Contacts',
    },
    hero: {
      title: 'Comfortable Transfers and Exciting Tours in Mui Ne',
      subtitle: 'Your reliable guide to Vietnam',
      description: 'We offer a wide range of services for your perfect vacation: from airport transfers to unique excursions with experienced guides.',
      telegramButton: 'Contact on Telegram',
    },
    introAbout: {
      title: 'About Us',
      imageOverlay: {
        line1: '10 years of caring',
        line2: 'for your comfort in Vietnam'
      },
      textSections: [
        {
          title: "Your Peace of Mind from Minute One",
          content: "Imagine: you've just stepped off the plane after a long flight, with no worries about getting to your hotel. A courteous driver, a comfortable car, and complete peace of mind are already waiting for you."
        },
        {
          title: "More Than Just a Taxi",
          content: "This is precisely why we've been working for over 10 years. 'Victor Tour' is not just a taxi, but your personal care service from the very first minute in Vietnam."
        },
        {
          title: "The Perfect Start and End to Your Trip",
          content: "We specialize in transfers between the main tourist hubs—Ho Chi Minh City, Mui Ne, Nha Trang, Da Lat—and we do everything to ensure your journey begins and ends perfectly."
        }
      ],
      ctaButton: 'Contact on Telegram',
    },
    services: {
        title: 'Our Services',
        transfers: { title: 'Transfers', description: 'Comfortable and safe transfers from airports and cities to Mui Ne in modern cars with air conditioning.' },
        tours: { title: 'Excursions', description: 'Discover the unique beauty of Vietnam with our exciting tours of Mui Ne and its surroundings.' },
        rentals: { title: 'Bike & Car Rentals', description: 'Freedom of movement: a wide selection of bikes and cars for rent for your independent travels.' },
        accommodation: { title: 'Accommodation', description: 'A roof over your head. We will help you rent, book in advance, and find accommodation options to suit your taste.' },
    },
    pricing: {
        title: 'Transfers',
        subtitle: 'We also offer other routes. Please contact us for details.',
        hcm: 'Ho Chi Minh (SGN) ↔ Mui Ne',
        cxr: 'Cam Ranh (CXR) ↔ Mui Ne',
        sedan: 'Sedan (4 seats)',
        minivan: 'Minivan (7 seats)',
        minibus: 'Minibus (16 seats)',
        note: 'The price is for a one-way trip. All fees and tolls are included. Child seats are available upon request.',
        ctaButton: 'Contact on Telegram',
    },
    tours: {
        title: 'Tours',
        tourList: toursEN,
        buttonAll: 'More Tours',
        cardButton: 'Details →',
        customTourDescription: [
            "We've shown you our hits—the very tours our guests adore! But this is far from all that amazing Vietnam has to offer.",
            "Didn't find your dream tour or want to create a unique itinerary just for you? Just write to us! We'll be happy to tell you about all the possibilities and help you plan your perfect adventure.",
            "And remember, we always make sure your trip is perfect. Therefore, the itinerary may sometimes change slightly depending on the operating hours of parks or pagodas, but rest assured—we will always find an equally interesting option for you!",
        ],
        modalTitles: {
            program: 'Program',
            included: 'Included',
            recommendations: 'Recommendations',
            duration: 'Duration',
            bookButton: 'Contact on Telegram',
            price: 'Price',
        }
    },
    about: {
        title: 'Why Choose Us?',
        experience: { title: 'Years of Experience', description: 'We have been working in tourism in Vietnam for over 10 years and know how to make your trip unforgettable.' },
        reliability: { title: 'Reliability and Safety', description: 'Modern, well-maintained vehicles and experienced drivers guarantee your safety and comfort.' },
        guides: { title: 'Professional Guides', description: 'Our English-speaking guides will tell you the most interesting things about the culture and history of Vietnam.' },
        fleet: { title: 'Large Fleet', description: 'A wide range of vehicles, from sedans to minibuses, for any group size.' },
        support: { title: '24/7 Support', description: 'We are always in touch to help you with any questions during your trip.' },
        videoOverlay: {
            line1: 'Thank you all!',
            line2: 'We look forward to seeing you again.'
        },
    },
    testimonials: {
        title: 'What Our Clients Say',
        reviews: reviewsEN,
    },
    contact: {
        title: 'Get in Touch',
        subtitle: 'Have questions or want to book a service? Contact us in any convenient way!',
        details: {
            title: 'Contacts',
            hours: 'Come visit us any day from 9:00 to 23:00',
            addressLabel: 'Address in Mui Ne:',
            addressValue: '44 Nguyen Dinh Chieu, Ham Tien Ward, Phan Thiet City, Binh Thuan 70000, Vietnam',
            phonesLabel: 'Phones:',
            phoneValues: ['+84 888440022', '+7 9092525522'],
            emailLabel: 'Email:',
            emailValue: 'nguyenhop72131@gmail.com',
            socialLabel: 'We are on social media:',
            socialButtons: {
                whatsapp: 'WhatsApp',
                telegram: 'Telegram',
                facebook: 'Facebook',
            }
        },
        form: {
            name: 'Your Name',
            contact: 'Phone / Email / Telegram',
            service: 'Select Service',
            serviceOptions: {
                transfer: 'Transfer',
                tour: 'Tour',
                other: 'Other'
            },
            request: 'Your Request (e.g., date, number of people)',
            button: 'Send Request',
            orWriteTo: 'or write to',
            telegram: 'Telegram'
        }
    },
    footer: {
        copyright: '© 2025 Victor Tour. All rights reserved.',
        creator: 'Site created by Styiler',
        aiCredit: 'with help from AiSudio.',
        contactTitle: 'Contacts',
        address: '44 Nguyen Dinh Chieu, Mui Ne',
        phone: '+84 888440022',
    },
    aboutModal: {
        title: 'About Us',
        subtitle: 'Your reliable guide for transfers and tours in Vietnam!',
        intro: 'We specialize in comfortable and safe transfers from airports and cities to Mui Ne. Our goal is to make your journey start and end perfectly.',
        guaranteesTitle: 'Our Guarantees',
        guarantees: {
            meet: 'We will meet you at the airport arrivals area with a sign.',
            experience: 'Over 10 years of experience in tourism in Vietnam.',
            support: '24/7 support. We are always in touch to help you.',
            price: 'Fixed price. All fees and tolls are included.'
        },
        extraServicesTitle: 'Additional Services',
        extraServices: {
            tours: 'Unique excursions with experienced guides.',
            visa: 'Assistance with visa matters.',
            exchange: 'Favorable currency exchange.',
            rentals: 'Bike and car rentals for your freedom of movement.'
        },
        ctaTitle: 'Ready to book a transfer or ask a question?',
        ctaDescription: 'Fill out the form below or contact us on WhatsApp. We will respond promptly!',
        ctaButton1: 'View Prices',
        ctaButton2: 'Contact on WhatsApp',
        contactsTitle: 'Our Contacts'
    },
    contactModal: {
        title: 'Contact Form',
        sendingMessage: 'Sending...',
        successMessage: 'Thank you for your request! We will contact you shortly.',
        errorMessage: 'An error occurred. Please try again or contact us directly.'
    }
  },
  [Language.RU]: {
    header: {
      name: 'Виктор Тур',
      about: 'О нас',
      transfer: 'Трансфер',
      tours: 'Туры',
      contact: 'Контакты',
    },
    hero: {
      title: 'Комфортные Трансферы и Увлекательные Туры в Муйне',
      subtitle: 'Ваш надежный проводник по Вьетнаму',
      description: 'Мы предлагаем широкий спектр услуг для вашего идеального отдыха: от трансферов из аэропорта до уникальных экскурсий с опытных гидами.',
      telegramButton: 'Написать в Telegram',
    },
    introAbout: {
        title: 'О нас',
        imageOverlay: {
            line1: '10 лет заботы',
            line2: 'о вашем комфорте во Вьетнаме'
        },
        textSections: [
          {
            title: "Ваше спокойствие с первой минуты",
            content: "Представьте: вы только что сошли с самолета после долгого перелета, и у вас нет никаких забот о том, как добраться до отеля. Вас уже ждет вежливый водитель, комфортный автомобиль и полное спокойствие."
          },
          {
            title: "Больше, чем просто такси",
            content: "Именно для этого мы работаем уже более 10 лет. «Виктор Тур» — это не просто такси, а ваша личная служба заботы с первой минуты во Вьетнаме."
          },
          {
            title: "Идеальное начало и конец путешествия",
            content: "Мы специализируемся на трансферах между главными туристическими центрами — Хошимином, Муйне, Нячангом, Далатом — и делаем все, чтобы ваше путешествие начиналось и заканчивалось идеально."
          }
        ],
        ctaButton: 'Написать в Telegram',
    },
    services: {
        title: 'Наши Услуги',
        transfers: { title: 'Трансферы', description: 'Комфортные и безопасные перевозки из аэропортов и городов в Муйне на современных автомобилях с кондиционером.' },
        tours: { title: 'Экскурсии', description: 'Откройте для себя неповторимую красоту Вьетнама с нашими увлекательными турами по Муйне и окрестностям.' },
        rentals: { title: 'Аренда байков и авто', description: 'Свобода передвижения: большой выбор байков и машин в аренду для ваших самостоятельных путешествий.' },
        accommodation: { title: 'ПРОЖИВАНИЕ', description: 'Крыша над головой. Поможем снять, снимем заранее, подберём варианты проживания на ваш вкус.' },
    },
    pricing: {
        title: 'Трансфер',
        subtitle: 'Так же есть другие маршруты поездок пишите.',
        hcm: 'Хошимин (SGN) ↔ Муйне',
        cxr: 'Камрань (CXR) ↔ Муйне',
        sedan: 'Седан (4 места)',
        minivan: 'Минивэн (7 мест)',
        minibus: 'Микроавтобус (16 мест)',
        note: 'Цена указана за поездку в одну сторону. Все сборы и платные дороги включены. Детские кресла по запросу.',
        ctaButton: 'Написать в Telegram',
    },
    tours: {
        title: 'Туры',
        tourList: toursRU,
        buttonAll: 'Больше туров',
        cardButton: 'Подробнее →',
        customTourDescription: [
            'Мы показали вам наши хиты — те самые экскурсии, которые обожают наши гости! Но это далеко не все, что может предложить удивительный Вьетнам.',
            'Не нашли тур своей мечты или хотите создать уникальный маршрут только для себя? Просто напишите нам! Мы с радостью расскажем обо всех возможностях и поможем спланировать ваше идеальное приключение.',
            'И помните, мы всегда следим за тем, чтобы ваша поездка была идеальной. Поэтому иногда маршрут может немного меняться в зависимости от работы парков или пагод, но будьте уверены — мы всегда найдем для вас не менее интересный вариант!',
        ],
        modalTitles: {
            program: 'Программа',
            included: 'Что включено',
            recommendations: 'Рекомендации',
            duration: 'Продолжительность',
            bookButton: 'Написать в Telegram',
            price: 'Цена',
        }
    },
    about: {
        title: 'Почему выбирают нас?',
        experience: { title: 'Многолетний опыт', description: 'Мы работаем в сфере туризма во Вьетнаме более 10 лет и знаем, как сделать ваше путешествие незабываемым.' },
        reliability: { title: 'Надежность и безопасность', description: 'Современный, исправный транспорт и опытные водители — гарантия вашей безопасности и комфорта.' },
        guides: { title: 'Профессиональные гиды', description: 'Наши русскоговорящие гиды расскажут самое интересное о культуре и истории Вьетнама.' },
        fleet: { title: 'Большой автопарк', description: 'Широкий выбор автомобилей от седанов до микроавтобусов для компаний любого размера.' },
        support: { title: 'Поддержка 24/7', description: 'Мы всегда на связи, чтобы помочь вам в решении любых вопросов во время вашего путешествия.' },
        videoOverlay: {
            line1: 'Спасибо всем!',
            line2: 'Будем рады видеть вас снова.'
        },
    },
    testimonials: {
        title: 'Что говорят наши клиенты',
        reviews: reviewsRU,
    },
    contact: {
        title: 'Свяжитесь с нами',
        subtitle: 'Остались вопросы или хотите забронировать услугу? Напишите нам любым удобным способом!',
        details: {
            title: 'Контакты',
            hours: 'Приезжайте к нам в любой день с 9:00 до 23:00',
            addressLabel: 'Адрес в Муйне:',
            addressValue: '44 Nguyễn Đình Chiểu, Phường Hàm Tiến, Thành phố Phan Thiết, Bình Thuận 70000, Việt Nam',
            phonesLabel: 'Телефоны:',
            phoneValues: ['+84 888440022', '+7 9092525522'],
            emailLabel: 'Email:',
            emailValue: 'nguyenhop72131@gmail.com',
            socialLabel: 'Мы в соцсетях:',
            socialButtons: {
                whatsapp: 'WhatsApp',
                telegram: 'Telegram',
                facebook: 'Facebook',
            }
        },
        form: {
            name: 'Ваше Имя',
            contact: 'Телефон / Email / Telegram',
            service: 'Выберите Услугу',
            serviceOptions: {
                transfer: 'Трансфер',
                tour: 'Экскурсия',
                other: 'Другое'
            },
            request: 'Ваш запрос (например, дата, кол-во человек)',
            button: 'Отправить Запрос',
            orWriteTo: 'или напишите в',
            telegram: 'Telegram'
        }
    },
    footer: {
        copyright: '© 2025 Виктор Тур. Все права защищены.',
        creator: 'Сайт создал Styiler',
        aiCredit: 'при помощи AiSudio.',
        contactTitle: 'Контакты',
        address: '44 Nguyễn Đình Chiểu, Муйне',
        phone: '+84 888440022',
    },
    aboutModal: {
        title: 'О нас',
        subtitle: 'Ваш надежный проводник по трансферам и турам во Вьетнаме!',
        intro: 'Мы специализируемся на комфортных и безопасных перевозках из аэропортов и городов в Муйне. Наша цель — чтобы ваше путешествие начиналось и заканчивалось идеально.',
        guaranteesTitle: 'Наши Гарантии',
        guarantees: {
            meet: 'Встретим в аэропорту на выходе с табличкой.',
            experience: 'Более 10 лет опыта работы в сфере туризма во Вьетнаме.',
            support: 'Поддержка 24/7. Мы всегда на связи, чтобы помочь вам.',
            price: 'Фиксированная цена. Все сборы и платные дороги включены.'
        },
        extraServicesTitle: 'Дополнительные Услуги',
        extraServices: {
            tours: 'Уникальные экскурсии с опытными гидами.',
            visa: 'Помощь в визовых вопросах.',
            exchange: 'Выгодный обмен валюты.',
            rentals: 'Аренда байков и авто для вашей свободы передвижения.'
        },
        ctaTitle: 'Готовы заказать трансфер или задать вопрос?',
        ctaDescription: 'Заполните форму ниже или свяжитесь с нами в WhatsApp. Мы оперативно ответим!',
        ctaButton1: 'Посмотреть Цены',
        ctaButton2: 'Написать в WhatsApp',
        contactsTitle: 'Наши Контакты'
    },
    contactModal: {
        title: 'Форма Связи',
        sendingMessage: 'Отправка...',
        successMessage: 'Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.',
        errorMessage: 'Произошла ошибка. Пожалуйста, попробуйте снова или свяжитесь с нами напрямую.'
    }
  },
  [Language.VN]: {
    header: {
      name: 'Victor Tour',
      about: 'Về chúng tôi',
      transfer: 'Đưa đón',
      tours: 'Tour du lịch',
      contact: 'Liên hệ',
    },
    hero: {
      title: 'Di chuyển thoải mái và các tour du lịch thú vị tại Mũi Né',
      subtitle: 'Người hướng dẫn đáng tin cậy của bạn tại Việt Nam',
      description: 'Chúng tôi cung cấp một loạt các dịch vụ cho kỳ nghỉ hoàn hảo của bạn: từ đưa đón sân bay đến các chuyến tham quan độc đáo với hướng dẫn viên giàu kinh nghiệm.',
      telegramButton: 'Liên hệ qua Telegram',
    },
    introAbout: {
        title: 'Về chúng tôi',
        imageOverlay: {
            line1: '10 năm chăm sóc',
            line2: 'cho sự thoải mái của bạn tại Việt Nam'
        },
        textSections: [
          {
            title: "Sự yên tâm của bạn ngay từ phút đầu tiên",
            content: "Hãy tưởng tượng: bạn vừa xuống máy bay sau một chuyến bay dài và không phải lo lắng gì về việc di chuyển đến khách sạn. Một tài xế lịch sự, một chiếc xe thoải mái và sự yên tâm hoàn toàn đã chờ đón bạn."
          },
          {
            title: "Hơn cả một chiếc taxi",
            content: "Đây chính là lý do chúng tôi đã hoạt động hơn 10 năm. 'Victor Tour' không chỉ là một chiếc taxi, mà là dịch vụ chăm sóc cá nhân của bạn ngay từ phút đầu tiên tại Việt Nam."
          },
          {
            title: "Khởi đầu và kết thúc hoàn hảo cho chuyến đi của bạn",
            content: "Chúng tôi chuyên về dịch vụ đưa đón giữa các trung tâm du lịch chính—Thành phố Hồ Chí Minh, Mũi Né, Nha Trang, Đà Lạt—và chúng tôi làm mọi thứ để đảm bảo chuyến đi của bạn bắt đầu và kết thúc một cách hoàn hảo."
          }
        ],
        ctaButton: 'Liên hệ qua Telegram',
    },
    services: {
        title: 'Dịch vụ của chúng tôi',
        transfers: { title: 'Đưa đón', description: 'Di chuyển thoải mái và an toàn từ sân bay và các thành phố đến Mũi Né bằng xe hiện đại có máy lạnh.' },
        tours: { title: 'Tham quan', description: 'Khám phá vẻ đẹp độc đáo của Việt Nam với các tour du lịch thú vị của chúng tôi tại Mũi Né và các vùng lân cận.' },
        rentals: { title: 'Cho thuê xe máy & ô tô', description: 'Tự do di chuyển: nhiều lựa chọn xe máy và ô tô cho thuê cho các chuyến đi độc lập của bạn.' },
        accommodation: { title: 'Chỗ ở', description: 'Mái nhà che đầu. Chúng tôi sẽ giúp bạn thuê, đặt trước và tìm các lựa chọn chỗ ở theo sở thích của bạn.' },
    },
    pricing: {
        title: 'Đưa đón',
        subtitle: 'Chúng tôi cũng có các tuyến đường khác. Vui lòng liên hệ.',
        hcm: 'Hồ Chí Minh (SGN) ↔ Mũi Né',
        cxr: 'Cam Ranh (CXR) ↔ Mũi Né',
        sedan: 'Sedan (4 chỗ)',
        minivan: 'Minivan (7 chỗ)',
        minibus: 'Minibus (16 chỗ)',
        note: 'Giá cho một chiều đi. Đã bao gồm tất cả các loại phí và phí cầu đường. Có ghế trẻ em theo yêu cầu.',
        ctaButton: 'Liên hệ qua Telegram',
    },
    tours: {
        title: 'Các Tour Du Lịch',
        tourList: toursVN,
        buttonAll: 'Xem thêm tour',
        cardButton: 'Chi tiết →',
        customTourDescription: [
            "Chúng tôi đã cho bạn thấy những tour nổi bật nhất—những chuyến đi mà khách của chúng tôi yêu thích! Nhưng đó chưa phải là tất cả những gì Việt Nam tuyệt vời có thể mang lại.",
            "Bạn không tìm thấy tour mơ ước của mình hoặc muốn tạo một lịch trình độc đáo cho riêng mình? Chỉ cần viết cho chúng tôi! Chúng tôi sẽ vui lòng cho bạn biết về tất cả các khả năng và giúp bạn lên kế hoạch cho chuyến phiêu lưu hoàn hảo của mình.",
            "Và hãy nhớ, chúng tôi luôn đảm bảo chuyến đi của bạn hoàn hảo. Do đó, đôi khi lịch trình có thể thay đổi một chút tùy thuộc vào giờ hoạt động của các công viên hoặc chùa, nhưng hãy yên tâm—chúng tôi sẽ luôn tìm thấy một lựa chọn thú vị không kém cho bạn!",
        ],
        modalTitles: {
            program: 'Chương trình',
            included: 'Bao gồm',
            recommendations: 'Gợi ý',
            duration: 'Thời lượng',
            bookButton: 'Liên hệ qua Telegram',
            price: 'Giá',
        }
    },
    about: {
        title: 'Tại sao chọn chúng tôi?',
        experience: { title: 'Nhiều năm kinh nghiệm', description: 'Chúng tôi đã làm việc trong ngành du lịch tại Việt Nam hơn 10 năm và biết cách làm cho chuyến đi của bạn không thể nào quên.' },
        reliability: { title: 'Độ tin cậy và an toàn', description: 'Phương tiện hiện đại, được bảo dưỡng tốt và tài xế giàu kinh nghiệm đảm bảo an toàn và thoải mái cho bạn.' },
        guides: { title: 'Hướng dẫn viên chuyên nghiệp', description: 'Hướng dẫn viên nói tiếng Anh của chúng tôi sẽ cho bạn biết những điều thú vị nhất về văn hóa và lịch sử Việt Nam.' },
        fleet: { title: 'Đội xe lớn', description: 'Nhiều loại xe, từ sedan đến minibus, cho mọi quy mô nhóm.' },
        support: { title: 'Hỗ trợ 24/7', description: 'Chúng tôi luôn sẵn sàng giúp bạn giải đáp mọi thắc mắc trong chuyến đi của bạn.' },
        videoOverlay: {
            line1: 'Cảm ơn tất cả mọi người!',
            line2: 'Chúng tôi mong được gặp lại bạn.'
        },
    },
    testimonials: {
        title: 'Khách hàng nói gì về chúng tôi',
        reviews: reviewsVN,
    },
    contact: {
        title: 'Liên hệ với chúng tôi',
        subtitle: 'Có câu hỏi hoặc muốn đặt dịch vụ? Liên hệ với chúng tôi bằng bất kỳ cách nào thuận tiện!',
        details: {
            title: 'Liên hệ',
            hours: 'Hãy đến thăm chúng tôi bất kỳ ngày nào từ 9:00 đến 23:00',
            addressLabel: 'Địa chỉ tại Mũi Né:',
            addressValue: '44 Nguyễn Đình Chiểu, Phường Hàm Tiến, Thành phố Phan Thiết, Bình Thuận 70000, Việt Nam',
            phonesLabel: 'Điện thoại:',
            phoneValues: ['+84 888440022', '+7 9092525522'],
            emailLabel: 'Email:',
            emailValue: 'nguyenhop72131@gmail.com',
            socialLabel: 'Chúng tôi trên mạng xã hội:',
            socialButtons: {
                whatsapp: 'WhatsApp',
                telegram: 'Telegram',
                facebook: 'Facebook',
            }
        },
        form: {
            name: 'Tên của bạn',
            contact: 'Điện thoại / Email / Telegram',
            service: 'Chọn Dịch vụ',
            serviceOptions: {
                transfer: 'Đưa đón',
                tour: 'Tour du lịch',
                other: 'Khác'
            },
            request: 'Yêu cầu của bạn (ví dụ: ngày, số người)',
            button: 'Gửi yêu cầu',
            orWriteTo: 'hoặc viết thư cho',
            telegram: 'Telegram'
        }
    },
    footer: {
        copyright: '© 2025 Victor Tour. Mọi quyền được bảo lưu.',
        creator: 'Trang web được tạo bởi Styiler',
        aiCredit: 'với sự trợ giúp của AiSudio.',
        contactTitle: 'Liên hệ',
        address: '44 Nguyễn Đình Chiểu, Mũi Né',
        phone: '+84 888440022',
    },
    aboutModal: {
        title: 'Về chúng tôi',
        subtitle: 'Người hướng dẫn đáng tin cậy của bạn cho việc đưa đón và các tour du lịch tại Việt Nam!',
        intro: 'Chúng tôi chuyên về dịch vụ đưa đón thoải mái và an toàn từ sân bay và các thành phố đến Mũi Né. Mục tiêu của chúng tôi là làm cho chuyến đi của bạn bắt đầu và kết thúc một cách hoàn hảo.',
        guaranteesTitle: 'Cam kết của chúng tôi',
        guarantees: {
            meet: 'Chúng tôi sẽ đón bạn tại khu vực khách đến ở sân bay với một tấm biển.',
            experience: 'Hơn 10 năm kinh nghiệm trong ngành du lịch tại Việt Nam.',
            support: 'Hỗ trợ 24/7. Chúng tôi luôn sẵn sàng để giúp bạn.',
            price: 'Giá cố định. Đã bao gồm tất cả các loại phí và phí cầu đường.'
        },
        extraServicesTitle: 'Dịch vụ bổ sung',
        extraServices: {
            tours: 'Các chuyến tham quan độc đáo với hướng dẫn viên giàu kinh nghiệm.',
            visa: 'Hỗ trợ các vấn đề về thị thực.',
            exchange: 'Đổi tiền tệ với tỷ giá ưu đãi.',
            rentals: 'Cho thuê xe máy và ô tô để bạn tự do di chuyển.'
        },
        ctaTitle: 'Sẵn sàng đặt xe hoặc đặt câu hỏi?',
        ctaDescription: 'Điền vào biểu mẫu dưới đây hoặc liên hệ với chúng tôi qua WhatsApp. Chúng tôi sẽ trả lời nhanh chóng!',
        ctaButton1: 'Xem giá',
        ctaButton2: 'Liên hệ qua WhatsApp',
        contactsTitle: 'Liên hệ của chúng tôi'
    },
    contactModal: {
        title: 'Biểu mẫu liên hệ',
        sendingMessage: 'Đang gửi...',
        successMessage: 'Cảm ơn yêu cầu của bạn! Chúng tôi sẽ liên hệ với bạn sớm.',
        errorMessage: 'Đã xảy ra lỗi. Vui lòng thử lại hoặc liên hệ trực tiếp với chúng tôi.'
    }
  },
};
