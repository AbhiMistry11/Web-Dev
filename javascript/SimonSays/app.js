let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },1000);
}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },1000);
}

function levelUp() {
    userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  //random
  let randIdx = Math.floor(Math.random()*3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx){
 

  if (userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
    }
  }else{
    h2.innerHTML = `Game Over!! Your Score Was <b>${level}</b> <br> Press Any Key To Restart.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();
  }
}

function btnPress(){
    console.log("btn pressed!!");
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}