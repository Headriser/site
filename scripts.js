document.addEventListener('DOMContentLoaded', () => {
    if (!window.emailjs || !emailjs.send) {
        alert("EmailJS не загрузился! Проверьте блокировщики рекламы или интернет-соединение.");
        return;
    }
    // Добавить текущий год в подвал
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Обработчик отправки формы
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const serviceID = "service_4yaw7jj"; // Замените на ваш Service ID
        const templateID = "template_ksjnwei";
        
        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
    
        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                alert('Сообщение успешно отправлено!');
                this.reset();
            })
            .catch(error => {
                console.error('Полная информация об ошибке:', error);
                alert(`Ошибка: ${error.text || 'Проверьте консоль для деталей'}`);
            });
    });

})

