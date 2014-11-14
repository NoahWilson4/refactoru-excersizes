var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	getNumber: function(req, res) {
		res.send({
			number: Math.random()
		})
	}
};

module.exports = indexController;