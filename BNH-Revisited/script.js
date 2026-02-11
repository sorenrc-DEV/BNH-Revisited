const choices = ["Bear", "Ninja", "Hunter"];

let playerWins = 0;
let computerWins = 0;

function playGame(playerChoice) {

    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } 
    else if (
        (playerChoice === "Bear" && computerChoice === "Hunter") ||
        (playerChoice === "Hunter" && computerChoice === "Ninja") ||
        (playerChoice === "Ninja" && computerChoice === "Bear")
    ) {
        result = "Player wins!";
        playerWins++;
    } 
    else {
        result = "Computer wins!";
        computerWins++;
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML =
        `Player chose: ${playerChoice}<br>
         Computer chose: ${computerChoice}<br>
         ${result}`;
    resultsDiv.classList.remove("hidden");

    const counterDiv = document.getElementById("winCounter");
    counterDiv.innerHTML =
        `Player Wins: ${playerWins} | Computer Wins: ${computerWins}`;
    counterDiv.classList.remove("hidden");

    document.getElementById("playAgainBtn").classList.remove("hidden");
}

function resetDisplay() {
    document.getElementById("results").classList.add("hidden");
    document.getElementById("winCounter").classList.add("hidden");
    document.getElementById("playAgainBtn").classList.add("hidden");
}