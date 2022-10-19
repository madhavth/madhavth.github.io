"use strict";

const statusGame = "Click the \"S\" to begin.";
const statusGameLost = "You lost";
const statusGameWon = "You WON !!!";
const statusGameInProgress = "Avoid touching boundaries";

let gameInProgress = false;

$(function () {
    const $start = $("#start");
    const $end = $("#end");
    const $progress = $("#progress");

    $start.click(function () {
        if (!gameInProgress) {
            startGame();
        }
    });

    $end.mouseover(function () {
        if (gameInProgress) {
            gameWon($progress);
            setProgress($progress, 100);
        }
    });

    $("div.boundary").mouseover(function (event) {
        if (!gameInProgress) {
            return;
        }

        if (event.target.id === "boundary1") {
            gameLost("div#boundary1.boundary");
            event.stopImmediatePropagation();
            return false;
        }

        gameLost();
    });

    const $maze = $("div#maze");

    $maze.mouseleave(function () {
        if (gameInProgress) {
            gameLost();
        }
    });


    $maze.mousemove(function (event) {
        if (gameInProgress) {
            const progress = calculateProgress(event, $progress, $start, $end);
            setProgress($progress, progress);
        }
    });

});

function startGame() {
    gameInProgress = true;
    $("#progress").css('background-color','green');
    $("#maze div.boundary").removeClass("youlose");
    $("#status").text(statusGameInProgress);
}

function gameLost(selector = "#maze div.boundary") {
    $("#progress").css('background-color','red');
    gameInProgress = false;
    $(selector).addClass("youlose");
    $("#status").text(statusGame + "\n" + statusGameLost);
}

function gameWon() {
    gameInProgress = false;
    $("#status").text(statusGame + "\n" + statusGameWon);
}

function calculateProgress(event, $progress, $start, $end) {
    // console.log(event.pageX, $start.offset().left, $end.offset().left + $end.width());
    let percentage = (event.pageX - $start.offset().left) / ($end.offset().left - $start.offset().left) * 100;
    if (percentage < 0) {
        percentage = 0;
    }
    if (percentage > 100) {
        percentage = 100;
    }
    return percentage.toFixed(2);
}

function setProgress($progress, progress) {
    $("div#progress").css('width', progress/100 * parseInt($("div.boundary.example").css('width')));
    $progress.text(progress + "%");
}