function init(){
	canvas = document.getElementById('mycanvas');
	canvas.width = 600;
	canvas.height = 600;
	pen = canvas.getContext('2d');

	rect = {
		x:20,
		y:20,
		w:40,
		h:40,
		speed:10
	}
}
pen.fillStyle('red');
pen.fillRect(rect.x,rect.y,rect.w,rect.h);
function draw(){

}

function update(){

}

function gameloop(){

}