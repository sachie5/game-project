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
const categoryPage = document.querySelector<HTMLElement>(
  ".category__container"
);

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

const chooseCategory = () => {
  startPage.style.display = "none";
  categoryPage.style.display = "flex";
};

//Global variables
let score: number = 0;
let questionIndex: number = 0; /*  Math.floor(Math.random() * 5) */
let counter: number = 0;
let timeStop: boolean = false;
let timer: number = 0;
let questionsArr: Quiz[] = [];

//Timer function
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

//Start Quiz function
const startQuiz = (event: Event) => {
  const buttonClicked = event.currentTarget as HTMLButtonElement;
  if (buttonClicked.innerText === "Grammar") {
    questionsArr = [...quizQuestions];
  } else {
    questionsArr = [...mathQuestions];
  }

/*   //Randomise array
  const shuffleArray = (arr: Quiz []) => {
    let randomArr = [...arr]
    randomArr.sort((a, b) => 0.5 -(Math.random() * arr.length))
    return randomArr;
  };

  shuffleArray(questionsArr);
 */
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

//Checking answers function
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

//Next button function
const nextButton = document.querySelector("#next");

if (!nextButton) {
  throw new Error("Issues with selector");
}

const nextQuestion = () => {
  timeStop = false;
  countDown();
  // Question display
  questionIndex++;
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
    alert("End of Quiz!");
    timeStop = true;
    counter = 0;
    return;
  }
};

//Home button function
const restartQuiz = () => {
  //Reset questions and styling
  startPage.style.display = "flex";
  questionPage.style.display = "none";
  playerScoreInput.innerText = `Player score: `;
  questionIndex = 0;
  questionsArr = [];
  answers.forEach((answer) => {
    answer.disabled = false;
    answer.style.backgroundColor = `#FFF275`;
  });
  //Timer reset
  timeStop = true;
  counter = 0;
  return;
};

//Global event Listeners
startButton.addEventListener("click", chooseCategory);
grammarCategory.addEventListener("click", startQuiz);
mathsCategory.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
homeButton.addEventListener("click", restartQuiz);

answers.forEach((answer) => {
  answer.addEventListener("click", checkAnswers);
});
