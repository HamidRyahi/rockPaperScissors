const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const results = document.querySelector('.results')
const userScorediv = document.querySelector('.user-score')
const computerScorediv = document.querySelector('.computer-score')
const computerChoiceImg = document.querySelector('#computerChoice')
let userScore = 0;
let computerScore = 0;
userScorediv.innerHTML = userScore;
computerScorediv.innerHTML = computerScore;
const userChoice = [rock, paper, scissors]
let items = ["rock", "paper", "scissors"];
let computerChoice = items[Math.floor(Math.random() * 3)];

for (let i = 0; i < userChoice.length; i++) {
    userChoice[i].addEventListener('click', function () {
        computerChoiceImg.src = `images/${computerChoice}.png`
        console.log("Computer => ", computerChoice)
        if (computerChoice === userChoice[i].id) {
            results.innerHTML = `<div>Tie!</div>`
            userScorediv.innerHTML = userScore;
            computerScorediv.innerHTML = computerScore;
        } else if ((computerChoice === "scissors" && userChoice[i].id === "paper") || (computerChoice === "rock" && userChoice[i].id === "scissors") || (computerChoice === "paper" && userChoice[i].id === "rock")) {
            results.innerHTML = `<div>Computer won!</div>`
            computerScore++;
            computerScorediv.innerHTML = computerScore;
        } else {
            results.innerHTML = `<div>You won!</div>`
            userScore++;
            userScorediv.innerHTML = userScore;
        }
        computerChoice = items[Math.floor(Math.random() * 3)];
    })
}