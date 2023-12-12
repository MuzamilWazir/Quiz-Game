const questions = [
  {
    question: "What is the powerhouse of the cell?",
    answers: [
      { text: "Nucleus", correct: false },
      { text: "Ribosome", correct: false },
      { text: "Mitochondrion", correct: true },
      { text: "Endoplasmic reticulam", correct: false },
    ],
  },

  {
    question: "What is the basic unit of heredity?",
    answers: [
      { text: "Protein", correct: false },
      { text: "Gene", correct: true },
      { text: "Chromomsome", correct: false },
      { text: "Enzyme", correct: false },
    ],
  },

  {
    question:
      "Which of the following is an example of a decomposer in an ecosystem?",
    answers: [
      { text: "Rabbit", correct: false },
      { text: "Hawak", correct: false },
      { text: "Fungi", correct: true },
      { text: "Grasshopper", correct: false },
    ],
  },

  {
    question: "What is the function of the respiratory system?",
    answers: [
      { text: "Pump blood", correct: false },
      { text: "Break down food", correct: false },
      { text: "Exchange gases", correct: true },
      { text: "Filter waste", correct: false },
    ],
  },

  {
    question: "What is the primary function of leaves in a plant?",
    answers: [
      { text: "Photosynthesis", correct: true },
      { text: " Support", correct: false },
      { text: "Storage", correct: false },
      { text: "Reporduction", correct: false },
    ],
  },

  {
    question: "Which scientist is famous for his theory of natural ?",
    answers: [
      { text: "Gregor Mendel", correct: false },
      { text: "  Charles Darwin", correct: true },
      { text: "Louis Pasteur", correct: false },
      { text: "James Watson", correct: false },
    ],
  },

  {
    question: "What type of microOrganism causes malaria?",
    answers: [
      { text: "Bacteria", correct: false },
      { text: "Virus", correct: false },
      { text: "Protozoa", correct: true },
      { text: "Fungi", correct: false },
    ],
  },

  {
    question: "What is the main function of the kidneys in the human body?",
    answers: [
      { text: "Digestion", correct: false },
      { text: "Filtration of blood", correct: true },
      { text: "Pumping blood", correct: false },
      { text: "Respiration", correct: false },
    ],
  },

  {
    question: "Which of the following is a mammal?",
    answers: [
      { text: "Frog", correct: false },
      { text: "Snake", correct: false },
      { text: "Bat", correct: true },
      { text: "Turtle", correct: false },
    ],
  },

  {
    question: "What is the process of making copies of a gene called?",
    answers: [
      { text: "Translation", correct: false },
      { text: "Replication", correct: false },
      { text: "Transcription", correct: false },
      { text: "Cloning", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You Sorced ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
