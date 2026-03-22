// ===============================
// TESTIMONIOS DESDE API
// ===============================

const container = document.getElementById("testimonials-container");

const clientNames = [
    "Carlos Ramírez",
    "Laura Méndez",
    "Andrés Torres"
];

async function loadTestimonials() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/comments?_limit=3"
        );

        const data = await response.json();

        container.innerHTML = "";

        data.forEach((item, index) => {

            const article = document.createElement("article");

            const quote = document.createElement("span");
            quote.textContent = "❝";

            const name = document.createElement("h3");
            name.textContent = clientNames[index];

            const message = document.createElement("p");

            // usamos textContent para evitar XSS
            message.textContent = item.body;

            article.appendChild(quote);
            article.appendChild(name);
            article.appendChild(message);

            container.appendChild(article);

        });

    } catch (error) {

        container.textContent = "No se pudieron cargar los testimonios.";

        console.error(error);

    }

}

loadTestimonials();



// ===============================
// MENU RESPONSIVE
// ===============================

const menuButton = document.querySelector("nav button");
const menu = document.getElementById("menu-principal");

menuButton.addEventListener("click", () => {

    const expanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", !expanded);

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";

    }

});



// ===============================
// VALIDACION FORMULARIO
// ===============================

const form = document.getElementById("contact-form");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let errors = [];

    if (nombre.value.trim() === "") {

        errors.push("El nombre es obligatorio");

    }

    if (correo.value.trim() === "") {

        errors.push("El correo es obligatorio");

    }

    if (!correo.value.includes("@")) {

        errors.push("El correo no es válido");

    }

    if (mensaje.value.trim() === "") {

        errors.push("El mensaje es obligatorio");

    }

    if (errors.length > 0) {

    alert(errors.join("\n"));

    return;

}

      const data = {
        nombre: nombre.value,
        correo: correo.value,
        mensaje: mensaje.value
    };
    localStorage.setItem("contacto", JSON.stringify(data));

    fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    .then(response => response.text())

    .then(result => {
        alert("Mensaje enviado correctamente");
        form.reset();
    })

    .catch(error => {
        console.error(error);
        alert("Error al enviar el mensaje");
    });

});

