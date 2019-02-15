var correct = 0;
var incorrect = 0;
var unanswered = 0;

//use jQuery to reveal the questions div on clicking "startbutton"
$("#startbutton").click(show);

function show() {
  if (document.getElementById("questionsdiv").style.display == "none") {
    document.getElementById("questionsdiv").style.display = "block";
  }
}

if (document.getElementById("china").checked == true) {
  incorrect++;
  showIncorrect();
}

console.log(incorrect);

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
