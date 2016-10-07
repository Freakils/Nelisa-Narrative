var fs = require('fs');
var handlebars = require('handlebars');
var processTheData = require('./process-the-data');
var source = fs.readFileSync('./index.handlebars', 'utf8')
