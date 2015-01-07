function createGrid(numSquares) {
	var pixels = 960 / numSquares;
	console.log(pixels);
	var divs = " ";
	for (var i = 0; i < numSquares; i++) {
		for (var j = 0; j < numSquares; j++) {
			if(j==0) {
				divs += '<div class="box" style="height:'+pixels+'px;width:'+pixels+'px;clear:both;"></div>';
			}else {
				divs += '<div class="box" style="height:'+pixels+'px;width:'+pixels+'px;"></div>';
			}	
		}
	}
	$('#container').append(divs);
}

$(document).ready(function () {
	console.log("Hi?");
	var numSquares = 16;
	createGrid(numSquares);

	//on hover, change color
	$('#container').on('mouseenter', '.box', function() {
		console.log("mouseenter detected");
		$(this).addClass("colored");
	});

	$('button[name="clear_button"]').on('click', function() {
		$('#container').empty();
		numSquares = window.prompt("Please enter the number of squares on each side of the grid:");
		createGrid(numSquares);
	})
;});