// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initializeForm();
});

/**
 * Initialize form handling
 */
function initializeForm() {
    const form = document.getElementById('booking-form');
    const phoneInput = document.getElementById('phone');

    // Format phone number as user types
    phoneInput.addEventListener('input', formatPhoneNumber);

    // Handle form submission
    form.addEventListener('submit', handleFormSubmit);

    // Add animation to service cards
    initializeServiceCards();
}

/**
 * Format phone number input
 */
function formatPhoneNumber(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits

    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    if (value.length > 2) {
        if (value.length <= 6) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length <= 10) {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
        } else {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
        }
    }

    e.target.value = value;
}

/**
 * Handle form submission
 */
function handleFormSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        time: document.getElementById('time').value,
        service: document.querySelector('input[name="service"]:checked')?.value
    };

    // Validate form
    if (!validateForm(formData)) {
        return;
    }

    // Generate WhatsApp message
    const whatsappURL = generateWhatsAppURL(formData);

    // Track conversion (ready for analytics)
    trackConversion(formData);

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');

    // Show success feedback
    showSuccessFeedback();
}

/**
 * Validate form data
 */
function validateForm(data) {
    if (!data.name) {
        alert('Por favor, digite seu nome completo.');
        document.getElementById('name').focus();
        return false;
    }

    if (!data.phone || data.phone.length < 14) {
        alert('Por favor, digite um número de telefone válido.');
        document.getElementById('phone').focus();
        return false;
    }

    if (!data.service) {
        alert('Por favor, selecione o serviço desejado.');
        return false;
    }

    if (!data.time) {
        alert('Por favor, selecione o melhor horário para contato.');
        document.getElementById('time').focus();
        return false;
    }

    return true;
}

/**
 * Generate WhatsApp URL with pre-filled message
 */
function generateWhatsAppURL(data) {
    const whatsappNumber = '5521976086122'; // FisioVip WhatsApp number

    const message = `Olá! Gostaria de agendar uma consulta na FisioVip.

📝 *Dados para Agendamento:*

👤 Nome: ${data.name}
📱 Telefone: ${data.phone}
🏥 Serviço: ${data.service}
⏰ Melhor horário: ${data.time}

Aguardo retorno para confirmar a data e horário da consulta. Obrigado(a)!`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}

/**
 * Track conversion (placeholder for analytics)
 */
function trackConversion(data) {
    console.log('Conversion tracked:', data);

    // Add your analytics tracking here
    // Example: gtag('event', 'conversion', { ... });
    // Example: fbq('track', 'Lead', { ... });
}

/**
 * Show success feedback
 */
function showSuccessFeedback() {
    const submitButton = document.querySelector('.btn-submit');
    const originalHTML = submitButton.innerHTML;

    submitButton.innerHTML = `
        <i data-lucide="check-circle"></i>
        <span>Redirecionando para WhatsApp...</span>
    `;
    submitButton.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

    lucide.createIcons();

    setTimeout(() => {
        submitButton.innerHTML = originalHTML;
        submitButton.style.background = '';
        lucide.createIcons();
    }, 3000);
}

/**
 * Initialize service card animations
 */
function initializeServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(23, 223, 217, 0.3)';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.transform = 'translate(-50%, -50%) scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';

            card.style.position = 'relative';
            card.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: translate(-50%, -50%) scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Add smooth scroll behavior
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * Add fade-in animation on scroll
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements that should fade in
document.querySelectorAll('.testimonial-card').forEach(el => {
    observer.observe(el);
});
