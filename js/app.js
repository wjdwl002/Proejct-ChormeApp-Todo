const USERNAME_KEY = "username"
const HIDDEN_CLASSNAME = "hidden"


const loginForm = document.getElementById("login_form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const savedUsername = localStorage.getItem(USERNAME_KEY);
const greetingElement = document.getElementById("greeting");

if(savedUsername != undefined) {
    greetingElement.classList.remove("hidden");
    greetingElement.innerHTML += savedUsername;
} else {
    loginForm.classList.remove("hidden");
}



function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greetingElement.innerHTML += username;
    greetingElement.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);