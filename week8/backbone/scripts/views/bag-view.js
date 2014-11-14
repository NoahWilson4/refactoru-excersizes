var BagView = Backbone.View.extend({
	template: Handlebars.compile($('#bag-template').html()),
	initialize: function(){
		this.setElement(this.template(this.attributes))

		this.listenTo(this.collection, 'all', this.render());
	},
	render: function(){
		var candyItems = this.collection.map(function(candyItem){
			var candyView = new CandyView({
				model: candyItem
			});
			candyView.render();
			return candyView.el;
		})
		//append, and look for any uls inside of this specific view
		this.$('ul').empty().append(candyItems);
	}
});
