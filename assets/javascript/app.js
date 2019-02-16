var correct = 0;
var incorrect = 0;
var unanswered = 0;

//use jQuery to reveal the questions div on clicking "startbutton"
$("#startbutton").click(show);

//Show timer and questions div upon clicking startbutton
function show() {
  if (document.getElementById("centraldiv").style.display == "none") {
    document.getElementById("centraldiv").style.display = "block";
    runtimer();
  }
}

// Countdown timer
var number = 60;
var intervalId;
function runtimer() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
function decrement() {
  number--;
  $("#displaytimer").text(number);
}

setTimeout(timeUp, 61000);
function timeUp() {
  $("#displaytimer").text("Time's Up!");
  clearInterval(intervalId);
}

//Show correct and incorrect answers upon click
$(document).ready(function() {
  $("input[type=radio]").click(function() {
    if (this.value == "Japan") {
      correct++;
      showCorrect();
      alert("Good Job!");
    } else if (this.value == "Korea" || this.value == "China") {
      incorrect++;
      showIncorrect();
    } else {
      unanswered++;
      showUnanswered();
    }
  });
});

//functions to show correct, incorrect, and unanswered
function showCorrect() {
  document.getElementById("numcorrect").innerHTML = correct;
}
function showIncorrect() {
  document.getElementById("numincorrect").innerHTML = incorrect;
}
function showUnanswered() {
  document.getElementById("numunanswered").innerHTML = unanswered;
}
