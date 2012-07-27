function GuessGame() {
	this.currentRandomNumber = Math.floor(Math.random()*100);
	this.message;
	this.attempt = 0;
	this.play = function(userGuess) {
		this.message = "--> " + userGuess;
		this.attempt += 1;
		var userInp = parseInt(userGuess);
		var randomVal = parseInt(this.currentRandomNumber);
		
		if(userInp == randomVal) {
			this.message += "<br>You have got it in " + this.attempt + " attemps";
			this.attemp = 0;
		} else {
			if (userInp > randomVal)
				this.message += "<br>Aim lower";
			else
				this.message += "<br>Aim higher";
		}
	};
}

var guessObj = new GuessGame();
