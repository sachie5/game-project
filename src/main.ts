import "./styles/main.css";
import { Quiz, quizQuestions } from "./quizData";
import { mathQuestions } from "./quizData";

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
const homeButton = document.querySelector<HTMLButtonElement>(".header__start");
const quizTimer = document.querySelector<HTMLParagraphElement>(".quiz__timer");
const grammarCategory = document.querySelector<HTMLButtonElement>("#grammar");
const mathsCategory = document.querySelector<HTMLButtonElement>("#maths");
const categoryPage = document.querySelector<HTMLElement>(".category__container");

if (
  !startButton ||
  !startPage ||
  !playerScoreInput ||
  !questionPage ||
  !questionCategory ||
  !question ||
  !answers ||
  !homeButton ||
  !quizTimer ||
  !grammarCategory ||
  !mathsCategory ||
  !categoryPage
) {
  throw new Error("Issue with selector");
}

const chooseCategory = () =>{
  startPage.style.display = "none";
  categoryPage.style.display = "flex";
}

startButton.addEventListener("click", chooseCategory)

//Global variables
let score: number = 0;
let questionIndex: number = 0 /*  Math.floor(Math.random() * 5) */;
let counter: number = 15;
let timeStop: boolean = false;
let timer: number = 0;
let questionsArr: Quiz[] = [];


//Start Quiz
const startQuiz = (event: Event) => {
  const buttonClicked = event.currentTarget as HTMLButtonElement;
  if(buttonClicked.innerText === "Grammar"){
    questionsArr = quizQuestions;
  } else {
    questionsArr = mathQuestions;
  }

  //Score
  playerScoreInput.innerHTML += `<span class= score> ${score}</span>`;
  
  //Timer  
  counter = 15;
  timeStop = false;
  countDown();

  //Filling question correctly
  categoryPage.style.display = "none";
  questionPage.style.display = "flex";
  questionCategory.innerText = `${questionsArr[questionIndex].category}`;
  question.innerText = `${questionsArr[questionIndex].question}`;
  let currentQuestion = questionsArr[questionIndex].answers;


  answers.forEach((answer, i) => {
    answer.innerText = `${currentQuestion[i].answer}`;
  });

};

grammarCategory.addEventListener("click", startQuiz);
mathsCategory.addEventListener("click", startQuiz);


//Timer 
const countDown = () => { 
 if(!timeStop) {
  timer = setInterval(() => {
   quizTimer.innerHTML = `${counter}`;
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

//Checking answers
const checkAnswers = (event: Event) => {
  const buttonClicked = event.target as HTMLButtonElement;
  let answersArray = questionsArr[questionIndex].answers;
   for (let index = 0; index < answersArray.length; index++) {
      if (buttonClicked.innerText === answersArray[index].answer) {
        if(answersArray[index].correctIncorrect === "Correct"){
      console.log(answersArray[index].correctIncorrect);
      buttonClicked.style.backgroundColor = "green";
      playerScoreInput.innerText = `Player score:  ${(score + 1)}`;
      //Timer reset
      timeStop = true;
      answers.forEach(answer => {
        answer.disabled = true;
      })
    } else {
      buttonClicked.style.backgroundColor = "red";
      //Timer reset
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
  //Timer reset
    counter = 15;
    timeStop = false;
    countDown();
  // Question display
    questionIndex++;
    if(questionIndex < questionsArr.length){
    questionCategory.innerText = `${questionsArr[questionIndex].category}`;
    question.innerText = `${questionsArr[questionIndex].question}`;
    let currentQuestion = questionsArr[questionIndex].answers;

    answers.forEach((answer, i) => {
      answer.style.backgroundColor = `#FFF275`;
      answer.innerText = `${currentQuestion[i].answer}`;
      answer.disabled = false;
    });
 
  } else {
  alert("End of Quiz!");
  timeStop = true;
  return;
  } 
}
nextButton.addEventListener("click", nextQuestion);

//Home button

const restartQuiz = () => {
  //Timer reset
  timeStop = true;
  counter = 15;
  //Reset questions and styling
  startPage.style.display = "flex";
  questionPage.style.display = "none";
  playerScoreInput.innerText = `Player score: `;
  answers.forEach((answer) => {
    answer.disabled = false;
    answer.style.backgroundColor = `#FFF275`;
  });
}

homeButton.addEventListener("click", restartQuiz);

