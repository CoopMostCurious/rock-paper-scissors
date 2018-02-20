(function () {

    "use strict";

    console.log("Script connected");
    var userScore = 0;
    var computerScore = 0;

    const userScore_span = document.getElementById("user-score");
    const computerScore_span = document.getElementById("computer-score");
    const scoreBoard_div = document.querySelector(".score-board");
    const result_div = document.querySelector(".result");
    const rock_div = document.getElementById("rock");
    const paper_div = document.getElementById("paper");
    const scissors_div = document.getElementById("scissors");
    const action_msg = document.getElementById('action-msg');

    main();
    getComputerChoice();
    updateScore();

    function main() {
        rock_div.addEventListener('click', function () {
            game('rock');
        });
        paper_div.addEventListener('click', function () {
            game('paper');
        });
        scissors_div.addEventListener('click', function () {
            game('scissors');
        });
    }

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        var randomNumber = (Math.floor(Math.random() * 3));
        return choices[randomNumber];
    }

    function game(choice) {
        const computerChoice = getComputerChoice();
        switch (choice + computerChoice) {
            case "scissorspaper":
            case "paperrock":
            case "rockscissors":
                win(choice);
                break;
            case "paperscissors":
            case 'rockpaper':
            case 'scissorsrock':
                lose(computerChoice);
                break;
            case "paperpaper":
            case "rockrock":
            case "scissorsscissors":
                draw();
                break;
        }
    }

    function win(choice) {
        userScore++;
        updateScore();
        switch (choice) {
            case "paper":
            result_div.innerHTML = '<p>Paper covers rock! You win!!</p>';
            break;
            case 'scissors':
            result_div.innerHTML = '<p>Scissors cut paper! You win!!</p>';
            break;
            case 'rock':
            result_div.innerHTML = '<p>Rock breaks scissors! You win!!</p>';
            break;
        }
    }

    function lose(computerChoice) {
        computerScore++;
        updateScore();
        switch (computerChoice) {
            case 'paper':
            result_div.innerHTML = '<p>Rocks get covered by paper! You lose!!</p>';
            break;
            case 'scissors':
            result_div.innerHTML = '<p>Paper gets cut by scissors! You lose!!</p>';
            break;
            case 'rock':
            result_div.innerHTML = '<p>Scissors get broken by rock! You lose!!</p>';
            break;
        }
    }

    function draw() {
        result_div.innerHTML = '<p>Both of you used the same thing! Try again!!</p>';
    }

    function updateScore() {
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
    }

}());