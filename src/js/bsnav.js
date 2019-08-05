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
			this.sideMenu();
			this.navbarSticky();
			this.scrollspy();
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





		dropdown : function(){

			$('.bsnav .nav-item.dropdown')
			.on('mouseenter', function(){
				$(this).find('> .navbar-nav').addClass('in');
			})
			.on('mouseleave', function(){
				$(this).find('> .navbar-nav').removeClass('in');
			});

		},





		mobileMenu : function(){

			if( $('.bsnav .navbar-mobile')[0] && $('.bsnav-mobile')[0] ){

				// NAVBAR DARK
				if( $('.bsnav .navbar-mobile').closest('.bsnav-dark')[0] ){ $('.bsnav-mobile .navbar').addClass('bsnav-dark'); }
				// NAVBAR LIGHT
				if( $('.bsnav .navbar-mobile').closest('.bsnav-light')[0] ){ $('.bsnav-mobile .navbar').addClass('bsnav-dark'); }
				

				$('.bsnav .navbar-mobile').each(function(){
					var _m = $(this).clone();
					_m.find('.dropdown').removeClass('dropdown');
					_m.appendTo('.bsnav-mobile .navbar');
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

				this.sideMenuNavigation( $('.bsnav-mobile') );

				$(window).resize(function(){ $('.bsnav-mobile').removeClass('in'); });

			}

		},





		sideMenu : function(){

			if( $('.bsnav-sidebar')[0] ){

				this.sideMenuNavigation( $('.bsnav-sidebar') );

				if( $('.bsnav-sidebar-left')[0] ){ $('body').addClass('bsnav-has-left-sidebar'); }
				if( $('.bsnav-sidebar-right')[0] ){ $('body').addClass('bsnav-has-right-sidebar'); }
				if( $('.bsnav-sidebar-condensed')[0] ){ $('body').addClass('bsnav-has-condensed-sidebar'); }
				$('.bsnav-sidebar .nav-item > .navbar-nav').parent().addClass('menu-item-has-children');

			}

		},





		sideMenuNavigation : function(el){

			el.find('.nav-link').on('click', function(e){

				var _el = $(this);

				if( _el.siblings('.navbar-nav')[0] ){
					e.preventDefault();

					if( _el.parent().hasClass('in') ){
						_el.parent().removeClass('in');
						_el.parent().find('.in').removeClass('in');
						_el.parent().find('.navbar-nav').stop(true).slideUp(300);
					}else{
						if( !_el.closest('.in')[0] ){
							el.find('.nav-item.in .navbar-nav').stop(true).slideUp(300);
							el.find('.nav-item.in').removeClass('in');
						}
						_el.parent().addClass('in');
						_el.parent().siblings('.in').find('.navbar-nav').stop(true).slideUp(300);
						_el.parent().siblings('.in').removeClass('in');
						_el.siblings('.navbar-nav').stop(true).slideDown(300);
					}

				}

			});

		},




		navbarSticky : function(){

			var sticky = function(el, limit, scrolltop){
										if( scrolltop > limit ) el.addClass('sticked');
										if( scrolltop > limit + 30 ) el.addClass('in');
										if( scrolltop == 0 ) el.removeClass('sticked').removeClass('in');
									}//sticky()



			if( $('.bsnav-sticky')[0] ){

				var _limit = $('.bsnav-sticky').outerHeight(),
						_scrollTop = $(window).scrollTop();
				
						sticky($('.bsnav-sticky'), _limit, _scrollTop);


				$(window).on('scroll',function(){
					_scrollTop = $(window).scrollTop();
					sticky($('.bsnav-sticky'), _limit, _scrollTop);
				});
			}

		},



		scrollspy : function(){ 

			var _nav = $('.bsnav-scrollspy'),
					_navHeight = _nav.outerHeight(),
					_sections = [];

			
			if( _nav.length ){

				_nav.find('[data-scrollspy]').each(function(e){
					_sections.push($(this).data('scrollspy'));
				});



				function navOffset(){
					_nav.find('[data-scrollspy]').click(function(e){
						e.preventDefault();
						_nav.addClass('spying');
						var _target = $(this).data('scrollspy');
						_nav.find('.nav-item').removeClass('active');
						$(this).parent().addClass('active');

						$('html,body').animate({
							scrollTop: $('#'+_target).offset().top - _navHeight
						}, 800, function(){
							_nav.removeClass('spying');
						});
					});
				}



				function scrollSpy(){
					if( !_nav.hasClass('spying') ){
						var _winScroll = $(window).scrollTop();

						_sections.map(function(v,i){
							var _top = $('#'+v).offset().top - _navHeight,
									_bottom = _top + $('#'+v).outerHeight();
							
							if( _winScroll >= _top && _winScroll <= _bottom ){
								_nav.find('.nav-item').removeClass('active');
								$('[data-scrollspy='+ v +']').parent().addClass('active');
							}
						});
					}
				}



				$(window).scroll(function() {
					scrollSpy();
				});
				navOffset();


			}
		}


	};




	// Initialize
	$(document).ready(function(){ bsnav.initialize() });
	$(window).on('load', function(){ bsnav.mobileMenu() });


}(jQuery));