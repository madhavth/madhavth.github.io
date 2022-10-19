"use strict";

const statusGame = "Click the \"S\" to begin.";
const statusGameLost = "You lost";
const statusGameWon = "You WON !!!";
const statusGameInProgress = "Avoid touching boundaries";

let gameInProgress = false;

$(function () {
    const $start = $("#start");
    const $end = $("#end");

    $start.click(function () {
        if (!gameInProgress) {
            startGame();
        }
    });

    $end.mouseover(function () {
        if (gameInProgress) {
            gameWon();
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

    const $progress = $(".boundary.example");

    $maze.mousemove(function (event) {
        if (gameInProgress) {
            // calculateProgress(event, $progress, $start, $end);
        }
    });

});

function startGame() {
    gameInProgress = true;
    $("#maze div.boundary").removeClass("youlose");
    $("#status").text(statusGameInProgress);
}

function gameLost(selector = "#maze div.boundary") {
    gameInProgress = false;
    $(selector).addClass("youlose");
    $("#status").text(statusGame + "\n" + statusGameLost);
}

function gameWon() {
    gameInProgress = false;
    $("#status").text(statusGame + "\n" + statusGameWon);
}