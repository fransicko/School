// To load the image 
var canvas, ctx, img, rect, pic;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

window.onload = function() {
	img = new Image();
	img.src = "../images/naaru_light.png";
	pic = "light";
	ctx.drawImage(img, 15, 10);
}

// reload functionf
function change() {
	location.reload();
}

function getMousePos(canvas, event) {
	var pos = canvas.getBoundingClientRect();
	return {
		x: event.clientX - pos.left,
		y: event.clientY - pos.top
	};
}

// Checks to see if hte click was inside the canvas rectangle
function insideRec(pos, rect) {
	return (pos.x > rect.x) && (pos.x < rect.x + rect.width) && (pos.y > rect.y) && (pos.y < rect.y + rect.height);
}

// Defining the image bounderies, the width and hieght were taken from the image properties
rect = {
	x:15,
	y:10,
	width:505,
	height:676
};

// adding the click event
canvas.addEventListener("click", function(evt) {
	var mousePos = getMousePos(canvas, evt);
	
	if (insideRec(mousePos, rect)) {
		//alert("clicked ubsude rect");
		if (pic === "light") {
			img.src = "../images/naaru_dark.png";
			//alert("light");
			pic = "dark";
			ctx.drawImage(img, 15, 10);
		} else {
			//img.src = "../images/naaru_light.png";
			img.src = "../images/naaru_light.png";
			//alert("dark");
			pic = "light";
			ctx.drawImage(img, 15, 10);
		}
	} else {
		//alert("clicked outside rect");
	}
	
}, false);