// ===================================
// Professional Features JavaScript
// ===================================

// 1. Loading Screen
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loadingScreen');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    });
});

// 2. Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 3. Cookie Consent Banner
const cookieBanner = document.getElementById('cookieBanner');
const acceptCookies = document.getElementById('acceptCookies');
const declineCookies = document.getElementById('declineCookies');

// Check if user has already made a choice
if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
        cookieBanner.classList.add('show');
    }, 2000);
}

acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner.classList.remove('show');
});

declineCookies.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    cookieBanner.classList.remove('show');
});

// 4. Live Chat Widget
const chatButton = document.getElementById('chatButton');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');

chatButton.addEventListener('click', () => {
    chatWindow.classList.toggle('open');
});

chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('open');
});

// Chat send functionality (placeholder)
const chatInput = document.querySelector('.chat-input');
const chatSend = document.querySelector('.chat-send');
const chatBody = document.querySelector('.chat-body');

function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'chat-message user';
        userMsg.innerHTML = `<div class="message-content" style="background: var(--gradient-primary); color: white; margin-left: auto;">${message}</div>`;
        chatBody.appendChild(userMsg);

        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;

        // Simulate bot response
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'chat-message bot';
            botMsg.innerHTML = `<div class="message-content">شكراً لرسالتك! سيتواصل معك أحد ممثلي الدعم قريباً.</div>`;
            chatBody.appendChild(botMsg);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}

chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// 5. Demo Modal
const demoModal = document.getElementById('demoModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

// Open modal when clicking "شاهد العرض التوضيحي" buttons
document.querySelectorAll('.btn-secondary').forEach(btn => {
    if (btn.textContent.includes('شاهد العرض التوضيحي')) {
        btn.addEventListener('click', () => {
            demoModal.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    }
});

// Close modal functions
function closeModal() {
    demoModal.classList.remove('open');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && demoModal.classList.contains('open')) {
        closeModal();
    }
});

// 6. Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;

    // Simulate subscription
    alert(`شكراً للاشتراك! تم إرسال رسالة تأكيد إلى ${email}`);
    newsletterForm.reset();
});

// 7. Trust Section Counter Animation
function animateTrustCounters() {
    const trustNumbers = document.querySelectorAll('.trust-number[data-count]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-count'));
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

                observer.unobserve(element);
            }
        });
    }, { threshold: 0.5 });

    trustNumbers.forEach(num => observer.observe(num));
}

// Initialize trust counters
animateTrustCounters();

// Auto-show chat after delay (optional)
setTimeout(() => {
    if (!chatWindow.classList.contains('open')) {
        // Pulse animation on chat button
        chatButton.style.animation = 'pulse 0.5s ease-in-out 3';
    }
}, 5000);

// Console Easter Egg
console.log('%c🚗 Cars Services System', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%cمرحباً بك! هل تبحث عن شيء معين؟ 🔍', 'font-size: 14px; color: #666;');
console.log('%cتواصل معنا للحصول على عرض خاص! 🎁', 'font-size: 14px; color: #667eea; font-weight: bold;');
