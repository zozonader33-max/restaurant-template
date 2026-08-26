/**
 * ============================================
 * 🏮 RESTAURANT CONFIGURATION
 * ============================================
 * Edit the values below to customize your restaurant website.
 * All settings are in one place for easy modification.
 */
const CONFIG = {
    // Restaurant Info
    name: "مطعم الديوان",
    nameShort: "الديوان",
    tagline: "حيث يلتقي التراث بالمذاق الأصيل",
    
    // Contact
    phone: "+966501234567",
    phoneDisplay: "+966 50 123 4567",
    whatsapp: "+966501234567",
    whatsappMessage: "مرحباً، أرغب بالطلب من مطعم الديوان",
    instagram: "https://instagram.com/aldiwan_restaurant",
    instagramHandle: "@aldiwan_restaurant",
    googleMapsLink: "https://maps.google.com/?q=24.7135517,46.6752957",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.674541286158!2d46.6752957!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ4LjgiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sar!2ssa!4v1234567890",
    address: "شارع الملك فهد، الرياض، المملكة العربية السعودية",
    
    // Working Hours
    hours: [
        { day: "السبت", time: "12:00 م - 12:00 ص" },
        { day: "الأحد", time: "12:00 م - 12:00 ص" },
        { day: "الاثنين", time: "12:00 م - 12:00 ص" },
        { day: "الثلاثاء", time: "12:00 م - 12:00 ص" },
        { day: "الأربعاء", time: "12:00 م - 12:00 ص" },
        { day: "الخميس", time: "12:00 م - 01:00 ص" },
        { day: "الجمعة", time: "01:00 م - 01:00 ص" }
    ],

    // Currency
    currency: "ر.س",

    // Menu Items
    menuItems: {
        appetizers: [
            {
                name: "حمص بالطحينة",
                desc: "حمص مهروس ناعم مع طحينة فاخرة وزيت زيتون",
                price: 18,
                img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop"
            },
            {
                name: "متبل باذنجان",
                desc: "باذنجان مشوي على الفحم مع طحينة وليمون",
                price: 20,
                img: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=400&h=300&fit=crop"
            },
            {
                name: "فتوش",
                desc: "سلطة مشكلة طازجة مع خبز محمص ودبس الرمان",
                price: 22,
                img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
            },
            {
                name: "ورق عنب",
                desc: "أوراق عنب محشوة بالأرز والبهارات الشرقية",
                price: 25,
                img: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400&h=300&fit=crop"
            }
        ],
        main: [
            {
                name: "كبسة لحم",
                desc: "أرز بسمتي مع قطع لحم طرية مطبوخة على نار هادئة",
                price: 55,
                img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop"
            },
            {
                name: "مندي دجاج",
                desc: "دجاج مدخن على الحطب مع أرز المندي الخاص",
                price: 45,
                img: "https://images.unsplash.com/photo-1633321702518-7fecdafb94d5?w=400&h=300&fit=crop"
            },
            {
                name: "مقلوبة",
                desc: "أرز مقلوب مع لحم وباذنجان وبهارات شامية",
                price: 50,
                img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
            },
            {
                name: "طاجن لحم",
                desc: "لحم مطهو ببطء مع الخضار والبهارات المغربية",
                price: 65,
                img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop"
            }
        ],
        grills: [
            {
                name: "مشكل مشاوي",
                desc: "تشكيلة من أجود أنواع اللحوم المشوية على الفحم",
                price: 85,
                img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop"
            },
            {
                name: "كباب لحم",
                desc: "لحم غنم مفروم مشوي على أسياخ مع البهارات",
                price: 55,
                img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop"
            },
            {
                name: "شيش طاووق",
                desc: "صدور دجاج متبلة ومشوية على الفحم",
                price: 45,
                img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop"
            },
            {
                name: "ريش غنم",
                desc: "ريش غنم مشوية بالأعشاب والتوابل الخاصة",
                price: 95,
                img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop"
            }
        ],
        desserts: [
            {
                name: "كنافة نابلسية",
                desc: "كنافة بالجبنة الطازجة مع القطر والفستق",
                price: 30,
                img: "https://images.unsplash.com/photo-1579888944880-d98341245702?w=400&h=300&fit=crop"
            },
            {
                name: "بقلاوة مشكلة",
                desc: "تشكيلة بقلاوة بالفستق والجوز والقشطة",
                price: 35,
                img: "https://images.unsplash.com/photo-1598110750624-207050c4f28c?w=400&h=300&fit=crop"
            },
            {
                name: "أم علي",
                desc: "حلوى دافئة بالمكسرات والقشطة والعسل",
                price: 25,
                img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop"
            },
            {
                name: "تشيز كيك لوتس",
                desc: "تشيز كيك كريمي مع صوص اللوتس الفاخر",
                price: 28,
                img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop"
            }
        ],
        drinks: [
            {
                name: "شاي مغربي",
                desc: "شاي أخضر بالنعناع الطازج مقدم بالطريقة المغربية",
                price: 12,
                img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop"
            },
            {
                name: "قهوة عربية",
                desc: "قهوة عربية بالهيل مع التمر",
                price: 10,
                img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop"
            },
            {
                name: "عصير رمان طازج",
                desc: "رمان طازج معصور لحظة الطلب",
                price: 18,
                img: "https://images.unsplash.com/photo-1615478503562-ec2d8aa0a24d?w=400&h=300&fit=crop"
            },
            {
                name: "سموذي مانجو",
                desc: "مانجو طازج مع حليب وعسل طبيعي",
                price: 20,
                img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop"
            }
        ]
    },

    // Gallery Images
    gallery: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=800&fit=crop",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1482049016gy-b62ad898e7fe?w=600&h=400&fit=crop"
    ],

    // Testimonials
    testimonials: [
        {
            name: "أحمد المالكي",
            text: "أفضل مطعم عربي جربته! الكبسة عندهم لا تُقاوم والخدمة ممتازة. أنصح الجميع بزيارتهم.",
            stars: 5,
            date: "قبل أسبوع"
        },
        {
            name: "سارة العتيبي",
            text: "المكان جميل والأكل لذيذ جداً. المشاوي طازجة ومشوية بإتقان. سنعود بالتأكيد!",
            stars: 5,
            date: "قبل أسبوعين"
        },
        {
            name: "محمد الشهري",
            text: "زرت المطعم مع العائلة وكانت تجربة رائعة. الأجواء مريحة والطاقم ودود. الأسعار معقولة مقارنة بالجودة.",
            stars: 4,
            date: "قبل شهر"
        },
        {
            name: "نورة القحطاني",
            text: "الحلويات عندهم خرافية! الكنافة النابلسية أفضل كنافة تذوقتها. شكراً لفريق العمل المميز.",
            stars: 5,
            date: "قبل 3 أيام"
        },
        {
            name: "خالد الدوسري",
            text: "طلبت توصيل والأكل وصل ساخن وطازج. التغليف ممتاز والطعم لا يختلف عن الأكل في المطعم.",
            stars: 5,
            date: "قبل 5 أيام"
        },
        {
            name: "فاطمة الحربي",
            text: "أنصح الكل يجرب المندي عندهم! النكهة مميزة والأرز مطبوخ بشكل مثالي. ما راح أبدل مطعم ثاني.",
            stars: 5,
            date: "قبل أسبوعين"
        }
    ]
};

/* ============================================
 * Initialize Website
 * ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    initConfig();
    initMenu();
    initGallery();
    initTestimonials();
    initHours();
    initHeader();
    initMobileNav();
    initLightbox();
    initScrollReveal();
    initYear();
});

/* --- Apply Config to HTML --- */
function initConfig() {
    // Logo & Titles
    document.getElementById('logo-text').textContent = CONFIG.nameShort;
    document.getElementById('hero-title').textContent = CONFIG.name;
    document.getElementById('hero-tagline').textContent = CONFIG.tagline;
    document.getElementById('footer-logo').textContent = '🏮 ' + CONFIG.nameShort;
    document.getElementById('footer-name').textContent = CONFIG.name;
    document.title = CONFIG.name + ' | ' + CONFIG.tagline;

    // WhatsApp links
    const waLink = `https://wa.me/${CONFIG.whatsapp.replace('+', '')}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
    document.getElementById('btn-order').href = waLink;
    document.getElementById('whatsapp-float').href = waLink;
    document.getElementById('footer-whatsapp').href = waLink;

    // Contact info
    document.getElementById('footer-phone').href = `tel:${CONFIG.phone}`;
    document.getElementById('footer-phone').querySelector('span').textContent = CONFIG.phoneDisplay;
    document.getElementById('footer-instagram').href = CONFIG.instagram;
    document.getElementById('footer-location-link').href = CONFIG.googleMapsLink;

    // Location section
    document.getElementById('address-text').textContent = CONFIG.address;
    document.getElementById('phone-text').textContent = CONFIG.phoneDisplay;
    document.getElementById('map-iframe').src = CONFIG.googleMapsEmbed;
}

/* --- Menu --- */
function initMenu() {
    const grid = document.getElementById('menu-grid');
    const tabs = document.querySelectorAll('.menu-tab');
    
    function renderCategory(category) {
        const items = CONFIG.menuItems[category] || [];
        grid.innerHTML = items.map(item => `
            <div class="menu-item reveal">
                <div class="menu-item-img-wrapper">
                    <img src="${item.img}" alt="${item.name}" class="menu-item-img" loading="lazy">
                </div>
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h3 class="menu-item-name">${item.name}</h3>
                        <span class="menu-item-price">${item.price} ${CONFIG.currency}</span>
                    </div>
                    <p class="menu-item-desc">${item.desc}</p>
                </div>
            </div>
        `).join('');
        
        // Trigger reveal animation
        setTimeout(() => {
            document.querySelectorAll('.menu-item.reveal').forEach((el, i) => {
                setTimeout(() => el.classList.add('visible'), i * 100);
            });
        }, 50);
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderCategory(tab.dataset.category);
        });
    });

    // Initial render
    renderCategory('appetizers');
}

/* --- Gallery --- */
function initGallery() {
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = CONFIG.gallery.map((img, i) => `
        <div class="gallery-item reveal" data-index="${i}">
            <img src="${img}" alt="صورة ${i + 1}" loading="lazy">
        </div>
    `).join('');

    setTimeout(() => {
        document.querySelectorAll('.gallery-item.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
        });
    }, 100);
}

/* --- Lightbox --- */
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    let currentIndex = 0;

    document.getElementById('gallery-grid').addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (!item) return;
        currentIndex = parseInt(item.dataset.index);
        showImage(currentIndex);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    function showImage(index) {
        if (index < 0) index = CONFIG.gallery.length - 1;
        if (index >= CONFIG.gallery.length) index = 0;
        currentIndex = index;
        lightboxImg.src = CONFIG.gallery[index];
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    prevBtn.addEventListener('click', () => showImage(currentIndex + 1));
    nextBtn.addEventListener('click', () => showImage(currentIndex - 1));

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* --- Testimonials --- */
function initTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    grid.innerHTML = CONFIG.testimonials.map(t => `
        <div class="testimonial-card reveal">
            <div class="testimonial-stars">
                ${'<i class="fas fa-star"></i>'.repeat(t.stars)}${'<i class="far fa-star"></i>'.repeat(5 - t.stars)}
            </div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${t.name.charAt(0)}</div>
                <div>
                    <div class="testimonial-name">${t.name}</div>
                    <div class="testimonial-date">${t.date}</div>
                </div>
            </div>
        </div>
    `).join('');
}

/* --- Working Hours --- */
function initHours() {
    const table = document.getElementById('hours-table');
    const days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const todayIndex = new Date().getDay();
    const todayName = days[todayIndex];

    table.innerHTML = CONFIG.hours.map(h => `
        <tr class="${h.day === todayName ? 'today' : ''}">
            <td>${h.day}</td>
            <td>${h.time}</td>
        </tr>
    `).join('');
}

/* --- Sticky Header --- */
function initHeader() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* --- Mobile Navigation --- */
function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close nav on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Close nav on outside click
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
}

/* --- Scroll Reveal --- */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Also observe sections for staggered animation
    document.querySelectorAll('.section').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

/* --- Year --- */
function initYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}