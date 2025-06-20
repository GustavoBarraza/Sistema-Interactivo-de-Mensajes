document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("submit");
    const result = document.getElementById("result");

    button.addEventListener("click", () => {
        const name = document.getElementById("name").value.trim();
        const ageInput = document.getElementById("age").value.trim();
        const age = parseInt(ageInput);

        if (!name || !ageInput) {
            result.textContent = "Por favor, completa todos los campos.";
            result.style.color = "red";
            return;
        }

        if (isNaN(age)) {
            result.textContent = "La edad debe ser un número válido.";
            result.style.color = "red";
        } else if (age < 18) {
            result.textContent = `Hola ${name}, eres menor de edad.¡Sigue aprendiendo y disfrutando del código!`;
            result.style.color = "orange";
        } else {
            result.textContent = `Hola ${name}, ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
            result.style.color = "green";
        }
    });
});
