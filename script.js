/**
 * Local Services Landing Page JavaScript
 * 
 * Features:
 * - Intersection Observer for scroll animations
 * - Mobile menu toggle
 * - Sticky header shrink on scroll  
 * - FAQ accordion functionality
 * - Testimonials carousel
 * - Service modal popups
 * - Contact form validation and submission
 * - Smooth scrolling for anchor links
 * - Accessibility features (keyboard navigation, ARIA)
 */

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initMobileMenu();
    initStickyHeader();
    initFAQAccordion();
    initTestimonialsCarousel();
    initServiceModals();
    initContactForm();
    initSmoothScrolling();
    initImageLazyLoading();
    initServiceMap();
});

/**
 * Intersection Observer for fade-in animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Mobile menu toggle functionality
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', function() {
        const isOpen = !mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            mobileMenu.classList.add('hidden');
            menuBtn.classList.remove('mobile-menu-btn-active');
            menuBtn.setAttribute('aria-expanded', 'false');
        } else {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('mobile-menu-open');
            menuBtn.classList.add('mobile-menu-btn-active');
            menuBtn.setAttribute('aria-expanded', 'true');
        }
    });

    // Close mobile menu when clicking on links
    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuBtn.classList.remove('mobile-menu-btn-active');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            menuBtn.classList.remove('mobile-menu-btn-active');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Enhanced mobile menu with swipe support
    let startX = 0;
    let startY = 0;
    
    mobileMenu.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    mobileMenu.addEventListener('touchend', function(e) {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Swipe up to close menu
        if (Math.abs(diffY) > Math.abs(diffX) && diffY > 50) {
            mobileMenu.classList.add('hidden');
            menuBtn.classList.remove('mobile-menu-btn-active');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * Sticky header that shrinks on scroll
 */
function initStickyHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            header.classList.add('header-shrunk');
        } else {
            header.classList.remove('header-shrunk');
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
}

/**
 * FAQ Accordion functionality
 */
function initFAQAccordion() {
    const faqButtons = document.querySelectorAll('.faq-button');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const content = faqItem.querySelector('.faq-content');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Close all other FAQ items
            faqButtons.forEach(otherButton => {
                if (otherButton !== this) {
                    const otherItem = otherButton.closest('.faq-item');
                    const otherContent = otherItem.querySelector('.faq-content');
                    otherButton.setAttribute('aria-expanded', 'false');
                    otherContent.classList.remove('active');
                    otherContent.classList.add('hidden');
                }
            });
            
            // Toggle current item
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                content.classList.remove('active');
                setTimeout(() => content.classList.add('hidden'), 300);
            } else {
                this.setAttribute('aria-expanded', 'true');
                content.classList.remove('hidden');
                setTimeout(() => content.classList.add('active'), 10);
            }
        });
    });

    // Keyboard navigation
    faqButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown' && index < faqButtons.length - 1) {
                e.preventDefault();
                faqButtons[index + 1].focus();
            } else if (e.key === 'ArrowUp' && index > 0) {
                e.preventDefault();
                faqButtons[index - 1].focus();
            }
        });
    });
}

/**
 * Testimonials carousel
 */
function initTestimonialsCarousel() {
    const track = document.getElementById('testimonials-track');
    const prevBtn = document.getElementById('testimonials-prev');
    const nextBtn = document.getElementById('testimonials-next');
    
    if (!track || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const totalSlides = track.children.length;
    
    function updateCarousel() {
        const translateX = -currentIndex * 100;
        track.style.transform = `translateX(${translateX}%)`;
        
        // Update button states
        prevBtn.classList.toggle('bg-navy', currentIndex === 0);
        prevBtn.classList.toggle('bg-gray-300', currentIndex !== 0);
        nextBtn.classList.toggle('bg-navy', currentIndex === totalSlides - 1);
        nextBtn.classList.toggle('bg-gray-300', currentIndex !== totalSlides - 1);
    }
    
    prevBtn.addEventListener('click', function() {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', function() {
        currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
        updateCarousel();
    });
    
    // Auto-advance carousel
    setInterval(function() {
        currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
        updateCarousel();
    }, 8000);
    
    // Initialize
    updateCarousel();
}

/**
 * Service modal functionality
 */
function initServiceModals() {
    const modal = document.getElementById('service-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('modal-close');
    const serviceButtons = document.querySelectorAll('.service-modal-btn');
    
    if (!modal || !modalTitle || !modalContent || !closeBtn) return;
    
    const serviceDetails = {
        companion: {
            title: 'Companion Care',
            content: 'Non-medical assistance including cooking, cleaning, medication reminders, driving to appointments, running errands, shopping, engaging in hobbies, and providing warm companionship. Our caregivers help maintain independence while ensuring safety and social connection.'
        },
        personal: {
            title: 'Personal Care',
            content: 'Assistance with activities of daily living including bathing, toileting, dressing, grooming, eating assistance, and help with transferring from one physical position to another. Our trained caregivers provide dignified, respectful personal care services.'
        },
        medical: {
            title: 'Medical Care',
            content: 'Professional medical assistance including injections, IV therapy, feeding tube care, respirator support, catheter care, colostomy bag maintenance, diabetes management, and medication administration. Our licensed medical professionals ensure safe, proper care.'
        },
        respite: {
            title: 'Respite Care',
            content: 'Temporary relief for family caregivers who need a break. Our professional caregivers step in to provide the same level of care, allowing family members to rest, run errands, or take time for themselves while knowing their loved one is in capable hands.'
        },
        fulltime: {
            title: '24/7 Care',
            content: 'Round-the-clock care services for seniors who need continuous support and monitoring. We provide live-in caregivers or rotating shift coverage to ensure someone is always available to assist with any needs that arise.'
        },
        specialized: {
            title: 'Specialized Care',
            content: 'Specialized care for seniors with specific conditions such as dementia, Alzheimer\'s disease, Parkinson\'s, stroke recovery, and other chronic conditions. Our caregivers receive specialized training to provide appropriate, compassionate care for these unique needs.'
        }
    };
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const service = this.getAttribute('data-service');
            const details = serviceDetails[service];
            
            if (details) {
                modalTitle.textContent = details.title;
                modalContent.textContent = details.content;
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                
                // Focus the close button for accessibility
                closeBtn.focus();
            }
        });
    });
    
    // Close modal
    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
    
    closeBtn.addEventListener('click', closeModal);
    
    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

/**
 * Contact form validation and submission
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const toast = document.getElementById('success-toast');
    
    if (!form || !toast) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearFormErrors();
        
        // Validate form
        const formData = new FormData(form);
        const errors = validateForm(formData);
        
        if (errors.length > 0) {
            displayFormErrors(errors);
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(function() {
            // TODO: Replace with actual form submission
            // fetch('/submit-form', { method: 'POST', body: formData })
            //     .then(response => response.json())
            //     .then(data => { ... });
            
            // Reset form and show success
            form.reset();
            showSuccessToast();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
    
    function validateForm(formData) {
        const errors = [];
        
        if (!formData.get('name') || formData.get('name').trim().length < 2) {
            errors.push({ field: 'name', message: 'Please enter your full name' });
        }
        
        if (!formData.get('phone') || formData.get('phone').trim().length < 10) {
            errors.push({ field: 'phone', message: 'Please enter a valid phone number' });
        }
        
        const email = formData.get('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            errors.push({ field: 'email', message: 'Please enter a valid email address' });
        }
        
        return errors;
    }
    
    function displayFormErrors(errors) {
        errors.forEach(error => {
            const field = document.getElementById(error.field);
            if (field) {
                field.classList.add('form-error');
                
                // Add error message
                const errorMsg = document.createElement('div');
                errorMsg.className = 'error-message';
                errorMsg.textContent = error.message;
                field.parentNode.appendChild(errorMsg);
            }
        });
        
        // Focus first error field
        if (errors.length > 0) {
            const firstErrorField = document.getElementById(errors[0].field);
            if (firstErrorField) firstErrorField.focus();
        }
    }
    
    function clearFormErrors() {
        form.querySelectorAll('.form-error').forEach(field => {
            field.classList.remove('form-error');
        });
        
        form.querySelectorAll('.error-message').forEach(error => {
            error.remove();
        });
    }
    
    function showSuccessToast() {
        toast.classList.add('toast-show');
        toast.classList.remove('hidden');
        
        setTimeout(function() {
            toast.classList.remove('toast-show');
            toast.classList.add('hidden');
        }, 5000);
    }
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Lazy loading for images
 */
function initImageLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.addEventListener('load', function() {
                    img.classList.add('loaded');
                });
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

/**
 * Initialize interactive service areas map
 */
function initServiceMap() {
    // Initialize map container
    const mapContainers = ['service-map-2'];
    
    mapContainers.forEach(containerId => {
        const mapContainer = document.getElementById(containerId);
        if (!mapContainer) return;

        // Initialize map centered on greater LA area
        const map = L.map(containerId, {
            center: [34.0522, -118.2437], // LA center to show all areas
            zoom: 10,
            minZoom: 9,
            maxZoom: 15,
            scrollWheelZoom: true,
            zoomControl: true
        });

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(map);

        // Define service areas with pinpoint locations (positioned under city names on map)
        const serviceLocations = [
            {
                name: 'San Fernando Valley',
                lat: 34.1880,
                lng: -118.3800
            },
            {
                name: 'Inland Empire', 
                lat: 34.0739,
                lng: -117.3136
            },
            {
                name: 'Rancho Palos Verdes',
                lat: 33.7445,
                lng: -118.3870
            },
            {
                name: 'Manhattan Beach',
                lat: 33.8847,
                lng: -118.4109
            },
            {
                name: 'Pacific Palisades',
                lat: 34.0477,
                lng: -118.5252
            },
            {
                name: 'Beverly Hills',
                lat: 34.0736,
                lng: -118.4004
            },
            {
                name: 'San Pedro',
                lat: 33.7361,
                lng: -118.2922
            },
            {
                name: 'South Bay',
                lat: 33.8500,
                lng: -118.3500
            }
        ];

        // Add small pinpoint circles for each service area
        serviceLocations.forEach(location => {
            const circle = L.circleMarker([location.lat, location.lng], {
                radius: 6,
                color: '#c89b3c',
                weight: 2,
                opacity: 1,
                fillColor: '#c89b3c',
                fillOpacity: 0.8
            }).addTo(map);

            // Add hover effects to the circle
            circle.on('mouseover', function() {
                this.setStyle({
                    radius: 8,
                    color: '#0f2b63',
                    fillColor: '#0f2b63',
                    fillOpacity: 1
                });
            });

            circle.on('mouseout', function() {
                this.setStyle({
                    radius: 6,
                    color: '#c89b3c',
                    fillColor: '#c89b3c',
                    fillOpacity: 0.8
                });
            });

            // Add tooltip that shows on hover
            circle.bindTooltip(location.name, {
                permanent: false,
                direction: 'top',
                offset: [0, -10],
                className: 'service-tooltip'
            });
        });

        // Set max bounds to keep map focused on greater LA area
        const southWest = L.latLng(33.2, -119.2);
        const northEast = L.latLng(34.9, -116.5);
        const bounds = L.latLngBounds(southWest, northEast);
        map.setMaxBounds(bounds);

        // Ensure map renders properly when container becomes visible
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    });
}

/**
 * Keyboard accessibility enhancements
 */
document.addEventListener('keydown', function(e) {
    // Skip to main content (accessibility)
    if (e.key === 'Tab' && e.target === document.body) {
        const main = document.querySelector('main') || document.querySelector('[role="main"]') || document.getElementById('home');
        if (main) {
            main.focus();
        }
    }
});

/**
 * Utility functions
 */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

// Performance monitoring (development only)
if (window.performance && performance.mark) {
    performance.mark('script-loaded');
}