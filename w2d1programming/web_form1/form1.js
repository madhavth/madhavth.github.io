let isEmailValid = false;
let isPasswordValid = false;
let isUrlValid = false;

const urlMatchPattern = new RegExp("https?:\\/\\/(?=.*\\.\\w+)([a-zA-Z_.]+)");
const passwordMatchPattern = new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{10,}");
const emailMatchPattern = new RegExp("(?=.*.\\w)([a-zA-Z_.]|\\d)+@[a-zA-Z_.]+");

window.onload = function () {
    "use strict";
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    const buttonSubmit = document.getElementById('submit');
    const inputUrl = document.getElementById('url');

    inputEmail.addEventListener('keyup', () => {
        isEmailValid = validateEmail(inputEmail.value);
        inputEmail.style.borderColor = isEmailValid ? "green": "red";
        toggleSubmitButton();
    });

    inputUrl.addEventListener('keyup', () => {
        isUrlValid = validateUrl(inputUrl.value);
        inputUrl.style.borderColor = isUrlValid ? "green": "red";
        toggleSubmitButton();
    });

    inputPassword.addEventListener('keyup', () => {
        isPasswordValid = validatePassword(inputPassword.value);
        inputPassword.style.borderColor = isPasswordValid ? "green": "red";
        toggleSubmitButton();
    });

    buttonSubmit.addEventListener('click', () => {
        alert("valid email,password and url found... ");
    });

    toggleSubmitButton();
};

function toggleSubmitButton() {
    const isValid = isEmailValid && isPasswordValid && isUrlValid;
    document.getElementById('submit').disabled = !isValid;
}

function validateEmail(string) {
    "use strict";
    return emailMatchPattern.test(string);
}

function validateUrl(string) {
    "use strict";
    return urlMatchPattern.test(string);
}

function validatePassword(password) {
    "use strict";
    return passwordMatchPattern.test(password);
}
