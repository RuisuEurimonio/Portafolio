//botones.
let sobreMiBtn = document.getElementById("sobreMi");
let habilidadesBtn = document.getElementById("habilidades")
let proyectosBtn = document.getElementById("proyectos")
let contactoBtn = document.getElementById("contacto")
let inicioBtn = document.getElementById("inicio")

//vistas
let inicio = document.getElementById("section--inicio");
let sobreMiView = document.getElementById("section--sobreMi");

sobreMiBtn.addEventListener("click", ()=>{
    inicio.style.top = "100vh"
})