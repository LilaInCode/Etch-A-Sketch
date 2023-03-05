const container=document.querySelector(".container");
const canv=document.createElement("div");
canv.classList.add("canvas");
container.appendChild(canv);
let currentMode;
let black=document.querySelector(".black");
let grey=document.querySelector(".grey");
let color=document.querySelector(".color");
let erasor=document.querySelector(".erasor");
let clear=document.querySelector(".clear");
let sizeValue=document.querySelector("#sizeValue");
let sizeSlider = document.querySelector('#sizeSlider');

black.addEventListener('click', ()=>{currentMode='black'});
grey.addEventListener('click', ()=>{currentMode='grey'});
color.addEventListener('click', ()=>{currentMode='color'});
erasor.addEventListener('click', ()=>{currentMode='erasor'});
sizeSlider.addEventListener('change',(e) => newGrid(e.target.value));
clear.addEventListener('click', ()=>newGrid(sizeSlider.value));
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
    item.addEventListener('mouseover',(e)=>changeMode(e));
    }
    canv.style.gridTemplateColumns=`repeat(${size},1fr)`;
    canv.style.gridTemplateRows=`repeat(${size},1fr)`;
}

function newGrid(size){
canv.innerHTML='';
getNewgrid(size);
}

function changeMode(e){
if(currentMode==='black'){e.target.style.backgroundColor='black'}
else if(currentMode==='color'){e.target.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`}
else if(currentMode==='grey') {
    if (e.target.style.backgroundColor.match(/rgba/)) {
        let currentOpacity = Number(e.target.style.backgroundColor.slice(-4,-1));
        if (currentOpacity <= 0.9) {
            e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
        
        }
    } else if (e.target.style.backgroundColor == 'rgb(0, 0, 0)') {
        return;
    } else {
        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
    }}
else if(currentMode==='erasor') {e.target.style.backgroundColor='white'}
}