/*jshint expr:true */

(function(window, document, $, cutme, undefined) {
	'use strict';
	
	WebFont.load({
		google: {
			families: ['Overpass+Mono:400,600,700:latin-ext']
		}
	});
	

	$(document).ready(function() {
		cutme.helper.exist('#logo') && cutme.helper.fixel();
		//cutme.helper.exist('#form') && cutme.Form.init();
	});


		
}(window, document, jQuery, window.cutme = window.cutme || {}));
