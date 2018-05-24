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

				var _sidebar = $('.bsnav-sidebar .navbar-nav').eq(0),
						_num = 1;


				_sidebar.find('.navbar-nav').each(function(){

					var _id = 'navbar-nav-'+_num,
							_index = $(this).parent().index();

					$(this).parent().attr('data-child-navbar', _id);
					$(this).prepend('<li class="nav-previous"></li>')
					$(this).attr('id', _id);
					_num++;

				});


				_sidebar.find('.navbar-nav').each(function(){
					var _navbar = $(this).clone();
					_navbar.find('.navbar-nav').detach();
					_navbar.appendTo('.bsnav-sidebar .collapse');
				});

				_sidebar.find('.navbar-nav').remove();


				$(document).find('.bsnav-sidebar .nav-link').on('click', function(e){
					if( $(this).parent().attr('data-child-navbar') ){
						e.preventDefault();

						var _navbar = '#'+$(this).parent().attr('data-child-navbar'),
								_parentNav = $(this).closest('.navbar-nav');

						_parentNav.addClass('out');
						$(_navbar).addClass('active');
						$('.bsnav-sidebar .navbar-nav.prev').removeClass('prev');
						setTimeout(function(){ 
							_parentNav.removeClass('active').removeClass('out').addClass('prev');
						}, 400);
					}
				});


				$(document).find('.bsnav-sidebar .nav-previous').on('click', function(e){
					$('.bsnav-sidebar .navbar-nav.active').addClass('out');
					$('.bsnav-sidebar .navbar-nav.prev').addClass('active');
					// $('.bsnav-sidebar .navbar-nav.prev').removeClass('prev');
					setTimeout(function(){ 
						$('.bsnav-sidebar .navbar-nav.out').removeClass('active').removeClass('out');
						$('.bsnav-sidebar .navbar-nav.prev').addClass('prev');
						// _parentNav.removeClass('active').removeClass('out').addClass('prev');
					}, 400);
				});


				$(document).ready(function(){
					_sidebar.addClass('active');
				});

			}

		},



	};




	// Initialize
	$(document).ready(function(){
		bsnav.initialize();
	});


}(jQuery));