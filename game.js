var gamePattern = [];
var userClickedPattern = [];
var buttonColours = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "orange",
  "purple",
];
var level = 0;
var start = 1;

$(document).keydown(function (event) {
  key = event.key;
  if (start === 1) {
    nextSequence();
    $("h1").text("Level " + level);
    $("h2").text("");
    start = 0;
  }
});

// function checkEquality(array1, array2) {
//   const result = JSON.stringify(array1) == JSON.stringify(array2);
//   if (result == true) return true;
//   else return false;
// }
function oddbodsName(name){
if (name==="purple"){
  return "Jeff 💜";
}
else if (name==="pink"){
  return "Newt 💗";
}
else if (name==="red"){
  return "Fuse 💓 ";
}
else if (name==="yellow"){
  return "Bubbles 💛";
}
else if (name==="green"){
  return "Zee 💚";
}
else if (name==="orange"){
  return "Slick 🧡";
}
else if (name==="blue"){
  return "Pogo 💙";
}
else{
  return "Nothing"
}
}

function checkAnswer(leveli) {

  if (userClickedPattern[leveli] === gamePattern[leveli]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }

  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    name_odd=gamePattern[userClickedPattern.length-1];
    $("h2").text("You Got " + oddbodsName(name_odd) +" Wrong!!");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
  

    restart();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level = level + 1;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 7);
  randomChosenColor = buttonColours[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
//Animating Buttons
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
function restart() {
  level = 0;
  userClickedPattern = [];
  gamePattern = [];
  start = 1;
}
