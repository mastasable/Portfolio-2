<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<!--[if IE]>
	<script src="scripts/html5shiv.js"></script>
	<![endif]-->
	<title>About</title>
	<link rel="stylesheet" href="styles/main.css">
	<link rel="stylesheet" href="styles/normalize.css">


</head>
<body>
	<div class="wrapper">
		<!-- Подключаем шапку -->
		<?php
			include_once ('tmpl/header.php')
		?>
		
		<div class="container main-container">
			<!-- Подключаем сайдбар -->
				<?php 
				include_once ('tmpl/header.php') 
				?>
			<div class="main contact-me right"> 
			  <section class="box">
			    <div class="sec-header">
			      <h2 class="h2">У вас интересный проект? Напишите мне!</h2>
			    </div> 
			    <form id="contact-me" class="form" role="form">   
			      <div class="server-mes error-mes"></div>
			      <div class="server-mes success-mes"></div>
			      <div class="form-line">
			        <div class="form-group left">
			          <label for="name" class="label">Имя</label>
			          <input type="text" name="name" class="input" id="name" placeholder="Как к вам обращаться" qtip-content="Вы не ввели имя">
			        </div>
			        <div class="form-group right">
			          <label for="email" class="label">Email</label>
			          <input type="email" name="email" class="input" id="email" placeholder="Куда мне писать" qtip-position="right" qtip-content="Вы не ввели email">
			        </div>
			      </div>
			      <div class="form-group">
			        <label for="message" class="label">Сообщение</label>
			        <textarea name="message" id="message" class="textarea" rows="3" placeholder="Кратко в чем суть" qtip-content="Что вы от меня хотите?"></textarea>
			      </div>
			      <div class="form-group captcha-wrap">
			        <label for="captcha" class="label">Введите код, указанный на картинке</label>
			        <img src="/app/captcha.php" alt="код" class="captcha left"/>
			        <input type="text" name="captcha" class="input input-captcha right" id="captcha" placeholder="Введите код" qtip-position="right" qtip-content="Вы не ввели код">
			      </div>
			      <div class="button-group">
			        <button type="submit" class="btn">Отправить</button>
			        <button type="reset" class="btn btn-res right">Очистить</button>
			      </div>      
			    </form>            
			  </section>           
			</div>
		</div>
	</div>
	<!-- Подключаем подвал -->
	<?php
		include_once("tmpl/footer.php") 
	?>

	<script src="scripts/jquery-1.11.2"></script>
	<script src="scripts/main.js"></script>
	
</body>
</html>