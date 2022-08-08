// Variablen deklarieren
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const reset = document.querySelector("#reset");
let result = document.querySelector("#result");

// Die Rundenoptionen
const fiveRounds = document.querySelector("#five");
const tenRounds = document.querySelector("#ten");
const fifteenRounds = document.querySelector("#fifteen");
const twentyRounds = document.querySelector("#tweny");
let roundsPlayed = 0;
let roundsSelect = 0;
let outputRounds = document.querySelector("#outputRounds");
// Das Display
let userScore = 0;
let compScore = 0;
let userDisplay = document.querySelector("#userDisplay");
let compDisplay = document.querySelector("#compDisplay");

// // Funktion für "Rock"
rock.addEventListener("click", () => {
  // // // Der/Die User:in bekommt die Zahl 0, der Comp bekommt jedes Mal eine neue Zahl zw. 0-2. Sind die Zahlen gleich ist unentschieden. Hat der Comp die Zahl 1, verliert der User. Hat der Comp die Zahl 2 gewinnt der User.
  let user = 0;
  let comp = Math.floor(Math.random() * 3);
  if (comp === user) {
    result.innerText = "Its a Draw! Your opponent also chose rock";
  } else if (comp == 1) {
    result.innerHTML = "You lost! Your opponent chose paper";
    compScore++;
    compDisplay.innerHTML = compScore;
  } else {
    result.innerHTML = "You win! Your opponent chose scissors";
    userScore++;
    userDisplay.innerHTML = userScore;
  }
});

// // // Funktion für "Paper"
paper.addEventListener("click", () => {
  let user = 1;
  let comp = Math.floor(Math.random() * 3);
  if (comp === user) {
    result.innerText = "Its a Draw! Your opponent also chose paper";
  } else if (comp == 0) {
    result.innerHTML = "You Win! Your opponent chose rock";
    userScore++;
    userDisplay.innerHTML = userScore;
  } else {
    result.innerHTML = "You lost! Your opponent chose scissors";
    compScore++;
    compDisplay.innerHTML = compScore;
  }
});

// // // Funktion für "Scissors"
scissors.addEventListener("click", () => {
  let user = 2;
  let comp = Math.floor(Math.random() * 3);
  if (comp === user) {
    result.innerText = "Its a Draw! Your opponent also has scissors";
  } else if (comp == 1) {
    result.innerHTML = "You Win! Your opponent chose paper";
    userScore++;
    userDisplay.innerHTML = userScore;
  } else {
    result.innerHTML = "You lost! Your opponent chose rock";
    compScore++;
    compDisplay.innerHTML = compScore;
  }
});

// // // Funktion des Reset Buttons
reset.addEventListener("click", () => {
  window.location.reload();
});

// // // Funktion für das Hochzählen der Punkte
const roundsSelectionBtn = document.querySelectorAll("input[name=rounds]");

roundsSelectionBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    roundsSelect = event.target.value;
  });
});

// Funktion für die Anzahl der Runden
const choices = document.querySelectorAll(".choices");

choices.forEach((item) => {
  item.addEventListener("click", (event) => {
    roundsPlayed++;

    // Wenn die max. Anzahl der Runden noch nicht erreicht ist wird angezeigt in welcher Runde wir uns befinden.
    if (roundsSelect > 0 && roundsSelect != roundsPlayed) {
      outputRounds.innerText = `Du spielst Runde ${roundsPlayed} / ${roundsSelect}`;
    }
    // Wenn keine Rundenanzahl ausgewählt ist, wird ein Window-Alert ausgelöst und die Seite neu geladen
    else if (roundsSelect == 0) {
      alert("Please choose a round quantity");
      window.location.reload();
    }
    // Wenn alle Runden gespielt sind, verschwinden die Spieloptionen und es wird ausgegeben, dass das Spiel beendet ist.
    else {
      outputRounds.innerText = "Das Spiel ist beendet";
      document.getElementById("rock").remove();
      document.getElementById("paper").remove();
      document.getElementById("scissors").remove();
      document.getElementById("result").remove();
    }
  });
});
