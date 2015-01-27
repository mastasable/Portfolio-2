<aside class="main-menu left">
	<nav class="nav-menu">
		<ul class="nav-menu vertical">
			<li <?php echo ($page == '') ? 'class="current"' : '';?>><a href="/" class="link">Обо мне</a></li>
			<li <?php echo ($page == 'my-work') ? 'class="current"' : '';?>><a href="my-work" class="link">Мои работы</a></li>
			<li <?php echo ($page == 'contact') ? 'class="current"' : '';?>><a href="contact" class="link">Связаться со мной</a></li>
		</ul>
	</nav>
	<div class="contacts">
		<div class="contacts__header">
			<h3 class="h3">Контакты</h2>
		</div>
		<ul class="contacts-menu vertical">
			<li class="contacts-menu__item mail">
				<span class="contact-icon"></span>
				<a href="">masta.sable@gmail.com</a>
			</li>
			<li class="contacts-menu__item phone">
				<span class="contact-icon"></span>
				<a href="">+79269612210</a>
			</li>
			<li class="contacts-menu__item skype">
				<span class="contact-icon"></span>
				<a href="">masta.sable</a>
			</li>
		</ul>
	</div>
</aside>