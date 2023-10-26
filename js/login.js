// Captura el formulario
const loginForm = document.getElementById('loginForm');

// Agrega un evento al formulario para manejar el envío
loginForm.addEventListener('submit', function(event) {
event.preventDefault(); // Evita que el formulario se envíe normalmente

// Obtiene los valores del usuario y la contraseña
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

// Valida los campos
if (username == 'admin' || password == 'admin') {
  // Muestra el modal de error con el mensaje correspondiente
  document.getElementById('error-message').textContent = 'Por favor no sea ridiculo, usted no es admin.';
  $('#errorModal').modal('show');
} else {
  console.log('Inicio de sesión exitoso'); //Okidoki
}
});