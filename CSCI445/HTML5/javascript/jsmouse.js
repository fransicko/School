// To load the image 
var canvas, ctx, img, rect, pic, btn;

canvas = document.getElementById("myCanvas");
btn = document.getElementById("btn");
img = document.getElementById("happy_face");
ctx = canvas.getContext("2d");


window.onload = function() {
	//img = new Image();
	//img.src = "../images/naaru_light.png";
	pic = "smile";
	btn.innerText = "Frown"
	//ctx.drawImage(img, 15, 10);
	drawSmileFace();
}

// drawing the smily face
function drawSmileFace() {
	drawHead();
	drawEyes();
	drawSmile();
}

function drawFrownFace() {
	drawHead();
	drawEyes();
	drawFrown();
}

function drawHead() {
	ctx.beginPath();
	ctx.fillStyle = "yellow";
	// x , y, radis, start point
	ctx.arc(115, 110, 100, 0, Math.PI*2);
	ctx.stroke();
	ctx.closePath();
	ctx.fill();
}

function drawEyes() {
	// right eye
	ctx.beginPath();
	ctx.fillStyle = "black";
	// x , y, radis, start point
	ctx.arc(70, 55, 15, 0, Math.PI*2);
	ctx.stroke();
	ctx.closePath();
	ctx.fill();
	
	// left eye
	ctx.beginPath();
	ctx.fillStyle = "black";
	// x , y, radis, start point
	ctx.arc(160, 55, 15, 0, Math.PI*2);
	ctx.stroke();
	ctx.closePath();
	ctx.fill();
}

function drawSmile() {
	ctx.beginPath();
	ctx.fillStyle = "black";
	// x , y, radis, start point
	ctx.arc(115, 105, 75, 2*Math.PI, Math.PI);
	ctx.lineWidth = 7;
	ctx.stroke();
	ctx.closePath();
}

function drawFrown() {
	ctx.beginPath();
	ctx.fillStyle = "black";
	// x , y, radis, start point
	ctx.arc(115, 185, 75, 1.1*Math.PI, Math.PI*1.9);
	ctx.lineWidth = 7;
	ctx.stroke();
	ctx.closePath();
}

function getMousePos(canvas, event) {
	var pos = canvas.getBoundingClientRect();
	return {
		x: event.clientX - pos.left,
		y: event.clientY - pos.top
	};
}

function insideCircle(pos, circle) {
	var distance = Math.sqrt(Math.pow(pos.x - circle.x, 2) + Math.pow(pos.y - circle.y, 2));
	return distance <= circle.radius;
}
// Defining the image bounderies, the width and hieght were taken from the image properties
rect = {
	x:115,
	y:110,
	radius:100,
	width:215,
	height:210
};

// adding the click event
canvas.addEventListener("click", function(evt) {
	var mousePos = getMousePos(canvas, evt);
	//alert(pic);
	if (insideCircle(mousePos, rect)) {
		//alert("clicked ubsude rect");
		if (pic === "smile") {
			pic = "frown";
			btn.innerText = "Smile";
			//ctx.drawImage(img, 15, 10);
			ctx.clearRect(0, 0, rect.width, rect.height);
			drawFrownFace();
		} else if (pic === "frown") {
			//alert("frown?");
			pic = "smile";
			btn.innerText = "Frown"
			//ctx.drawImage(img, 15, 10);
			ctx.clearRect(0, 0, rect.width, rect.height);
			drawSmileFace();
		}
	} else {
		//alert("clicked outside rect");
	}
	
}, false);

// THis is the button listener.
btn.addEventListener("click", function() {
	if (pic === "smile") {
		//img.src = "../images/naaru_dark.png";
		//alert("light");
		pic = "frown";
		btn.innerText = "Smile";
		//ctx.drawImage(img, 15, 10);
		ctx.clearRect(0, 0, rect.width, rect.height);
		drawFrownFace();
	} else {
		//img.src = "../images/naaru_light.png";
		//img.src = "../images/naaru_light.png";
		//alert("dark");
		pic = "smile";
		btn.innerText = "Frown"
		//ctx.drawImage(img, 15, 10);
		ctx.clearRect(0, 0, rect.width, rect.height);
		drawSmileFace();
	}
});