// all potential valid computer and user guesses 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// wins, losses, guesses left and guesses made
var wins = 0;
var losses = 0;
var guessesMade = [];
var guessesRemaining = 9;

// references to the various HTML elements 
var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var userGuessText = document.getElementById("userGuess");
var guessesRemainingText = document.getElementById("guessesRemaining");
var guessesMadeText = document.getElementById("guessesMade");
    // generating a random computerGuess each round
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    function repeat() {
        guessesRemaining = 9;
        guessesMade = [];
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
    }
document.onkeyup = function (event) {
    // storing the userGuess, lowercased for ease & consistency
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
    console.log(computerGuess);

    // check to see whether the user won or lost
if (letters.indexOf(userGuess) > -1){
    if (guessesMade.indexOf(userGuess) === -1){
    if (userGuess === computerGuess) {
        wins++;
        repeat();
    } else if (guessesRemaining > 1) {
        guessesRemaining--;
        guessesMade.push(userGuess);
    } else {
        losses++;
        repeat();
    }
    // after each turn update the HTML
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesMadeText.textContent = guessesMade;
    guessesRemainingText.textContent = guessesRemaining;
    } else {
        alert("Try a new letter to keep playing!")
    }
    } else {
    // the user will get a message if they press any key other than a letter
    alert("Invalid guess! Press any LETTER to play!");
    }
}
