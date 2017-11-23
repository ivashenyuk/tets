<?php
	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "test";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	mysqli_set_charset($conn,"utf8");
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	$id = $_POST['id'];
	$name = $_POST['name'];
	$description = $_POST['description'];
	$workers = $_POST['workers'];
	$teamleed = $_POST['teamleed'];

	$sql = "UPDATE project SET NAME='$name', DESCRIPTION='$description', WORKERS='$workers', TEAMLEED='$teamleed' WHERE id='$id'";

	if ($conn->query($sql) === TRUE) {
	    echo "Record updated successfully";
	} else {
	    echo "Error updating record: " . $conn->error;
	}

	$conn->close();