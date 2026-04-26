const questions = [
    {
        q: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language"],
        answer: 0
    },
    {
        q: "Which language is used for styling?",
        options: ["HTML", "CSS", "Java"],
        answer: 1
    },
    {
        q: "Which is used for interactivity?",
        options: ["Python", "JavaScript", "C++"],
        answer: 1
    }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreBox = document.getElementById("scoreBox");

// LOAD QUESTION
function loadQuestion() {
    const q = questions[current];
    questionEl.textContent = q.q;

    optionsEl.innerHTML = q.options.map((opt, i) => `
        <label>
            <input type="radio" name="option" value="${i}">
            ${opt}
        </label>
    `).join("");
}

function restartQuiz(){
    current = 0;
    score = 0;

    document.getElementById("restartBtn").style.display = "none";
    document.querySelector("button").style.display = "block";
    scoreBox.textContent = "";

    loadQuestion();
}

// NEXT QUESTION
function nextQuestion() {
    const selected = document.querySelector('input[name="option"]:checked');

    if (!selected) {
        alert("Select an option");
        return;
    }

    if (parseInt(selected.value) === questions[current].answer) {
        score++;
    }

    current++;

    if (current < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Completed!";
        optionsEl.innerHTML = "";
        document.querySelector("button").style.display = "none";
        document.getElementById("restartBtn").style.display = "block";
        scoreBox.textContent = `Your Score: ${score} / ${questions.length}`;
    }
}

// INITIAL LOAD
loadQuestion();