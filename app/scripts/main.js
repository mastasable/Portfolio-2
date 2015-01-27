$(function(){
	//Модальное окно
	//Открытие модального окна
	$('a.add-new-item').click(function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400, function(){
			$('#modal')
				.css('display', 'block')
				.animate({opacity: 1, top: '50%'}, 200);
		});
	});//конец открытия модального окна
	// Закрытие модального окна
	$('.b-close, #overlay').click(function(){
		$('#modal')
			.animate({opacity: 0, top: '50%'}, 200,
			function(){
				$(this).css('display', 'none');
				$('#overlay').fadeOut(400);
			});
	});//конец модального окна

	//Стилизация input[type=file]
	var wrapper = $(".fileupload-wrapper"),
		inp = wrapper.find("input"),
		btn = wrapper.find("button"),
		lbl = wrapper.find("div");
	btn.focus(function(){
		inp.focus()
	});
	inp.focus(function(){
		wrapper.addClass("focus");
	}).blur(function(){
		wrapper.removeClass("focus");
	});
	var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;
	inp.change(function(){
		var file_name;
		if( file_api && inp[ 0 ].files[ 0 ] )
			file_name = inp[ 0 ].files[ 0 ].name;
		else
			file_name = inp.val().replace( "C:\\fakepath\\", '' );

		if( ! file_name.length )
			return;

		if( lbl.is( ":visible" ) ){
			lbl.text( file_name );
		}else
			btn.text( file_name );
	}).change();
});