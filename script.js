// Мобильное меню
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Анимация при прокрутке
const animateOnScroll = () => {
    const animatedElements = document.querySelectorAll('.animated');
    const windowHeight = window.innerHeight;
    
    animatedElements.forEach(element => {
        const elementPos = element.getBoundingClientRect().top;
        const animationPoint = windowHeight - 100;
        
        if (elementPos < animationPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Инициализация анимаций
document.addEventListener('DOMContentLoaded', () => {
    // Анимация элементов при загрузке
    const animatedElements = document.querySelectorAll('.animated');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        el.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Запускаем анимацию при загрузке
    setTimeout(animateOnScroll, 100);
    
    // И при прокрутке
    window.addEventListener('scroll', animateOnScroll);
});

// Обработка форм
const handleFormSubmit = (formId, successMessage) => {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь должна быть реальная отправка формы
            // Для демонстрации просто показываем сообщение
            alert(successMessage || 'Форма успешно отправлена!');
            form.reset();
        });
    }
};

// Инициализация обработчиков форм
document.addEventListener('DOMContentLoaded', () => {
    handleFormSubmit('appointmentForm', 'Запись на прием успешно отправлена! Мы свяжемся с вами для подтверждения.');
});