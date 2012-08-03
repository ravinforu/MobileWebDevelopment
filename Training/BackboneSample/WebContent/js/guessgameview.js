window.GuessGameView = Backbone.View.extend({
	el: "body",
	guessGame: null,
	initialize: function(){
		this.guessGame = this.model;
		this.render();
	},
	render: function(){
		$(this.el).prepend("<h1>Lab 2 GuessGame with BackboneJS</h1>");
	},
	events: {
		"click #btn" : "playGame"
	},
	addToHistory: function(attemptVal, guessVal){
		this.collection.add({attempt: attemptVal , guess: guessVal});
		$("#history").html("");
		for(var i= 0; i< this.collection.length;i++){
			var item = this.collection.at(i);
			var row = "<tr>";
			row += "<td>" + item.get("attempt") + "</td>";
			row += "<td>" + item.get("guess") + "</td>";
			row += "</tr>";
			$("#history").append(row);
		}
	},
	playGame: function(){
		var userGuess = $("#inputGuess").val();
		this.addToHistory(this.guessGame.get("attempt")+1, userGuess);
		this.guessGame.play(userGuess);
		$("#result").html(this.guessGame.get("message"));
	}
});
