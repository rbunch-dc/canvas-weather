$(document).ready(function($){

	var currTemp = 80.0;
	var canvas = $('#weather-canvas');
	var context = canvas[0].getContext('2d');

	// context.beginPath();
	// context.moveTo(0,0);
	// context.lineTo(100,100);
	// context.moveTo(20,100);
	// context.lineTo(20,50);
	// context.lineWidth = 10;
	// context.stroke();

	var lineWidth = 5;
	var outterRadius = 70;
	var innerRadius = outterRadius - lineWidth;
	var currPerc = 0;
	var counterClockwise = false;
	var circ = Math.PI * 2;
	var quart = Math.PI / 2;

function animate(current){

	context.fillStyle = "#ccc";
	context.beginPath();
	context.arc(155,75,innerRadius,0,2*Math.PI,true);
	context.closePath();
	context.fill();

	context.lineWidth = 10;
	context.strokeStyle = '#E3170D';
	context.beginPath();
	context.arc(155, 75, outterRadius, -(quart), ((circ) * current) - quart, false);
	context.stroke();
	currPerc++;
	if(currPerc < currTemp){
		requestAnimationFrame(function () {
			animate(currPerc / 100);
		});
	}
}

animate();
context.closePath();

});










