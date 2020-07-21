let userChoice;
let rock = "rock";
let paper = "paper";
let scissor = "scissor";
let computerChoice;
let counterPlayer;
let counterComputer;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");


btn1.addEventListener("click",()=>{
    alert("You clicked ROCK.");
    userChoice = rock;
    computerChoice = Math.random();
    parseInt(computerChoice);
    if (computerChoice <= 0.3) {
        computerChoice = rock;
        alert("Computer chose rock");
    }
    else if (computerChoice <= 0.6) {
        computerChoice = paper;
        alert("Computer chose paper");
    }
    else{
        computerChoice = scissor;
        alert("Computer chose scissor");
    }

    if(userChoice === scissor && computerChoice === paper ||
        userChoice===paper && computerChoice === rock ||
        userChoice===rock && computerChoice === scissor){
            alert("You Win");
            
        }
    else if (computerChoice === scissor && userChoice === paper ||
        computerChoice===paper && userChoice === rock ||
        computerChoice===rock && userChoice === scissor) {
            alert("You Lose");
    }
    else{
        alert("It's a draw");
    }
});


btn2.addEventListener("click",()=>{
    alert("You clicked PAPER.");
    userChoice = paper;
    computerChoice = Math.random();
    parseInt(computerChoice);
    if (computerChoice <= 0.3) {
        computerChoice = rock;
        alert("Computer chose rock");
    }
    else if (computerChoice <= 0.6) {
        computerChoice = paper;
        alert("Computer chose paper");
    }
    else{
        computerChoice = scissor;
        alert("Computer chose scissor");
    }

    if(userChoice === scissor && computerChoice === paper ||
        userChoice===paper && computerChoice === rock ||
        userChoice===rock && computerChoice === scissor){
            alert("You Win");
        }
    else if (computerChoice === scissor && userChoice === paper ||
        computerChoice===paper && userChoice === rock ||
        computerChoice===rock && userChoice === scissor) {
            alert("You Lose");
    }
    else{
        alert("It's a draw");
    }
});

btn3.addEventListener("click", ()=>{
    alert("You clicked SCISSORS.");
    userChoice = scissor;
    computerChoice = Math.random();
    parseInt(computerChoice);
    if (computerChoice <= 0.3) {
        computerChoice = rock;
        alert("Computer chose rock");
    }
    else if (computerChoice <= 0.6) {
        computerChoice = paper;
        alert("Computer chose paper");
    }
    else{
        computerChoice = scissor;
        alert("Computer chose scissor");
    }

    if(userChoice === scissor && computerChoice === paper ||
        userChoice===paper && computerChoice === rock ||
        userChoice===rock && computerChoice === scissor){
            alert("You Win");
        }
    else if (computerChoice === scissor && userChoice === paper ||
        computerChoice===paper && userChoice === rock ||
        computerChoice===rock && userChoice === scissor) {
            alert("You Lose");
    }
    else{
        alert("It's a draw");
    }
});