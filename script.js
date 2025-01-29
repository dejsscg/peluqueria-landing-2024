// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Configurar fecha mínima como hoy
const fechaInput = document.getElementById('fecha');
if (fechaInput) {
    const today = new Date().toISOString().split('T')[0];
    fechaInput.min = today;
}

// Manejo del formulario
const form = document.getElementById('reservationForm');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        servicio: document.getElementById('servicio').value,
        fecha: document.getElementById('fecha').value,
        hora: document.getElementById('hora').value,
        timestamp: new Date().toISOString()
    };

    try {
        // Reemplazar esta URL con la URL de tu Google Apps Script Web App
        const response = await fetch('TU_URL_DE_GOOGLE_APPS_SCRIPT', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        // Mostrar mensaje de éxito
        alert('¡Gracias por tu reserva! Te contactaremos pronto para confirmar tu cita.');
        form.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al enviar tu reserva. Por favor, intenta nuevamente.');
    }
});

// Efecto de navbar al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = 'white';
    }
});
