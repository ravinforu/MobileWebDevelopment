window.GuessGame = Backbone.Model.extend({
	defaults: {
		message: "",
		attempt: 0,
		currentRandomNumber: 0
	},
	play: function(userGuess){
		if(this.get("currentRandomNumber") == 0) {
			this.set("currentRandomNumber", Math.floor(Math.random()*100));
		}
		this.set("message", "--> " + userGuess);
		this.set("attempt", this.get("attempt") + 1);
		var userInp = parseInt(userGuess);
		var randomVal = this.get("currentRandomNumber");
		
		if(userInp == randomVal) {
			this.set("message", this.get("message") + "<br>You have got it in " + this.get("attempt") + " attemps");
			this.set("attempt", 0);
			this.set("currentRandomNumber", Math.floor(Math.random()*100));
		} else {
			if (userInp > randomVal)
				this.set("message", this.get("message") + "<br>Aim lower");
			else
				this.set("message", this.get("message") + "<br>Aim higher");
		}
		
	}
	
});
