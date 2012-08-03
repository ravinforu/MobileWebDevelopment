window.Country = Backbone.Model.extend({
	defaults: {
		name: "",
		capital: ""
	},
	computeCapital: function(){
		var country = this.get("name");
		if(country == "India")
			this.set("capital", "New Delhi");
		else if(country == "USA")
			this.set("capital", "Washington");
		else
			this.set("capital", "Unknown");
	}
});