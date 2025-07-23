let boxes = document.querySelectorAll(".box");
let win = document.querySelector(".win");
let reset = document.querySelector(".reset");
let turn = document.querySelector(".turn");

let plyerX = true;
let count = 0;
turn.innerText = "Player X's Turn";


const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

reset.addEventListener("click", ()=>{
    for(let b of boxes){
        b.innerText = "";
        b.disabled = false;
        count = 0;
        plyerX = true;
        win.hidden = true
    }
})


boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(plyerX){
            box.innerText = "X";
            plyerX = false;
            turn.innerText = "Player O's Turn";
        } else{
            box.innerText = "O";
            plyerX = true;
            turn.innerText = "Player X's Turn";
        }
        box.disabled = true
        let isWinner = checkWinner()
        count++;
        if(count === 9 && !isWinner){
            win.innerText = "Match Drawn"
            win.hidden = false;
        }
    })
})

const checkWinner = () =>{
    for(let e of patterns){
        let val1 = boxes[e[0]].innerText
        let val2 = boxes[e[1]].innerText
        let val3 = boxes[e[2]].innerText
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                showWinner(val1)
                return true;
            }
        }
    }
}

const showWinner = (name) =>{
    win.innerText = `Congratilation! Winner is player ${name}`
    turn.hidden = true;
    win.hidden = false;
    for(let box of boxes){
        box.disabled = true;
    }
}