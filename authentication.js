
$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();

        // Aquí iría la validación con el servidor, pero para el ejemplo, solo comprobamos un usuario y contraseña estáticos
        var userEmail = $('#email1').val();
        var userPassword = $('#password1').val();

        // Simulando un usuario y contraseña correctos (en producción, esto se hace en el servidor)
        var correctEmail = 'admin@example.com';
        var correctPassword = 'password123';

        if (userEmail === correctEmail && userPassword === correctPassword) {
            // Credenciales correctas, redirige a la página de admin
            window.location.href = 'registropage.html';
        } else {
            // Credenciales incorrectas, muestra error
            $('#loginError').show();
        }
    });
});

