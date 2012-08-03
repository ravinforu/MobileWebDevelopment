window.CountryView = Backbone.View.extend({
	el : "body",
	country: null,
	initialize: function(){
		this.country = this.model;
		this.render();
	},
	render: function(){
		$(this.el).prepend("<h1>Backbone JS Example 2</h1>");
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
		var countryText = $("#countryName").val();
		this.country.set("name", countryText);
		this.country.computeCapital();
		$("#results").text(this.country.get("capital"));
	}
});