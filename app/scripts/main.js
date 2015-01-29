(function(){
	var app = {
		// Инициализация
		initialize : function(){
			console.log('Инициализация приложения');

			this.setUpListeners();

		},

		// Включаем прослушку событий
		setUpListeners: function  () {
			console.log('Прослушка событий вклбчена');

			$('.add-new-item').on('click', app.showModal);
			$('.b-close, #overlay').on('click', app.closeModal);
			$('#contact-me').on('submit', app.contactMe);
			$('form').on('keydown', '.has-error', app.removeError);
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
					app.createQtip(element, pos);
					valid = false;
				}
			});

			return valid;
		},

		// Создаёт тултипы
			createQtip: function (element, position) {
				console.log('Создаем тултип');

				// позиция тултипа
				if (position === 'right') {
				position = {
					my: 'left center', 
					at: 'right center'
				}
				}else{
				position = {
					my: 'right center', 
					at: 'left center',
					adjust: {
					method: 'shift none'
					}
				}
				}

				// инициализация тултипа
				element.qtip({
				content: {
					text: function() {
					return $(this).attr('qtip-content');
					}
				},
				show: {
					event: 'show'
				},
				hide: {
					event: 'keydown hideTooltip'
				},
				position: position,
				style: {
					classes: 'qtip-mystyle qtip-rounded',
					tip: {
					height: 10,
					width: 16
					}
				}
				}).trigger('show');
			},

		ajaxForm: function (form, url){

			if(!app.validateForm(form)) return false;
			var data = form.serialize();

			return $.ajax({
				type: 'POST',
				url: url,
				dataType: 'JSON',
				data: data
			}).fail(function(ans){
				console.log('Проблемы в PHP');
				form.find('.error-mes')
					.text('На серевере произошла ошибка')
					.show();
			});
		},

		contactMe: function  (ev) {
			console.log('Работаем с формой связи');
			ev.preventDefault();

			var form = $(this);
			var url = 'send_mail.php';
			var defObject = app.ajaxForm(form, url);

			if (defObject){
				defObject.done(function(ans){
					var mes = ans.mes;
					var status = ans.status;

					if (status === 'OK'){
						form.trigger('reset');
						form.find('success-mes').text(mes).show();
					} else {
						form.find('error-mes').text(mes).show();
					}
				});
			}
		},

		// Универсальная функция очистки формы
		clearForm: function(form) {
			console.log('Очищаем форму');

			var form = $(this);
			form.find('.input, .textarea').trigger('hideTooltip'); // удаляем тултипы
			form.find('.has-error').removeClass('has-error'); // удаляем красную подсветку
			form.find('.error-mes, success-mes').text('').hide(); // очищаем и прячем сообщения с сервера
		},

		// Убирает красную обводку у элементов форм
		removeError: function() {
		  console.log('Красная обводка у элементов форм удалена');

		  $(this).removeClass('has-error');
		}
	}

	app.initialize();

}());
	
