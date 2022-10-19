"use strict";

const statusGame = "Click the \"S\" to begin.";
const statusGameLost = "You lost";
const statusGameWon = "You WON !!!";
const statusGameInProgress = "Avoid touching boundaries";

let gameInProgress = false;

$(function () {
    $("#start").click(
        function () {
            if (!gameInProgress) {
                startGame();
            }
        }
    );

    $("#end").mouseover(
        function () {
            if (gameInProgress) {
                gameWon();
            }
        }
    );

    $("div.boundary").mouseover(function(event) {
        if(gameInProgress) {
            gameLost();
        }
    });

    $("div#maze").mouseleave(function() {
       if(gameInProgress) {
           gameLost();
       }
    });

});

function startGame() {
    gameInProgress = true;
    $("#maze div.boundary").removeClass("youlose");
    $("#status").text(statusGameInProgress);
}

function gameLost() {
    gameInProgress = false;
    $("#maze div.boundary").addClass("youlose");
    $("#status").text(statusGame + "\n" + statusGameLost);
}

function gameWon() {
    gameInProgress = false;
    $("#status").text(statusGame + "\n" + statusGameWon);
}