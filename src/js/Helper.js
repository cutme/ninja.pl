(function(window, document, $, cutme, undefined) {
	'use strict';

	var Helper = function() {
        return {
        	exist: exist
        };
    };

    function exist(o) {
		return ($(o).length > 0) ? true : false;
	}


	function fixel() {
		
		var bar = document.getElementById('bar'),
			barTop = $(bar).position().top,
			pos = $(window).scrollTop(),
			ww = $(window).width();
			
		function changeIconsColor() {
			
			console.log();
			
		}
			
		$(window).on('resize', function() {
			ww = $(window).width();
			//benefitsBottom = $(benefits).position().top + $(benefits).outerHeight() - 100;
			
		});
		
		$(window).on('scroll', function() {
		
			pos = $(window).scrollTop();
			
			

			console.log(barTop + ' / ' + pos);
			
		});
		
		//changeIconsColor();
	}

	
	cutme.helper = new Helper();

}(window, document, jQuery, window.cutme = window.cutme || {}));