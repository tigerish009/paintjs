const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");


const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

// CSS의 canvas사이즈 외에 물리적 canvas의 사이즈를 지정해주지 않으면 작동하지 않는다.
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;


ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}
function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}


function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}


function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(event){
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick(){
    if (filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
    
}


if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    // mousedown은 클릭시 발생하는 event (클릭을 때지않음)
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}

// Array.from은 object로 부터 array를 생성함
// forEach안의 color라는 단어들은 아무거나 사용가능. object를 대표해주는 단어일뿐
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range) {
    range.addEventListener("input", handleRangeChange);
}

if(mode) {
    mode.addEventListener("click", handleModeClick);
}