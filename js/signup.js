// Captura el formulario de registro
const signupForm = document.getElementById('signupForm');

// Agrega un evento al formulario para manejar el envío
signupForm.addEventListener('submit', function(event) {
event.preventDefault(); // Evita que el formulario se envíe normalmente

// Obtiene los valores del usuario, correo electrónico y contraseña
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

// Valida los campos
if (username === 'admin' || email === 'admin@softkeyshop.com' || password === 'admin') {
  // Muestra el modal de error con el mensaje correspondiente
  document.getElementById('error-message').textContent = 'El usuario ya existe.';
  $('#errorModal').modal('show');
} else {
  console.log('Registro exitoso'); //Okdoki
}
});