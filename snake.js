/*
function init(){
	canvas = document.getElementById('mycanvas');
	canvas.width = 600;
	canvas.height = 600;
	pen = canvas.getContext('2d')

	rect = {
		x:20,
		y:20,
		w:40,
		h:40,
		speed:10,
	}
}

function draw(){
	pen.fillStyle('red');
	pen.fillRect(rect.x,rect.y,rect.w,rect.h);

}

function update(){

}

function gameloop(){

}

init();
setInterval(gameloop, 100);
*/

canvas = document.getElementById("mycanvas");
canvas.width = 500;
canvas.height = 500;

pen = canvas.getContext('2d')

pen.fillStyle("red");

rect = {
		x:20,
		y:20,
		w:40,
		h:40,
	}

pen.fillRect(rect.x,rect.y,rect.w,rect.h);