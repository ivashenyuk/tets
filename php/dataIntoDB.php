<?php 

$name = $_POST['name'];
$description = $_POST['description'];
$workers = $_POST['workers'];
$teamleed = $_POST['teamleed'];
	$conn = new mysqli('localhost', 'root', 'root', 'test');
	mysqli_set_charset($conn,"utf8");
		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		} 

		$sql = "INSERT INTO project(ID, NAME, DESCRIPTION, WORKERS, TEAMLEED) VALUES (NULL, '$name', '$description', '$workers', '$teamleed')";

		if ($conn->query($sql) === TRUE) {
		    echo "New record created successfully";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}

	$conn->close();



/*  sass --watch scss/style.scss:css/style.css --style compressed  */

/* wabpack */

/* npm run watch */