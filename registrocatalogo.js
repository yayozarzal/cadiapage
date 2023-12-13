$(document).ready(function() {
    $('#btnRegistrarArmadura').click(function() {
      var imagenFile = $('#armaduraImagen').prop('files')[0];
      var nombre = $('#armaduraNombre').val();
      var descripcion = $('#armaduraDescripcion').val();
  
      if (imagenFile) {
        var reader = new FileReader();
        reader.onload = function(e) {
          var newRow = $('<tr></tr>');
          var imagenTd = $('<td></td>');
          var nombreTd = $('<td></td>').text(nombre);
          var descripcionTd = $('<td></td>').text(descripcion);
  
          var imgElement = $('<img>', {
            src: e.target.result,
            alt: nombre,
            width: 100
          });
  
          imagenTd.append(imgElement);
          newRow.append(imagenTd).append(nombreTd).append(descripcionTd);
  
          $('.tabla-armaduras tbody').append(newRow);
        };
        reader.readAsDataURL(imagenFile);
      }
    });
  });