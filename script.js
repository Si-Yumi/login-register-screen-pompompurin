const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const backLogin = document.getElementById("backLogin");
const register = document.getElementById("register");
const erroText = document.getElementById("erroText");
const loginCard = document.getElementById("loginCard");
const registerCard = document.getElementById("registerCard");

register.addEventListener('click', function() {
    
    loginCard.style.display = "none";
    registerCard.style.display = "flex";
});

backLogin.addEventListener('click', function() {

    registerCard.style.display = "none";
    loginCard.style.display = "flex";
});

loginButton.addEventListener('click', function() {

    erroText.style.display = "block";
    erroText.style.opacity = "1";

    setTimeout(function() {
        erroText.style.opacity = "0";
        erroText.style.transition = "1s";
    }, 2000);
});

registerButton.addEventListener('click', function() {

    erroText.style.display = "block";
    erroText.style.opacity = "1";

    setTimeout(function() {
        erroText.style.opacity = "0";
        erroText.style.transition = "1s";
    }, 2000);
});