function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aquí puedes agregar la lógica de autenticación
    // Por ahora, solo mostraremos un mensaje en la consola y en la interfaz de usuario.
    console.log("Intento de inicio de sesión...");

    // Verificación básica (ejemplo)
    if (username === "usuario" && password === "contraseña") {
        document.getElementById('login-message').innerText = "Inicio de sesión exitoso!";
    } else {
        document.getElementById('login-message').innerText = "Credenciales incorrectas. Inténtalo de nuevo.";
    }
}
