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

app.use(session({
  secret: 'Riverzs',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

let db = pgp('postgres://kristyn@localhost:5432/pindrop_db');

// is anyone logged in
app.get('/', function(req, res) {
  if (req.session.user) {
    let data = {
      logged_in: true,
      email: req.session.user.email
    };
    res.render('index', data);
  } else { // change back to index
    res.render('login/user');
  }
});

// verify user and password
app.post('/signup', function(req, res){
  let data = req.body;
  db
  .one('SELECT * FROM users WHERE email = $1', [data.email])
  .catch(function(){
    res.send('Invalid email or password')
  })
  .then(function(user){
    bcrypt.compare(data.password, user.password_digest, function(err, cmp){
      if (cmp) {
        req.session.user = user;
        res.redirect('/');
      } else {
        res.send('Invalid email or password')
      }
    });
  });
});

app.get('/login', function(req, res){
  res.render('login/index');
});

// store user info
app.post('/login', function(req, res){
  let data = req.body;
  bcrypt.hash(data.password, 10, function(err, hash){
    db.none('INSERT INTO users (email, password_digest, location) VALUES ($1, $2, $3)', [data.email, data.location, hash]).then(function(){
      res.send('User Created!')
    });
  });
});

app.put('/user', function(req, res){
  db.none('UPDATE users SET email = $1 WHERE email = $2',
    [req.body.email, req.session.user.email])
  .catch(function(){
    res.send('Fail')
    .then(function(){
      res.send('Email Upate')
    })
  })
})

app.get('/logout', function(req,res){
  req.session.user = false;
  res.redirect('/')
});


app.listen(3000, function(req, res) {
  console.log('running...')
})


