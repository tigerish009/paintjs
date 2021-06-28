const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

const colors = document.getElementsByClassName("jsColor");

// CSS의 canvas사이즈 외에 물리적 canvas의 사이즈를 지정해주지 않으면 작동하지 않는다.
canvas.width = 700;
canvas.height = 700;


ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

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
}



if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    // mousedown은 클릭시 발생하는 event (클릭을 때지않음)
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

// Array.from은 object로 부터 array를 생성함
// forEach안의 color라는 단어들은 아무거나 사용가능. object를 대표해주는 단어일뿐
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))