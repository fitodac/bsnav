jQuery(document).ready(function($){


	$('.btn').on('mouseenter', function(){
		var _example = $(this).data('example'),
				_img = $(this).data('img');
		
		if( _example && _img ){
			$('.example#'+_example).find('img').addClass('d-none');
			$('.example#'+_example).find('img#'+_img).removeClass('d-none');
		}

	});



	$('.btn.ex-submenu').on('mouseenter', function(){
		$('#example-dropdown .fake-submenu').hidden().delay(300).slideDown(400);
	});

});