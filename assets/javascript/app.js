//use jQuery to reveal the questions div on clicking "startbutton"
$("#startbutton").click(show);

function show() {
  if (document.getElementById("questionsdiv").style.display == "none") {
    document.getElementById("questionsdiv").style.display = "block";
  }
}

// document.getElementById("button1").addEventListener("click", function(){

//     document.getElementById("box").style.height = "250px";
//     document.getElementById("box").style.width = "250px";

// });
