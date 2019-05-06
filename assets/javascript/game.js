// all potential computer guesses 
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// wins, losses, guesses left and guesses made
var wins = 0;
var losses = 0;
var guessesMade = [];
var guessesRemaining = 9;

// references to the various HTML elements we'll need to alter later 
var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var userGuessText = document.getElementById("userGuess");
var guessesRemainingText = document.getElementById("guessesRemaining");
var guessesMadeText = document.getElementById("guessesMade");

document.onkeyup = function(event) {
    // storing the userGuess, lowercased for ease & consistency
    var userGuess = event.key.toLowerCase();
    // generating a random computerGuess each round
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

        function repeat(){
            guessesRemaining = 9;
            guessesMade = [];
            computerGuess = letters[Math.floor(Math.random()* letters.length)];
        }
    // the round only starts if the user presses a valid letter
        // check to see whether the user won or lost
        if (userGuess === computerGuess) {
            wins++;
            repeat();
        } else if (guessesRemaining > 1){
            guessesRemaining--;
            guessesMade.push(userGuess);
        }else {
            losses++;
            repeat();
        }

        // after each turn update the HTML
        directionsText.style.display = "none";
        winsText.textContent = wins;
        lossesText.textContent = losses;
        userGuessText.textContent = userGuess;
       
    } if {
        // the user will get a message if they press any key other than a letter
        alert("Invalid guess! Press any LETTER to play!");
    }
}