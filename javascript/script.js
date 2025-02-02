const desc = document.querySelector("#desc");

const stone = document.querySelector("#stone");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const user = document.querySelector("#user");
const cpu = document.querySelector("#cpu");
const userC = document.querySelector("#userC");
const cpuC = document.querySelector("#cpuC");

let userScore = 0;
let cpuScore = 0;

function findWinner() {
  if (userC.innerText === "STONE") {
    if (cpuC.innerText === "STONE") {
      desc.innerText = "IT'S A DRAW";
    } else if (cpuC.innerText === "PAPER") {
      desc.innerText = "YOU LOSE";
      cpuScore++;
      cpu.innerText = cpuScore;
    } else {
      desc.innerText = "YOU WON";
      userScore++;
      user.innerText = userScore;
    }
  } else if (userC.innerText === "PAPER") {
    if (cpuC.innerText === "STONE") {
      desc.innerText = "YOU WON";
      userScore++;
      user.innerText = userScore;
    } else if (cpuC.innerText === "PAPER") {
      desc.innerText = "IT'S A DRAW";
    } else {
      desc.innerText = "YOU LOSE";
      cpuScore++;
      cpu.innerText = cpuScore;
    }
  } else {
    if (cpuC.innerText === "SCISSOR") {
      desc.innerText = "It's DRAW";
    } else if (cpuC.innerText === "STONE") {
      desc.innerText = "YOU LOSE";
      cpuScore++;
      cpu.innerText = cpuScore;
    } else {
      desc.innerText = "YOU WIN";
      userScore++;
      user.innerText = userScore;
    }
  }
}

function play() {
  const choices = ["STONE", "PAPER", "SCISSOR"];

  const random = Math.floor(Math.random() * 3);

  const cpuChoice = choices[random];

  cpuC.innerText = cpuChoice;

  findWinner();
}

stone.addEventListener("click", function () {
  userC.innerText = "STONE";
  play();
});

paper.addEventListener("click", function () {
  userC.innerText = "PAPER";
  play();
});

scissor.addEventListener("click", function () {
  userC.innerText = "SCISSOR";
  play();
});
