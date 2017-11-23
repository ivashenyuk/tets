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
	$sql = "SELECT * FROM project WHERE ID=".$_POST['id'];
	$result = $conn->query($sql);

	
echo json_encode($result->fetch_assoc());
	
$result->close();
$conn->close();