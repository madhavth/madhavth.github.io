"use strict";

let numberOfCircles = 12;
let initWidth = 50;
let growthTimeInMillis = 250;

let circleTimeOutIdsMap = {};
let circlePositionMap = {};

let growthRate = 10;
let started = false;

const arrayOfColorFunctions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


$(function () {
    $("#start").click(createCircles);
    $("#reset").click(resetCircles);
    setDefaults();
    setTextChangeListeners();
});

function setTextChangeListeners() {
    $("#textWidth").keyup(function () {
        initWidth = $(this).val();
    });

    $("#textGrowthInterval").keyup(function () {
        growthTimeInMillis = parseInt($(this).val());
    });

    $("#textGrowthAmount").keyup(function () {
        growthRate = parseInt($(this).val());
    });

    $("#textCirclesNumber").keyup(function () {
        const oldNumberOfCircles = numberOfCircles;
        numberOfCircles = parseInt($(this).val());

        if (numberOfCircles === undefined || numberOfCircles < 0) {
            numberOfCircles = 0;
        }

        changeNumberOfCircles(oldNumberOfCircles, numberOfCircles);
    });
}

function changeNumberOfCircles(oldCircleCount, newNumberOfCircles) {
    if (oldCircleCount === newNumberOfCircles) {
        return;
    }

    createCircles();
    // if (newNumberOfCircles > oldCircleCount) {
    //     createCircles(oldCircleCount === 0, newNumberOfCircles - oldCircleCount);
    // } else {
    //     popCircles(oldCircleCount - newNumberOfCircles);
    // }
}

function popCircles(count) {
    $(".circle").each(function (index, element) {
        if (index >= count) {
            return false;
        }

        $(element).remove();
    });
}


function setDefaults() {
    $("#textCirclesNumber").attr("value", numberOfCircles);
    $("#textGrowthInterval").attr("value", growthTimeInMillis);
    $("#textGrowthAmount").attr("value", growthRate);
    $("#textWidth").attr("value", initWidth);
}

function createCircles(reset = true, circleCount = numberOfCircles) {
    started = true;
    if (reset) {
        resetCircles();
    }

    const circlesList = [];
    for (let i = 0; i < circleCount; i++) {
        const circle = createCircle(initWidth, i);
        circlesList.push(circle);
    }

    $("#container").append(circlesList);
}

function resetCircles() {
    started = false;
    $(".circle").remove();
    for (let key in circleTimeOutIdsMap) {
        clearTimeout(circleTimeOutIdsMap[key]);
    }
}

function createCircle(width = initWidth, index) {

    const randomTop = Math.random() * screen.height / 1.2;
    const randomLeft = Math.random() * screen.width / 1.2;

    const circle = $("<div>", {
        "class": "circle", "css": {
            "height": width + "px",
            "width": width + "px",
            "border-radius": "50%",
            "background-color": getRandomColor(),
            "position": "absolute",
            "top": randomTop,
            "left": randomLeft,
        },
    });

    const moveLeft = 3 * Math.random();
    const moveTop = 3 * Math.random();

    circle.left = Math.random() < 0.5 ? -moveLeft : moveLeft;
    circle.top = Math.random() < 0.5 ? -moveTop : moveTop;

    // circlePositionMap[circle] = {
    //     left, top
    // };

    circle.click(function () {
        circle.remove();
    });

    circle.hover(function () {
        $(this).css("opacity", "0.5");
    }, function () {
        $(this).css("opacity", "1.0");
    });

    growCircle(circle, index);

    return circle;
}


function growCircle(circle, index) {
    const increasedPixels = parseInt(circle.css('width')) + growthRate + "px";
    circle.css('width', increasedPixels)
        .css('height', increasedPixels)
        .css('left', parseInt(circle.css('left')) + circle.left * Math.random())
        .css('top', parseInt(circle.css('top')) + circle.top * Math.random());
    circleTimeOutIdsMap[circle] = setTimeout(growCircle.bind(this, circle), growthTimeInMillis);
}


function getRandomColor() {
    let randomColorString = '#';

    for (let x = 0; x < 6; x++) {
        let index = Math.floor(Math.random() * 16)
        let value = arrayOfColorFunctions[index]

        randomColorString += value;
    }

    return randomColorString;
}