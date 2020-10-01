<!DOCTYPE html>
<html>
<head>
	<title>Rock Paper Scissors</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<section class="container">

		<div class="navbar">
			<a href="index.html"><img src="assets/images/back.png" width="50px"></a>

			<div class="player">
				<h2>Player</h2>
				<p>0</p>
			</div>

			<div class="computer">
				<h2>Computer</h2>
				<p>0</p>
			</div>

			<a class="restart" href="#"><img src="assets/images/reset.png" height="50px"></a>
		</div>

		<div class="intro">
			<h1>Rock Paper Scissors</h1>
			<input type="text" id="name" maxlength="15" placeholder="Enter your name">
			<button>Lets Play</button>
		</div>

		<div class="match fadeOut">
			<h4 class="winner">Choose an option</h4>
			<audio class='sound'></audio>

			<div class="hands">
				<img class="player-hand" src="assets/images/rock.png">
				<img class="computer-hand" src="assets/images/rock.png">
			</div>

			<div class="options">
				<button class="rock">rock</button>
				<button class="paper">paper</button>
				<button class="scissors">scissors</button>
			</div>
		</div>
	</section>

	<script type="text/javascript" src="game.js"></script>
</body>
</html>