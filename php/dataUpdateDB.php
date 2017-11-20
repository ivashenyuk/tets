<?php
	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "test";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	$id = $_POST['id'];
	$name = $_POST['name'];
	$description = $_POST['description'];

	$sql = "UPDATE project SET NAME='$name', DESCRIPTION='$description' WHERE id='$id'";

	if ($conn->query($sql) === TRUE) {
	    echo "Record updated successfully";
	} else {
	    echo "Error updating record: " . $conn->error;
	}

	$conn->close();