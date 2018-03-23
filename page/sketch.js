var table;
var rows;


function preload() 
{
table = loadTable('https://gist.githubusercontent.com/CanOSpam/27ff9648c32527a455ca406175dd7a2e/raw/eaf08231c6c237f0a181fa6cd45272602c5c78b6/points.csv', 'csv', 'header');
}

function setup() 
{
var rows = table.getRows();

	//warning: rows is an array of objects
	for (var r = 0; r < rows.length; r++) 
	{
		rows[r].arr.forEach(function(el) {console.log(el)});
	}

    
}

function draw() 
{


}

function getLeftPoints() 
{

}