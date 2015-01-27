<?php
include_once 'tmpl/head.php'
?>
<body>
	<div class="wrapper">
		<!-- Подключаем шапку -->
		<?php
			include_once 'tmpl/header.php'
		?>
		
		<div class="container main-container">
			<!-- Подключаем сайдбар -->
				<?php 
				include_once 'tmpl/sidebar.php' 
				?>
			<div class="main about-me right">
				<section class="box">
					<h2 class="h2">Основная информация</h2>
					<div class="clearfix"></div>
						<div class="portrait">
							<img src="images/userpicboy.png" alt="портрет автора">
						</div>
						<div class="main-info left">
							<ul class="info-list vertical">
								<li class="info-list__item"><b>Меня зовут:</b>&nbsp; Соболь Александр Владимирович</li>
								<li class="info-list__item"><b>Мой возраст:</b>&nbsp; 24 года</li>
								<li class="info-list__item"><b>Мой город:</b>&nbsp; Можайск</li>
								<li class="info-list__item"><b>Моя специализация:</b>&nbsp; FRONTEND разработчик</li>                    
								<li class="info-list__item"><b>Ключевые навыки: </b>&nbsp;
									<dd class="skills right">
										<span class="skill-item">html</span>
										<span class="skill-item">css</span>
										<span class="skill-item">javascript</span>
										<span class="skill-item">gulp</span>
										<span class="skill-item">git</span>
									</dd></li>
							</ul>
						</div>
				</section>
				<section class="box">
					<h2 class="h2">Опыт работы</h2>
					<div class="item">
					  <div class="about-icon icon-portfel"></div>
					  <div class="info-block">
						<p class="where">ОАО "РЖД" - электормеханик</p>
						<p class="period">Сентябрь 2013 - декабрь 2014</p>
					  </div>
					</div>    
				  </section>

				  <section class="box">
					<h2 class="h2">Образование</h2>
					<div class="item">
					  <div class="about-icon icon-college"></div>
					  <div class="info-block">
						<p class="where">Незаконченное высшее. МГУПС МИИТ</p>
						<p class="period">Октябрь 2011 - по настоящее время</p>
					  </div>
					</div>
					<div class="item">
					  <div class="about-icon icon-course"></div>
					  <div class="info-block">
						<p class="where">Курсы Loftschool</p>
						<p class="period">Январь 2015 - по настоящее время</p>
					  </div>
					</div>
				  </section>
				</div> 	
			</div>
		</div>
	</div>
	<!-- Подключаем подвал -->
	<?php
		include_once "tmpl/footer.php"
	?>
	<script src="scripts/jquery-1.11.2"></script>
	<script scr="scripts/html5shiv.js"></script>
	<script src="scripts/main.js"></script>
	
</body>
</html>