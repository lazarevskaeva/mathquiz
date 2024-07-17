const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score")) || 0;

scoreEl.innerText = `Score: ${score}`;
generateQuestion();

formEl.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const userAns = parseInt(inputEl.value); // Parse input value to integer

    if (userAns === correctAns) {
        score++;
    } else {
        score--;
    }

    updateLocalStorage(score); // Update score in local storage
    scoreEl.innerText = `Score: ${score}`; // Update score display

    generateQuestion(); // Generate a new question
    inputEl.value = ''; // Clear input field after submission
    inputEl.placeholder = 'Enter Your Answer'; // Set placeholder text
});

function generateQuestion() {
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;
    correctAns = num1 * num2; // Update correct answer
    inputEl.placeholder = 'Enter Your Answer'; // Set placeholder text
}

function updateLocalStorage(score) {
    localStorage.setItem("score", JSON.stringify(score));
}