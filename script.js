let computerScore = 0;
let humanScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const divElement = document.querySelector(".container-feedback");
const scoreElement = document.querySelector(".score");
const result = document.querySelector(".result");
const winner = document.querySelector(".winner");


function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choice = "";

    if (random == 0) { choice = "rock"; } 
    else if (random == 1) { choice = "paper"; } 
    else if (random == 2) { choice = "scissors"; }

    return choice;
}

function getHumanChoice() {
    let choice = prompt("What is your choice?");
    return choice.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            result.textContent = "It's a TIE!!!";
        } else if (computerChoice == "paper") {
            result.textContent = "You LOSE! Paper beats Rock!"
            computerScore += 1;
        } else if (computerChoice == "scissors") {
            result.textContent = "You WIN! Rock beats Scissors!";
            humanScore += 1;
        }

    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            result.textContent = "You WIN! Paper beats Rock!";
            humanScore += 1;
        } else if (computerChoice == "paper") {
            result.textContent = "It's a TIE!!!";
        } else if (computerChoice == "scissors") {
            result.textContent = "You LOSE! Scissors beats Paper!";
            computerScore += 1;
        }

    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            result.textContent = "You LOSE! Rock beats Scissors!";
            computerScore += 1;
        } else if (computerChoice == "paper") {
            result.textContent = "You WIN! Scissors beats Paper!";
            humanScore += 1;
        } else if (computerChoice == "scissors") {
            result.textContent = "It's a TIE!!!";
        }
    }
    scoreElement.textContent = `Score: Computer ${computerScore} : Human ${humanScore}`;

    if(computerScore >= 5 || humanScore >= 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        winner.textContent = (computerScore == 5) ? "Winner is Computer" : "Winner is Human";

        const reset = document.createElement("button");
        reset.type = "button";
        reset.textContent = "Reset";
        reset.addEventListener("click", () => {
            computerScore = 0;
            humanScore = 0;
            scoreElement.textContent = `Score: Computer ${computerScore} : Human ${humanScore}`;
            rockButton.disabled = false;
            paperButton.disabled = false;
            scissorsButton.disabled = false;
            result.textContent = "";
            winner.textContent = "";
            reset.remove();
        });
        divElement.appendChild(reset);

    }
}

rockButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
});

paperButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
});

scissorsButton.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors");
});






