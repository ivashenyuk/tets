<?php 
	$name = trim($_POST['name']);
	$description = trim($_POST['description']);

	$link = mysqli_connect('localhost', 'root', 'root', 'test');
	mysqli_set_charset($link, 'utf8');
	if(mysqli_connect_errno()) {
	  echo "Сталася помилка під час підключення до БД(".mysqli_connect_errno()."): ".mysqli_connect_error();
	  exit();
	}

	$sql = "INSERT INTO project(ID, NAME, DESCRIPTION) VALUES (NULL, $name, $description)";
	mysqli_query($link, $sql);
