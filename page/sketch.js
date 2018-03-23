var table;
var rows;
var leftPoints = [];
var rightPoints = [];


function preload() 
{
table = loadTable('https://gist.githubusercontent.com/CanOSpam/27ff9648c32527a455ca406175dd7a2e/raw/eaf08231c6c237f0a181fa6cd45272602c5c78b6/points.csv', 'csv', 'header');
}

function setup() 
{
	createCanvas(window.innerWidth, window.innerHeight);
	var rows = table.getRows();
	getPoints();
	//warning: rows is an array of objects
	console.log(leftPoints);
	console.log(rightPoints);

	strokeWeight(5);

	leftPoints.forEach(function(el)
	{
		stroke(255, 0, 0);
		var u = parseFloat(el.u) + 100;
		var v = parseFloat(el.v) + 100;
		console.log("Left u: " + u + " v: " + v);
		point(u, v);
	})

	rightPoints.forEach(function(el)
	{
		stroke(0, 0, 255);
		var u = parseFloat(el.u) + 100;
		var v = parseFloat(el.v) + 100;
		console.log("Right u: " + u + " v: " + v);
		point(u, v);
	})

    
}

function draw() 
{


}

function getPoints() 
{
	var rows = table.getRows();

	for (var r = 0; r < rows.length; r++) 
	{
		var pointL = {u:rows[r].arr[0], v:rows[r].arr[1]};
		leftPoints.push(pointL);

		var pointR = {u:rows[r].arr[4], v:rows[r].arr[5]};
		rightPoints.push(pointR);
	}
}