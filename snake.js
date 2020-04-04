function init(){
	canvas = document.getElementById('mycanvas');
	W = H = canvas.width = canvas.height = 1000;
	pen = canvas.getContext('2d');
	cs=66;

	snake = {
		init_len:5,
		color: "blue",
		cells: [],
		direction: "right",

		createSnake:function(){
			for (var i = this.init_len; i >0; i--) {
				this.cells.push({x:i,y:0});
			}
		},

		drawSnake:function(){
			for(var i=0;i<this.cells.length;i++){
				pen.fillStyle = this.color;
				pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs-2,cs-2);	
			}
		},
		/*
		updateSnake:function(){
			console.log("updating snake");
			this.cells.pop();
			var headX = this.cells[0].x;
			var headY = this.cells[0].y;

			var X = headX+1;
			var Y = headY;
			this.cells.unshift({x:X,y:Y});
		},*/

		updateSnake:function(){
			console.log("updating snake according to the direction");
			this.cells.pop();
			var headX = this.cells[0].x;
			var headY = this.cells[0].y;
			var nextX, nextY;

			if(this.direction=="right"){
				nextX = headX + 1;
				nextY = headY;
			}else if(this.direction=="left"){
				nextX = headX - 1;
				nextY = headY;
			}else if(this.direction=="down"){
				nextX = headX;
				//towards right is the positive x axis.
				//towards down is the positive y axis.
				nextY = headY + 1;
			}else{
				nextX = headX;
				nextY = headY - 1;
			}

			this.cells.unshift({x:nextX,y:nextY});
		},
	};

	snake.createSnake();


	function keyPressed(e){
		if(e.key=="ArrowRight"){
			snake.direction="right";
		}else if(e.key=="ArrowLeft"){
			snake.direction="left";
		}else if(e.key=="ArrowDown"){
			snake.direction="down";
		}else {
			snake.direction="up";
		}
		console.log(snake.direction);
	}

	// Add an Event Listener on the Document Object!

	//When any key is pressed, that event is referred to as the KeyDown.

	document.addEventListener('keydown', keyPressed);
}

function draw(){

	//erase the old frame
	pen.clearRect(0,0,W,H);

	snake.drawSnake();

}


function update(){
	snake.updateSnake();
}


function gameloop(){
	draw();
	update();
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

