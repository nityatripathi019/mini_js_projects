const boxes=document.querySelectorAll(".box");
const resetBtn=document.querySelector(".Reset-btn");
const newGameBtn=document.querySelector(".new-btn");
const msgbox=document.querySelector(".msg-container");
const msg=document.querySelector("#msg");


let turn0=true;
const winPattern=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
          box.innerText="0";
          turn0=false;
        }
        else{
          box.innerText="X";
          turn0 = true;
        }

        box.disabled=true;

        checkWinner();
    })
})

const resetGame = ()=>{
  turn0 = true;
  enableBoxes();
  msgbox.classList.add("hide");
}
const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled= true;
  }
}
const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled= false;
  }
}
const showWinner=(winner)=>{
  msg.innerText=`Congratulations! winner is ${winner}`;
  msgbox.classList.remove("hide");
  disableBoxes();
}
const checkWinner=()=>{
  for(let pattern of winPattern){
   

      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;

      if(pos1Val !="" && pos2Val != "" && pos3Val!= ""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
          console.log("winner",pos1Val);
          showWinner(pos1Val);
        }
      }
  }
}