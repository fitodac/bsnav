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

			var _speed = 300;

			$('.bsnav .nav-item.dropdown')
			.on('mouseenter', function(){

				var _el = $(this);

				if( _el.hasClass('pop') || _el.hasClass('fade') || _el.hasClass('fadeup') || _el.hasClass('zoom') ){
					_el.find('> .navbar-nav').addClass('in');
				}else{
					_el.find('> .navbar-nav').addClass('in').stop().slideDown(_speed);
				}

			})
			.on('mouseleave', function(){

				var _el = $(this);

				if( _el.hasClass('pop') || _el.hasClass('fade') || _el.hasClass('fadeup') || _el.hasClass('zoom') ){
					_el.find('> .navbar-nav').removeClass('in');
				}else{
					_el.find('> .navbar-nav').removeClass('in').stop().slideUp(_speed);
				}

			});

		}

	};


	// Initialize
	$(document).ready(function(){
		bsnav.initialize();
	});


}(jQuery));