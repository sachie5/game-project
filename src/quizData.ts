export type Quiz = {
  ID: Number;
  category: String;
  question: String;
  answers: Answers[];
};

type Answers = { answer: string; correctIncorrect: string };

export let grammarQuestions: Quiz[] = [
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
    question: "Complete the sentence in past perfect tense. After Gita _______________ her homework, she went outside to play in the garden.",
    answers: [
      {
        answer: "had completed",
        correctIncorrect: "Correct",
      },
      {
        answer: "completed",
        correctIncorrect: "Incorrect",
      },
      {
        answer: "has completed",
        correctIncorrect: "Incorrect",
      },
      {
        answer: "was completing",
        correctIncorrect: "Incorrect",
      },
    ],
  },
  {
    ID: 6,
    category: "Grammar",
    question: "How is since used in this sentence? Mary didn't cook often since she found it difficult.",
    answers: [
      {
        answer: "verb",
        correctIncorrect: "Incorrect",
      },
      {
        answer: "preposition",
        correctIncorrect: "Incorrect",
      },
      {
        answer: "conjunction",
        correctIncorrect: "Correct",
      },
      {
        answer: "adverb",
        correctIncorrect: "Incorrect",
      },
    ],
  },
  {
    ID: 7,
    category: "Grammar",
    question: "Which sentence needsa question mark?",
    answers: [
      {
        answer: "The night is scary",
        correctIncorrect: "Incorrect",
      },
      {
        answer: "During the night, where did you go",
        correctIncorrect: "Correct",
      },
      {
        answer: "The dog barked into the night",
        correctIncorrect: "Incorrect",
      },
      {
        answer: "Go back to your home tonight",
        correctIncorrect: "Incorrect",
      },
    ],
  },
  {
    ID: 8,
    category: "Grammar",
    question: "Which of these is a modal verb?",
    answers: [
      {
        answer: "join",
        correctIncorrect: "Incorrect",
      },
      {
        answer: "however",
        correctIncorrect: "Incorrect",
      },
      {
        answer: "frantically",
        correctIncorrect: "Incorrect",
      },
      {
        answer: "might",
        correctIncorrect: "Correct",
      },
    ],
  },
  {
    ID: 9,
    category: "Grammar",
    question: "Which of these words is spelt correctly?",
    answers: [
      {
        answer: "separate",
        correctIncorrect: "Correct",
      },
      {
        answer: "desparate",
        correctIncorrect: "Incorrect",
      },
      {
        answer: "enviroment",
        correctIncorrect: "Incorrect",
      },
      {
        answer: "temparature",
        correctIncorrect: "Incorrect",
      },
    ],
  },
  {
    ID: 10,
    category: "Grammar",
    question: "Which of these words is spelt correctly?",
    answers: [
      { answer: "immidiate", correctIncorrect: "Incorrect" },
      { answer: "mischievous", correctIncorrect: "Correct" },
      { answer: "stomack", correctIncorrect: "Incorrect" },
      { answer: "reccomend", correctIncorrect: "Incorrect" },
    ],
  },
];

export let mathQuestions : Quiz[] = [
{
  ID: 1,
  category: "Maths",
  question: "What is 12 x 7?",
  answers: [
    { answer: "84", correctIncorrect: "Correct" },
    { answer: "86", correctIncorrect: "Incorrect" },
    { answer: "72", correctIncorrect: "Incorrect" },
    { answer: "79", correctIncorrect: "Incorrect" },
  ],
},
{
  ID: 2,
  category: "Maths",
  question:
    "How many minutes in 4 and a half hours? ",
  answers: [
    { answer: "360 minutes", correctIncorrect: "Incorrect" },
    { answer: "420 minutes", correctIncorrect: "Incorrect" },
    { answer: "270 minutes", correctIncorrect: "Correct" },
    { answer: "300 minutes", correctIncorrect: "Incorrect" },
  ],
},
{
  ID: 3,
  category: "Maths",
  question: "What is 234, 875 rounded to the nearest thousand?",
  answers: [
    {
      answer: "200,000",
      correctIncorrect: "Incorrect",
    },
    {
      answer: "4,000",
      correctIncorrect: "Incorrect",
    },
    { answer: "30,000", correctIncorrect: "Incorrect" },
    {
      answer: "5,000",
      correctIncorrect: "Correct",
    },
  ],
},
{
  ID: 4,
  category: "Maths",
  question: "What is 3.4 + 0.06?",
  answers: [
    {
      answer: "3.406",
      correctIncorrect: "Incorrect",
    },
    {
      answer: "3.66",
      correctIncorrect: "Incorrect",
    },
    {
      answer: "3.46",
      correctIncorrect: "Correct",
    },
    {
      answer: "3.64",
      correctIncorrect: "Incorrect",
    },
  ],
},
{
  ID: 5,
  category: "Maths",
  question: "What is 1000 x 0.73?",
  answers: [
    { answer: "730.3", correctIncorrect: "Incorrect" },
    { answer: "730", correctIncorrect: "Correct" },
    { answer: "73", correctIncorrect: "Incorrect" },
    { answer: "7300", correctIncorrect: "Incorrect" },
  ],
},
]