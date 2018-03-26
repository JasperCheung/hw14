//GDP, total revenues, total spending, surplus/deficit 
//in billions of USD
var budget1999 = [11900, 2290, 2130, -36.1]
var budget2016 = [16500, 2990, 3540, -552 ]
var data = budget2016;

var toggleButton = document.getElementById("toggleButton"); //switch between 1999 and 2016
console.log(toggleButton);
var toggle = 2016;
var toggleFunc = function(){
    if (toggle == 2016){
	toggle = 1999;
	data = budget1999;
	toggleButton.innerHTML = "See 2016";
    } else {
	toggle = 2016;
	data = budget2016;
	toggleButton.innerHTML = "See 1999";
    }	
    clearChart();
    drawChart();
}

toggleButton.addEventListener( "click", toggleFunc);

var drawChart = function(d){
    d3.select(".chart")
	.selectAll("div")
	.data(data)
	.enter().append("div")
	.transition().duration(1000)
	.style("width", function(d) {
	    if(d < 0){
		return d * -1 + "px";
	    }
	    return d *.1 + "px";})
	.text(function(d){return d;});
}


var clearChart = function(d){
    d3.select(".chart")
	.selectAll("div")
	.remove()
}
