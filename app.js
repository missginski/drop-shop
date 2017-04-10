let express = require('express');
let app = express();
let mustacheExpress = require('mustache-express');
let pgp = require('pg-promise')();
let bodyParser = require('body-parser');
let session = require('express-session');
let bcrypt = require('bcrypt');
let salt = bcrypt.genSalt(10);

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/html');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(3000, function(req, res) {
  console.log('running...')
})

// req.session
app.use(session({
  secret: 'SHOEBILLZ',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

let db = pgp('postgres://kristyn@localhost:5432/pindrop_db');


// is someone logged in
app.get("/", function(req, res) {
  if (req.session.user) {
    let data = {
      logged_in: true,
      email: req.session.user.email
    };
    res.render('index', data);
  } else {
    res.render('index');
  }
});


