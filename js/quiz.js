
let questions;
const $ = document.querySelector.bind(document);

const quiz = $(".quiz");
const warning = $(".warning");
const btnNext = $(".btnNext");
let count = 1;

const urlParams = new URLSearchParams(window.location.search);
const param1 = urlParams.get('name');

fetch('../quests/'+param1+'.json')
  .then(response => response.json())  
  .then(data => {
    questions = data; 
    showQuestions(count);
  })
  .catch(error => console.error('Ошибка при загрузке JSON:', error));

// console.log(param1);



  
"use strict";


// let userScore = 0;


if (typeof questions !== 'undefined' && questions.length > 0)  {
  quiz.classList.remove('hidden');
  showQuestions(count);
} else {
  // warning.classList.remove('hidden');
};


const progress = $(".quiz_progress-inner");

function showQuestions(index) {
  const title = $(".quiz_title");
  const list = $(".quiz_list");
  const total = $(".quiz_total");

  title.innerHTML = `${questions[index-1].question}`;
  list.innerHTML = ``;
  questions[index-1].options.forEach((item, idx) => {
    const text = `<input data-endingsentence="${questions[index-1].Answer[idx]}" name="rq" onclick="setAnswerButton(this)" type="radio"><label for="rq">${item}</label>`;
    list.insertAdjacentHTML("beforeend", text);
  });

  total.innerHTML = `${index} из ${questions.length}`;
  progress.style.width = `${Math.round(((index-1) / questions.length) * 100)}%`;
};

function setAnswerButton() {
  document.getElementById("confirm_answer").className = "";
};

var content = ''; 

function nextQuestion() {

  if (count < questions.length) {
    getEndingSentence();
    count++;
    showQuestions(count);
    document.getElementById("confirm_answer").className = "invisible";

  } else {
    if (count == questions.length) {
      setEndingSentence();
      deleteQuestion();
    }else {

    }
  }
};

function deleteQuestion() {
  $(".quiz_list").innerHTML = ``;
  $(".quiz_title").innerHTML = ``;
  $(".quiz_total").innerHTML = ``;
  $(".quiz_progress-inner").innerHTML = ``;
  document.getElementById("confirm_answer").className = "invisible";


};

function setEndingSentence() {
	var personalityResults = getEndingSentence();
  progress.style.width = `100%`;
  progress.style.borderRadius = `0`;

  document.getElementById("results_screen").className = "";
  document.getElementById("reapeat_btn").className = "";
	document.getElementById("generated_text").innerHTML = personalityResults; 

};


function getEndingSentence() {
  var quizRadio = document.getElementsByName("rq");
  for (var i = 0; i < quizRadio.length; i++) {
    if (quizRadio[i].checked) {
      content += quizRadio[i].getAttribute("data-endingsentence");   
    }
  }

  return content;
};


function repeatQuiz() {
  count = 1;
  content = '';
  document.getElementById("results_screen").className = "invisible";
  document.getElementById("reapeat_btn").className = "invisible";
  showQuestions(count);

}