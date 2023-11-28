$(document).ready(function() {

    let currentImageIndex = 0; // Comenzar con la primera imagen
  const totalImages = $('.imagen-galeria img').length; // Total de imágenes

  // Resaltar la imagen actual
  function highlightImage(index) {
    $('.imagen-galeria img').removeClass('highlighted');
    $('.imagen-galeria img').eq(index).addClass('highlighted');
  }

  // Inicialmente resaltar la primera imagen
  highlightImage(currentImageIndex);

  // Evento para navegar con las teclas de flecha
  $(document).keydown(function(e) {
    if (e.key === 'ArrowRight') { // Flecha derecha - siguiente imagen
      if (currentImageIndex < totalImages - 1) {
        currentImageIndex++;
        highlightImage(currentImageIndex);
      }
    } else if (e.key === 'ArrowLeft') { // Flecha izquierda - imagen anterior
      if (currentImageIndex > 0) {
        currentImageIndex--;
        highlightImage(currentImageIndex);
      }
    } else if (e.key === 'Enter') { // Enter - abrir imagen
      $('.imagen-galeria img').eq(currentImageIndex).click();
    }
  });
    
    $('.imagen-galeria img').click(function() {
      var src = $(this).attr('src'); // Obtiene el src de la imagen clickeada
      $('#imagenAmpliada').attr('src', src); // Establece el src en el modal
      $('#imagenModal').modal('show'); // Abre el modal
    });
  });