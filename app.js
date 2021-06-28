const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");


ctx.strokeStyle = "##2c2c2c";
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
        ctx.lineto(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    painting = true;
}




if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    // mousedown은 클릭시 발생하는 event (클릭을 때지않음)
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}