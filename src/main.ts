import "./styles/main.css";
import { quizQuestions } from "./quizData";

const startPage = document.querySelector<HTMLElement>(".quiz__container");
const startButton = document.querySelector<HTMLButtonElement>("#start");
const playerScoreInput =
  document.querySelector<HTMLHeadingElement>(".header__player");
const questionPage =
  document.querySelector<HTMLDivElement>(".pages__container");
const questionCategory = document.querySelector<HTMLHeadingElement>(
  ".questions--category"
);
const question = document.querySelector<HTMLHeadingElement>(
  ".questions--question"
);
const answers = document.querySelectorAll<HTMLButtonElement>(
  ".answers__container--options"
);
const homeButtton = document.querySelector<HTMLButtonElement>(".header__start");
const quizTimer = document.querySelector<HTMLParagraphElement>(".quiz__timer");

if (
  !startButton ||
  !startPage ||
  !playerScoreInput ||
  !questionPage ||
  !questionCategory ||
  !question ||
  !answers ||
  !homeButtton ||
  !quizTimer
) {
  throw new Error("Issue with selector");
}
//Player Count
let score = 0;
let questionIndex = 0 /*  Math.floor(Math.random() * 5) */;
let counter = 15;
let timeStop = false;
let timer = 0;



//Timer 
const countDown = () => { 
 if(!timeStop) {
  timer = setInterval(() => {
   quizTimer.innerHTML = `${counter} seconds`;
    counter--;
    if (counter < 0) {
      clearInterval(timer);
      answers.forEach(answer => {
        answer.disabled = true;
      })
      timeStop = true; 
    }
  }, 1000);
} else {
  clearInterval(timer);
}
}



//Start Quiz
const startQuiz = () => {
  playerScoreInput.innerHTML += `<span class= score> ${score}</span>`;

  //Filling question correctly
  startPage.style.display = "none";
  questionPage.style.display = "flex";
  questionCategory.innerText = `${quizQuestions[questionIndex].category}`;
  question.innerText = `${quizQuestions[questionIndex].question}`;
  let currentQuestion = quizQuestions[questionIndex].answers;


  answers.forEach((answer, i) => {
    answer.innerText = `${currentQuestion[i].answer}`;
  });
  countDown();
};

startButton.addEventListener("click", startQuiz)


//Checking answers
const checkAnswers = (event: Event) => {
  const buttonClicked = event.target as HTMLButtonElement;
  let answersArray = quizQuestions[questionIndex].answers;
   for (let index = 0; index < answersArray.length; index++) {
      if (buttonClicked.innerText === answersArray[index].answer) {
        if(answersArray[index].correctIncorrect === "Correct"){
      console.log(answersArray[index].correctIncorrect);
      buttonClicked.style.backgroundColor = "green";
      playerScoreInput.innerText = `Player score:  ${(score += 1)}`;
      counter = 0;
      timeStop = true;
      answers.forEach(answer => {
        answer.disabled = true;
      })
    } else {
      buttonClicked.style.backgroundColor = "red";
      counter = 0;
      timeStop = true;
      answers.forEach(answer => {
        answer.disabled = true;
      })
    }
  }
}
}

answers.forEach((answer) => {
  answer.addEventListener("click", checkAnswers)
});

//Next button
const nextButton = document.querySelector("#next");

if (!nextButton) {
  throw new Error("Issues with selector");
}


const nextQuestion = () => {
    counter = 15;
    timeStop = false;
    questionIndex++;
    if(questionIndex < quizQuestions.length){
    questionCategory.innerText = `${quizQuestions[questionIndex].category}`;
    question.innerText = `${quizQuestions[questionIndex].question}`;
    let currentQuestion = quizQuestions[questionIndex].answers;

    answers.forEach((answer, i) => {
      answer.style.backgroundColor = `#FFF275`;
      answer.innerText = `${currentQuestion[i].answer}`;
      answer.disabled = false;
    });
    countDown();
  } else {
  alert("End of Quiz!");
  return;
  } 
}
nextButton.addEventListener("click", nextQuestion);

//Home button

const restartQuiz = () => {
  startPage.style.display = "flex";
  questionPage.style.display = "none";
  playerScoreInput.innerText = `Player score: `;
  counter = 15;
}

homeButtton.addEventListener("click", restartQuiz);

