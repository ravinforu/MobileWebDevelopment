window.CountryView = Backbone.View.extend({
	el : "body",
	initialize: function(){
		this.render();
	},
	render: function(){
		$(this.el).prepend("<h1>Backbone JS Example 1</h1>");
	},
	events : {
		"click #capitalBtn" : "getCapital",
		"mouseover #results" : "changeColorToRed",
		"mouseout #results" : "changeColorToWhite"
	},
	changeColorToRed: function(event){
		$(event.currentTarget).css("background-color", "red");
	},
	changeColorToWhite: function(event){
		$(event.currentTarget).css("background-color", "white");
	},
	getCapital: function(){
		var country = $("#countryName").val();
		if(country == "India")
				$("#results").text("New Delhi");
		else if(country == "USA")
			$("#results").text("Washington");
		else
			$("#results").text("Unknown");
	}
});