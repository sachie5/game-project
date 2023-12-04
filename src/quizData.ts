export type Quiz = {
  ID: number;
  category: string;
  question: string;
  answers: Answers[];
};

type Answers = { answer: string; correctIncorrect: string };

export enum CorrectIncorrect {
  CORRECT = "correct",
  INCORRECT = "incorrect",
}

export const quizQuestions: Quiz[] = [
  {
    ID: 1,
    category: "Grammar",
    question: "Which of these is a noun?",
    answers: [
      { answer: "throw", correctIncorrect: CorrectIncorrect.INCORRECT },
      { answer: "happiness", correctIncorrect: CorrectIncorrect.CORRECT },
      { answer: "happily", correctIncorrect: CorrectIncorrect.INCORRECT },
      { answer: "beautiful", correctIncorrect: CorrectIncorrect.INCORRECT },
    ],
  },
  {
    ID: 2,
    category: "Grammar",
    question:
      "Choose the correct conjunction: _____ I am short, I can reach the top of my wardrobe.",
    answers: [
      { answer: "although", correctIncorrect: CorrectIncorrect.CORRECT },
      { answer: "until", correctIncorrect: CorrectIncorrect.INCORRECT },
      { answer: "because", correctIncorrect: CorrectIncorrect.INCORRECT },
      { answer: "but", correctIncorrect: CorrectIncorrect.INCORRECT },
    ],
  },
  {
    ID: 3,
    category: "Grammar",
    question: "What is a verb?",
    answers: [
      {
        answer: "name, place or thing",
        correctIncorrect: CorrectIncorrect.INCORRECT,
      },
      {
        answer: "describes a noun",
        correctIncorrect: CorrectIncorrect.INCORRECT,
      },
      { answer: "an action", correctIncorrect: CorrectIncorrect.CORRECT },
      {
        answer: "describes a verb",
        correctIncorrect: CorrectIncorrect.INCORRECT,
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
        correctIncorrect: CorrectIncorrect.INCORRECT,
      },
      {
        answer: "Will you be coming round for the tea later?",
        correctIncorrect: CorrectIncorrect.INCORRECT,
      },
      {
        answer: "Pick up the cup.",
        correctIncorrect: CorrectIncorrect.CORRECT,
      },
      {
        answer: "London is the south of London.",
        correctIncorrect: CorrectIncorrect.INCORRECT,
      },
    ],
  },
  {
    ID: 5,
    category: "Grammar",
    question: "Which is a synonym of the word 'depressing'?",
    answers: [
      { answer: "decreasing", correctIncorrect: CorrectIncorrect.INCORRECT },
      { answer: "gloomy", correctIncorrect: CorrectIncorrect.CORRECT },
      { answer: "lowering", correctIncorrect: CorrectIncorrect.INCORRECT },
      { answer: "pushing", correctIncorrect: CorrectIncorrect.INCORRECT },
    ],
  },
];