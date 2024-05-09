document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch('usuarios.json')
        .then(response => response.json())
        .then(data => {
            var user = data.usuarios.find(user => user.username === username && user.password === password);
            if (user) {
                // Si son válidos, redirigir a la página de empleados
                window.location.href = "empleados.html";
            } else {
                // Si no son válidos, mostrar un mensaje de error
                alert("Usuario o contraseña incorrectos");
            }
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
});