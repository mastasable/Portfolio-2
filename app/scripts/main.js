(function(){
	var app = {
		// Инициализация
		initialize : function(){
			console.log('Инициализация приложения');

			this.setUpListeners();

			// // TODO: only in ie
			// $('input, textarea').placeholder();
		},

		// Включаем прослушку событий
		setUpListeners: function  () {
			console.log('Прослушка событий вклбчена');

			$('.add-new-item').on('click', app.showModal);
			$('.b-close, #overlay').on('click', app.closeModal);
			$('#contact-me').on('submit', app.contactMe);
		},

		//Вызывает модальное окно
		showModal: function(){
			console.log('Вызов модального окна');

			$('#overlay').fadeIn(400, function(){
				$('#modal')
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
			});

			//вставляет название файла в input
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
		},

		// Закрывает модальное окно
		closeModal: function(){
			console.log('Закрытие модального окна');

			$('#modal')
				.animate({opacity: 0, top: '50%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
			});
		},
		//Проверяет форму
		validateForm: function (form){
			console.log('Проверяем форму');

			var elements = form.find('input, textarea')
				.not('input[type="file"], input[type="hidden"]'),
				valid = true;

			$.each(elements, function(index, val){
				var element = $(val);
				var val = element.val();
				var pos = element.attr('qtip-position');

				if(val.length == 0){
					element.addClass('has-error');
					app.creareQtip(element, pos);
					valid = false;
				}
			});

			return valid;
		},

		// Создаёт тултипы

		// Универсальная функция очистки формы
		clearForm: function(form) {
			console.log('Очищаем форму');

			var form = $(this);
			form.find('.input, .textarea').trigger('hideTooltip'); // удаляем тултипы
			form.find('.has-error').removeClass('has-error'); // удаляем красную подсветку
			form.find('.error-mes, success-mes').text('').hide(); // очищаем и прячем сообщения с сервера
		},
	}

	app.initialize();

}());
	
