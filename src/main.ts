import "./styles/main.scss";
import { Quiz, grammarQuestions } from "./quizData";
import { mathQuestions } from "./quizData";
import confetti, { Options } from "canvas-confetti";

const startPage = document.querySelector<HTMLElement>(".quiz__start");
const startButton = document.querySelector<HTMLButtonElement>("#start");
const playerScoreInput =
  document.querySelector<HTMLHeadingElement>(".header__player");
const questionPage =
  document.querySelector<HTMLDivElement>(".quizPage__container");
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
const categoryPage = document.querySelector<HTMLElement>(
  ".category__container"
);
const endPage = document.querySelector<HTMLElement>(".quizEnd");
const nextButton = document.querySelector<HTMLButtonElement>("#next");
const endImage = document.querySelector<HTMLImageElement>(".quizEnd__image")
const endScore = document.querySelector<HTMLParagraphElement>("#score");

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
  !categoryPage ||
  !endPage ||
  !nextButton ||
  !endImage ||
  !endScore
) {
  throw new Error("Issue with selector");
}

//Global variables
let score: number = 0;
let questionIndex: number = 0;
let counter: number = 0;
let timeStop: boolean = false;
let timer: number = 0;
let questionsArr: Quiz[] = [];


const chooseCategory = () => {
  startPage.style.display = "none";
  categoryPage.style.display = "flex";
};



const countDown = () => {
  if (!timeStop) {
    counter = 15;
    timer = setInterval(() => {
      quizTimer.innerHTML = `${counter}`;
      counter--;
      if (counter < 0) {
        clearInterval(timer);
        answers.forEach((answer) => {
          answer.disabled = true;
        });
        timeStop = true;
        return;
      }
    }, 1000);
  } else {
    clearInterval(timer);
    return;
  }
};


const startQuiz = (event: Event) => {
  const clickedButton = event.currentTarget as HTMLButtonElement;
  clickedButton.innerText === "Grammar" ? questionsArr = [...grammarQuestions] : questionsArr = [...mathQuestions];
  questionsArr = questionsArr.sort((a, b)=> 0.5 - Math.random());
  //Score
  playerScoreInput.innerHTML += `<span class= score> ${score}</span>`;

  //Timer
  timeStop = false;
  countDown();

  //Filling question correctly
  categoryPage.style.display = "none";
  questionPage.style.display = "flex";
  questionCategory.innerText = `${questionsArr[questionIndex].category}`;
  question.innerText = `${questionsArr[questionIndex].question}`;
  const currentQuestion = questionsArr[questionIndex].answers;

  answers.forEach((answer, i) => {
    answer.disabled = false;
    answer.innerText = `${currentQuestion[i].answer}`;
  });
};


const checkAnswers = (event: Event) => {
  const buttonClicked = event.target as HTMLButtonElement;
  let answersArray = questionsArr[questionIndex].answers;
  for (let index = 0; index < answersArray.length; index++) {
    if (buttonClicked.innerText === answersArray[index].answer) {
      if (answersArray[index].correctIncorrect === "Correct") {
        console.log(answersArray[index].correctIncorrect);
        buttonClicked.style.backgroundColor = "green";
        score = score + 1;
        playerScoreInput.innerText = `Player score:  ${score}`;
        answers.forEach((answer) => {
          answer.disabled = true;
        });
        //Timer reset
        timeStop = true;
        counter = 0;
      } else {
        buttonClicked.style.backgroundColor = "red";
        answers.forEach((answer) => {
          answer.disabled = true;
        });
        //Timer reset
        timeStop = true;
        counter = 0;
      }
    }
  }
};



const nextQuestion = () => {
  //Timer
  timeStop = false;
  clearInterval(timer);
  countDown();
  
  // Question display
  questionIndex++
  if (questionIndex < questionsArr.length) {
    questionCategory.innerText = `${questionsArr[questionIndex].category}`;
    question.innerText = `${questionsArr[questionIndex].question}`;
    let currentQuestion = questionsArr[questionIndex].answers;

    answers.forEach((answer, i) => {
      answer.style.backgroundColor = `#FFF275`;
      answer.innerText = `${currentQuestion[i].answer}`;
      answer.disabled = false;
    });
  } else {
    //Timer
    timeStop = true;
    counter = 0;
    
    //Display
    questionPage.style.display = "none";
    endPage.style.display = "flex";
    playerScoreInput.style.display = "none";
    endScore.innerText = `${score}`;
    
    return;
  }
};


const restartQuiz = () => {
  //Reset questions and styling
  startPage.style.display = "flex";
  questionPage.style.display = "none";
  endPage.style.display = "none";
  playerScoreInput.style.display = "inline-block";
  playerScoreInput.innerText = `Player score: `;
  endScore.innerText = "";
  questionIndex = 0;
  questionsArr = [];
  answers.forEach((answer) => {
    answer.disabled = false;
    answer.style.backgroundColor = `#FFF275`;
  });
  //Score
  score = 0;
  //Timer reset
  timeStop = true;
  clearInterval(timer);
  counter = 0;
  return;
};

const fireConfetti = () => {
  const options: Options = {
    particleCount: 60,
    angle: Math.random() * 360,
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    spread: Math.random() * 360,
}
return confetti(options);
};

//Global event Listeners
startButton.addEventListener("click", chooseCategory);
grammarCategory.addEventListener("click", startQuiz);
mathsCategory.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
homeButton.addEventListener("click", restartQuiz);
endImage.addEventListener("click", fireConfetti);

answers.forEach((answer) => {
  answer.addEventListener("click", checkAnswers);
});
