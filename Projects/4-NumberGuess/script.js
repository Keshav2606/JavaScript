const randomNumber = Math.round(Math.random() * 100 + 1);
const form = document.querySelector("form");
const guesses = document.querySelector(".guesses");
const lastresult = document.querySelector(".lastResult");
var remainingGuess = parseInt(lastresult.innerText);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if(remainingGuess < 1) {
    result.innerHTML = "ohh! Your Chances are Over.";
    setInterval(() => {
        location.reload()
    }, 2000);
  }else{
    const guessedNumber = parseInt(form.querySelector("#guessField").value);
    const result = document.querySelector(".lowOrHi");
    if (guessedNumber === "" || guessedNumber < 1 || guessedNumber > 100 || isNaN(guessedNumber)) {
      result.innerHTML = "Please, Enter a valid Number.";
    } else {
      if (guessedNumber === randomNumber) {
        result.innerHTML = "wohoo! You guessed it right.";
        setInterval(() => {
          location.reload();
        }, 2000);
      } else if (guessedNumber < randomNumber) {
        result.innerHTML = "You guessed a lower Number.";
        remainingGuess--;
      } else {
        result.innerHTML = "You guessed a higher Number.";
        remainingGuess--;
      }
      lastresult.innerHTML = remainingGuess;
      guesses.textContent += guessedNumber + " ";
    }
  }
});
