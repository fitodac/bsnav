/*---------------------------------------------------------*/
/*  NITRO v.0.2.0 (Beta)
/*  Author: Smartpixl
/*---------------------------------------------------------*/
var nitro = {
	init: function(){
		this.ExternalLinks.init();
		this.Modals.init();
		this.Tooltips.init();
		this.Popovers.init();
		this.ProgressCircular.init();
		this.Img2Svg.init();
		this.AOSinit.init();
		this.TextareaAutogrow.init();
		this.BrowserDetect.init();
		this.ScrollTo.init();
		this.AjaxSubmit.init();
		this.OffCanvas.init();
		this.vegasAddon.init();
	}
};




// (function( nitro, $ ){
// 	nitro = nitro || {};
// 	$.extend( nitro, {

// 		Test: {
// 			init: function(){
// 				this.build();
// 				return this;
// 			},

// 			build: function(){
// 				console.log('Prueba de XOXOX');
// 			}
// 		}

// 	});
// }).apply( this, [nitro, jQuery] );







(function($){
	"use strict";

	// Initialize
	$(document).ready(function(){
		nitro.init();
	});

}(jQuery));






/*---------------------------------------------------------*/
/*	OPEN EXTERNAL LINKS IN NEW WINDOW
/*	Declare linksOpenExternal = null to deprecate this function
/*---------------------------------------------------------*/
(function( nitro, $ ){
	nitro = nitro || {};
	$.extend( nitro, {

		ExternalLinks: {
			init: function(){
				this.build();
				return this;
			},

			build: function(){
				if( typeof linksOpenExternal != null ){

					$('a[href^="http"], a[href^="//"]').each(function(){
						var _this = $(this);
						if( _this.attr('target') != '_self' && _this.attr('href').indexOf(location.origin) < 0 )
						_this.attr('target', '_blank');
					});
					
					$('a[href^="' + window.location.origin + '"]').each(function(){
						var _this = $(this);
						if( _this.attr('target') != '_blank' )
						_this.attr('target', '_self');
					});
					
				}
			}
		}

	});
}).apply( this, [nitro, jQuery] );







/*---------------------------------------------------------*/
/*  MODALS (Bootstrap modals)
/*	Provide additional classes for scallable modals
/*---------------------------------------------------------*/
(function( nitro, $ ){
	nitro = nitro || {};
	$.extend( nitro, {

		Modals: {
			init: function(){
				this.build();
				return this;
			},

			build: function(){
				if( $('.modal')[0] ){

					$('.modal').each(function(){
						var _this = $(this);
			
						_this.on('show.bs.modal',function(e){
							_this.addClass('modal-showing');
						});
			
						_this.on('shown.bs.modal',function(e){
							_this.removeClass('modal-showing');
						});
			
					});
				}
			}
		}

	});
}).apply( this, [nitro, jQuery] );








/*---------------------------------------------------------*/
/*  INITIALIZE TOOLTIPS (Bootstrap tooltips)
/*---------------------------------------------------------*/
(function( nitro, $ ){
	nitro = nitro || {};
	$.extend( nitro, {

		Tooltips: {
			init: function(){
				this.build();
				return this;
			},

			build: function(){
				if( $('[data-toggle="tooltip"]')[0] ){
					$('[data-toggle="tooltip"]').tooltip();
				}
			}
		}

	});
}).apply( this, [nitro, jQuery] );






/*---------------------------------------------------------*/
/*  INITIALIZE POPOVERS (Bootstrap popovers)
/*---------------------------------------------------------*/
(function( nitro, $ ){
	nitro = nitro || {};
	$.extend( nitro, {

		Popovers: {
			init: function(){
				this.build();
				return this;
			},

			build: function(){
				if( $('[data-toggle="popover"]')[0] ){
					$('[data-toggle="popover"]').popover();
				}
			}
		}

	});
}).apply( this, [nitro, jQuery] );






/*---------------------------------------------------------*/
/*  CIRCULAR PROGRESS
/*---------------------------------------------------------*/
(function( nitro, $ ){
	nitro = nitro || {};
	$.extend( nitro, {

		ProgressCircular: {
			init: function(){
				this.build();
				return this;
			},

			build: function(){
				var circular = function(_el){
					return _el.each(function(){
			
						var _svg = $('<svg viewBox="0 0 120 120">'
													+'<circle class="meter" cx="60" cy="60" r="54" />'
													+'<circle class="value" cx="60" cy="60" r="54" />'
											+'</svg>');
				
								_el.prepend(_svg);
				
				
						if( _el.data('size') )
							var _width = _el.data('size');
							_el.width(_width);
			
			
						if( _el.data('value') ){	
							var _value = parseInt(_el.data('value'))/100,
									_val = 339.292 * (1 - _value);
				
							_el.find('.value').attr('stroke-dashoffset', _val);
						}
			
					});
				}
			
			
				if( $('.progress-circular')[0] ){
					return circular( $('.progress-circular') );
				}
			}
		}

	});
}).apply( this, [nitro, jQuery] );









/*---------------------------------------------------------*/
/*	IMG to SVG
/*---------------------------------------------------------*/
(function( nitro, $ ){
	nitro = nitro || {};
	$.extend( nitro, {

		Img2Svg: {
			init: function(){
				this.build();
				return this;
			},

			build: function(){
				var svgFn = function(_img){
					_img.each(function(){
						var _imgID = _img.attr('id'),
								_imgClass = _img.attr('class'),
								_imgURL = _img.attr('src'),
								_imgStyle = _img.attr('style');
			
						$.get(_imgURL, function(data){
							// Get the SVG tag, ignore the rest
							var _svg = jQuery(data).find('svg');
			
							// Add replaced image's ID to the new SVG
							if(typeof _imgID !== 'undefined')
								_svg = _svg.attr('id', _imgID);
			
							// Add replaced image's classes to the new SVG
							if(typeof _imgClass !== 'undefined')
								_svg = _svg.attr('class', _imgClass+' replaced-svg');
			
			
							// Remove any invalid XML tags as per http://validator.w3.org
							_svg = _svg.removeAttr('xmlns:a').attr('style', _imgStyle);
			
							// Replace image with new SVG
							_img.replaceWith(_svg);
						}, 'xml');
			
					});
				}
			
			
				if( $('img.svg')[0] ){
					return svgFn( $('img.svg') );
				}
			}
		}

	});
}).apply( this, [nitro, jQuery] );







/*---------------------------------------------------------*/
/*	AUTOGROW TEXTAREA
/*---------------------------------------------------------*/
(function( nitro, $ ){
	nitro = nitro || {};
	$.extend( nitro, {

		TextareaAutogrow: {
			init: function(){
				this.build();
				return this;
			},

			build: function(){
				$('textarea.autogrow').each(function(){
					var _textarea = $(this);
					_textarea.on('input', function(e){
						if( _textarea.scrollTop() ){
							_textarea.height(function(i,h){ return h + 20; });
						}
					});
				});
			}
		}

	});
}).apply( this, [nitro, jQuery] );






/*---------------------------------------------------------*/
/*	INITIALIZE ANIMATE ON SCROLL (if exist)
/*---------------------------------------------------------*/
(function( nitro, $ ){
	nitro = nitro || {};
	$.extend( nitro, {

		AOSinit: {
			init: function(){
				this.build();
				return this;
			},

			build: function(){
				if( typeof AOS != 'undefined' ){
					AOS.init();
				}
			}
		}

	});
}).apply( this, [nitro, jQuery] );
/*-----------------------------------------------*/
/*	BROWSER DETECT
/*-----------------------------------------------*/
(function( nitro, $ ){
	nitro = nitro || {};
	$.extend( nitro, {

		BrowserDetect: {
			init: function(){
				this.build();
				return this;
			},

			build: function(){
				var _prefix = 'browser-',
						_is_chrome = navigator.userAgent.indexOf('Chrome') > -1,
						_is_explorer = navigator.userAgent.indexOf('MSIE') > -1,
						_is_explorer_9 = navigator.userAgent.indexOf('9') > -1,
						_is_explorer_10 = navigator.userAgent.indexOf('10') > -1,
						_is_explorer_11 = navigator.userAgent.indexOf('11') > -1,
						_is_edge = navigator.userAgent.indexOf('Edge') > -1,
						_is_firefox = navigator.userAgent.indexOf('Firefox') > -1,
						_is_safari = navigator.userAgent.indexOf("Safari") > -1,
						_is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;

				if( (_is_chrome)&&(_is_safari) )
					_is_safari = false;

				if( (_is_chrome)&&(_is_opera) )
					_is_chrome = false;

				if( (_is_chrome) )
					$('body').addClass(_prefix + 'chrome');

				if( (_is_explorer) )
					$('body').addClass(_prefix + 'msie');   

				if( (_is_edge) )
					$('body').addClass(_prefix + 'edge');   

				if( (_is_firefox) )
					$('body').addClass(_prefix + 'firefox');

				if( (_is_safari) )
					$('body').addClass(_prefix + 'safari'); 

				if( (_is_opera) )
					$('body').addClass(_prefix + 'opera');  

				if( (_is_explorer)&&(_is_explorer_9) )
						$('body').addClass(_prefix + 'msie-9');

				if( (_is_explorer)&&(_is_explorer_10) )
					$('body').addClass(_prefix + 'msie-10');

				if( (_is_explorer)&&(_is_explorer_11) )
					$('body').addClass(_prefix + 'msie-11');
			}
		}

	});
}).apply( this, [nitro, jQuery] );
/*---------------------------------------------------------*/
/*	SCROLL TO
/*---------------------------------------------------------*/
(function( nitro, $ ){
	nitro = nitro || {};
	$.extend( nitro, {

		ScrollTo: {
			init: function(){
				this.build();
				return this;
			},

			build: function(){
				if( $('.scrollto')[0] ) $('.scrollto').scrollTo();
			}
		}

	});
}).apply( this, [nitro, jQuery] );





(function($){
	'use strict';

	$.fn.scrollTo = function(options){
		return this.each(function(){
			
			var _this = $(this),

					opt = $.extend({
							target 		: _this.attr('href'),
							speed 		: 800,
							offset 		: 0,
							easing 		: 'easeInOutCubic'
					}, options);


			if( !opt.target )
				opt.target = _this.data('target');

			if( _this.data('speed') )
				opt.speed = _this.data('speed');

			if( _this.data('offset') )
				opt.offset = parseInt(_this.data('offset'));

			if( _this.data('easing') )
				opt.easing = _this.data('easing');


			if( opt.target )
				_this.on('click', function(e){
					e.preventDefault();

					if( $(opt.target).length > 0 )
						$('html, body').stop().animate({
							scrollTop: $(opt.target).offset().top - opt.offset,
							easing: opt.easing
						}, opt.speed);

					// console.log( '.scrollto' );
				});

		});
	}//scrollTo()
		

}(jQuery));
/*---------------------------------------------------------*/
/*	AJAX SUBMIT
/*---------------------------------------------------------*/
(function( nitro, $ ){
	nitro = nitro || {};
	$.extend( nitro, {

		AjaxSubmit: {
			init: function(){
				this.build();
				return this;
			},

			build: function(){}
		}

	});
}).apply( this, [nitro, jQuery] );




(function($){
	'use strict';

	$.fn.ajaxForm = function(options){
		return this.each(function(){

			var form = $(this);

			var settings = $.extend({
					data 				: '',
					urlBin 			: location.origin + '/assets/bin/sendmail.php',
					onSuccess 	: function(){ 
						alert('Form Submitted!')
					},
					type 				: 'POST'
			}, options);


			$.ajax({
				type: settings.type,
				url: settings.urlBin,
				data: settings.data,
				success: function(){
					settings.onSuccess;
				}
			});

		});
	}//ajaxForm()

}(jQuery));
/*---------------------------------------------------------*/
/*	OFF CANVAS
/*---------------------------------------------------------*/
(function( nitro, $ ){
	nitro = nitro || {};
	$.extend( nitro, {

		OffCanvas: {
			init: function(){
				this.build();
				return this;
			},

			build: function(){
				if($('.off-canvas-wrapper')[0]) $('.off-canvas-wrapper').offCanvas();
			}
		}

	});
}).apply( this, [nitro, jQuery] );



(function($){
	$.fn.offCanvas = function(options){
		return this.each(function(){

			var _this = $(this),
					_sidebar = _this.find('> .off-canvas-sidebar');



			if( _this.data('__offcanvas') )
				return;
			else
				_this.data('__offcanvas', true)



			// OVERLAY
			var _overlay = $('<div class="off-canvas-overlay"></div>');
			_this.append(_overlay);

			_overlay.on('click', function(){
				_this.removeClass('in');
			});


			// OFFSET
			if( _this.data('offset') )
				var _offset = _sidebar.outerWidth() - _this.data('offset');
				_sidebar.css({'transform': 'translate3d(-'+ _offset +'px,0,0)'});


			// HOVER
			if( _this.hasClass('off-canvas-hover') )
				_sidebar.on('mouseenter', function(e){
					e.stopPropagation();
					_this.addClass('in');
				})
				.on('mouseleave', function(e){
					e.stopPropagation();
					_this.removeClass('in');
				});



			// BUTTONS
			if( $('[data-offcanvas-target]')[0] )
				$('[data-offcanvas-target]').each(function(){

					var _btn = $(this),
							_target = _btn.data('offcanvasTarget');

					if( $(_target)[0] )
						_btn.on('click', function(){

							$(_target).addClass('in');

						});

				});

		});
	}//offCanvas()


})(jQuery);
(function( nitro, $ ){
	nitro = nitro || {};
	$.extend( nitro, {

		vegasAddon: {

			init: function(){
				this.build();
				return this;
			},



			build: function(){

				if( $('.owl-carousel')[0] ){

					$('.owl-carousel').each(function(){

						var _el = $(this),
								_animation = !_el.data('animation') ? false : _el.data('animation'),
								_animIn = false,
								_animOut = false,
								_dots = !_el.data('dots') ? false : true,
								_nav = !_el.data('nav') ? false : true,
								_speed = _el.data('speed') ? _el.data('speed') : 5000,
								_smart_speed = 400,
								_loop = _el.data('loop') == false ? false : true,
								_autoplay = _el.data('autoplay') ? true : false,
								_pauseHover = _el.data('hover-pause') ? true : false,
								_hasTimer = _el.data('timer') ? true : false,
								_timer = $('<div class="owl-timer"></div>'),
								_timerBar = $('<div class="owl-timer-progress"></div>');



						/*------------------------------------------------------*/
						/*	Timer
						/*------------------------------------------------------*/
						var timerBuilder = function(){
							_timer.find('.owl-timer-progress').detach();
							_timerBar.css({transition: _speed+'ms', width: 0}).appendTo(_timer);
							setTimeout(function(){
								_timerBar.css({width: '100%'});
							}, 50);

							if( _pauseHover && _animation !== 'kenburns-in' && _animation !== 'kenburns-out' ){
								_el
								.on('mouseenter', function(){
									_timer.find('.owl-timer-progress').detach();
								})
								.on('mouseleave', function(){
									timerBuilder($(_el));
								});
							}
						};



						/*------------------------------------------------------*/
						/*	Init
						/*------------------------------------------------------*/
						var owlInit = function(event){
							var _el = event.target,
									_smartSpeed = event.relatedTarget.options.smartSpeed * 10;;

							
							if( _animation == 'kenburns-in' || _animation == 'kenburns-out' ){
								$(_el).find('.owl-item > div').css('animation-duration', (_smartSpeed + _speed)+'ms');
								$(event.target).find('.owl-item').eq(event.item.index).addClass('kenburns');
							}


							// TIMER
							if(_hasTimer && _autoplay){
								_timer.appendTo($(_el));
								timerBuilder();
							}

						};



						/*------------------------------------------------------*/
						/*	Translate
						/*------------------------------------------------------*/
						var owlTranslate = function(event){
							if( _animation == 'kenburns-in' || _animation == 'kenburns-out' ){
								var _total = event.item.count,
										_cur = event.item.index;


								_el.find('.owl-item').removeClass('kenburns');

								// setTimeout(function(){
								// 	_el.find('.owl-item').removeClass('kenburns').removeClass('fadeIn').removeClass('fadeOut').removeClass('owl-animated-in').removeClass('owl-animated-out');
								// }, _speed);


								if( _cur == (_total-1) ){
									setTimeout(function(){
										_el.trigger('to.owl.carousel', 0);
									}, _speed);
								}
								
								if( _cur == 0 ){
									_el.find('.owl-item').eq(0).addClass('kenburns');
									_el.find('.owl-item').eq(_total - 1).addClass('kenburns');
									// _el.find('.owl-item').eq(_total - 1).addClass('kenburns').css('left',0);
								}else{
									_el.find('.owl-item').eq(_cur).prev().addClass('kenburns');
									// _el.find('.owl-item').eq(_cur).prev().addClass('kenburns').css('left',0);
									_el.find('.owl-item').eq(_cur).addClass('kenburns');
								}

							}

							if(_hasTimer && _autoplay){ timerBuilder(); }

						};




						/*------------------------------------------------------*/
						/*	Animations
						/*------------------------------------------------------*/
						if( _animation == 'kenburns-in' || _animation == 'kenburns-out' ){
							_animIn = 'fadeIn';
							_animOut = 'fadeOut';
							_loop = false;
							_autoplay = true;
							_pauseHover = false;
						}

						if( _animation == 'fade' ){
							_animIn = 'fadeIn';
							_animOut = 'fadeOut';
						}

						if( _animation == 'zoom' ){
							_animIn = 'owl-zoom-in';
						}



						var _options = {
							items: 1,
							dots: _dots,
							nav: _nav,
							loop: _loop,
							lazyLoad: true,
							animateIn: _animIn,
							animateOut: _animOut,
							mouseDrag: false,
							touchDrag: false,
							// checkVisible: false,
							autoplay: _autoplay,
							smartSpeed: _smart_speed,
							autoplayHoverPause: _pauseHover,
							autoplayTimeout: _speed,
							onInitialized: owlInit,
							onTranslate: owlTranslate
						}
			
			
						_el.owlCarousel(_options);
			
					});
			
				}
			
			}

		}

	});
}).apply( this, [nitro, jQuery] );