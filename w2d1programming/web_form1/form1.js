let isEmailValid = false;
let isPasswordValid = false;

const emailMatchPattern = new RegExp("https?:\\/\\/(?=.*\\.\\w+)([a-zA-Z_.]+)");
const passwordMatchPattern = new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{10,}");

window.onload = function () {
    "use strict";
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    const buttonSubmit = document.getElementById('submit');

    inputEmail.addEventListener('keyup', () => {
        isEmailValid = validateEmail(inputEmail.value);
        toggleSubmitButton();
    });

    inputPassword.addEventListener('keyup', () => {
        isPasswordValid = validatePassword(inputPassword.value);
        toggleSubmitButton();
    });

    buttonSubmit.addEventListener('click', () => {
        alert("valid email and password found... ");
    });

    toggleSubmitButton();
};

function toggleSubmitButton() {
    const isValid = isEmailValid && isPasswordValid;
    document.getElementById('submit').disabled = !isValid;
}


function validateEmail(string) {
    "use strict";
    return emailMatchPattern.test(string);
}

function validatePassword(password) {
    "use strict";
    return passwordMatchPattern.test(password);
}