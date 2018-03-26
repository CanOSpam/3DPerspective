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
	var height = 1080;
	var width = 1920;
	var screenHeight = 2989;
	var screenWidth = 5313;

	createCanvas(width, height);
	fill(0, 0, 0);
	rect(0, 0, width, height);
	
	getPoints();
	getLines();
	

	console.log(leftPoints);
	console.log(rightPoints);
	console.log(lines);

	strokeWeight(1);
	translate(width/2, height/2);
	scale(screenWidth/width, -(screenHeight/height));

	stroke(255, 0, 0);
	lines.forEach(
		function(el)
		{
			fromU = parseFloat(leftPoints[el.from].u);
			fromV = parseFloat(leftPoints[el.from].v);
			toU = parseFloat(leftPoints[el.to].u);
			toV = parseFloat(leftPoints[el.to].v);
			line(fromU, fromV, toU, toV);
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
			line(fromU, fromV, toU, toV);
		}
	);

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