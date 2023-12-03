import './styles/main.css'

const quizContainer = document.querySelector<HTMLDivElement>(".quiz_container");
const startButton = document.querySelector<HTMLButtonElement>("#start");

if(!quizContainer || !startButton){
    throw new Error ("Issue with selector");
};

const startQuiz = () => {
    quizContainer.innerHTML = ``;
};

startButton.addEventListener("click",startQuiz)
