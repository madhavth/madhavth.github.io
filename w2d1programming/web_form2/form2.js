document.onload = function() {
    "use strict";

    const resetButton = document.getElementsByClassName("reset");
    const formField = document.getElementById('form-fields');

    resetButton.addEventListener('click', function () {
        formField.reset();
        alert('form reset successfully!');
    });
}