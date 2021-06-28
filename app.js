const canvas = document.getElementById("jsCanvas");


let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting();
}

function onMouseLeave(event){
    painting = false;
}


if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    // mousedown은 클릭시 발생하는 event (클릭을 때지않음)
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}