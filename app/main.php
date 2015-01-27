<?php
session_start();
 $page = $_GET['page'];
  // подключение к БД
  $data = array();
  switch($page){
    // выводим страницу портфолио
    case 'my-work':
      $data['title'] = 'Мои работы';
      require_once 'my-work.php';
      break;
    // выводим страницу с контактной формой
    case 'contact':
      $data['title'] = 'Связаться со мной';
      require_once 'contact-me.php';
      break;
    // выводим страницу админки
    case 'admin':
      $data['title'] = 'Админка';
      require_once 'login.php';
      break;
    // выводим главную страницу
    default:
      $data['title'] = "Сайт веб-разработчика";
      $data['page'] = "index";
      require_once 'index.php';
      break;
}