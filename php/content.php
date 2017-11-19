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
	$sql = "SELECT * FROM project";
	$result = $conn->query($sql);


	if ($result->num_rows > 0) {  
	 while($row = $result->fetch_assoc()) {
        echo "
        <section class='flex-conteiner content items'>
			<div class='first-child' id='title'>".$row['NAME']."</div>
			<button class='last-child form' id=".$row['ID'].">Edit</button>
		</section>";
    } 
	} else { 
		echo ('fail');
	}
$result->close();
$conn->close();