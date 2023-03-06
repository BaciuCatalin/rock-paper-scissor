console.log("main.js loaded...");

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const playGame = () => {
    const computerChoices = ["rock", "paper", "scissor"];
    const playerChoices = document.querySelectorAll("button");
    const playerChoiceDisplay = document.getElementById("p-choice");
    const computerChoiceDisplay = document.getElementById("c-choice");

    let playerChoice;
    playerChoices.forEach((possibleChoice) => {
      possibleChoice.addEventListener("click", function (e) {
        playerChoice = e.target.id;
        playerChoiceDisplay.innerHTML = playerChoice;

        const movesLeft = document.querySelector(".movesleft");
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const randomNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerChoices[randomNumber];
        computerChoiceDisplay.innerHTML = computerChoice;

        winner(this.innerText, computerChoice);

        if (moves == 10) {
          gameOver(playerChoices, movesLeft);
        }
      });
    });
  };

  const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
        result.textContent = "Tie";
    } else if (player == "rock") {
      if (computer == "paper") {
        result.textContent = "Computer Won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "scissors") {
      if (computer == "rock") {
        result.textContent = "Computer Won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "paper") {
      if (computer == "scissors") {
        result.textContent = "Computer Won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
  };

  const gameOver = (playerChoices, movesLeft) => {
    const chooseMove = document.querySelector(".move");
    const result = document.querySelector(".result");
    const reloadBtn = document.querySelector(".reload");

    playerChoices.forEach((possibleChoice) => {
      possibleChoice.style.display = "none";
    });

    chooseMove.innerText = "Game Over!!";
    movesLeft.style.display = "none";

    if (playerScore > computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "Player Won The Game";
      result.style.color = "#308D46";
    } else if (playerScore < computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "Computer Won The Game";
      result.style.color = "red";
    } else {
      result.style.fontSize = "2rem";
      result.innerText = "Tie";
      result.style.color = "grey";
    }
    reloadBtn.innerText = "Restart";
    reloadBtn.style.display = "flex";
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };

  playGame();
};
game();
