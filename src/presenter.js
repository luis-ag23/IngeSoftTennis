import Tennis from "./tennis.js";

const tennis = new Tennis();

const scoreP1 = document.querySelector(".scoreP1");
const scoreP2 = document.querySelector(".scoreP2");

const btnP1 = document.querySelector(".btn-p1");
const btnP2 = document.querySelector(".btn-p2");

function updateUI() {
  const result = tennis.score();

  if (result.includes("-")) {
    const [p1, p2] = result.split(" - ");
    scoreP1.textContent = p1;
    scoreP2.textContent = p2;
  } else {
    scoreP1.textContent = result;
    scoreP2.textContent = result;
  }
}

btnP1.addEventListener("click", () => {
  tennis.player1Scores();
  updateUI();
});

btnP2.addEventListener("click", () => {
  tennis.player2Scores();
  updateUI();
});
