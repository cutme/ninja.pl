(function(window, document, $, cutme, undefined) {
	'use strict';

	var Helper = function() {
        return {
        	exist: exist,
        	fixel: fixel
        };
    };

    function exist(o) {
		return ($(o).length > 0) ? true : false;
	}


	function fixel() {
		
		var logo = document.getElementById('logo'),
			pos = $(window).scrollTop(),
			why = document.getElementById('why'),
			whyPos = $(why).scrollTop(),
			ww = $(window).width();
			
		function changeIconsColor() {
			
			console.log();
			
		}
			
		$(window).on('resize', function() {
			ww = $(window).width();
			//benefitsBottom = $(benefits).position().top + $(benefits).outerHeight() - 100;
			
		});
		
		$(window).on('scroll', function() {
		
			if ($(why).length>0) {
				pos = $(window).scrollTop();
				whyPos = $(why).position().top;
				
				if (pos >= whyPos) {
					$(logo).addClass('is-fixed');
				} else {
					$(logo).removeClass('is-fixed is-visible');
				}
				
				if (pos >= whyPos + 100) {
					$(logo).addClass('is-visible');
				}
				
				console.log(whyPos + ' / ' + pos);
			} else {
				$(logo).addClass('is-fixed is-visible');
			}
			
			
			
		});
		
		//changeIconsColor();
	}

	
	cutme.helper = new Helper();

}(window, document, jQuery, window.cutme = window.cutme || {}));