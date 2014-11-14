var _ = require('underscore');
var moment = require('moment');

var movies = ['the Shining', 'Mean Girls', 'Superman'];

console.log(_.sample(movies))

console.log(moment().format('MDYYYY'))