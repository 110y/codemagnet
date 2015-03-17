var express = require('express');
var app = express();
var router = express.Router();

var config = require('../config.json');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var connectDB = require('./config/database');
var insertSeedData = require('./config/seed');
var fs = require('fs');
var Handlebars = require('handlebars');
require('node-jsx').install({ harmony: true });
var template = Handlebars.compile(fs.readFileSync('./client/public/index.hbs').toString());

// ===== view engine setup
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// ===== publish directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client/public'));
app.use(express.static(path.join(__dirname, '../client/public')));



// ===== server api routing
app.use(router);
app.use('/', require('./controller'));



// ===== server listen port
app.set('port', 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

// ===== database setting
app.set('seedDB', config.db.seedOption);
connectDB();
insertSeedData();


module.exports = app;
