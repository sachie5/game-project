import "./styles/main.css";
import { CorrectIncorrect, quizQuestions } from "./quizData";

const quiz = document.querySelector<HTMLElement>("main");
const startButton = document.querySelector<HTMLButtonElement>("#start");
const playerScoreInput =
  document.querySelector<HTMLHeadingElement>(".header__player");

if (!startButton || !quiz || !playerScoreInput) {
  throw new Error("Issue with selector");
}

const startQuiz = () => {
  //Player Count
  let score = 0;
  let questionID = 0;
  playerScoreInput.innerHTML += `<span class= score> ${score}</span>`;
  //Question 1
  for (let index = 0; index < quizQuestions.length; index++) {
    questionID = quizQuestions[index].ID;
    quiz.innerHTML = `
    <div class=quiz__container>
    <div class=questions>
    <h2 class=questions--category>${quizQuestions[index].category}</h2>
        <h3 class=questions--question>${quizQuestions[index].question}</h3>
        </div>
        <div class= answers__container>
        <button class=answers__container--options answers__container--option1>${quizQuestions[index].answers[0].answer}</button>
      <button class=answers__container--options answers__container--option2>${quizQuestions[index].answers[1].answer}</button>
      <button class=answers__container--options answers__container--option3>${quizQuestions[index].answers[2].answer}</button>
      <button class=answers__container--options answers__container--option4>${quizQuestions[index].answers[3].answer}</button>
        </div>
        <button class=quiz__container--button id = next>Next Question</button>
        </div>`;
  }

  const options = document.querySelectorAll<HTMLButtonElement>(
    ".answers__container--options"
  );
  const nextButton = document.querySelector<HTMLButtonElement>(
    ".quiz__container--button"
  );
  const runningScore = document.querySelector<HTMLSpanElement>(".score");
  const quizContainer =
  document.querySelector<HTMLDivElement>(".quiz__container");

  if (!options || !nextButton || !runningScore|| !quizContainer) {
    throw new Error("Issue with selector");
  }

//Correct answer/Incorrect Answer
  options.forEach((choice) => {
    choice.addEventListener("click", () => {
      for (let index = 0; index < quizQuestions.length; index++) {
        quizQuestions[index].answers.map((option) => {
          if (option.answer === choice.innerText) {
            if (option.correctIncorrect === CorrectIncorrect.CORRECT) {
              choice.style.backgroundColor = "green";
              runningScore.innerText = ` ${(score += 1)}`;
              choice.disabled = true;
            } else {
              choice.style.backgroundColor = "red";
              runningScore.innerText = ` ${(score += 0)}`;
              choice.disabled = true;
            }
          }
        });
      }
    });
  });

  //Next Question
  nextButton.addEventListener("click", () => {
    for (let index = 1; index < quizQuestions.length; index++) {
      if(quizQuestions[index].ID !== questionID ){
      quizContainer.innerHTML = `
      <h2 class=quiz__container--category>${quizQuestions[index].category}</h2>
      <h3 class=quiz__container--question>${quizQuestions[index].question}</h3>
      <div class= answers__container>
      <button class=answers__container--options answers__container--option1>${quizQuestions[index].answers[0].answer}</button>
      <button class=answers__container--options answers__container--option2>${quizQuestions[index].answers[1].answer}</button>
      <button class=answers__container--options answers__container--option3>${quizQuestions[index].answers[2].answer}</button>
      <button class=answers__container--options answers__container--option4>${quizQuestions[index].answers[3].answer}</button>
      </div>
      <button class=quiz__container--button id = next>Next Question</button>`;
    }
    return;
  }
  });
};

startButton.addEventListener("click", startQuiz);


