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
	$sql = "SELECT * FROM project";
	$result = $conn->query($sql);

	$array = array();
	if ($result->num_rows > 0) {  
	 while($row = $result->fetch_assoc()) {
        $array[] = $row;
    } 
	} else { 
		echo ("fail");
	}
echo json_encode($array);
	
$result->close();
$conn->close();