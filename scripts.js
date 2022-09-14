let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let hScore = 0;
let gScore = 0;

function hScore1() {
  hScore += 1;
  homeScore.textContent = hScore;
}

function hScore2() {
  hScore += 2;
  homeScore.textContent = hScore;
}

function hScore3() {
  hScore += 3;
  homeScore.textContent = hScore;
}

// GUEST SCORE

function gScore1() {
  gScore += 1;
  guestScore.textContent = gScore;
}

function gScore2() {
  gScore += 2;
  guestScore.textContent = gScore;
}

function gScore3() {
  gScore += 3;
  guestScore.textContent = gScore;
}

// RESET

function reset() {
  hScore = 0;
  gScore = 0;
  homeScore.textContent = hScore;
  guestScore.textContent = gScore;
}
