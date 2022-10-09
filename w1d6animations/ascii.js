import {ANIMATIONS} from './animations';

let animationId = null;
let isTurboMode = false;
let whichOne = '';
let sizeValues = [];
let isPlaying = false;
let currentAnimations = [];

function initSize() {
    sizeValues["Tiny"] = "7pt";
    sizeValues["Small"] = "10pt";
    sizeValues["Medium"] = "12pt";
    sizeValues["Large"] = "16pt";
    sizeValues["Extra Large"] = "24pt";
    sizeValues["XXL"] = "32pt";
}

initSize();

function startup() {
    "use strict";

    const textSize = document.getElementById('fontsize');
    textSize.addEventListener('change', function () {
        textSizeChanged(textSize);
    })

    const turboCheckButton = document.getElementById('turbo');
    turboCheckButton.addEventListener('change', function () {
        toggleTurbo(turboCheckButton.checked);
    });

    const startButton = document.getElementById('start');
    startButton.addEventListener('click', function () {
        startAnimation();
    });

    const stopButton = document.getElementById('stop');
    stopButton.addEventListener('click', stopAnimation);

    const animationOptions = document.getElementById('animation');

    whichOne = animationOptions.value;
    animationOptions.addEventListener('change', function () {
        animationChanged(animationOptions.value);
    });

    const textArea = document.getElementById('text-area');
    textArea.textContent = ANIMATIONS[whichOne];

}

function startAnimation() {
    isPlaying = true;
    if (animationId == null) {
        animationId = setInterval(() => {

        }, isTurboMode ? 50 : 250);
    }
}

function stopAnimation() {
    isPlaying = false;
    if (animationId != null) {
        clearInterval(animationId);
        animationId = null;

    }
}

function animationChanged(newAnimation) {
    whichOne = newAnimation;
    if (isPlaying) {
        stopAnimation();
        startAnimation();
    }
}

function textSizeChanged(textSizeOption) {
    textSizeOption.style.fontSize = sizeValues[textSizeOption.value];
}


function toggleTurbo(isChecked) {
    if (isPlaying) {
        stopAnimation();
        startAnimation();
    }
    isTurboMode = isChecked;
}


window.onload = startup;