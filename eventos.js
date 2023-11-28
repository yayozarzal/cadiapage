$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) { // ajusta esto según la altura deseada
        $("#header-container").addClass("active-header");
    } else {
       // quita la clase si el scroll está en la parte superior de la página
       $("#header-container").removeClass("active-header");
    }
});


 
  
  
  
  
  
  