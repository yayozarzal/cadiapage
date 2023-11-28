$(document).ready(function() {
    // Función para agregar un ítem al off-canvas del carrito
    function agregarAlCarrito(nombre, precio) {
        // Crear el elemento del ítem del carrito
        var itemCarrito = $('<div class="carrito-item d-flex justify-content-between align-items-center mb-3"></div>');
        itemCarrito.append($('<span class="item-nombre"></span>').text(nombre));
        itemCarrito.append($('<span class="item-precio"></span>').text('$' + precio));
        var botonEliminar = $('<button class="btn btn-danger btn-sm">X</button>');
        
        // Evento para eliminar un ítem del carrito
        botonEliminar.click(function() {
            $(this).parent().remove(); // Elimina el ítem del carrito
            actualizarContadorCarrito(); // Actualiza el contador del carrito
            actualizarTotalCarrito();
            
        });

        itemCarrito.append(botonEliminar);
        
        // Agregar el ítem al contenedor del carrito
        $('#carrito-items').append(itemCarrito);
        actualizarContadorCarrito(); // Actualiza el contador cada vez que se añade un nuevo ítem
        actualizarTotalCarrito();
    }

    // Manejadores de eventos para los botones de comprar
    $('.comprar-btn').click(function() {
        var nombre = $(this).data('nombre');
        var precio = $(this).data('precio');
        agregarAlCarrito(nombre, precio);
    });

    // Función para actualizar el contador de ítems en el carrito
    function actualizarContadorCarrito() {
        var contador = $('#carrito-items').children().length; // Cuenta los ítems del carrito
        $('#span1').text(contador); // Actualiza el texto del span
    }

    function actualizarTotalCarrito() {
        var total = 0;
        // Suma el precio de cada ítem en el carrito
        $('#carrito-items .carrito-item').each(function() {
          var precio = parseFloat($(this).find('.item-precio').text().replace('$', ''));
          total += precio;
        });
        // Actualiza el texto del total del carrito
        $('#carrito-total').text(total.toFixed(2));
      }

    // Manejador de eventos para vaciar el carrito
    $('#vaciar-carrito').click(function() {
        $('#carrito-items').empty();
        actualizarContadorCarrito(); // Esto establecerá el contador a 0
        actualizarTotalCarrito();
    });
    
});
