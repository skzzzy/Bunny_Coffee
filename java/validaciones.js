document.getElementById("formulario-compra").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío predeterminado del formulario

    let isValid = true;

    // Obtener todos los inputs del formulario
    const inputs = document.querySelectorAll('.formulario-compra input, .formulario-compra select, .formulario-compra textarea');

    // Limpiar las validaciones anteriores (quitar borde rojo)
    inputs.forEach(input => {
        input.classList.remove("error"); // Eliminar clase de error si la tiene
    });

    // Validación de los campos requeridos
    inputs.forEach(input => {
        if (input.required && !input.value.trim()) {
            input.classList.add("error"); // Agregar clase de error si el campo está vacío
            isValid = false;
        }
    });

    // Si el formulario es válido, procesar el envío
    if (isValid) {
        // Aquí iría el código para enviar el formulario o hacer lo que necesites
        alert("Formulario enviado correctamente");
        
        // Reiniciar el formulario después de un envío exitoso
        document.getElementById("formulario-compra").reset();
        
        // Limpiar cualquier validación después de enviar
        inputs.forEach(input => {
            input.classList.remove("error");
        });
    } else {
        alert("Por favor, complete todos los campos");
    }
});
