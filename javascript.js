// call playGame function to play the game a number of rounds
playGame(5);

// function to play game
function playGame(numRounds) {
  // Declare score variables
  let humanScore = 0;
  let computerScore = 0;

  // Play a round
  // function to play a round
  function playRound(humanChoice, computerChoice) {
    console.log(`Your choice is: ${humanChoice}`);
    console.log(`Computer choice is: ${computerChoice}`);

    if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You lose! Paper beats Rock.");
      computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You win! Rock beats Scissors.");
      humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You lose! Scissors beats Paper.");
      computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You win! Paper beats Rock.");
      humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You lose! Rock beats Scissors.");
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You win! Scissors beats Paper.");
      humanScore++;
    } else {
      console.log("It's a tie!");
    }
  }

  //call playRound 5 times
  for (let i = 0; i < numRounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  //evaluate scores
  console.log("Let's calculate your scores.");
  console.log(`Your score is: ${humanScore}`);
  console.log(`Computer score is: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You won!");
  } else if (humanScore < computerScore) {
    console.log("Oops, you lost.");
  } else {
    console.log("It's a tie!");
  }
}

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
// console.log(getComputerChoice());

// function to get human choice
function getHumanChoice() {
  let humanChoice = prompt(`Let's play rock paper scissors! 
  What is your choice? Please type 'r' for rock, 'p' for paper or 's' for scissors.`);
  if (humanChoice.toLowerCase() == "r") {
    return "rock";
  } else if (humanChoice.toLowerCase() == "p") {
    return "paper";
  } else if (humanChoice.toLowerCase() == "s") {
    return "scissors";
  } else {
    alert(
      "Invalid choice! Please type 'r' for rock, 'p' for paper or 's' for scissors."
    );
    return getHumanChoice();
  }
}
// console.log(getHumanChoice());
