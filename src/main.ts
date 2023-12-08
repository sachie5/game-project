import "./styles/main.scss";
import { Quiz, grammarQuestions, mathQuestions, Answers } from "./quizData";
import confetti, { Options } from "canvas-confetti";

let score: number = 0;
let questionIndex: number = 0;
let counter: number = 0;
let timeStop: boolean = false;
let timer: number = 0;
let questionsArr: Quiz[] = [];
let currentQuestion: Answers [] = [];

const quizBackground = document.querySelector<HTMLElement>(".quiz");
const startPage = document.querySelector<HTMLElement>(".quiz__start");
const startButton = document.querySelector<HTMLButtonElement>("#start");
const playerScoreInput =
  document.querySelector<HTMLHeadingElement>(".header__player");
const playerNameInput =
  document.querySelector<HTMLInputElement>("#player-name");
const categoryPage = document.querySelector<HTMLElement>(
  ".category__container"
);
const questionPage = document.querySelector<HTMLDivElement>(
  ".quizPage__container"
);
const questionCategory = document.querySelector<HTMLHeadingElement>(
  ".questions--category"
);
const question = document.querySelector<HTMLHeadingElement>(
  ".questions--question"
);
const questionBackground = document.querySelector<HTMLDivElement>(".questions");
const quizTimer = document.querySelector<HTMLParagraphElement>(".quiz__timer");
const nextButton = document.querySelector<HTMLButtonElement>("#next");
const homeButton = document.querySelector<HTMLButtonElement>(".header__start");
const endPage = document.querySelector<HTMLElement>(".quizEnd");
const endImage = document.querySelector<HTMLImageElement>(".quizEnd__image");
const endScore = document.querySelector<HTMLParagraphElement>("#score");
const categories = document.querySelectorAll<HTMLButtonElement>(
  ".category__container--choice"
);
const answers = document.querySelectorAll<HTMLButtonElement>(
  ".answers__container--options"
);

if (
  !quizBackground ||
  !startButton ||
  !startPage ||
  !playerScoreInput ||
  !playerNameInput ||
  !questionPage ||
  !questionCategory ||
  !question ||
  !questionBackground ||
  !answers ||
  !homeButton ||
  !quizTimer ||
  !categories ||
  !categoryPage ||
  !endPage ||
  !nextButton ||
  !endImage ||
  !endScore 
) {
  throw new Error("Issue with selector");
}

const chooseCategory = () => {
  startPage.style.display = "none";
  categoryPage.style.display = "flex";
  playerNameInput.value.trim()  === ""
    ? playerNameInput.value = "Player One"
    : playerNameInput.value;
    
  playerScoreInput.innerText = `${playerNameInput.value}:`;
  //Easter Egg
  switch (playerNameInput.value.trim()){
    case "Naruto":
      questionPage.style.backgroundImage = "url(https://wallpapercave.com/wp/wp4068637.jpg)";
      questionBackground.style.backgroundColor = "#FFFFFF";
      quizTimer.style.textAlign = "right";
      break;
    case "Egg":
      questionPage.style.backgroundImage = "url(https://i0.wp.com/ctrlcurate.com/wp-content/uploads/2016/04/photo-template.jpg?resize=600%2C800&ssl=1)";
      questionBackground.style.backgroundColor = "#FFFFFF";
      quizTimer.style.textAlign = "";
     break;
    default:
      questionPage.style.backgroundImage = "";
      questionBackground.style.backgroundColor = "";
  }
};

const countDown = () => {
  if (!timeStop) {
    counter = 20;
    timer = setInterval(() => {
      quizTimer.style.display = "inline";
      quizTimer.innerHTML = `${counter}`;
      counter--;
      if (counter < 0) {
        clearInterval(timer);
        answers.forEach((answer) => {
          answer.disabled = true;
        });
        timeStop = true;
        quizTimer.style.display = "none";
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
  clickedButton.innerText === "Grammar"
    ? (questionsArr = [...grammarQuestions])
    : (questionsArr = [...mathQuestions]);
  questionsArr = questionsArr.sort((a, b) => 0.5 - Math.random());
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
  currentQuestion = questionsArr[questionIndex].answers;

  answers.forEach((answer, i) => {
    answer.disabled = false;
    answer.innerText = `${currentQuestion[i].answer}`;
  });
};

const checkAnswers = (event: Event) => {
  const buttonClicked = event.target as HTMLButtonElement;
  for (let index = 0; index < currentQuestion.length; index++) {
    if (buttonClicked.innerText === currentQuestion[index].answer) {
      if (currentQuestion[index].correctIncorrect === "Correct") {
        console.log(currentQuestion[index].correctIncorrect);
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
  questionIndex++;
  if (questionIndex < questionsArr.length) {
    questionCategory.innerText = `${questionsArr[questionIndex].category}`;
    question.innerText = `${questionsArr[questionIndex].question}`;
    currentQuestion = questionsArr[questionIndex].answers;

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
  categoryPage.style.display = "none";
  questionPage.style.display = "none";
  endPage.style.display = "none";
  playerScoreInput.style.display = "inline-block";
  playerScoreInput.innerText = `Player score: `;
  playerNameInput.value = "";
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
  };
  return confetti(options);
};

startButton.addEventListener("click", chooseCategory);
nextButton.addEventListener("click", nextQuestion);
homeButton.addEventListener("click", restartQuiz);
endImage.addEventListener("click", fireConfetti);
answers.forEach((answer) => {
  answer.addEventListener("click", checkAnswers);
});
categories.forEach((category) => {
  category.addEventListener("click", startQuiz);
});
