<?php
session_start();
date_default_timezone_set('Europe/Moscow');
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$message = htmlspecialchars(strip_tags(trim($_POST['message'])), ENT_QUOTES);

$data = array();

require_once 'lib/class.phpmailer.php';

if(filter_var($email, FILTER_VALIDATE_EMAIL)){
	$mail = new PHPmailer;

	$mail->IsSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->SMTPSecure = "ssl";
	$mail->Username = 'email';
	$mail->Password = 'password'
	$mail->Port = 465
	$mail->CharSet = 'UTF-8'

	$mail->From = 'email';
	$mail->FromName = 'Сообщение с сайта';
	$mail->addAddress = ($email, $name);

	$mail->WordWrap = 80;
	$mail->Subject = 'Сообщение с сайта портфолио';
	$mail->Body = $message;

	if($mail->send()){
		$data['status'] = 'OK';
		$data['mes'] = 'Письмо успешно отправлено';
	} else {
		$data['status'] = 'NO';
		$data['mes'] = 'Возникла неизвестная ошибка при отправке письма';
	}
}else {
	$data['status'] = 'NO';
	$data['mes'] = 'Правильно заполните поле e-mail';
}

echo json_encode($data);
exit;