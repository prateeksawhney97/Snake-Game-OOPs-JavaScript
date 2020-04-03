function init(){

}

function draw(){


}


function update(){

}


function gameloop(){

}

init();
var f = setInterval(gameloop, 100); 
/*

//Event Listeners
function f(){
	console.log("You clicked on the canvas");
}

canvas = document.getElementById('mycanvas');
canvas.addEventListener('click', f);

function f2(e){
	console.log("A key got pressed", e.key);
	return e.key;
}

function init(){
	canvas = document.getElementById('mycanvas');
	W = canvas.width = 500;
	H = canvas.height = 500;
	pen = canvas.getContext('2d')

	game_over = false;

	rect = {
		x:20,
		y:20,
		w:40,
		h:40,
		speed:10,
	}
}

function draw(){
	pen.fillStyle = "red";
	pen.clearRect(0,0,W,H);
	pen.fillRect(rect.x,rect.y,rect.w,rect.h);
}

function update(){
	value = document.addEventListener('keydown', f2);
	rect.x = rect.x + rect.speed;
		if(rect.x > W-rect.w || rect.x < 0 || canvas.addEventListener('ArrowLeft', f2)=="ArrowLeft"){
			rect.speed = rect.speed * -1;	
		}
}

function gameloop(){
	if(game_over == true){
		clearInterval(f);	
	}
	draw();
	update();
}

init();
var f = setInterval(gameloop, 100);


*/

