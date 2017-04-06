let express = require('express');
let app = express();
let mustacheExpress = require('mustache-express');
let pqp = require('pg-promise')();
let bodyParser = require('body-parser');
let session = require('express-session');


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let db = pgp('postgres://kristyn@localhost:5432/shoebill_auth');

app.listen(3000, function(req, res) {
  console.log('running...')
})

app.get("/", function(req, res) {
  res.render('index');
})

