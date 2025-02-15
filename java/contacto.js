document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario-compra");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Previene el envío del formulario y la recarga de la página

        let esFormularioValido = true; // Variable para verificar la validez del formulario

        // Obtenemos los campos del formulario
        const nombre = document.getElementById("nombre");
        const apellido = document.getElementById("apellido");
        const mesa = document.getElementById("mesa");
        const pedido = document.getElementById("pedido");

        // Limpiamos los mensajes de error previos
        limpiarErrores();

        // Validación del nombre (mínimo 3 caracteres)
        if (nombre.value.trim().length < 3) {
            esFormularioValido = false;
            mostrarError(nombre, "El nombre debe tener al menos 3 caracteres.");
        }

        // Validación del apellido (mínimo 3 caracteres)
        if (apellido.value.trim().length < 3) {
            esFormularioValido = false;
            mostrarError(apellido, "El apellido debe tener al menos 3 caracteres.");
        }

        // Validación del número de mesa (debe ser mayor que 0)
        if (mesa.value <= 0) {
            esFormularioValido = false;
            mostrarError(mesa, "El número de personas debe ser mayor que 0.");
        }

        // Validación del pedido (mínimo 10 caracteres)
        if (pedido.value.trim().length < 10) {
            esFormularioValido = false;
            mostrarError(pedido, "El pedido debe tener al menos 10 caracteres.");
        }

        // Si la validación es exitosa, mostramos un mensaje de éxito
        if (esFormularioValido) {
            alert("Pedido enviado correctamente.");
            form.reset(); // Limpiar el formulario después de enviarlo
        } else {
            console.log("Errores encontrados. Corrige antes de enviar.");
        }
    });

    // Función para mostrar mensajes de error
    function mostrarError(input, mensaje) {
        input.classList.add("is-invalid");
        let errorMensaje = input.nextElementSibling;
        if (!errorMensaje || errorMensaje.tagName !== "SPAN") {
            errorMensaje = document.createElement("span");
            input.parentNode.insertBefore(errorMensaje, input.nextSibling);
        }
        errorMensaje.textContent = mensaje;
    }

    // Función para limpiar mensajes de error
    function limpiarErrores() {
        const errores = document.querySelectorAll("span");
        errores.forEach(function (error) {
            error.remove(); // Remover los mensajes de error previos
        });
        const inputs = form.querySelectorAll("input, textarea");
        inputs.forEach(function (input) {
            input.classList.remove("is-invalid"); // Limpiar borde rojo
        });
    }
});
