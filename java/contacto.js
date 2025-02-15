document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío predeterminado del formulario

    let isValid = true;

    // Obtener todos los inputs del formulario
    const inputs = document.querySelectorAll('.form-control');
    
    // Limpiar las validaciones anteriores (quitar borde rojo)
    inputs.forEach(input => {
        input.classList.remove("is-invalid");
    });

    // Validación de los campos requeridos
    inputs.forEach(input => {
        if (input.required && !input.value.trim()) {
            input.classList.add("is-invalid"); // Agregar clase de error si el campo está vacío
            isValid = false;
        }
    });

    // Si el formulario es válido, procesar el envío
    if (isValid) {
        alert("Formulario enviado correctamente");
        
        // Reiniciar el formulario después de un envío exitoso
        document.getElementById("formulario-contacto").reset();
        
        // Limpiar cualquier validación después de enviar
        inputs.forEach(input => {
            input.classList.remove("is-invalid");
        });
    } else {
        alert("Por favor, complete todos los campos");
    }
});
