const container=document.querySelector(".container");
const canv=document.createElement("div");
canv.classList.add("canvas");
container.appendChild(canv);

let black=document.querySelector(".black").addEventListener('click', blackPen);
let color=document.querySelector(".color").addEventListener('click', colorPen);
let erasor=document.querySelector(".erasor").addEventListener('click', erase);
let clear=document.querySelector(".clear").addEventListener('click', clearCanv);
let sizeValue=document.querySelector("#sizeValue");
let sizeSlider = document.querySelector('#sizeSlider');
sizeSlider.addEventListener('change',(e) => newGrid(e.target.value));
sizeSlider.addEventListener('mousemove',(e) => updateSizeValue(e.target.value));

getNewgrid(16);

function updateSizeValue(size){
    sizeValue.textContent=`${size}X${size}`;
}
function getNewgrid(size){   
    for(let i=1;i<=size*size;i++){
    const item=document.createElement("div");
    item.classList.add("item");
    canv.appendChild(item);
    }
    canv.style.gridTemplateColumns=`repeat(${size},1fr)`;
    canv.style.gridTemplateRows=`repeat(${size},1fr)`;
}

function newGrid(newSize){
const items=document.querySelectorAll(".canvas div");
items.forEach(item=>item.remove());
getNewgrid(newSize);
}


function blackPen(){
const items=document.querySelectorAll(".canvas div");
items.forEach(item=>item.addEventListener('mouseover',e=>e.target.style.backgroundColor='black'));
}

function colorPen(){
    const items=document.querySelectorAll(".canvas div");
    items.forEach(item=>item.addEventListener('mouseover',e=>e.target.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`));
}

function erase(){
    const items=document.querySelectorAll(".canvas div");
    items.forEach(item=>item.addEventListener('mouseover',e=>e.target.style.backgroundColor='white'));
}

function clearCanv(){
    const items=document.querySelectorAll(".canvas div");
    items.forEach(item=>item.style.backgroundColor='white');
}