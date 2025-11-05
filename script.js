// Language Management
let currentLanguage = localStorage.getItem('language') || 'uk';

// DOM Elements
const burgerMenu = document.getElementById('burgerMenu');
const nav = document.getElementById('nav');
const langButtons = document.querySelectorAll('.lang-btn');
const elementsWithI18n = document.querySelectorAll('[data-i18n]');
const appointmentForm = document.getElementById('appointmentForm');

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Ensure hero title is visible before translation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '1';
        heroTitle.style.visibility = 'visible';
    }
    
    // Fix language button texts immediately (prevent auto-translation issues)
    updateActiveLangButton();
    
    setLanguage(currentLanguage);
    updateActiveLangButton();
    
    // Continuously monitor and fix button texts (in case browser auto-translates)
    setInterval(() => {
        updateActiveLangButton();
    }, 1000);
});

// Create overlay element for mobile menu
const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay);

// Burger Menu Toggle
if (burgerMenu) {
    burgerMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = burgerMenu.classList.toggle('active');
        nav.classList.toggle('active', isActive);
        navOverlay.classList.toggle('active', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
        
        // Prevent body scroll when menu is open
        if (isActive) {
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.position = '';
            document.body.style.width = '';
        }
    });
}

// Close menu when clicking overlay
navOverlay.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    nav.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    });
});

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }
});

// Language Switcher
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        setLanguage(lang);
        updateActiveLangButton();
        localStorage.setItem('language', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    });
});

// Update active language button
function updateActiveLangButton() {
    langButtons.forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        // Ensure button text is correct (prevent auto-translation issues)
        // Force correct text based on language code
        if (lang === 'uk') {
            btn.textContent = 'UA';
            btn.setAttribute('translate', 'no');
        } else if (lang === 'en') {
            btn.textContent = 'EN';
            btn.setAttribute('translate', 'no');
        } else if (lang === 'pt') {
            btn.textContent = 'PT';
            btn.setAttribute('translate', 'no');
        }
        
        if (lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Set language function
function setLanguage(lang) {
    currentLanguage = lang;
    
    elementsWithI18n.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);
        
        if (translation) {
            // Ensure logo is always "Dr. Barzylovych" in all languages
            if (key === 'logo') {
                element.textContent = 'Dr. Barzylovych';
                element.setAttribute('translate', 'no');
            } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Get translation by key path
function getTranslation(key, lang) {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Form submission handler
if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(appointmentForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message (you can replace this with actual form handling)
        alert(currentLanguage === 'uk' ? 'Дякуємо! Ваш запит відправлено. Ми зв\'яжемося з вами найближчим часом.' :
              currentLanguage === 'en' ? 'Thank you! Your request has been sent. We will contact you soon.' :
              'Obrigado! Sua solicitação foi enviada. Entraremos em contato em breve.');
        
        // Reset form
        appointmentForm.reset();
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .feedback-card, .step-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Lazy loading images with fade-in effect
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            
            // Load image if srcset or data-src is used
            if (img.dataset.src) {
                img.src = img.dataset.src;
                delete img.dataset.src;
            }
            
            // Add loaded class for fade-in animation
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            }, { once: true });
            
            // If image is already loaded (cached), add loaded class immediately
            if (img.complete) {
                img.classList.add('loaded');
            }
            
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px'
});

// Observe all lazy-loaded images
document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
});

// ===== Scroll to Top Button =====
const scrollToTopButton = document.getElementById('scrollToTop');

// Function to show/hide scroll to top button
function toggleScrollToTopButton() {
    if (!scrollToTopButton) return;
    
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollThreshold = Math.max(viewportHeight * 0.5, 500); // 50% of viewport or 500px, whichever is larger
    
    if (scrollPosition > scrollThreshold) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
}

// Check scroll position on page load and scroll
if (scrollToTopButton) {
    window.addEventListener('scroll', toggleScrollToTopButton);
    window.addEventListener('load', toggleScrollToTopButton);

    // Smooth scroll to top on button click
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== Swiper for Feedbacks Section =====
function initFeedbacksSwiper() {
    // Wait for Swiper to be available
    if (typeof Swiper === 'undefined') {
        console.error('Swiper is not loaded');
        setTimeout(initFeedbacksSwiper, 100);
        return;
    }

    const swiperElement = document.querySelector('.feedbacks-swiper');
    if (!swiperElement) {
        console.error('Swiper element not found');
        return;
    }

    const swiper = new Swiper(swiperElement, {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        pagination: {
            el: swiperElement.querySelector('.swiper-pagination'),
            clickable: true,
        },
        effect: 'slide',
        speed: 800,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    // Stop autoplay only when clicking on the slider (as per your example)
    const sliderContainer = document.querySelector('.feedbacks-swiper');
    if (sliderContainer) {
        sliderContainer.addEventListener('click', function () {
            swiper.autoplay.stop();
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    initFeedbacksSwiper();
});


