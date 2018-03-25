var pointTable;
var lineTable;
var rows;
var leftPoints = [];
var rightPoints = [];
var lines = [];


function preload() 
{
	pointTable = loadTable('https://raw.githubusercontent.com/CanOSpam/3DPerspective/master/assets/points.csv', 'csv', 'header');
	lineTable = loadTable('https://raw.githubusercontent.com/CanOSpam/3DPerspective/master/assets/lines.csv', 'csv', 'header')
}

function setup() 
{
	var height = window.innerHeight;
	var width = window.innerWidth;
	createCanvas(window.innerWidth, window.innerHeight);
	var rows = pointTable.getRows();
	getPoints();
	getLines();
	fill(0, 0, 0);
	rect(0, 0, width, height);
	//warning: rows is an array of objects
	console.log(leftPoints);
	console.log(rightPoints);
	console.log(lines);

	strokeWeight(0.25);
	
	scale(4, 4);
	translate(width/8, -height/1.15);
	

	stroke(255, 0, 0);
	lines.forEach(
		function(el)
		{
			fromU = parseFloat(leftPoints[el.from].u);
			fromV = parseFloat(leftPoints[el.from].v);
			toU = parseFloat(leftPoints[el.to].u);
			toV = parseFloat(leftPoints[el.to].v);
			line(fromU, height - fromV, toU, height - toV);
		}
	);

	stroke(0, 255, 255);
	lines.forEach(
		function(el)
		{
			fromU = parseFloat(rightPoints[el.from].u);
			fromV = parseFloat(rightPoints[el.from].v);
			toU = parseFloat(rightPoints[el.to].u);
			toV = parseFloat(rightPoints[el.to].v);
			line(fromU, height - fromV, toU, height - toV);
		}
	);

	

	// leftPoints.forEach(function(el)
	// {
	// 	stroke(255, 0, 0);
	// 	var u = parseFloat(el.u) + 100;
	// 	var v = parseFloat(el.v) + 100;
	// 	console.log("Right u: " + u + " v: " + v);
	// 	point(u, v);
	// });
	
	// rightPoints.forEach(function(el)
	// {
	// 	stroke(0, 0, 255);
	// 	var u = parseFloat(el.u) + 100;
	// 	var v = parseFloat(el.v) + 100;
	// 	console.log("Right u: " + u + " v: " + v);
	// 	point(u, v);
	// });
    

}

function draw() 
{


}

function getLines()
{
	var rows = lineTable.getRows();

	for (var r = 0; r < rows.length; r++) 
	{
		var line = {from:rows[r].arr[0], to:rows[r].arr[1]};
		lines.push(line);
	}
}

function getPoints() 
{
	var rows = pointTable.getRows();

	for (var r = 0; r < rows.length; r++) 
	{
		var pointL = {u:rows[r].arr[0], v:rows[r].arr[1]};
		leftPoints.push(pointL);

		var pointR = {u:rows[r].arr[4], v:rows[r].arr[5]};
		rightPoints.push(pointR);
	}
}

function drawLines()
{
	lines.forEach(
		function(el)
		{
			console.log("Point: " + leftPoints[el.from].u + " " + leftPoints[el.to].v);
			line(leftPoints[el.from].u, leftPoints[el.to].v);
		}
	);
}