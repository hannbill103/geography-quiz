const questions = [
  {
    question: "Which country is this?",
    image: "images/france.jpg",
    options: ["France", "Germany", "Italy", "Spain"],
    answer: "France"
  },
  {
    question: "Which city is this?",
    image: "images/sydney.jpg",
    options: ["Cape Town", "Sydney", "Los Angeles", "Rio de Janeiro"],
    answer: "Sydney"
  },
  {
    question: "Which flag is this?",
    image: "images/japan-flag.jpg",
    options: ["China", "Japan", "South Korea", "Thailand"],
    answer: "Japan"
  },
  {
    question: "Where is the Great Pyramid of Giza?",
    image: "images/pyramid.jpg",
    options: ["Mexico", "Greece", "Egypt", "India"],
    answer: "Egypt"
  },
  {
    question: "Which country does this map outline show?",
    image: "images/italy-map.jpg",
    options: ["Portugal", "Italy", "Romania", "Turkey"],
    answer: "Italy"
  },
  {
    question: "Which famous building is this?",
    image: "images/eiffel.jpg",
    options: ["Big Ben", "Colosseum", "Eiffel Tower", "Burj Khalifa"],
    answer: "Eiffel Tower"
  }
];

let currentQuestion = 0;
let score = 0;

document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("start-screen").classList.add("d-none");
  document.getElementById("quiz-container").classList.remove("d-none");
  showQuestion();
});

function showQuestion() {
  const q = questions[currentQuestion];
  const container = document.getElementById("quiz-container");

container.innerHTML = `
  <div class="card p-4 bg-dark text-white shadow" style="max-width: 600px; width: 100%;">
    <h2 class="mb-3">${q.question}</h2>
    <img src="${q.image}" class="img-fluid rounded mb-4" style="max-height: 300px;" />
    <div class="mb-4">
      ${q.options.map(opt => `
        <div class="form-check text-start">
          <input class="form-check-input" type="radio" name="answer" value="${opt}" id="${opt}">
          <label class="form-check-label" for="${opt}">${opt}</label>
        </div>
      `).join("")}
    </div>
    <button class="btn btn-primary" onclick="nextQuestion()">Next</button>
  </div>
`;
}

function nextQuestion() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("Please select an answer.");
    return;
  }

  const answer = selected.value;
  if (answer === questions[currentQuestion].answer) {
    score++; 
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>You got <strong>${score}</strong> out of <strong>${questions.length}</strong> correct!</p>
    <button class="btn btn-secondary mt-3" onclick="location.reload()">Try Again</button>
  `;
}