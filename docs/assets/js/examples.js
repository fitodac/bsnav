jQuery(document).ready(function($){


	$('.btn').on('mouseenter', function(){
		var _example = $(this).data('example'),
				_img = $(this).data('img');
		
		if( _example && _img ){
			$('.example#'+_example).find('img').addClass('d-none');
			$('.example#'+_example).find('img#'+_img).removeClass('d-none');
		}

	});



	$('.btn.ex-submenu')
	.on('mouseenter', function(){
		var _ex = '#example-dropdown .fake-submenu',
				_d = $(this).data('submenu'),
				_img = $(this).data('img');
		
		$(_ex+' img').addClass('d-none');
		$(_ex+' .'+_img).removeClass('d-none').addClass('submenu-example-'+_d);
	})
	.on('mouseleave', function(){
		var _ex = '#example-dropdown .fake-submenu',
				_d = $(this).data('submenu'),
				_img = $(this).data('img');
		
		$(_ex+' .'+_img).removeClass('submenu-example-'+_d);
	});

});