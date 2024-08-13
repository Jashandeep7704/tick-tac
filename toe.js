let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('#reset');
let newGamebtn=document.querySelector('#newgame');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

let turnO =true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let count=0;
boxes.forEach(box=>{
    box.addEventListener('click',()=>{
        if(turnO){ //player o turn
            box.innerText='O';
            turnO=false;
        }
        else{ //player x turn
            box.innerText='X';
            turnO=true;
        }
        count++;
        box.disabled=true;
        console.log(count)
        checkWinner(count);
        // if(count===9){
        //     msg.innerText=`Tie`;
        //     msgContainer.classList.remove("hide");
        //     disableBoxes();
        // }
    })
})
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const tie=()=>{
    msg.innerText=`Tie!`;
    msgContainer.classList.remove("hide");
}
const showWinner=(winner)=>{
    msg.innerText=`Winner! is ${winner}`;
    msgContainer.classList.remove("hide");

}
const checkWinner=(count)=>{
    for(let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
                disableBoxes();
            }
        }
        if(count===9){
            tie();
            disableBoxes();
        }
    }
}

const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
}
newGamebtn.addEventListener('click',resetgame);
reset.addEventListener('click',resetgame);
