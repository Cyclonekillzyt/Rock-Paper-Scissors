const rock = "rock";
const paper = "paper";
const scissors = "scissors";
function getComputerChoice(){
    const possibleMoves = [rock , paper, scissors]
    let computerChoice = Math.floor(Math.random() * possibleMoves.length);
}
