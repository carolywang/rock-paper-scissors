// function to get computer choice
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Declare score variables
let humanScore = 0;
let computerScore = 0;

// Play a round
// function to play a round
function playRound(humanChoice, computerChoice) {
  const results = document.querySelector(".results");

  // generate human choice
  const humanAnswer = document.createElement("p");
  humanAnswer.textContent = `Your choice is: ${humanChoice}`;

  // generate computer choice
  const computerAnswer = document.createElement("p");
  computerAnswer.textContent = `Computer choice is: ${computerChoice}`;

  // generate results
  const roundResults = document.createElement("p");

  if (humanChoice == "rock" && computerChoice == "paper") {
    roundResults.textContent = "You lose! Paper beats Rock.";
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    roundResults.textContent = "You win! Rock beats Scissors.";
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    roundResults.textContent = "You lose! Scissors beats Paper.";
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    roundResults.textContent = "You win! Paper beats Rock.";
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    roundResults.textContent = "You lose! Rock beats Scissors.";
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    roundResults.textContent = "You win! Scissors beats Paper.";
    humanScore++;
  } else {
    roundResults.textContent = "It's a tie!";
  }

  // display running score
  const runningScoreHuman = document.createElement("p");
  runningScoreHuman.textContent = `Your score: ${humanScore}`;
  const runningScoreComp = document.createElement("p");
  runningScoreComp.textContent = `Computer score: ${computerScore}`;

  // round separator
  const roundSeparator = document.createElement("p");
  roundSeparator.textContent = "--------------------";

  // clear text and append new text to results section
  results.textContent = "";
  results.appendChild(humanAnswer);
  results.appendChild(computerAnswer);
  results.appendChild(roundResults);
  results.appendChild(runningScoreHuman);
  results.appendChild(runningScoreComp);
  // results.appendChild(roundSeparator);

  //evaluate scores
  if (humanScore === 5 || computerScore === 5) {
    const humanFinalResults = document.createElement("p");
    humanFinalResults.textContent = `Your final score is: ${humanScore}`;
    const compFinalResults = document.createElement("p");
    compFinalResults.textContent = `Computer final score is: ${computerScore}`;
    const gameResults = document.createElement("h2");
    if (humanScore > computerScore) {
      gameResults.textContent = "You won!";
    } else if (humanScore < computerScore) {
      gameResults.textContent = "Oops, try again!";
    } else {
      gameResults.textContent = "It's a tie!";
    }
    // clear text and append final results
    results.textContent = "";
    results.appendChild(humanFinalResults);
    results.appendChild(compFinalResults);
    results.appendChild(gameResults);
    // reset scores
    humanScore = 0;
    computerScore = 0;
  }
}

//trigger a round each time player clicks a button
const buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", () => {
    playRound(button.textContent, getComputerChoice());
  });
}
