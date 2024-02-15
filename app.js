const scoreYou = document.querySelector("#scoreYou");
const scoreComputer = document.querySelector("#scoreComputer");
const images = document.querySelectorAll(".tool");
const imgQuestionChoose = document.querySelector("#imgQuestionChoose");
const imgQuestionComputer = document.querySelector("#imgQuestionComputer");
const result = document.querySelector("#result");
let userChoice;
let computerChoice;




runEventListeners();

function runEventListeners() {
    images.forEach(tool => tool.addEventListener("click", toolClicked));
}

function toolClicked(e) {
    userChoice = e.target.id;
    imgQuestionChoose.setAttribute("src", `assets/${userChoice}.png`);
    getComputerDisplay();
    getResult();
    getScore();
    theEndGame();
}


function getComputerDisplay() {
    let randomNumber = Math.floor(Math.random() * images.length + 1);
    if (randomNumber === 1) {
        computerChoice = "stone";
    }
    if (randomNumber === 2) {
        computerChoice = "paper";
    }
    if (randomNumber === 3) {
        computerChoice = "scissors";
    }
    imgQuestionComputer.setAttribute("src", `assets/${computerChoice}.png`)
}

function getResult() {
    if (userChoice === computerChoice) {
        result.textContent = "Draw";
    }
    if (userChoice === "stone" && computerChoice === "paper") {
        result.textContent = "Won Computer";
    }
    if (userChoice === "stone" && computerChoice === "scissors") {
        result.textContent = "Won You";
    }
    if (userChoice === "paper" && computerChoice === "stone") {
        result.textContent = "Won You";
    }
    if (userChoice === "paper" && computerChoice === "scissors") {
        result.textContent = "Won Computer";
    }
    if (userChoice === "scissors" && computerChoice === "stone") {
        result.textContent = "Won Computer";
    }
    if (userChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "Won You";
    }
}

function getScore() {
    let end = result.textContent;
    if (end === "Won Computer") {
        scoreComputer.textContent++;
    }
    if (end === "Won You") {
        scoreYou.textContent++;
    }
}

function theEndGame() {
    if (scoreComputer.textContent == 3 || scoreYou.textContent == 3) {
        images.forEach(img => img.removeEventListener("click", toolClicked));
        setTimeout(() => {
            scoreComputer.textContent = 0;
            scoreYou.textContent = 0;
            imgQuestionComputer.setAttribute("src", "assets/question.png");
            imgQuestionChoose.setAttribute("src", "assets/question.png");
            result.textContent = "Result...";
            images.forEach(tool => tool.addEventListener("click", toolClicked));
        }, 2000);
    }
}