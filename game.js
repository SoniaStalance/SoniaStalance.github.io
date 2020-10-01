const game = () => {
	let pscore = 0
	let cscore =0

	const nameInput = document.querySelector('#name')
	const playerName = document.querySelector('.player h2')
	const winner = document.querySelector('.winner')
	const sound = document.querySelector('.sound')

	//startGame function
	const startGame = () => {
		const playBtn = document.querySelector('.intro button')
		const introScreen = document.querySelector('.intro')
		const match = document.querySelector('.match')
		const navbar = document.querySelector('.navbar')

		nameInput.addEventListener('keyup', (e)=>{
			if(e.keyCode === 13)
				display()
		})
		playBtn.addEventListener('click', display)

		function display()
		{
			sound.src = 'assets/audio/start.mp3'
			sound.play()
			introScreen.classList.add('fadeOut')
			match.classList.add('fadeIn')
			if(nameInput.value!=='') playerName.textContent = `${nameInput.value}`
			navbar.style.opacity = 1;
		}
	}

	//playGame function
	const playGame = () => {
		const options = document.querySelectorAll('.options button')
		const playerHand = document.querySelector('.player-hand')
		const computerHand = document.querySelector('.computer-hand')
		const hands = document.querySelectorAll('.hands img')
		const restart = document.querySelector('.restart')

		const computerOptions = ['rock','paper','scissors']

		options.forEach((option)=>{
			//when an option is clicked
			option.addEventListener('click', function() {

				const computerNumber = Math.floor(Math.random()*3)
				const computerChoice = computerOptions[computerNumber]

				//animation
				playerHand.style.animation = 'shakePlayer 2s ease'
				computerHand.style.animation = 'shakeComputer 2s ease'

				//displaying the choosen option (i.e img rep of hand posn)
				//& calling compareHands function after a delay of 2 seconds
				setTimeout(()=>{
					compareHands(this.textContent, computerChoice)

					//changing images
					playerHand.src = `assets/images/${this.textContent}.png`
					computerHand.src =`assets/images/${computerChoice}.png`
				}, 2000)
			})
		})

		restart.addEventListener('click',()=>{
			pscore=cscore=0
			winner.textContent = 'Choose an option'
			updateScore()
		})

		//executes at the end of animation (i.e removes applied animation(s))
		hands.forEach((hand)=>{
			hand.addEventListener('animationend', function() {
				this.style.animation = ''
			})
		})
	}

	//compareHands function
	const compareHands = (playerChoice, computerChoice) => {

		if(playerChoice===computerChoice){
			winner.textContent = 'It is a Tie'
		}
		else if((playerChoice==='rock' && computerChoice==='paper') || (playerChoice==='paper' && computerChoice==='scissors') || (playerChoice==='scissors' && computerChoice==='rock')){
			sound.src = 'assets/audio/loss.wav'
			sound.play()
			winner.textContent = 'Computer Wins'
			cscore++
		}
		else{
			sound.src = 'assets/audio/win.mp3'
			sound.play()
			winner.textContent = `${playerName.textContent} Wins`
			pscore++
		}
		updateScore()
		return
	}

	//updateScore function
	const updateScore = () => {
		playerScore = document.querySelector('.player p')
		computerScore = document.querySelector('.computer p')

		playerScore.textContent = pscore
		computerScore.textContent = cscore
	}

	//calling functions
	startGame()
	playGame()
}
game()