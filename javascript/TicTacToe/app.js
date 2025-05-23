const boxes = document.querySelectorAll("#box");
const ResetGame = document.querySelector("#reset");
const win = document.querySelector("#message")
let turnO = true;

let WinningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetBtn = () => {
    turnO = false;
    enableBoxes();
    message.innerText = "Welcome!!!"
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Muje Koi Daba Raha he");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
  }

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}
const showWinner = (winner) =>{
    message.innerText = `Congratulations! Winner is ${winner}`;
    disableBoxes();
}

const checkWinner = () => {
  for (let pattern of WinningPattern) {
    let posi1 = boxes[pattern[0]].innerText;
    let posi2 = boxes[pattern[1]].innerText;
    let posi3 = boxes[pattern[2]].innerText;
    if (posi1 != "" && posi2 != "" && posi3 != "") {
        if(posi1 === posi2 && posi2 == posi3){
            console.log("winner",posi1);
            showWinner(posi1);
            
        }
    }
  }
};

reset.addEventListener('click',() =>{
    resetBtn();
});