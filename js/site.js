window.onload=function(){alert('Bienvenido a la Pagina Web');}

window.onload = function()
// Para internet Explorer
{document.onselectstart = function(){return false;} 
// Para Firefox
document.onmousedown = function(){return false;}}


document.body.oncopy = function() {
    alert('Todos los derechos reservados. NorfiPC © 2019');
    return false;};