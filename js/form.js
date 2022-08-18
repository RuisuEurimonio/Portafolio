let button = document.getElementById("buttonForm");

button.addEventListener("click", ()=>{
    let name = document.getElementById("name").value;
    let message = document.getElementById("mensaje").value;
    if(name === "" || message === ""){
        alert("Faltan datos.")
    }else{
        alert("Lo voy a tener en cuenta.")
    }
})