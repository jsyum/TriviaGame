var correct = 0;
var incorrect = 0;
var unanswered = 0;

//use jQuery to reveal the questions div on clicking "startbutton"
$("#startbutton").click(show);

//Show timer and questions div upon clicking startbutton
function show() {
  if (document.getElementById("questionsdiv").style.display == "none") {
    document.getElementById("questionsdiv").style.display = "block";
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

//Show correct and incorrect answers upon click
$(document).ready(function() {
  $("input[type=radio]").click(function() {
    if (this.value == "Japan") {
      correct++;
      showCorrect();
      alert("Good Job!");
    } else {
      incorrect++;
      showIncorrect();
    }
  });
});
// function incorrect() {
//   if (document.getElementById("china").checked == true) {
//     incorrect++;
//     showIncorrect();
//   }
// }

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
