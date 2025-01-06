const rock = "R";
const paper = "P";
const scissors = "S";
function getComputerChoice(){
    const possibleMoves = [rock , paper, scissors]
    let computerChoice = Math.floor(Math.random() * possibleMoves.length);
    return possibleMoves[computerChoice];
}
function getHumanChoice(){
    let humanChoice = prompt("Enter your choice: R, P or S").toUpperCase();
    return humanChoice;
}