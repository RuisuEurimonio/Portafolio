let landingPage = document.getElementById("landingPage");

window.addEventListener("load", function() {
    setTimeout(function() {
        landingPage.style.opacity= 0;
        setTimeout(function() {
            landingPage.style.visibility = "hidden";
        })
    }, 3000)
})