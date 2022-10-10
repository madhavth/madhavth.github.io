import {ANIMATIONS} from './animations.js';

let animationId = null;
let isTurboMode = false;
let whichOne = '';
let sizeValues = [];
let isPlaying = false;
let lastFrameIndex = 0;

function initSize() {
    "use strict";
    sizeValues.Tiny = "7pt";
    sizeValues.Small = "10pt";
    sizeValues.Medium = "12pt";
    sizeValues.Large = "16pt";
    sizeValues["Extra Large"] = "24pt";
    sizeValues.XXL = "32pt";
}

initSize();

function startup() {
    "use strict";

    const textSize = document.getElementById('fontsize');
    textSize.addEventListener('change', function () {
        textSizeChanged(textSize);
    });
    textSizeChanged(textSize);

    const turboCheckButton = document.getElementById('turbo');
    turboCheckButton.addEventListener('change', function () {
        toggleTurbo(turboCheckButton.checked);
    });
    isTurboMode = turboCheckButton.checked;

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
    "use strict";
    isPlaying = true;
    toggleButtonDisability();

    if (animationId == null) {
        const textArea = document.getElementById('text-area');

        const animations = ANIMATIONS[whichOne].split('=====\n');
        const length = animations.length;

        animationId = setInterval(() => {
            lastFrameIndex = (lastFrameIndex + 1) % length;
            textArea.textContent = animations[lastFrameIndex];
        }, isTurboMode ? 50 : 250);
    }
}

function stopAnimation(resetFrameIndex = true) {
    isPlaying = false;
    toggleButtonDisability();
    if (animationId != null) {
        clearInterval(animationId);
        animationId = null;

        if (resetFrameIndex) {
            lastFrameIndex = 0;
        }
    }
}

function animationChanged(newAnimation) {
    "use strict";
    whichOne = newAnimation;
    if (isPlaying) {
        stopAnimation();
        startAnimation();
    }
}

function textSizeChanged(textSizeOption) {
    "use strict";
    document.getElementById('text-area')
        .style.fontSize = sizeValues[textSizeOption.value];
}


function toggleTurbo(isChecked) {
    "use strict";
    isTurboMode = isChecked;
    if (isPlaying) {
        stopAnimation(false);
        startAnimation();
    }
}

function toggleButtonDisability() {
    "use strict";
    document.getElementById('start').disabled = isPlaying;
    document.getElementById('stop').disabled = !isPlaying;
}


window.onload = startup;