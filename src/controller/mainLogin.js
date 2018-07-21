const buttonRegister = document.getElementById('button-register');
const email = document.getElementById('email');
const nameUser = document.getElementById('nombre');
const password = document.getElementById('password');
const btnFacebook = document.getElementById("facebook");
const btnGoogle = document.getElementById('google');
const registro = document.getElementById('registro');

buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    validatorEmailAndPassword(email.value, password.value, name.value)
 });
btnFacebook.addEventListener('click', () => {
    registerUserFacebook();
 });
btnGoogle.addEventListener('click', () => {
    registerUserGmail();
 });

