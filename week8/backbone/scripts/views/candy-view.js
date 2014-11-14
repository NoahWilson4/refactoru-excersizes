var CandyView = Backbone.View.extend({
	template: Handlebars.compile($('#candy-template').html()),
	render: function(){
		this.setElement(this.template(this.model.toJSON()));
	}
});