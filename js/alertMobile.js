const mobileSize = 900;
let alertMobile = document.getElementById('alertMobile');
let header = document.getElementById("header");

function updateAlert(){
    let size = window.screen.width;
    if(size <= mobileSize){
        alertMobile.style.opacity = 1;
        alertMobile.style.visibility = 'visible';
        inicioView.style.display = 'none';
        sobreMiView.style.display = "none";
        habilidadesView.style.display = "none";
        contactoView.style.display = "none";
        proyectoView.style.display = "none";
        landingPage.style.display = "none";
        header.style.display = "none";
    }else{
        alertMobile.style.opacity = 0;
        alertMobile.style.visibility = 'hidden';
        inicioView.style.display = 'flex';
        sobreMiView.style.display = "flex";
        habilidadesView.style.display = "flex";
        contactoView.style.display = "flex";
        proyectoView.style.display = "flex";
        landingPage.style.display = "flex";
        header.style.display = "flex";
    }
}

updateAlert();

window.addEventListener('resize', updateAlert);