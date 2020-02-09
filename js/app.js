(function($){
"use strict";
	$(function(){
		$('#menu').slicknav(
				{
					label: '',
					// prependTo:'',
				}
			);
		});

	// FLEX SLIDER
	if($(".flex-slider")[0]) { 
	    $('.flex-slider').flexslider(
			{ 
				"directionNav" : true,
				"controlNav" : false,
				"animation" : "fade",
				"prevText" : "",
				"nextText" : "",
				"animationLoop"	: true,
				"animationSpeed" : 400,
				"slideshowSpeed" : 8000,
				controlsContainer: $(".hero-controls-container"),
    			customDirectionNav: $(".hero-slider-navigation a")
			}
		);
	}
 // ทดสอบ error testing
 console.log("Everyday Life with Film : Peerawit Pharkdeepinyo") ;
 console.log("Original Design by: Ritsu | Modified by: Peerawit Pharkdeepinyo") ;
 console.log("!!!!!For Education Purpose!!!!!") ;
})(jQuery)

// SEARCH TOGGLE
function showSearchbar() {
	document.getElementById("search-bar").style.display="block";
	console.log('here')
}
function hideSearchbar() {
	document.getElementById("search-bar").style.display="none";
	console.log('clicked')
}