var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

$(document).keydown(function (event) {
    if (!gameStarted) {
    $("h1").text("Level " + level);
    nextSequence();
    gameStarted = true;
    }
});

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playButtonSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence () {
    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playButtonSound(randomChosenColor);

    return randomChosenColor;
}

function playButtonSound(color) {
    const audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success")
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout (function (){
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    }
    else {
        console.log("wrong");
        playButtonSound("wrong");
        $("body").addClass("game-over");
        setTimeout (function (){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    };
}

function startOver() {
    gameStarted = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}
