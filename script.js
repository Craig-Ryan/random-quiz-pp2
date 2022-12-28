const quizQuestion = [
    {
        question: "How many times has Argentina won the World Cup?",
        a: "2",
        b: "4",
        c: "1",
        d: "3",
        correct: "d",
    },
    {
        question: "Which US state is famed for it's cheese production?",
        a: "Wisconsin",
        b: "Illinois",
        c: "Ohio",
        d: "Minnesota",
        correct: "a",
    }, 
    {
        question: "How many seasons of Father Ted are there?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "c",
    },
    {
        question: "How many time zones are there in China?",
        a: "9",
        b: "1",
        c: "5",
        d: "3",
        correct: "b",
    },
    {
        question: "In what year was the first successful human blood transfusion?",
        a: "1795",
        b: "1942",
        c: "1877",
        d: "1901",
        correct: "a",
    },
    {
        question: "What is the world record for holding one's breath underwater?",
        a: "12 mins",
        b: "24 mins",
        c: "18 mins",
        d: "36 mins",
        correct: "b",
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizQuestion = quizQuestion[currentQuiz];

    questionEl.innerText = currentQuizQuestion.question;
    a_text.innerText = currentQuizQuestion.a;
    b_text.innerText = currentQuizQuestion.b;
    c_text.innerText = currentQuizQuestion.c;
    d_text.innerText = currentQuizQuestion.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if(answer){
        if (answer === quizQuestion[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizQuestion.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered: ${score}/${quizQuestion.length} questions correctly</h2>

            <button onclick="location.reload()">Play Again</button>
            `;
        }
    }
});