# Game Project

This project is to create a game using HTML, CSS and Typescript. The aim of the project is to create a game that uses either click or keypress events to trigger the events that occur in Typescript and be able to work on different devices with a mobile-first approach to the implementation. I decided to create a quiz game based on the Year 6 curriculum.

## Table of Contents

1. Project Requirements 
2. Project Goals
3. Examples of code in project
4. Cloning the project

## Project requirements

The requirements for this project were:

1. Create and present a simple plan of my game including what will occur in the game, the steps to building it and features that would be included in order of importance.
2. Public repository on GitHub.
3. At least 15 meaningful commits for the project and repo on GutHub with descriptive names.
4. A README with a short introduction to the project.
5. TS code formatted as functions.
6. Correct formatting of code with suitable indentation and variable names.
7. The code is all my own and able to explain.
8. Click or keypress events to trigger events in TypeScript.
9. Mobile-first approach but must work on varying device widths.

## Project Goals

The project goals were:

* Create a working Game: The main task is to create a Game not only will this test your understanding of TypeScript but how you
break down a problem.
* Practice using Git and GitHub fl ow: We want you to get as much practice as possible using git, GitHub and the command line.
* Get a better understanding of how to scope a larger project: We want to see a clear plan of what you're going to build and
how.
* Apply what you are learning: This is a great place to apply what you have been learning on all of the course so far. When you
get it functioning really push on the UI, use SCSS, BEM, anything else you fi nd on the web....really go mad!

## Examples of code in the project

I have highlighted the function that allows the game to start and presents the first question.

The startQuiz function - In this function, depending on the category button (Grammar or Maths) clicked by the player, an object from the appropriate array is selected and the data is inserted into the questionPage HTML. This presentes as a question and 4 possible options to choose from.

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

## Cloning the project

* Copy the url and git clone into chosen folder
* Run "npm install" to download appropriate dependencies
* Run "npm run dev" to open in browser.
