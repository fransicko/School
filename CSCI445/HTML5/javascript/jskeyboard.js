// To load the image 
var canvas, ctx, img, rect, xPos, yPos;

canvas = document.getElementById("myCanvas");
img = document.getElementById("happy_face");
ctx = canvas.getContext("2d");
xPos = 15;
yPos = 10;

window.onload = function() {
	img = new Image();
	img.src = "../images/naaru_light.png";
	ctx.drawImage(img, xPos, yPos);
}

// defining the boundareies of the canvas
rect = {
	width:460,
	height:600
};

function move() {
	ctx.clearRect(0, 0, rect.width, rect.height);
	ctx.drawImage(img, xPos, yPos);
}

// THis is for the arrow key movements
window.addEventListener("keydown", function(e) {
    switch(e.keyCode) {
        case 37:
            // left key pressed
			xPos = xPos - 5;
			if (xPos <= 0) xPos = 0;
			move();
            break;
        case 38:
            // up key pressed
			yPos = yPos - 5;
			if (yPos <= 0) yPos = 0;
			move();
            break;
        case 39:
            // right key pressed
			xPos = xPos + 5;
			if (xPos+100 >= rect.width) xPos = rect.width-100;
			move();
            break;
        case 40:
            // down key pressed
			yPos = yPos + 5;
			if (yPos+135 >= rect.height) yPos = rect.height-135;
			move();
            break;  
    }
}, false);

