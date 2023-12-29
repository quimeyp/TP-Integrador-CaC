document.getElementById("resumenButton").addEventListener("click", function (event) {
    // Evitar recarga web
    event.preventDefault();

    // Valor del número de tickets del usuario
    const cantidadTickets = parseInt(document.getElementById("cantidadTickets").value);

    // Valor de la categoría seleccionada por el usuario
    const categoriaSeleccionada = document.getElementById("categoriaSeleccion").value;

    // Definir descuentos
    const descuentos = {
        estudiante: 0.8,  // 80% de descuento para estudiantes
        trainee: 0.5,     // 50% de descuento para trainees
        junior: 0.15,      // 15% de descuento para juniors
        general: 0
    };

    // Calcular el precio total con descuento
    const precioBase = 200; // Precio base del ticket
    const descuento = descuentos[categoriaSeleccionada] || 0; // Obtener el descuento
    const precioFinal = cantidadTickets * precioBase * (1 - descuento); // Calcular el precio final

    // Mostrar el precio final
    document.getElementById("precioFinal").textContent = precioFinal.toFixed(2);
});

document.getElementById("borrarButton").addEventListener("click", function (event) {
    // Evitar la recarga de la página
    event.preventDefault();

    // Limpiar el valor de la cantidad de tickets
    document.getElementById("cantidadTickets").value = "";

    // Restablecer la selección de categoría
    document.getElementById("categoriaSeleccion").selectedIndex = 0;

    // Limpiar el precio final
    document.getElementById("precioFinal").textContent = "0.00";
});