export type Quiz = {
  ID: number;
  category: string;
  question: string;
  answers: Answers[];
};

type Answers = { answer: string; correctIncorrect: string };

/* export enum CorrectIncorrect {
  CORRECT = "correct",
  INCORRECT = "incorrect",
} */

export const quizQuestions: Quiz[] = [
  {
    ID: 1,
    category: "Grammar",
    question: "Which of these is a noun?",
    answers: [
      { answer: "throw", correctIncorrect: "Incorrect" },
      { answer: "happiness", correctIncorrect: "Correct" },
      { answer: "happily", correctIncorrect: "Incorrect" },
      { answer: "beautiful", correctIncorrect: "Incorrect" },
    ],
  },
  {
    ID: 2,
    category: "Grammar",
    question:
      "Choose the correct conjunction: _____ I am short, I can reach the top of my wardrobe.",
    answers: [
      { answer: "although", correctIncorrect: "Correct" },
      { answer: "until", correctIncorrect: "Incorrect" },
      { answer: "because", correctIncorrect: "Incorrect" },
      { answer: "but", correctIncorrect: "Incorrect" },
    ],
  },
  {
    ID: 3,
    category: "Grammar",
    question: "What is a verb?",
    answers: [
      {
        answer: "name, place or thing",
        correctIncorrect: "Incorrect",
      },
      {
        answer: "describes a noun",
        correctIncorrect: "Incorrect",
      },
      { answer: "an action", correctIncorrect: "Correct" },
      {
        answer: "describes a verb",
        correctIncorrect: "Incorrect",
      },
    ],
  },
  {
    ID: 4,
    category: "Grammar",
    question: "Which sentence is a command?",
    answers: [
      {
        answer: "I just love doughnuts.",
        correctIncorrect: "Incorrect",
      },
      {
        answer: "Will you be coming round for the tea later?",
        correctIncorrect: "Incorrect",
      },
      {
        answer: "Pick up the cup.",
        correctIncorrect: "Correct",
      },
      {
        answer: "London is the south of London.",
        correctIncorrect: "Incorrect",
      },
    ],
  },
  {
    ID: 5,
    category: "Grammar",
    question: "Which is a synonym of the word 'depressing'?",
    answers: [
      { answer: "decreasing", correctIncorrect: "Incorrect" },
      { answer: "gloomy", correctIncorrect: "Correct" },
      { answer: "lowering", correctIncorrect: "Incorrect" },
      { answer: "pushing", correctIncorrect: "Incorrect" },
    ],
  },
];