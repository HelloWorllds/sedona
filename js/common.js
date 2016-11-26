$(document).ready(function() {
	$(".form-wrapper").css("display", "none");	

	$(".btn-search").click(function() {					
		if($('.form-wrapper').css('display') == 'none'){ 
			$(".form-wrapper").css("display", "block");
		} else {
			$(".form-wrapper").css("display", "none");
		}
	});

	document.getElementById("from").onkeypress = function(event) {
		event = event || window.event;
		if (event.charCode && (event.charCode < 48 || event.charCode > 57)) return false;
	};

	document.getElementById("to").onkeypress = function(event) {
		event = event || window.event;
		if (event.charCode && (event.charCode < 48 || event.charCode > 57)) return false;
	};

	function getVals(){
		// Get slider values
		var parent = this.parentNode;
		var slides = parent.getElementsByClassName("sliders");
		var slide1 = parseFloat( slides[0].value );
		var slide2 = parseFloat( slides[1].value );
		// Neither slider will clip the other, so make sure we determine which is larger
		if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }

		var barWidth = slide2 - slide1;
		// 12.3 - that is a index for interpretation values to pixels
		barWidth /= 12.3;
		// 20 - that is a thumb width
		var barLeft = (slide1 / 12.3) + 20;
		var barRight = (slide2 / 12.3) - 20;

		$(".bar").css("width", barWidth);
		$(".bar").css("left", barLeft);
		$(".bar").css("right", barRight);

		$(".price-input-from").val("От " + slide1);
		$(".price-input-to").val("До " + slide2);
	}

	var sliderSections = document.getElementsByClassName("range-input");
	for( var x = 0; x < sliderSections.length; x++ ) {
		var sliders = sliderSections[x].getElementsByClassName("sliders");
		for( var y = 0; y < sliders.length; y++ ) {
			if( sliders[y].type ==="range" ) {
				sliders[y].oninput = getVals;
				// Manually trigger event first time to display values
				sliders[y].oninput();
			}
		}
	}
});