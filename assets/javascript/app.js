var correct = 0;
var incorrect = 0;
var unanswered = 0;
var question1 = {
  question: "Ramen is considered the specialized cuisine of which country?",
  choices: ["Japan", "China", "Korea"],
  correctanswer: "Japan"
};
var question2 = {
  question: "Pad thai is considered the specialized cuisine of which country?",
  choices: ["Japan", "Thailand", "Korea"],
  correctanswer: "Thailand"
};
var questionsArray = [question1, question2];
var position = 0;
// console.log(questions[position]);

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

//research labels and radio inputs, associating labels with radio inputs, labels and radio inputs getting data form
//radio input value? (one id for label? one for input?)

//next steps:
//user clicks on an input
//user clicks submit
//input.value is checked
//if it is the right answer alert correct
//if it is wrong alert incorrect
function showQuestionAndAnswers() {
  //show question
  for (let i = 0; i < questionsArray.length; i++) {
    console.log(currentQuestion);
    var currentQuestion = questionsArray[i];
    $("#question").text(currentQuestion.question);

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
}

$("input[type=radio]").click(function() {
  // if (this.value == "") {
  //   correct++;
  //   showCorrect();
  //   alert("Good Job!");
  // }
  for (let i = 0; i < questionsArray.length; i++) {
    console.log(this.value);
    if (this.value === questionsArray[i].correctanswer) {
      console.log("you won!");
    }
  }
});

//Submit button event listener
// $("#submitbutton").click(showQuestionAndAnswers());

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
// $(document).ready(function() {
//   $("#submitbutton").click(function() {
//     if (input[(type = radio)].value == "Japan") {
//       correct++;
//       showCorrect();
//       alert("Good Job!");
//     } else if (this.value == "Korea" || this.value == "China") {
//       incorrect++;
//       showIncorrect();
//     } else {
//       unanswered++;
//       showUnanswered();
//     }
//   });
// });

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

// showQuestionAndAnswers();
