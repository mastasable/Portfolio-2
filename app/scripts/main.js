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
});