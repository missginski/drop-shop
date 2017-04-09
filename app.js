let express = require('express');
let app = express();
let mustacheExpress = require('mustache-express');
let pgp = require('pg-promise')();
let bodyParser = require('body-parser');
let session = require('express-session');


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/html');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// let db = pgp('postgres://kristyn@localhost:5432/shoebill_auth');
// let endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&APPID=142c478807cfdf791bc211f12745a186';

app.listen(3000, function(req, res) {
  console.log('running...')
})

app.get("/", function(req, res) {
  res.render('/index');
});


