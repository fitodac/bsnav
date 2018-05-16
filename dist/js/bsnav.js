/*------------------------------------------------------------*/
/*	BSNAV
/*------------------------------------------------------------*/
(function($){
	"use strict";

	var bsnav = {

		initialize: function() {
			this.event();
			this.toggler();
			// this.hoverDropdown();
			// this.navbarSticky();
			// this.navbarScrollspy();
		},

		event : function(){},

		toggler : function(){
			$('.navbar-toggler').each(function(){
				var _el = $(this);

				_el.on('click', function(){
					_el.toggleClass('active');
				});

			});
		}

	};


	// Initialize
	$(document).ready(function(){
		bsnav.initialize();
	});


}(jQuery));