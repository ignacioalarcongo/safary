const irWhatzapp =  document.querySelector('#btn-what');
const irzpo =  document.querySelector('#btn-zpo');    
const irhome =  document.querySelector('#btn-home');       

irWhatzapp.addEventListener('click', nav_wsp);
irzpo.addEventListener('click', nav_spf);
irhome.addEventListener('click', nav_hm);

function nav_wsp() {
    const contDinamico  = document.querySelector('#contenido-dinamico');
    contDinamico.setAttribute('src','../whatzapp/index.html');
    
}
function nav_spf() {
    const contDinamico  = document.querySelector('#contenido-dinamico');
    contDinamico.setAttribute('src', '../zpotify/index.html');
    
}
function nav_hm() {
    const contDinamico  = document.querySelector('#contenido-dinamico');
    contDinamico.setAttribute('src', '../layout/index.html');
    
}