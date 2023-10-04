//dip button
// const btn = document.querySelector("button");
// if (btn) {
//   btn.onclick = function() {
//     btn.classList.toggle("dipped");
//   };
// }

//answers
var questionCount = 0;
var kScore = 0;
var pScore = 0;
var rScore = 0;

var kq1 = [
  document.getElementById("kq1a1"),
  document.getElementById("kq1a2"),
  document.getElementById("kq1a3"),
  document.getElementById("kq1a4"),
];

var kq2 = [
  document.getElementById("kq2a1"),
  document.getElementById("kq2a2"),
  document.getElementById("kq2a3"),
  document.getElementById("kq2a4"),
];

var kq3 = [
  document.getElementById("kq3a1"),
  document.getElementById("kq3a2"),
  document.getElementById("kq3a3"),
  document.getElementById("kq3a4"),
];

var pq1 = [
  document.getElementById("pq1a1"),
  document.getElementById("pq1a2"),
  document.getElementById("pq1a3"),
  document.getElementById("pq1a4"),
];

var pq2 = [
  document.getElementById("pq2a1"),
  document.getElementById("pq2a2"),
  document.getElementById("pq2a3"),
  document.getElementById("pq2a4"),
];

var pq3 = [
  document.getElementById("pq3a1"),
  document.getElementById("pq3a2"),
  document.getElementById("pq3a3"),
  document.getElementById("pq3a4"),
];

var rq1 = [
  document.getElementById("rq1a1"),
  document.getElementById("rq1a2"),
  document.getElementById("rq1a3"),
  document.getElementById("rq1a4"),
];

var rq2 = [
  document.getElementById("rq2a1"),
  document.getElementById("rq2a2"),
  document.getElementById("rq2a3"),
  document.getElementById("rq2a4"),
];

var rq3 = [
  document.getElementById("rq3a1"),
  document.getElementById("rq3a2"),
  document.getElementById("rq3a3"),
  document.getElementById("rq3a4"),
];

var result = document.getElementById("result");
var restart = document.getElementById("restart");

restart.addEventListener("click", resetGame);

var correctAnswers = [
  pq1[1],
  pq2[0],
  pq3[1],
  rq1[0],
  rq2[0],
  rq3[1],
  kq1[2],
  kq2[0],
  kq3[2],
];
var allQuestions = [pq1, pq2, pq3, rq1, rq2, rq3, kq1, kq2, kq3]

var firstQuestions = [pq1, kq1, rq1]
var secondQuestions = [pq2, kq2, rq2];
var thirdQuestions = [pq3, kq3, rq3];

var default_backgroundColor = allQuestions[0][0].style.backgroundColor;

function runAnswers() {
  for (var i = 0; i < allQuestions.length; i++) {
    for (var j = 0; j < 4; j++) {
      if (!correctAnswers.includes(allQuestions[i][j])) {
        allQuestions[i][j].addEventListener("click", wrong);
      }
    }
  }

  for (var i = 0; i < correctAnswers.length; i++) {
    correctAnswers[i].addEventListener("click", correct);
  }

  questionCount = 0;
}

function correct() {
  kScore += 1;
  rScore += 1;
  pScore += 1;
  questionCount += 1;

  // this.style.color = 'green'
  this.style.backgroundColor = "#93D650";

  if (questionCount === 1) {
    block(firstQuestions); //change to substrings of allQuestions
  }
  if (questionCount === 2) {
    block(secondQuestions);
  }
  if (questionCount === 3) {
    updateResult();
    block(thirdQuestions);
  }
}

function wrong() {
  kScore += 0;
  rScore += 0;
  pScore += 0;
  questionCount += 1;

  // this.style.color = 'red'
  this.style.backgroundColor = "#FF5757";

  if (questionCount === 1) {
    block(firstQuestions); //change to substrings of allQuestions
  }
  if (questionCount === 2) {
    block(secondQuestions);
  }
  if (questionCount === 3) {
    updateResult();
    block(thirdQuestions);
  }
}

//stop reselection of buttons
function block(numQuestions) {
  for (var i = 0; i < numQuestions.length; i++) {
    for (var j = 0; j < 4; j++) {
      numQuestions[i][j].disabled = true;
    }
  }
}

function unblock() {
  for (var i = 0; i < allQuestions.length; i++) {
    for (var j = 0; j < 4; j++) {
      allQuestions[i][j].disabled = false;
    }
  }
}

function updateResult() {
  if (kScore > 2 || rScore > 2 || pScore > 2) {
    result.innerHTML =
      "Your score is " +
      kScore +
      "<br>" +
      "Congrats! you really know your stuff!";
  } else {
    result.innerHTML =
      "Your score is " +
      kScore +
      "<br>" +
      "Hmm. Try again when you feel more confident!";
  }
}

function resetGame() {
  kScore = 0;
  rScore = 0;
  pScore = 0;
  questionCount = 0;
  result.innerHTML = "Your score is...";
  unblock();
  for (var i = 0; i < allQuestions.length; i++) {
    for (var j = 0; j < 4; j++) {
      allQuestions[i][j].style.backgroundColor = default_backgroundColor;
    }
  }
}

//page
document.getElementById("kQuestion1").style.display = "none";
document.getElementById("kQuestion2").style.display = "none";
document.getElementById("kQuestion3").style.display = "none";

document.getElementById("rQuestion1").style.display = "none";
document.getElementById("rQuestion2").style.display = "none";
document.getElementById("rQuestion3").style.display = "none";

document.getElementById("pQuestion2").style.display = "none";
document.getElementById("pQuestion3").style.display = "none";
document.getElementById("pQuestion1").style.display = "none";

function pop() {
  runAnswers();
  unblock();

  document.getElementById("pQuestion1").style.display = "block";
  document.getElementById("pQuestion2").style.display = "block";
  document.getElementById("pQuestion3").style.display = "block";

  document.getElementById("rQuestion1").style.display = "none";
  document.getElementById("rQuestion2").style.display = "none";
  document.getElementById("rQuestion3").style.display = "none";

  document.getElementById("kQuestion2").style.display = "none";
  document.getElementById("kQuestion3").style.display = "none";
  document.getElementById("kQuestion1").style.display = "none";
}

function rap() {
  runAnswers();
  unblock();

  document.getElementById("rQuestion1").style.display = "block";
  document.getElementById("rQuestion2").style.display = "block";
  document.getElementById("rQuestion3").style.display = "block";

  document.getElementById("pQuestion1").style.display = "none";
  document.getElementById("pQuestion2").style.display = "none";
  document.getElementById("pQuestion3").style.display = "none";

  document.getElementById("kQuestion2").style.display = "none";
  document.getElementById("kQuestion3").style.display = "none";
  document.getElementById("kQuestion1").style.display = "none";
}

function kpop() {
  runAnswers();
  unblock();

  document.getElementById("kQuestion1").style.display = "block";
  document.getElementById("kQuestion2").style.display = "block";
  document.getElementById("kQuestion3").style.display = "block";

  document.getElementById("rQuestion1").style.display = "none";
  document.getElementById("rQuestion2").style.display = "none";
  document.getElementById("rQuestion3").style.display = "none";

  document.getElementById("pQuestion2").style.display = "none";
  document.getElementById("pQuestion3").style.display = "none";
  document.getElementById("pQuestion1").style.display = "none";
}
