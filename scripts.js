$(document).ready(function($){

	var apikey = 'YOURAPIKEY';
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta,ga&units=imperial&APPID="+apikey;

	$.getJSON(weatherUrl, function(weatherData){
		console.log(weatherData);
		var currTemp = weatherData.main.temp;

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
		var shadeColor;

		if(currTemp < 32){
			shadeColor = '#D4F0FF';
		}else if((currTemp >= 32) && (currTemp < 59)){
			shadeColor = "#129793";
		}else if((currTemp >= 59) && (currTemp < 75)){
			shadeColor = "#7cfc00";
		}else if((currTemp >= 75) && (currTemp < 90)){
			shadeColor = "#FF6600";
		}else{
			shadeColor = '#E3170D';
		}
	function animate(current){

		context.fillStyle = "#ccc";
		context.beginPath();
		context.arc(155,75,innerRadius,0,2*Math.PI,true);
		context.closePath();
		context.fill();

		context.lineWidth = 10;
		context.strokeStyle = shadeColor;
		context.beginPath();
		context.arc(155, 75, outterRadius, -(quart), ((circ) * current) - quart, false);
		context.stroke();
		context.font = "48px Myriad Pro";
		context.fillStyle = "Blue";
		context.textBaseline = "top";
		context.fillText(currTemp,175-outterRadius, 85-outterRadius/2);
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

});










