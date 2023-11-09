
// Get the buttons and result display elements
const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scissorBtn = document.getElementById("Scissior");
const resultDisplay = document.getElementById("result");
const vsDisplay = document.getElementById("vs");
const restartBtn = document.getElementById("restart");

// Function to get computer's choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissior"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's  a  tie 😶‍🌫️!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissior") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissior" && computerChoice === "Paper")
  ) {
    return "You  Won 🤩!";
  } else {
    return "You  lost 😞!";
  }
}

// Function to display the results
function displayResult(playerChoice, computerChoice, result) {
  resultDisplay.innerHTML = `${result}`;
  vsDisplay.innerHTML = `🫵 : ${playerChoice} 🆚 🤖 : ${computerChoice}`;
}
// This Function is responsible for doing / calling all the functions an executing the task
// Function to handle button clicks
function handleButtonClick(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  displayResult(playerChoice, computerChoice, result);
}
// Event listeners for button clicks
rockBtn.addEventListener("click", () => handleButtonClick("Rock"));
paperBtn.addEventListener("click", () => handleButtonClick("Paper"));
scissorBtn.addEventListener("click", () => handleButtonClick("Scissior"));

// Event listener for restart button click
restartBtn.addEventListener("click", () => {
  resultDisplay.innerHTML = '';
  vsDisplay.innerHTML = '';
});
