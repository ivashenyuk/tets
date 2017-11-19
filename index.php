<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<!-- Include styles -->
	<link rel="stylesheet" href="/css/style.css">

	<!-- Include scripts -->
	<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
	<script src="script.js"></script>
</head>
<body>
	<!-- Header -->
	<header class="flex-conteiner logo">
		<div>Home</div>
		<div class="add_project flex">
			<button class="form">Add project</button>
		</div>
	</header>
	<!-- Main content -->
	<main class="flex-conteiner content" id="js-content-id">
		<!-- <img src="https://reservations.tsogosun.com/images/loading.gif" alt="loading" style="margin: auto; height: 15em;"> -->
	</main>
	<!-- footer -->
	<footer>
		
	</footer>



	<div class="hidden js-hidden">
		<div class="popup" id="js-popup">
			<div class="header-modale">
				Project Settings
			</div>
			<div class="main">

				<div class="tabs">
					<ul class="tabs__caption">
						<li class="active">General</li>
						<li>Team</li>
					</ul>
					<div class="tabs__content  active">
						<form id="form">
							<label for="name-project">Название проекта: </label><input type="text" class="tab1" id="name-project" value=""> <br>
							<label for="description-project">Описсание проекта: </label><textarea class="tab1" id="description-project"></textarea>
							
							<div class="flex">
								<button class="save" id="js-save">Save</button>
								<button class="close-popup" id="js-close">Close</button>
							</div>
						</form>
					</div>
					<div class="tabs__content">
						<div class="all_users">
							<span> All Users </span>
							<input type="text">
						</div>
						<div class="sel_users">
							<span>Selected Users </span>
							<input type="text">
						</div>
					</div>
				</div><!-- .tabs -->

			</div>
		</div>
	</div>

</body>
</html>