document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Crear contenedores de error si no existen
  const nameError = ensureErrorContainer(nameInput);
  const emailError = ensureErrorContainer(emailInput);
  const messageError = ensureErrorContainer(messageInput);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    let isValid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name) {
      nameError.textContent = "Por favor ingrese su nombre.";
      nameInput.classList.add("input-error");
      isValid = false;
    }

    if (!email) {
      emailError.textContent = "El correo electrónico es obligatorio.";
      emailInput.classList.add("input-error");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = "Ingrese un correo electrónico válido.";
      emailInput.classList.add("input-error");
      isValid = false;
    }

    if (!message) {
      messageError.textContent = "El mensaje no puede estar vacío.";
      messageInput.classList.add("input-error");
      isValid = false;
    }

    // Si todo es válido, mostrar mensaje de éxito
    if (isValid) {
      showSuccessMessage(name);
      form.reset();
    }
  });

  function clearErrors() {
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    const previousSuccess = document.getElementById("success-message");
    if (previousSuccess) {
      previousSuccess.remove();
    }
  }

  function ensureErrorContainer(input) {
    let error = input.parentElement.querySelector(".error-message");
    if (!error) {
      error = document.createElement("p");
      error.className = "error-message text-sm text-red-500 mt-1";
      input.parentElement.appendChild(error);
    }
    return error;
  }

  function showSuccessMessage(name) {
    const success = document.createElement("p");
    success.id = "success-message";
    success.textContent = `✅ Gracias por su contacto, ${name}. En breve le estaré respondiendo.`;
    success.className = "text-green-600 font-medium mt-6 text-center";
    form.appendChild(success);
  }

  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("input", () => {
      const errorContainer =
        input.parentElement.querySelector(".error-message");
      errorContainer.textContent = "";
      input.classList.remove("input-error");
    });
  });
});
