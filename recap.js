let cambiar=document.querySelector("#et_mobile_nav_menu");
let menu=document.querySelector("#mobile_menu");

function changeclase() {
    if (menu.style.display=="block") {
        menu.style.display="none"
    } else {
        menu.style.display="block"
    }
   
}


cambiar.addEventListener("click", changeclase);



let subjet="gerente.imprerenta@hotmail.com"
let too=document.querySelector("#et_pb_contact_email_0");
let body=document.querySelector("#MENSAJE");
let enviar=document.querySelector("#correo");

function enviarcorreo(sub,a,cuerpo) {
    window.open('mailto:'+sub+'?subject='+too+'&body='+body);
}


enviar.addEventListener("click", enviarcorreo);