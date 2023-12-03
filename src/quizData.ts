type Quiz = {
  ID: number;
  category: string;
  question: string;
  answers: Answers[];
};

type Answers = { answer: string; correctIncorrect: string };

const quizQuestions: Quiz[] = [
  {
    ID: 1,
    category: "Grammar",
    question: "Which of these is a noun?",
    answers: [
      { answer: "throw", correctIncorrect: "incorrect" },
      { answer: "happiness", correctIncorrect: "correct" },
      { answer: "happily", correctIncorrect: "incorrect" },
      { answer: "beautiful", correctIncorrect: "incorrect" },
    ],
  },
  {
    ID: 2,
    category: "Grammar",
    question:
      "Choose the correct conjunction: _____ I am short, I can reach the top of my wardrobe.",
    answers: [
      { answer: "although", correctIncorrect: "correct" },
      { answer: "until", correctIncorrect: "incorrect" },
      { answer: "because", correctIncorrect: "incorrect" },
      { answer: "but", correctIncorrect: "incorrect" },
    ],
  },
  {
    ID: 3,
    category: "Grammar",
    question: "What is a verb?",
    answers: [
      { answer: "name, place or thing", correctIncorrect: "incorrect" },
      { answer: "describes a noun", correctIncorrect: "incorrect" },
      { answer: "an action", correctIncorrect: "correct" },
      { answer: "describes a verb", correctIncorrect: "incorrect" },
    ],
  },
  {
    ID: 4,
    category: "Grammar",
    question: "Which sentence is a command?",
    answers: [
      { answer: "I just love doughnuts.", correctIncorrect: "incorrect" },
      {
        answer: "Will you be coming round for the tea later?",
        correctIncorrect: "incorrect",
      },
      { answer: "Pick up the cup.", correctIncorrect: "correct" },
      {
        answer: "London is the south of London.",
        correctIncorrect: "incorrect",
      },
    ],
  },
  {
    ID: 5,
    category: "Grammar",
    question: "Which is a synonym of the word 'depressing'?",
    answers: [
      { answer: "decreasing", correctIncorrect: "incorrect" },
      { answer: "gloomy", correctIncorrect: "correct" },
      { answer: "lowering", correctIncorrect: "incorrect" },
      { answer: "pushing", correctIncorrect: "incorrect" },
    ],
  },
];
