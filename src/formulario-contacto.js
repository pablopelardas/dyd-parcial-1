// Con el formulario en el sitio personal como estudiante de la facultad. Configurar los  inputs del mismo para darles un estilo igual a cada uno (puede ser color, pseudoclases, etc.), definir los id o clases para su programación en JavaScript para la validación del formulario.
// .   
// Programar una función con JavaScript que Muestre un mensaje cuando el usuario toque el botón de enviar el formulario.   
// Si los datos no fueron completados o son erroneos (ejemplo; no ingresa un email válido), debe dar un mensaje de error con la información a corregir.
// En caso de haber completado bien el formulario. Debe presentar un mensaje que diga gracias por su contacto (Nombre de la persona que escribió ) y el texto que diga "en breve le estaré respondiendo".

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitButton = document.getElementById("submit-button");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Validación de campos
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Validación de email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Por favor, ingrese un email válido.");
            return;
        }

        // Si todo está correcto, muestra el mensaje de agradecimiento
        alert(`Gracias por su contacto, ${nameInput.value}. En breve le estaré respondiendo.`);
        
        // Opcional: Reiniciar el formulario
        form.reset();
    });
});