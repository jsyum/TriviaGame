var correct = 0;
var incorrect = 0;
var unanswered = 0;
var question1 = {
  question: "Ramen is considered the specialized cuisine of which country?",
  choices: ["Japan", "China", "Korea"],
  correctanswer: "Japan"
};
var question2 = {
  question: "Which was the first noodle eaten in space?",
  choices: ["Spaghetti", "Ramen", "Macaroni"],
  correctanswer: "Ramen"
};
var question3 = {
  question:
    "The yellow tinge of ramen noodles is from being made with water infused with",
  choices: ["Baking Soda", "Salt", "Sugar"],
  correctanswer: "Baking Soda"
};
var question4 = {
  question: "At the end of WWII, ramen was commonly distributed through",
  choices: ["Grocery stores", "Small businesses", "The black market"],
  correctanswer: "The black market"
};
var question5 = {
  question:
    "Living to the age of 96, Momofuku Ando (inventor of instant ramen) attributed his long life to",
  choices: ["Exercise", "Eating ramen almost daily", "Good sleep"],
  correctanswer: "Eating ramen almost daily"
};

var questionsArray = [question1, question2, question3, question4, question5];
var position = 0;

//use jQuery to reveal the questions div on clicking "startbutton"
$("#startbutton").click(show);

//Show timer and questions div upon clicking startbutton
function show() {
  if (document.getElementById("centraldiv").style.display == "none") {
    document.getElementById("centraldiv").style.display = "block";
    showQuestionAndAnswers();
    runtimer();
  }
}

// Displays new set of questions and answers
function showQuestionAndAnswers() {
  //show question
  var currentQuestion = questionsArray[position];
  $("#question").text(currentQuestion.question);
  console.log(questionsArray[position]);

  //show answers
  //whatever input has this id, set the value to this choice
  var option1 = currentQuestion.choices[0];
  $("#option1label").text(option1);
  $("#option1").attr("value", option1);

  var option2 = currentQuestion.choices[1];
  $("#option2label").text(option2);
  $("#option2").attr("value", option2);

  var option3 = currentQuestion.choices[2];
  $("#option3label").text(option3);
  $("#option3").attr("value", option3);
}

// Submit button event listener
$("#submitbutton").click(function() {
  checkResults();
  position++;
  showQuestionAndAnswers();
});

//function to check results
function checkResults() {
  if (
    $("input:radio[name='optradio']:checked").val() ==
    questionsArray[position].correctanswer
  ) {
    correct++;
    showCorrect();
    alert("Good Job!");
  } else {
    incorrect++;
    showIncorrect();
    alert(
      "Sorry! The correct answer was " + questionsArray[position].correctanswer
    );
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
