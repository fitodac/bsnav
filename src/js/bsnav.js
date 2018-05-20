/*------------------------------------------------------------*/
/*	BSNAV
/*------------------------------------------------------------*/
(function($){
	"use strict";

	var bsnav = {

		initialize: function() {
			this.event();
			this.toggler();
			this.dropdown();
			this.mobileMenu();
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
		},



		dropdown: function(){

			$('.bsnav .nav-item.dropdown')
			.on('mouseenter', function(){
				$(this).find('> .navbar-nav').addClass('in');
			})
			.on('mouseleave', function(){
				$(this).find('> .navbar-nav').removeClass('in');
			});

		},



		mobileMenu: function(){

			var _menu = $('<div/>', {
						class: 'bsnav-mobile',
						html: '<div class="bsnav-mobile-overlay"></div><div class="navbar"></div>'
					});

			$('.bsnav .collapse').find('> .navbar-nav').each(function(){
				_menu.find('.navbar').append( $(this).clone() );
			});

			_menu.appendTo('body');

		},

	};




	// Initialize
	$(document).ready(function(){
		bsnav.initialize();
	});


}(jQuery));