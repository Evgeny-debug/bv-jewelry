// ==========================================
// BV JEWELRY - DEMO DATA GENERATOR (MODULE)
// ==========================================
// Цей файл можна просто відключити в HTML, коли з'явиться реальна база.

(function initMassiveDemoData() {
    // Якщо демо вже згенеровано (версія 200+), не перезаписуємо
    if (localStorage.getItem('bv_demo_v200_installed') === 'true') return;

    console.log("Запуск генератора масивних демо-даних...");

    // 1. ВЕЛИКЕ МЕГА-МЕНЮ (Категорії та Підкатегорії)
    const demoCats = [
        {
            id: 'rings', name: 'Каблучки',
            subcategories: [
                { id: 'gold_rings', name: 'Золоті каблучки' }, { id: 'silver_rings', name: 'Срібні каблучки' }, 
                { id: 'diamond_rings', name: 'З діамантами' }, { id: 'engagement_rings', name: 'На заручини' },
                { id: 'wedding_rings', name: 'Обручки' }, { id: 'mens_rings', name: 'Чоловічі' }
            ],
            groups: [
                { title: 'За металом', link: '', tags: [{name: 'Золоті', link: '#gold_rings'}, {name: 'Срібні', link: '#silver_rings'}, {name: 'Біле золото', link: '#white_gold'}] },
                { title: 'За подією', link: '', tags: [{name: 'На заручини', link: '#engagement_rings'}, {name: 'Обручки', link: '#wedding_rings'}, {name: 'Подарунок', link: '#gifts'}] },
                { title: 'Вставки', link: '', tags: [{name: 'Діаманти', link: '#diamond_rings'}, {name: 'Фіаніти', link: '#cz'}, {name: 'Без каміння', link: '#no_stone'}] }
            ],
            highlights: [
                { name: 'Каблучки з діамантами', link: '#diamond_rings', isAccent: true },
                { name: 'Ексклюзивні моделі', link: '#exclusive', isAccent: false }
            ]
        },
        {
            id: 'earrings', name: 'Сережки',
            subcategories: [
                { id: 'studs', name: 'Пусети (Гвоздики)' }, { id: 'hoops', name: 'Конго (Кільця)' },
                { id: 'long_earrings', name: 'Довгі (Підвіски)' }, { id: 'kids_earrings', name: 'Дитячі' },
                { id: 'gold_earrings', name: 'Золоті' }, { id: 'silver_earrings', name: 'Срібні' }
            ],
            groups: [
                { title: 'Тип застібки', link: '', tags: [{name: 'Англійська', link: '#english'}, {name: 'Пусети', link: '#studs'}, {name: 'Конго', link: '#hoops'}] },
                { title: 'Метал', link: '', tags: [{name: 'Золото 585', link: '#gold_earrings'}, {name: 'Срібло 925', link: '#silver_earrings'}] }
            ]
        },
        {
            id: 'necklaces', name: 'Ланцюжки та Кольє',
            subcategories: [
                { id: 'gold_chains', name: 'Золоті ланцюжки' }, { id: 'silver_chains', name: 'Срібні ланцюжки' },
                { id: 'pendants', name: 'Підвіски' }, { id: 'crosses', name: 'Хрестики' }
            ]
        },
        {
            id: 'bracelets', name: 'Браслети',
            subcategories: [
                { id: 'gold_bracelets', name: 'Золоті' }, { id: 'silver_bracelets', name: 'Срібні' },
                { id: 'hard_bracelets', name: 'Жорсткі' }, { id: 'mens_bracelets', name: 'Чоловічі' }
            ]
        }
    ];

    // 2. ГЕНЕРАТОР 200+ ТОВАРІВ
    const images = [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800',
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800',
        'https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/27308253/pexels-photo-27308253.jpeg?auto=compress&cs=tinysrgb&w=800'
    ];

    const adjectives = ["Royal", "Infinity", "Elegance", "Crystal", "Aura", "Luna", "Star", "Ocean", "Deep", "Minimal"];
    const materials = ["Золото 585", "Золото 750", "Срібло 925", "Платина", "Біле золото", "Червоне золото"];
    
    let generatedProducts = [];
    let idCounter = 1000;

    demoCats.forEach(cat => {
        cat.subcategories.forEach(sub => {
            // Для кожної підкатегорії генеруємо по 10-15 товарів
            const itemsToGenerate = Math.floor(Math.random() * 5) + 10; 
            
            for (let i = 0; i < itemsToGenerate; i++) {
                const isSale = Math.random() > 0.7;
                const basePrice = Math.floor(Math.random() * 30000) + 2000; // від 2k до 32k грн
                const imgUrl = images[Math.floor(Math.random() * images.length)];
                const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
                const mat = materials[Math.floor(Math.random() * materials.length)];
                
                let badge = 'none';
                if (Math.random() > 0.8) badge = 'new';
                else if (isSale) badge = 'sale';
                else if (Math.random() > 0.9) badge = 'exclusive';

                generatedProducts.push({
                    id: `${cat.id.charAt(0).toUpperCase()}-${idCounter++}`,
                    sku: `ART-${idCounter}`,
                    name: `${cat.name.slice(0, -1) || cat.name} "${adj}"`,
                    variant: mat,
                    sizes: cat.id === 'rings' ? ['15.5', '16.0', '16.5', '17.0', '17.5'] : [],
                    category: cat.id,
                    subcategory: sub.id,
                    priceType: 'manual',
                    price: isSale ? Math.floor(basePrice * 0.8) : basePrice,
                    discount: isSale ? basePrice : '',
                    status: Math.random() > 0.95 ? 'out-stock' : 'in-stock', // 5% шанс що немає в наявності
                    badge: badge,
                    isSpecial: Math.random() > 0.8, // Для блоку "Спеціальні пропозиції"
                    isWeekly: Math.random() > 0.8,  // Для блоку "Прикраси тижня"
                    img: imgUrl,
                    desc: `Ексклюзивний виріб серії ${adj}. Створено майстрами Atelier з використанням матеріалу ${mat}. Ідеально підкреслить ваш стиль.`
                });
            }
        });
    });

    // 3. НАЛАШТУВАННЯ ТА БАНЕРИ (Повертаємо Hero)
    const demoSettings = { 
        heroBg: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1920', // Красиве ювелірне фото на фон
        goldRate: 3600, phone: '+38 063 45 40 901', bannerRatio: '3/1',
        addr1: 'м. Ізмаїл, вул. Торгова, 68', addr2: 'м. Ізмаїл, вул. Покровська, 57'
    };

    const demoBanners = [
        { id: 1, img: 'https://zolotakraina.ua/media/wysiwyg/1049_48120_4_26.jpg', link: 'catalog.html#sale' },
        { id: 2, img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1920', link: 'catalog.html#new' }
    ];

    // Зберігаємо ВСЕ в базу
    localStorage.setItem('bv_categories_tree', JSON.stringify(demoCats));
    localStorage.setItem('bv_products', JSON.stringify(generatedProducts));
    localStorage.setItem('bv_settings', JSON.stringify(demoSettings));
    localStorage.setItem('bv_banners', JSON.stringify(demoBanners));
    localStorage.setItem('bv_demo_v200_installed', 'true');
    
    console.log(`Успішно згенеровано ${generatedProducts.length} товарів!`);
})();