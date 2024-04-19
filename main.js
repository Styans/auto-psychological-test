const questions = [
  {
    question: "Какое самое высокое дерево на планете?",
    options: ["Секвойя", "Ель", "Пальма"],
    correctAnswer: 0,
  },
  {
    question: "Какая самая большая река в мире?",
    options: ["Нил", "Амазонка", "Янцзы"],
    correctAnswer: 1,
  },
  {
    question: "Что является самым крупным млекопитающим на Земле?",
    options: ["Слон", "Горилла", "Кит"],
    correctAnswer: 2,
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const currentQuestionData = questions[currentQuestion];

  questionElement.textContent = currentQuestionData.question;
  optionsElement.innerHTML = "";

  currentQuestionData.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.textContent = option;
    optionElement.classList.add("option");
    optionElement.addEventListener("click", () => checkAnswer(index));
    optionsElement.appendChild(optionElement);
  });
}

function checkAnswer(selectedIndex) {
  const currentQuestionData = questions[currentQuestion];
  if (selectedIndex === currentQuestionData.correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const resultElement = document.getElementById("result");
  const percentage = (score / questions.length) * 100;
  resultElement.textContent = `Ваш результат: ${percentage.toFixed(
    2
  )}% верных ответов`;
  resultElement.style.display = "block";
}

function nextQuestion() {
  loadQuestion();
  document.getElementById("result").style.display = "none";
}

window.onload = loadQuestion;