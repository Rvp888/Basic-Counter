const count = document.getElementById("count");

const increment = document.getElementById("increment");

const reset = document.getElementById("reset");

const decrement = document.getElementById("decrement");


let num = 0;

count.innerText = num;

function countIncrement(){
    num++;
    count.innerText = num;
}

function countReset(){
    num = 0;
    count.innerText = num;
}

function countDecrement(){
    num--;
    count.innerText = num;
}

increment.addEventListener("click",countIncrement);

reset.addEventListener("click",countReset);

decrement.addEventListener("click",countDecrement);
