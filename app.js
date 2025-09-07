// Portfolio Website JavaScript - Interactive Features
class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupTypingAnimation();
        this.setupScrollAnimations();
        this.setupSkillsAnimation();
        this.setupStatsAnimation();
        this.setupFormHandling();
        this.setupSmoothScrolling();
    }

    // Navigation functionality
    setupNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navClose = document.getElementById('nav-close');
        const navLinks = document.querySelectorAll('.nav__link');

        // Toggle mobile menu
        const toggleMenu = () => {
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        };

        // Close mobile menu
        const closeMenu = () => {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (navToggle) {
            navToggle.addEventListener('click', toggleMenu);
        }
        
        if (navClose) {
            navClose.addEventListener('click', closeMenu);
        }

        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu && navToggle && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                closeMenu();
            }
        });
    }

    // Header scroll effects
    setupScrollEffects() {
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Active nav link highlighting
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav__link');

        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    // Typing animation for hero section
    setupTypingAnimation() {
        const typingText = document.getElementById('typing-text');
        if (!typingText) return;
        
        const phrases = [
            'Machine Learning Engineer',
            'Python Developer', 
            'AI Enthusiast',
            'Deep Learning Specialist',
            'Data Scientist'
        ];
        
        let currentPhrase = 0;
        let currentChar = 0;
        let isDeleting = false;
        
        const typeSpeed = 100;
        const deleteSpeed = 50;
        const pauseTime = 2000;

        const type = () => {
            const current = phrases[currentPhrase];
            
            if (isDeleting) {
                typingText.textContent = current.substring(0, currentChar - 1);
                currentChar--;
            } else {
                typingText.textContent = current.substring(0, currentChar + 1);
                currentChar++;
            }

            let speed = isDeleting ? deleteSpeed : typeSpeed;

            if (!isDeleting && currentChar === current.length) {
                speed = pauseTime;
                isDeleting = true;
            } else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentPhrase = (currentPhrase + 1) % phrases.length;
            }

            setTimeout(type, speed);
        };

        // Start typing animation after a short delay
        setTimeout(type, 1000);
    }

    // Scroll-triggered animations using Intersection Observer
    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.about__container, .skills__container, .projects__container, .awards__container, .contact__container');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    
                    // Trigger specific animations based on element
                    if (entry.target.classList.contains('skills__container')) {
                        this.animateSkillBars();
                    }
                    if (entry.target.classList.contains('about__container')) {
                        this.animateStats();
                    }
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }

    // Skills progress bar animation
    setupSkillsAnimation() {
        this.skillsAnimated = false;
    }

    animateSkillBars() {
        if (this.skillsAnimated) return;
        
        const skillItems = document.querySelectorAll('.skill__item');
        
        skillItems.forEach((item, index) => {
            const progressBar = item.querySelector('.skill__progress-bar');
            const skillLevel = item.getAttribute('data-skill');
            
            setTimeout(() => {
                if (progressBar) {
                    progressBar.style.width = `${skillLevel}%`;
                }
            }, index * 200);
        });
        
        this.skillsAnimated = true;
    }

    // Stats counter animation
    setupStatsAnimation() {
        this.statsAnimated = false;
    }

    animateStats() {
        if (this.statsAnimated) return;
        
        const statNumbers = document.querySelectorAll('.stat__number');
        
        statNumbers.forEach(stat => {
            const target = parseFloat(stat.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (target % 1 !== 0) {
                        stat.textContent = current.toFixed(2);
                    } else {
                        stat.textContent = Math.ceil(current);
                    }
                    setTimeout(updateCounter, 20);
                } else {
                    stat.textContent = target % 1 !== 0 ? target.toFixed(2) : target;
                }
            };
            
            updateCounter();
        });
        
        this.statsAnimated = true;
    }

    // Smooth scrolling for navigation links - FIXED
    setupSmoothScrolling() {
        // Handle all navigation links and scroll buttons
        document.addEventListener('click', (e) => {
            // Check if clicked element is a link with hash
            if (e.target.matches('a[href^="#"]') || e.target.closest('a[href^="#"]')) {
                const link = e.target.matches('a[href^="#"]') ? e.target : e.target.closest('a[href^="#"]');
                const targetId = link.getAttribute('href');
                
                // Skip if it's just a hash without ID
                if (targetId === '#' || targetId.length <= 1) return;
                
                e.preventDefault();
                
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const header = document.getElementById('header');
                    const headerHeight = header ? header.offsetHeight : 70;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // Form handling - ENHANCED
    setupFormHandling() {
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(contactForm);
            });

            // Real-time form validation
            const inputs = contactForm.querySelectorAll('.form__input');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearFieldError(input));
            });
        }
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error styles
        field.classList.remove('error');
        this.removeErrorMessage(field);

        // Check if field is required and empty
        if (!value && field.required) {
            isValid = false;
            errorMessage = 'This field is required';
        } else if (value) {
            // Validate based on field type/name
            switch (field.type) {
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid email address';
                    }
                    break;
                case 'text':
                    if (field.name === 'name' && value.length < 2) {
                        isValid = false;
                        errorMessage = 'Name must be at least 2 characters long';
                    }
                    if (field.name === 'subject' && value.length < 3) {
                        isValid = false;
                        errorMessage = 'Subject must be at least 3 characters long';
                    }
                    break;
                default:
                    if (field.tagName === 'TEXTAREA' && value.length < 10) {
                        isValid = false;
                        errorMessage = 'Message must be at least 10 characters long';
                    }
            }
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add('error');
        
        const errorElement = document.createElement('span');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
    }

    removeErrorMessage(field) {
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    clearFieldError(field) {
        field.classList.remove('error');
        this.removeErrorMessage(field);
    }

    handleFormSubmission(form) {
        const formData = new FormData(form);
        const fields = form.querySelectorAll('.form__input');
        let isFormValid = true;

        // Clear any existing errors
        fields.forEach(field => {
            this.clearFieldError(field);
        });

        // Validate all fields
        fields.forEach(field => {
            if (!this.validateField(field)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            this.showNotification('Please correct the errors in the form', 'error');
            return;
        }

        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate form submission (in real implementation, this would send to a server)
        setTimeout(() => {
            this.showNotification('Thank you! Your message has been sent successfully.', 'success');
            form.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Clear any remaining field errors
            fields.forEach(field => {
                this.clearFieldError(field);
            });
        }, 2000);
    }

    showNotification(message, type) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification__close">&times;</button>
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        const autoRemoveTimer = setTimeout(() => {
            if (notification && notification.parentNode) {
                notification.classList.add('notification--fade-out');
                setTimeout(() => {
                    if (notification && notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);

        // Manual close
        const closeButton = notification.querySelector('.notification__close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                clearTimeout(autoRemoveTimer);
                notification.classList.add('notification--fade-out');
                setTimeout(() => {
                    if (notification && notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            });
        }
    }
}

// Utility functions for enhanced user experience
class PortfolioUtils {
    static addHoverEffects() {
        // Add tilt effect to cards
        const cards = document.querySelectorAll('.project__card, .about__card, .award__card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    }

    static addParallaxEffect() {
        const floatingShapes = document.querySelectorAll('.floating-shape');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            floatingShapes.forEach((shape, index) => {
                const speed = 0.5 + (index * 0.1);
                shape.style.transform = `translateY(${parallax * speed}px)`;
            });
        });
    }

    static addCursorEffects() {
        // Only add cursor effects on desktop
        if (window.innerWidth <= 768) return;
        
        // Custom cursor for interactive elements
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        const interactiveElements = document.querySelectorAll('a, button, .project__card, .skill__item');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor--hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor--hover'));
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main portfolio app
    new PortfolioApp();
    
    // Add enhanced effects for desktop users
    if (window.innerWidth > 768) {
        PortfolioUtils.addHoverEffects();
        PortfolioUtils.addParallaxEffect();
        
        // Only add cursor effects if user prefers motion
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            PortfolioUtils.addCursorEffects();
        }
    }
});

// Add CSS for dynamic elements
const dynamicStyles = `
<style>
/* Error states for form validation */
.form__input.error {
    border-color: #ef4444 !important;
    background-color: rgba(239, 68, 68, 0.1) !important;
}

.field-error {
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: block;
}

/* Notification styles */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--portfolio-card-bg);
    color: var(--portfolio-text-light);
    padding: 1rem 1.5rem;
    border-radius: 8px;
    border-left: 4px solid #3b82f6;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 1rem;
    backdrop-filter: blur(10px);
    animation: slideIn 0.3s ease;
    max-width: 400px;
}

.notification--success {
    border-left-color: #10b981;
}

.notification--error {
    border-left-color: #ef4444;
}

.notification__close {
    background: none;
    border: none;
    color: var(--portfolio-text-light);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
}

.notification--fade-out {
    animation: slideOut 0.3s ease forwards;
}

@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOut {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

/* Custom cursor */
.custom-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    background: rgba(59, 130, 246, 0.5);
    border: 2px solid #3b82f6;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.1s ease;
    mix-blend-mode: difference;
    display: none;
}

@media (min-width: 769px) {
    .custom-cursor {
        display: block;
    }
}

.cursor--hover {
    transform: scale(1.5);
    background: rgba(59, 130, 246, 0.8);
}

/* Active nav link */
.nav__link.active {
    color: #3b82f6;
}

.nav__link.active::after {
    width: 100%;
}

/* Enhanced card transforms */
.project__card,
.about__card,
.award__card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Mobile menu animation */
.nav__toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.nav__toggle.active span:nth-child(2) {
    opacity: 0;
}

.nav__toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

/* Responsive improvements */
@media screen and (max-width: 768px) {
    .notification {
        left: 20px;
        right: 20px;
        top: auto;
        bottom: 20px;
    }
    
    .custom-cursor {
        display: none !important;
    }
}
</style>
`;

// Inject dynamic styles
document.head.insertAdjacentHTML('beforeend', dynamicStyles);

// Performance optimization: Debounce scroll events
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Apply debouncing to scroll events for performance
const debouncedScrollHandler = debounce(() => {
    // Additional scroll handling if needed
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Preload critical resources
const preloadCriticalResources = () => {
    // Preload fonts if using web fonts
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link);
};

preloadCriticalResources();