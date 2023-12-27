const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const loginLink = document.getElementById('loginLink');

document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName');
    if (userName) {
        loginLink.textContent = userName;
        loginLink.href = 'profile.html';
        loginLink.addEventListener('click', (event) => {
            window.location.href = 'profile.html';
        });
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var userName = document.getElementById('userNameInput').value;
    localStorage.setItem('userName', userName);
    window.location.href = 'register-success.html';
});

signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});
