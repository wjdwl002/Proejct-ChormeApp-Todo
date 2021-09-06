const loginForm = document.getElementById("login_form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem('username', username);
    console.log(username);
    const greeting = document.getElementById("greeting");
    greeting.innerHTML += username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);