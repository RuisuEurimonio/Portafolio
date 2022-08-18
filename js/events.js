//botones de navbar
let sobreMiBtn = document.getElementById("sobreMi");
let habilidadesBtn = document.getElementById("habilidades")
let proyectosBtn = document.getElementById("proyectos")
let contactoBtn = document.getElementById("contacto")
let inicioBtn = document.getElementById("inicio")

//botones de Inicio
let sobreMiInicio = document.getElementById("sobreMiInicio");
let habilidadesInicio = document.getElementById("habilidadesInicio");
let proyectosInicio = document.getElementById("proyectosInicio");
let contactameInicio = document.getElementById("contactameInicio");

//Botones de sobreMi.
let inicioSobreMi = document.getElementById("inicioSobreMi");

//Botones de habilidades.
let inicioHabilidades = document.getElementById("inicioHabilidades");

//Botones de contacto
let inicioContacto = document.getElementById("inicioContacto");

//vistas generales
let inicioView = document.getElementById("section--inicio");
let sobreMiView = document.getElementById("section--sobreMi");
let habilidadesView = document.getElementById("section--habilidades");
let contactoView = document.getElementById("section--contacto");

//Eventos Botones Inicio
sobreMiInicio.addEventListener("click",inicioToSobreMi);
habilidadesInicio.addEventListener("click", inicioToHabilidades);
proyectosInicio.addEventListener("click",()=>{});
contactameInicio.addEventListener("click",inicioToContacto);

inicioSobreMi.addEventListener("click",sobreMiToInicio);
inicioHabilidades.addEventListener("click",habilidadesToInicio);
inicioContacto.addEventListener("click",contactoToInicio)

function timeChangeNavbar(element){
    setTimeout(function(){
        inicioBtn.classList.toggle("list__item_header--active");
        element.classList.toggle("list__item_header--active");
    }, 2500)
}

function inicioToSobreMi(){
    inicioView.style.top = "100vh";
    sobreMiView.style.top = "0";
    timeChangeNavbar(sobreMiBtn);
}

function inicioToHabilidades(){
    inicioView.style.right = "100vw";
    habilidadesView.style.right = "0";
    timeChangeNavbar(habilidadesBtn);
}

function inicioToContacto(){
    inicioView.style.right = "-100vw";
    contactoView.style.right = "0";
    timeChangeNavbar(contactoBtn);
}

function sobreMiToInicio(){
    sobreMiView.style.top = "-100vh";
    inicioView.style.top = "0";
    timeChangeNavbar(sobreMiBtn);
}

function habilidadesToInicio(){
    habilidadesView.style.right = "-100vw"
    inicioView.style.right= "0"
    timeChangeNavbar(habilidadesBtn);
}

function contactoToInicio(){
    inicioView.style.right = "0";
    contactoView.style.right = "100vw";
    timeChangeNavbar(contactoBtn);
}