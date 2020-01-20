const email = window.document.querySelector('#email');
const password = window.document.querySelector('#password');
const mensaje = window.document.querySelector('#mensaje');
const boton = window.document.querySelector('#boton');
boton.addEventListener('click', mostrarDatos);



function mostrarDatos() {
  const emailValue = email.value;
  const passwordValue = password.value;
  if (emailValue === 'nacho' && passwordValue === '123') {
     console.log('email: ' + emailValue);
     console.log('password: ' + passwordValue);
     console.log('Iniciando sesión…');
     document.location.assign('./../home/index.html');
     email.value = '';
     password.value = ''; 
     email.focus();

  } else {
    console.log('Email y/o Contraseña incorrectos');
  }
 

}