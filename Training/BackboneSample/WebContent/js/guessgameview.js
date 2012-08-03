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
	playGame: function(){
		var userGuess = $("#inputGuess").val();
		this.guessGame.play(userGuess);
		$("#result").html(this.guessGame.get("message"));
	}
});
