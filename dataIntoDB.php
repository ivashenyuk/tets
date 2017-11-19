<?php 

$name = $_POST['name'];
$description = $_POST['description'];
	$conn = new mysqli('localhost', 'root', 'root', 'test');
		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		} 

		$sql = "INSERT INTO project(ID, NAME, DESCRIPTION) VALUES (NULL, '$name', '$description')";

		if ($conn->query($sql) === TRUE) {
		    echo "New record created successfully";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}

	$conn->close();



/*  sass --watch scss/style.scss:css/style.css --style compressed  */

/* wabpack */

/* npm run watch */