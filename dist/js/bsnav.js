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
			this.sideMenu();
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

				$(window).resize(function(){ $('.navbar-toggler').removeClass('active'); });

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

			// var _menu = $('<div/>', {
			// 			class: 'bsnav-mobile',
			// 			html: '<div class="bsnav-mobile-overlay"></div><div class="navbar"></div>'
			// 		});

			$('.bsnav .navbar-mobile').each(function(){
				if( $('.bsnav-mobile')[0] ){
					var _m = $(this).clone();
					// console.log(_m);
					_m.appendTo('.bsnav-mobile .navbar');
				}
			});

			
			if( !$('.navbar-toggler').attr('data-target') ){
				$('.navbar-toggler').on('click', function(){
					$('.bsnav-mobile').toggleClass('in');
				});
			}

			$('.bsnav-mobile .bsnav-mobile-overlay').on('click', function(){
				$('.bsnav-mobile').removeClass('in');
				$('.navbar-toggler').removeClass('active');
			});

			$(window).resize(function(){ $('.bsnav-mobile').removeClass('in'); });

		},





		sideMenu: function(){

			if( $('.bsnav-sidebar')[0] ){

				$('.bsnav-sidebar .nav-link').on('click', function(e){

					var _el = $(this);

					if( _el.siblings('.navbar-nav')[0] ){
						e.preventDefault();

						if( _el.parent().hasClass('in') ){
							_el.parent().removeClass('in');
							_el.parent().find('.in').removeClass('in');
							_el.parent().find('.navbar-nav').stop(true).slideUp(300);
						}else{
							if( !_el.closest('.in')[0] ){
								$('.bsnav-sidebar .nav-item.in .navbar-nav').stop(true).slideUp(300);
								$('.bsnav-sidebar .nav-item.in').removeClass('in');
							}
							_el.parent().addClass('in');
							_el.parent().siblings('.in').find('.navbar-nav').stop(true).slideUp(300);
							_el.parent().siblings('.in').removeClass('in');
							_el.siblings('.navbar-nav').stop(true).slideDown(300);
						}

					}

				});


				if( $('.bsnav-sidebar-left')[0] ){ $('body').addClass('bsnav-has-left-sidebar'); }
				if( $('.bsnav-sidebar-right')[0] ){ $('body').addClass('bsnav-has-right-sidebar'); }

			}

		},



	};




	// Initialize
	$(document).ready(function(){
		bsnav.initialize();
	});


}(jQuery));