// getting the id for each element in the DOM
const startQuizButton = document.getElementById("startQuizButton");
const title = document.getElementById("title");
const ParagraphQuestions = document.getElementById("ParagraphQuestions");
const answersButtonsDiv = document.getElementById("answersButtonsDiv");
const nextQuestionDiv = document.getElementById("nextQuestionDiv");
const quizResultDiv = document.getElementById("quizResultDiv");

//setting an Event Listener to the startQuizButton to begin the quiz
startQuizButton.addEventListener("click", firstQuestion);

//setting the score initially to zero;
let score = 0;

// function for the first Question, which display the Question, answer buttons and submit button(next question)
function firstQuestion() {
  startQuizButton.hidden = true;

  const question =
    "which array method adds an element to the end of the array?";

  const choices = ["pop()", "push()", "shift()", "unshift()"];
  const answer = "push()";

  title.innerHTML = "JavaScript Fundamentals Quiz";

  ParagraphQuestions.innerText = question;
  // looping through each answer buttons in the choices array
  for (let i = 0; i < choices.length; i++) {
    const answerButton = document.createElement("button");
    answerButton.innerText = choices[i];
    answerButton.className = "w-100 p-3";
    answersButtonsDiv.appendChild(answerButton);

    // adding event listener to answer buttons,
    // and check for the right, wrong answers and score
    answerButton.addEventListener("click", function () {
      //selecting all the buttons in the answersButtonsDiv div
      let allAnswerButtons = answersButtonsDiv.querySelectorAll("button");
      if (answerButton.innerText === answer) {
        answerButton.className = "w-100 p-3 btn btn-success";
        score++;
      } else if (answerButton.innerText !== answer) {
        answerButton.className = "w-100 p-3 btn btn-danger";
        //looping through all buttons in the answersButtonsDiv div
        // and display the correct once if the user chose the wrong one
        for (let i = 0; i < allAnswerButtons.length; i++) {
          if (allAnswerButtons[i].innerText === answer) {
            allAnswerButtons[i].className = "w-100 p-3 btn btn-success";
          }
        }
      }
      // looping thought answers buttons and disable all of them
      for (let i = 0; i < allAnswerButtons.length; i++) {
        allAnswerButtons[i].disabled = true;
        nextQuestionButton.disabled = false;
      }
    });
  }

  // create, style and add event listener to the Next Question button
  const nextQuestionButton = document.createElement("button");
  nextQuestionButton.innerText = "Next Question";
  nextQuestionButton.className = "w-100 p-3 mt-5 btn btn-primary";
  nextQuestionButton.disabled = true;
  nextQuestionButton.addEventListener("click", nextQuestionSet);
  nextQuestionDiv.appendChild(nextQuestionButton);
}

//function for the second Question, which display the Question, answer buttons and submit button(show result)
function nextQuestionSet() {
  answersButtonsDiv.innerHTML = "";
  nextQuestionDiv.innerHTML = "";

  const question = "How do you write a conditional statement in javaScript?";

  const choices = [
    "if(condition){}",
    "if condition {}",
    "if condition then {}",
    "if{condition}",
  ];
  const answer = "if(condition){}";

  title.innerHTML = "JavaScript Fundamentals Quiz";

  ParagraphQuestions.innerText = question;

  for (let i = 0; i < choices.length; i++) {
    const answerButton = document.createElement("button");
    answerButton.innerText = choices[i];
    answerButton.className = "w-100 p-3";
    answersButtonsDiv.appendChild(answerButton);

    answerButton.addEventListener("click", function () {
      let allAnswerButtons = document.querySelectorAll("button");
      if (answerButton.innerText === answer) {
        answerButton.className = "w-100 p-3 btn btn-success";
        score++;
      } else if (answerButton.innerText !== answer) {
        answerButton.className = "w-100 p-3 btn btn-danger";
        for (let i = 0; i < allAnswerButtons.length; i++) {
          if (allAnswerButtons[i].innerText === answer) {
            allAnswerButtons[i].className = "w-100 p-3 btn btn-success";
          }
        }
      }

      for (let i = 0; i < allAnswerButtons.length; i++) {
        allAnswerButtons[i].disabled = true;
        nextQuestionButton.disabled = false;
      }
    });
  }

  const nextQuestionButton = document.createElement("button");
  nextQuestionButton.innerText = "Show Result";
  nextQuestionButton.className = "w-100 p-3 mt-5 btn btn-primary";
  nextQuestionButton.disabled = true;
  nextQuestionButton.addEventListener("click", quizResult);
  nextQuestionDiv.appendChild(nextQuestionButton);
}

// this function show the quiz result which display the h1(Your Score),
// p(score) and reset button. Also, remove the question, buttons
function quizResult() {
  answersButtonsDiv.innerHTML = "";
  nextQuestionDiv.innerHTML = "";
  ParagraphQuestions.innerHTML = "";
  title.innerHTML = "";

  const resultHeader = document.createElement("h1");
  const resultParagraph = document.createElement("p");
  const resultButton = document.createElement("button");
  resultHeader.innerText = "Your Score";
  resultParagraph.innerText = `${score} out of 2`;
  resultParagraph.className = "mt-5";
  resultButton.innerText = "Restart Quiz";
  resultButton.className = "w-100 p-3 mt-5 btn btn-primary";

  quizResultDiv.appendChild(resultHeader);
  quizResultDiv.appendChild(resultParagraph);
  resultButton.addEventListener("click", resetQuiz);
  quizResultDiv.appendChild(resultButton);
}
// this function rest the quiz and the score and remove the quizResultDiv div
function resetQuiz() {
  quizResultDiv.innerHTML = "";
  score = 0;
  firstQuestion();
}
