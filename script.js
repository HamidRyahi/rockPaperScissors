const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const computerChoiceImg = document.querySelector('#computer-choice');
const userChoices = document.querySelector('.user-choices');
const computerRating = document.querySelector('#computer-rating');
const userRating = document.querySelector('#user-rating');
const result = document.querySelector('#result-text');
const pick = document.getElementsByClassName('pick');
const roundsCounter = document.querySelector('#round-counter');
const message = document.querySelector('#message');
const resultScore = document.querySelector('#result-score');
const restartButton = document.querySelector('#restart');
const modal = document.querySelector('#modal');
let choices = [rock, paper, scissors];
let userChoice;
let computerChoice;
let rounds = 1;
let computerScore = 0;
let userScore = 0;
roundsCounter.textContent = 1;

restartButton.addEventListener('click', () => {
    modal.style.display = 'none';
})

let starsMaker = () => {
    userRating.innerHTML = '';
    computerRating.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const node = document.createElement('LI');
        node.classList.add('fa', 'fa-star-o');
        userRating.appendChild(node);
    }
    for (let i = 0; i < 3; i++) {
        const node = document.createElement('LI');
        node.classList.add('fa', 'fa-star-o');
        computerRating.appendChild(node);
    }
}
starsMaker();
let ratingUpdater = (element, score) => {
    element.children[score - 1].classList.remove('fa-star-o');
    element.children[score - 1].classList.add('fa-star');
}
let choicesVisibility = (value) => {
    for (let i = 0; i < choices.length; i++) {
        if (choices[i].id !== userChoice) {
            choices[i].style.display = value;
        }
    }
}
let restart = () => {
    starsMaker();
    rounds = 1;
    computerScore = 0;
    userScore = 0;
    roundsCounter.textContent = rounds;
}
let modalUpdater = () => {
    modal.style.display = 'flex';
    if (userScore > computerScore) {
        message.textContent = 'You won!!';
    } else {
        message.textContent = 'You lost :(';
    }
    resultScore.textContent = `${userScore} : ${computerScore}`;
}
let reload = () => {
    setTimeout(() => {
        choicesVisibility('inline');
        computerChoiceImg.src = `images/check.png`;
        result.textContent = '';
        pick[0].style.visibility = 'visible';
        pick[1].style.visibility = 'visible';
        userChoices.style.pointerEvents = '';
        roundsCounter.textContent = rounds;
        if (userScore === 3) {
            modalUpdater();
            restart();
        } else if (computerScore === 3) {
            modalUpdater();
            restart();
        }
    }, "2000");
}

for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', () => {
        userChoice = choices[i].id;
        choicesVisibility('none');
        computerChoice = choices[Math.floor(Math.random() * choices.length)].id;
        computerChoiceImg.src = `images/${computerChoice}.png`;
        pick[0].style.visibility = 'hidden';
        pick[1].style.visibility = 'hidden';
        userChoices.style.pointerEvents = 'none';
        if (userChoice === computerChoice) {
            result.textContent = 'TIE!';
            rounds++;
            reload();
        } else if (userChoice === 'rock' && computerChoice === 'paper' || userChoice === 'scissors' && computerChoice === 'rock' || userChoice === 'paper' && computerChoice === 'scissors') {
            result.textContent = 'COMPUTER WON!';
            rounds++;
            computerScore++;
            ratingUpdater(computerRating, computerScore);
            reload();
        } else {
            result.textContent = 'YOU WON!';
            rounds++;
            userScore++;
            ratingUpdater(userRating, userScore);
            reload();
        }
    })
}
