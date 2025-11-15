// Check if we're on the main page (index.html) or pages that support translation
const isMainPage = window.location.pathname === '/' || 
                   window.location.pathname.endsWith('index.html') || 
                   window.location.pathname.endsWith('/');
const isTranslatablePage = isMainPage || 
                           window.location.pathname.includes('privacy-policy.html') ||
                           window.location.pathname.includes('terms-of-use.html');

let currentLanguage = 'uk';
try {
    if (typeof localStorage !== 'undefined' && isTranslatablePage) {
        currentLanguage = localStorage.getItem('language') || 'uk';
    } else {
        // For other pages, always use Ukrainian
        currentLanguage = 'uk';
    }
} catch (e) {
    // localStorage not available, use default
    currentLanguage = 'uk';
}

let burgerMenu;
let nav;
let langButtons;
let elementsWithI18n;
let appointmentForm;
let navOverlay = null;

function updateBodyPadding() {
    const header = document.querySelector('.header');
    if (header) {
        const { height: headerHeight } = header.getBoundingClientRect();
        document.body.style.paddingTop = `${headerHeight}px`;
    }
}

// Викликаємо одразу після завантаження DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateBodyPadding);
} else {
    updateBodyPadding();
}

// Викликаємо після повного завантаження сторінки (включаючи зображення)
window.addEventListener('load', () => {
    updateBodyPadding();
    // Додаткова затримка для обробки можливих змін висоти після завантаження зображень
    setTimeout(updateBodyPadding, 100);
});


function initializeApp() {
    // Initialize DOM elements
    burgerMenu = document.getElementById('burgerMenu');
    nav = document.getElementById('nav');
    langButtons = document.querySelectorAll('.lang-btn');
    appointmentForm = document.getElementById('appointmentForm');
    elementsWithI18n = document.querySelectorAll('[data-i18n]');
    
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '1';
        heroTitle.style.visibility = 'visible';
    }
    
    // Update body padding based on header height
    updateBodyPadding();
    
    // Watch for header height changes using ResizeObserver
    const header = document.querySelector('.header');
    if (header && typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(() => {
            updateBodyPadding();
        });
        resizeObserver.observe(header);
    }
    
    // Also update on window resize
    window.addEventListener('resize', updateBodyPadding);
    
    // Update subtitle width constraints
    updateSubtitleWidth();
    window.addEventListener('resize', updateSubtitleWidth);
    
    updateActiveLangButton();
    
    // Apply translations on main page and translatable pages
    if (isTranslatablePage) {
        setLanguage(currentLanguage);
        updateActiveLangButton();
        updateLanguageSelect();
    } else {
        // Force Ukrainian on other pages
        setLanguage('uk');
    }
    
    
    // Setup burger menu after initialization
    setupBurgerMenu();
}

function updateSubtitleWidth() {
    const subtitle1 = document.querySelector('.hero-subtitle1');
    const subtitle2 = document.querySelector('.hero-subtitle2');
    
    if (subtitle1 && subtitle2 && window.innerWidth >= 480) {
        const subtitle1Width = subtitle1.offsetWidth;
        subtitle2.style.maxWidth = subtitle1Width + 'px';
    } else if (subtitle2) {
        subtitle2.style.maxWidth = '';
    }
}

// Watch for subtitle1 width changes using ResizeObserver
if (typeof ResizeObserver !== 'undefined') {
    const subtitle1Observer = new ResizeObserver(() => {
        updateSubtitleWidth();
    });
    
    // Start observing after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            const subtitle1 = document.querySelector('.hero-subtitle1');
            if (subtitle1) {
                subtitle1Observer.observe(subtitle1);
            }
        });
    } else {
        const subtitle1 = document.querySelector('.hero-subtitle1');
        if (subtitle1) {
            subtitle1Observer.observe(subtitle1);
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

function createNavOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    if (document.body) {
        document.body.appendChild(overlay);
        return overlay;
    }
    return null;
}

function setupBurgerMenu() {
    // Отримуємо елементи, якщо вони ще не ініціалізовані
    if (!burgerMenu) {
        burgerMenu = document.getElementById('burgerMenu');
    }
    if (!nav) {
        nav = document.getElementById('nav');
    }
    if (!navOverlay) {
        navOverlay = createNavOverlay();
    }
    
    if (!burgerMenu || !nav || !navOverlay) {
        // Якщо елементи ще не готові, спробуємо пізніше
        setTimeout(setupBurgerMenu, 100);
        return;
    }
    
    // Перевіряємо, чи вже додані event listeners (щоб не дублювати)
    if (burgerMenu.dataset.burgerInitialized === 'true') {
        return;
    }
    burgerMenu.dataset.burgerInitialized = 'true';
    
    // Функція для обробки кліку
    const handleBurgerClick = (e) => {
        if (e) {
            e.stopPropagation();
        }
        const isActive = burgerMenu.classList.toggle('active');
        nav.classList.toggle('active', isActive);
        navOverlay.classList.toggle('active', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
        
        // Додаємо/видаляємо клас до body
        if (isActive) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        
        // Оновлюємо padding після зміни стану меню
        setTimeout(updateBodyPadding, 50);
    };
    
    // Додаємо обробники для різних типів подій
    burgerMenu.addEventListener('click', handleBurgerClick, { passive: false });
    burgerMenu.addEventListener('touchend', (e) => {
        e.preventDefault();
        handleBurgerClick(e);
    }, { passive: false });

    navOverlay.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
        
        // Оновлюємо padding після закриття меню
        setTimeout(updateBodyPadding, 50);
    });
}

function setupNavLinks() {
    if (!burgerMenu || !nav || !navOverlay) return;
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            
            // Оновлюємо padding після закриття меню
            setTimeout(updateBodyPadding, 50);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav && nav.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            
            // Оновлюємо padding після закриття меню
            setTimeout(updateBodyPadding, 50);
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupNavLinks);
} else {
    setupNavLinks();
}

function setupLangButtons() {
    if (!langButtons || langButtons.length === 0) return;
    
    // Setup language buttons on main page and translatable pages
    if (!isTranslatablePage) return;
    
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
            updateActiveLangButton();
            updateLanguageSelect();
            localStorage.setItem('language', lang);
            
            document.documentElement.lang = lang;
        });
    });

    // Setup language select dropdown for mobile
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect && isTranslatablePage) {
        languageSelect.addEventListener('change', () => {
            const lang = languageSelect.value;
            setLanguage(lang);
            updateActiveLangButton();
            updateLanguageSelect();
            localStorage.setItem('language', lang);
            
            document.documentElement.lang = lang;
        });
    }
}

function updateLanguageSelect() {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupLangButtons);
} else {
    setupLangButtons();
}

function updateActiveLangButton() {
    if (!langButtons || langButtons.length === 0) return;
    langButtons.forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        // Не змінюємо текст кнопок, тільки клас active
        if (lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function setLanguage(lang) {
    // Only allow language switching on main page and translatable pages
    if (!isTranslatablePage) {
        lang = 'uk';
    }
    currentLanguage = lang;
    
    // Re-query all elements with data-i18n to ensure we get all elements, including dynamically added ones
    elementsWithI18n = document.querySelectorAll('[data-i18n]');
    
    // Show/hide navigation items based on language
    const ukOnlyNavItems = document.querySelectorAll('.nav-item-uk-only');
    if (ukOnlyNavItems.length > 0) {
        if (lang === 'uk') {
            ukOnlyNavItems.forEach(item => {
                item.style.display = '';
            });
        } else {
            // Hide for English and Portuguese
            ukOnlyNavItems.forEach(item => {
                item.style.display = 'none';
            });
        }
    }
    
    // Show/hide UK-only elements (like appointment buttons)
    const ukOnlyElements = document.querySelectorAll('.uk-only');
    if (ukOnlyElements.length > 0) {
        if (lang === 'uk') {
            ukOnlyElements.forEach(item => {
                item.style.display = '';
            });
        } else {
            // Hide for English and Portuguese
            ukOnlyElements.forEach(item => {
                item.style.display = 'none';
            });
        }
    }
    
    elementsWithI18n.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);
        
        if (translation) {
            if (key === 'logo') {
                // Logo is now an image, skip text translation
                // element.textContent = translation;
                // element.setAttribute('translate', 'no');
            } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // Handle floating label inputs
                if (element.hasAttribute('data-i18n-label')) {
                    const labelKey = element.getAttribute('data-i18n-label');
                    const labelTranslation = getTranslation(labelKey, lang);
                    if (labelTranslation) {
                        element.setAttribute('aria-label', labelTranslation);
                        // Update the associated label text (form-label class)
                        const label = document.querySelector(`label.form-label[for="${element.id}"]`);
                        if (label) {
                            label.textContent = labelTranslation;
                        }
                    }
                    // Handle placeholder for floating label inputs
                    if (element.hasAttribute('data-i18n-placeholder')) {
                        const placeholderKey = element.getAttribute('data-i18n-placeholder');
                        const placeholderTranslation = getTranslation(placeholderKey, lang);
                        if (placeholderTranslation) {
                            element.setAttribute('placeholder', placeholderTranslation);
                        }
                    }
                } else {
                    element.placeholder = translation;
                }
            } else {
                const flagIconWrapper = element.querySelector('.flag-icon-wrapper');
                const ptFlagWrapper = element.querySelector('.pt-flag-wrapper');
                const flagIcons = element.querySelectorAll('.flag-icon');
                const isHeroTitle = element.classList.contains('hero-title');
                const isHeroSubtitle = element.classList.contains('hero-subtitle');
                
                // Check hero-title first, before checking for existing flag wrappers
                if (isHeroTitle) {
                    // Check if translation contains HTML tags
                    if (translation.includes('<') && (translation.includes('</') || translation.includes('/>'))) {
                        // Translation contains HTML, use innerHTML directly
                        element.innerHTML = translation;
                        // SVG flags are now optimized (simple SVG, not embedded images)
                        const svgImgs = element.querySelectorAll('img[src*="flag-simple.svg"]');
                        svgImgs.forEach(img => {
                            img.setAttribute('loading', 'eager');
                        });
                    } else {
                        // No HTML in translation, add flag wrapper
                        element.innerHTML = translation + ' <span class="flag-icon-wrapper"></span>';
                    }
                } else if (isHeroSubtitle) {
                    // Use innerHTML to preserve SVG flag images
                    if (translation) {
                        element.innerHTML = translation;
                        // Set loading and dimensions for flag SVG images
                        const flagImgs = element.querySelectorAll('img.flag-icon-inline');
                        flagImgs.forEach(img => {
                            img.setAttribute('loading', 'eager');
                            img.setAttribute('width', '20');
                            img.setAttribute('height', '14');
                            img.style.display = 'inline-block';
                            img.style.verticalAlign = 'middle';
                            img.style.marginLeft = '4px';
                        });
                    }
                } else if (flagIconWrapper) {
                    const clonedWrapper = flagIconWrapper.cloneNode(true);
                    const textNode = document.createTextNode(translation + ' ');
                    element.innerHTML = '';
                    element.appendChild(textNode);
                    element.appendChild(clonedWrapper);
                } else if (ptFlagWrapper) {
                    const clonedWrapper = ptFlagWrapper.cloneNode(true);
                    const textNode = document.createTextNode(translation + ' ');
                    element.innerHTML = '';
                    element.appendChild(textNode);
                    element.appendChild(clonedWrapper);
                } else if (flagIcons.length > 0) {
                    const textNode = document.createTextNode(translation + ' ');
                    element.innerHTML = '';
                    element.appendChild(textNode);
                    flagIcons.forEach(flag => element.appendChild(flag));
                } else {
                    // Special handling for links (A tags)
                    if (element.tagName === 'A') {
                        element.textContent = translation;
                    } else if (translation.includes('<') && (translation.includes('</') || translation.includes('/>'))) {
                        // Translation contains HTML, use innerHTML
                        element.innerHTML = translation;
                    } else {
                        // No HTML in translation, use textContent
                        element.textContent = translation;
                    }
                }
            }
        }
    });
    
    // Update success message text if it exists
    const successMessageText = document.querySelector('#successMessage .success-text');
    if (successMessageText) {
        const successTranslation = getTranslation('appointment.form.success', lang);
        if (successTranslation) {
            successMessageText.textContent = successTranslation;
        }
    }
    
    document.documentElement.lang = lang;
    
    // Highlight numbers in feature texts after translation
    highlightFeatureNumbers();
    
    // Update subtitle width after translation update
    setTimeout(() => {
        updateSubtitleWidth();
    }, 100);
}

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

let lastScroll = 0;
const header = document.getElementById('header');

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

// Form validation
function validateEmail(email) {
    // More strict email validation: must contain @ and valid domain
    // Format: local-part@domain.tld
    // Domain must have at least one dot and valid TLD (2+ characters)
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    
    // Basic check: must contain @
    if (!email.includes('@')) {
        return false;
    }
    
    // Split email into local and domain parts
    const parts = email.split('@');
    if (parts.length !== 2) {
        return false; // Must have exactly one @
    }
    
    const [localPart, domain] = parts;
    
    // Check local part (before @)
    if (!localPart || localPart.length === 0 || localPart.length > 64) {
        return false;
    }
    
    // Check domain (after @)
    if (!domain || domain.length === 0) {
        return false;
    }
    
    // Domain must contain at least one dot
    if (!domain.includes('.')) {
        return false;
    }
    
    // Domain must have valid TLD (at least 2 characters after last dot)
    const domainParts = domain.split('.');
    const tld = domainParts[domainParts.length - 1];
    if (!tld || tld.length < 2) {
        return false;
    }
    
    // Use regex for final validation
    return emailRegex.test(email);
}

function validatePhone(phone) {
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');
    // Ukrainian phone numbers: 10 digits (0501234567) or 12 digits with country code
    return digitsOnly.length >= 10 && digitsOnly.length <= 12;
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    const inputElement = document.getElementById(fieldId);
    if (errorElement && inputElement) {
        errorElement.textContent = message;
        inputElement.classList.add('invalid');
    }
}

function clearError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    const inputElement = document.getElementById(fieldId);
    if (errorElement && inputElement) {
        errorElement.textContent = '';
        inputElement.classList.remove('invalid');
    }
}

function checkFieldValidity(fieldId, value, validator, requiredMessage, invalidMessage) {
    if (!value || !value.trim()) {
        return { isValid: false, message: requiredMessage };
    }
    if (validator && !validator(value)) {
        return { isValid: false, message: invalidMessage };
    }
    return { isValid: true };
}

function validateForm(showErrors = false) {
    const fullname = document.getElementById('fullname');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const terms = document.getElementById('terms');
    
    let isValid = true;
    
    // Validate fullname
    const fullnameCheck = checkFieldValidity(
        'fullname',
        fullname?.value,
        null,
        currentLanguage === 'uk' ? 'Поле ПІБ обов\'язкове для заповнення' :
        currentLanguage === 'en' ? 'Full name is required' :
        'Nome completo é obrigatório',
        ''
    );
    if (!fullnameCheck.isValid) {
        if (showErrors) {
            showError('fullname', fullnameCheck.message);
        }
        isValid = false;
    } else if (showErrors) {
        clearError('fullname');
    }
    
    // Validate phone
    const phoneCheck = checkFieldValidity(
        'phone',
        phone?.value,
        validatePhone,
        currentLanguage === 'uk' ? 'Поле телефону обов\'язкове для заповнення' :
        currentLanguage === 'en' ? 'Phone number is required' :
        'Número de telefone é obrigatório',
        currentLanguage === 'uk' ? 'Введіть коректний номер телефону' :
        currentLanguage === 'en' ? 'Please enter a valid phone number' :
        'Por favor, insira um número de telefone válido'
    );
    if (!phoneCheck.isValid) {
        if (showErrors) {
            showError('phone', phoneCheck.message);
        }
        isValid = false;
    } else if (showErrors) {
        clearError('phone');
    }
    
    // Validate email
    const emailCheck = checkFieldValidity(
        'email',
        email?.value,
        validateEmail,
        currentLanguage === 'uk' ? 'Поле email обов\'язкове для заповнення' :
        currentLanguage === 'en' ? 'Email is required' :
        'Email é obrigatório',
        currentLanguage === 'uk' ? 'Введіть коректну email адресу' :
        currentLanguage === 'en' ? 'Please enter a valid email address' :
        'Por favor, insira um endereço de email válido'
    );
    if (!emailCheck.isValid) {
        if (showErrors) {
            showError('email', emailCheck.message);
        }
        isValid = false;
    } else if (showErrors) {
        clearError('email');
    }
    
    // Validate terms
    if (!terms || !terms.checked) {
        if (showErrors) {
            // Show error for terms if needed
        }
        isValid = false;
    }
    
    return isValid;
}

if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear all previous errors
        clearError('fullname');
        clearError('phone');
        clearError('email');
        
        // Validate form and show errors if validation fails
        if (!validateForm(true)) {
            // Errors are shown by validateForm function
            return;
        }
        
        // If validation passed, submit the form
        const formData = new FormData(appointmentForm);
        Object.fromEntries(formData);
        
        // Show success message
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.classList.add('show');
        }
        
        appointmentForm.reset();
        // Clear errors after successful submission
        clearError('fullname');
        clearError('phone');
        clearError('email');
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            if (successMessage) {
                successMessage.classList.remove('show');
            }
        }, 5000);
    });
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.visibility = 'visible';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .feedback-card, .step-card').forEach(el => {
    el.style.visibility = 'hidden';
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease, visibility 0.6s ease';
    observer.observe(el);
});

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            
            if (img.dataset.src) {
                img.src = img.dataset.src;
                delete img.dataset.src;
            }
            
            const markAsLoaded = () => {
                img.classList.add('loaded');
            };
            
            if (img.complete && img.naturalHeight !== 0) {
                markAsLoaded();
            } else {
                img.addEventListener('load', markAsLoaded, { once: true });
                img.addEventListener('error', markAsLoaded, { once: true });
            }
            
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px'
});

document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    if (img.complete && img.naturalHeight !== 0) {
        img.classList.add('loaded');
    } else {
        imageObserver.observe(img);
    }
});

const scrollToTopButton = document.getElementById('scrollToTop');

function toggleScrollToTopButton() {
    if (!scrollToTopButton) return;
    
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollThreshold = Math.max(viewportHeight * 0.5, 500);
    
    if (scrollPosition > scrollThreshold) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
}

if (scrollToTopButton) {
    window.addEventListener('scroll', toggleScrollToTopButton);
    window.addEventListener('load', toggleScrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initMolochnaDownload();
    initFloatingLabels();
    highlightFeatureNumbers();
});

function highlightFeatureNumbers() {
    const featureTexts = document.querySelectorAll('.feature-text');
    featureTexts.forEach(element => {
        // Перевіряємо, чи вже є обгорнуті числа
        if (element.querySelector('.feature-number')) {
            return; // Вже обгорнуті
        }
        
        // Обробляємо тільки текстові вузли, уникаючи HTML тегів
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            // Перевіряємо, чи текстовий вузол не всередині тегу <a> або іншого тегу
            let parent = node.parentNode;
            let isInsideLink = false;
            while (parent && parent !== element) {
                if (parent.tagName === 'A' || parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') {
                    isInsideLink = true;
                    break;
                }
                parent = parent.parentNode;
            }
            
            if (!isInsideLink && node.textContent.trim().length > 0) {
                textNodes.push(node);
            }
        }
        
        // Регулярний вираз для знаходження тільки чисел (не обгортаємо слова після чисел)
        const numberRegex = /\b(\d+)\b/g;
        
        // Обробляємо кожен текстовий вузол
        textNodes.forEach(textNode => {
            const text = textNode.textContent;
            const matches = [];
            let match;
            
            // Збираємо всі збіги (тільки числа)
            while ((match = numberRegex.exec(text)) !== null) {
                matches.push({
                    number: match[1], // Тільки число
                    index: match.index,
                    length: match[1].length
                });
            }
            
            // Замінюємо з кінця, щоб індекси не змінювалися
            if (matches.length > 0) {
                let newText = text;
                for (let i = matches.length - 1; i >= 0; i--) {
                    const m = matches[i];
                    const replacement = `<span class="feature-number">${m.number}</span>`;
                    newText = newText.substring(0, m.index) + replacement + newText.substring(m.index + m.length);
                }
                
                // Створюємо тимчасовий контейнер для вставки HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newText;
                
                // Замінюємо текстовый вузол на нові вузли
                const fragment = document.createDocumentFragment();
                while (tempDiv.firstChild) {
                    fragment.appendChild(tempDiv.firstChild);
                }
                textNode.parentNode.replaceChild(fragment, textNode);
            }
        });
    });
}

function initFloatingLabels() {
    const floatingInputs = document.querySelectorAll('.floating-label input');
    
    floatingInputs.forEach(input => {
        // Check if input has value on load
        if (input.value) {
            input.classList.add('has-value');
        }
        
        // Handle focus
        input.addEventListener('focus', function() {
            this.classList.add('has-value');
        });
        
        // Handle blur - keep has-value if there's content
        input.addEventListener('blur', function() {
            if (this.value.trim()) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
        
        // Handle input - update has-value class
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    });
}

function downloadPDF() {
    const pdfUrl = 'recipies.pdf';
    const pdfName = 'ukrainska-molochna-drabyna-recepty.pdf';
    
    fetch(pdfUrl)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = pdfName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        })
        .catch(error => {
            const a = document.createElement('a');
            a.href = pdfUrl;
            a.download = pdfName;
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
}

function downloadMolochnaImage() {
    const imageUrl = 'assets/images/molochna-drabyna/2400x1350.jpg';
    const imageName = 'ukrainska-molochna-drabyna.jpg';
    
    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = imageName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        })
        .catch(error => {
            const image = document.getElementById('molochnaDrabynaImg');
            const fallbackUrl = image ? image.src : 'assets/images/molochna-drabyna/2400x1350.jpg';
            const a = document.createElement('a');
            a.href = fallbackUrl;
            a.download = imageName;
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
}

function initMolochnaDownload() {
    const molochnaDrabynaClickable = document.getElementById('molochnaDrabynaClickable');
    const downloadRecipesBtn = document.getElementById('downloadRecipesBtn');
    const recipesImageClickable = document.getElementById('recipesImageClickable');
    
    // Handle click on first image (molochna-drabyna)
    if (molochnaDrabynaClickable) {
        molochnaDrabynaClickable.addEventListener('click', downloadMolochnaImage);
    }
    
    // Handle click on overlay text for first image
    const molochnaImageOverlay = document.querySelector('.molochna-image-overlay');
    if (molochnaImageOverlay && molochnaDrabynaClickable) {
        molochnaImageOverlay.style.pointerEvents = 'auto';
        molochnaImageOverlay.addEventListener('click', function(e) {
            e.stopPropagation();
            downloadMolochnaImage();
        });
    }
    
    if (downloadRecipesBtn) {
        downloadRecipesBtn.addEventListener('click', downloadPDF);
    }
    
    if (recipesImageClickable) {
        recipesImageClickable.addEventListener('click', downloadPDF);
    }
    
    // Also handle click on the overlay text for recipes image
    const recipesImageOverlay = document.querySelector('.recipes-image-overlay');
    if (recipesImageOverlay && recipesImageClickable) {
        recipesImageOverlay.style.pointerEvents = 'auto';
        recipesImageOverlay.addEventListener('click', function(e) {
            e.stopPropagation();
            downloadPDF();
        });
    }
}

