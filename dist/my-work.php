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
			<div class="main my-work right">
				<section class="box">
					<h2 class="h2">Мои работы</h2>
					<div class="clearfix"></div>
					<div class="projects">
						<div class="item">
							<div class="hover-img">
								<img src="images/1.jpg" alt="">
								<div class="zoom-wrapper">
									<a href="" class="zoom" target="_blank">site.ru</a>
								</div>
							</div>
							<a href="" target="_blank">kkdsb skdjgsdj</a>
							<p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</div>
						<a href="#" class="item add-new-item">
							<div class="icon-add"></div>
							<span>Добавиьт проект</span>
						</a>
					</div>
				</section>	
			</div>
		</div>
	</div>
	<!-- Подключаем подвал -->
	<?php
		include_once("tmpl/footer.php") 
	?>
	<div id="modal">
		  <div class="modal-wrapper">
		    <div class="modal-header">
		      <button type="button" class="b-close"></button>
		      <h4 class="modal-title">Добавление проекта</h4>
		    </div>

		    <div class="modal-body">
		      <form id="add-new-project" class="form" role="form">  
		      <div class="server-mes error-mes"></div>
		      <div class="server-mes success-mes"></div>
		      <div class="form-group">
		        <label for="projectName" class="label">Название проекта</label>
		        <input type="text" name="projectName" class="input" id="projectName" placeholder="Введите название" qtip-content="Вы не ввели название">
		      </div>      
		      <div class="form-group">
		        <label for="projectImage" class="label">Картинка проекта</label>
		        <div class="fileupload-wrapper" id="uploadfile">
		          <button type="button" class="btn-fileupload right"></button>
		          <div class="fileupload-placeholder">Выберите картинку</div>
		          <input type="file" id="fileupload" class="fileupload-input">
		        </div>
		      </div>
		      <div class="form-group">
		        <label for="projectUrl" class="label">URL проекта</label>
		        <input type="text" name="projectUrl" class="input" id="projectUrl" placeholder="Добавьте ссылку" qtip-content="Вы не добавили ссылку">
		      </div>
		      <div class="form-group">
		        <label for="projectDesc" class="label">Описание</label>
		        <textarea name="text" id="projectDesc" class="textarea" rows="3" placeholder="Пара слов о вашем проекте" qtip-content="Описание проекта обязательно"></textarea>
		      </div>
		        <div class="btn-wrapp">
		          <button type="submit" class="btn">Добавить</button>
		        </div>      
		      </form>
		    </div>
		  </div>
		</div>
    <div id="overlay"></div>

	
	<script src="scripts/jquery-1.11.2.js"></script>
	<script scr="scripts/html5shiv.js"></script>
	<script src="scripts/main.js"></script>
</body>
</html>