// ===================================
// Animations & Scroll Effects
// ===================================

// Simple AOS (Animate On Scroll) Implementation
function initAOS() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target.toLocaleString('ar-SA');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString('ar-SA');
        }
    }, 16);
}

// Initialize counters when they come into view
function initCounters() {
    const counters = document.querySelectorAll('.stat-value[data-target]');
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                counters.forEach(counter => {
                    animateCounter(counter);
                });
            }
        });
    }, { threshold: 0.5 });

    if (counters.length > 0) {
        observer.observe(counters[0].closest('.hero-stats'));
    }
}

// Floating Icons Animation
function initFloatingIcons() {
    const icons = document.querySelectorAll('.floating-icon');
    icons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * -2}s`;
    });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initAOS();
    initCounters();
    initFloatingIcons();
});

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initAOS, animateCounter, initCounters, initFloatingIcons };
}
