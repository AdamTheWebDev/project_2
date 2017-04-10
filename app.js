const express = require('express');
const app = express();

const pgp = require('pg-promise')();
const mustacheExpress = require('mustache-express');
const methodOverride = require('method-override')
const bodyParser = require("body-parser");
const session = require('express-session');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSalt(10);

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'))

app.use(session({
  secret: 'userStuff',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

/* Change this line! */
var db = pgp('postgres://adamroberts@localhost:5432/usersdb');

app.get('/', function(req, res){
  if(req.session.user){
    let data = {
      "logged_in": true,
      "email": req.session.user.email,
      "team_name": req.session.user.team_name
    };

    res.render('index', data);
  } else {
    res.render('index');
  }
});
//checking user in database and checking password to authenticate
app.post('/login', function(req, res){
  let data = req.body;
  let auth_error = "Authorization Failed: Invalid email/password";
  db.one("SELECT * FROM users WHERE email = $1", [data.email])
    .catch(function(){//catch all null or undifined errors and
      res.send(auth_error);
    })
    .then(function(user){
      bcrypt.compare(data.password, user.password_digest, function(err, cmp){
        if(cmp){
          req.session.user = user;
          res.redirect("/");
        } else {
          res.send(auth_error);
        }
      });
    });
});
//sign up
app.get('/signup', function(req, res){
  res.render('signup/index');
});

app.post('/signup', function(req, res){
  let data = req.body;
  bcrypt
    .hash(data.password, 10, function(err, hash){
      db.none(
        "INSERT INTO users (email, password_digest, team_name) VALUES ($1, $2, $3)",
        [data.email, hash, data.team_name]
      ).catch(function(e){
        res.send('Failed to create user: ' + e);
      }).then(function(){
        res.send('User created!');
      });
    });
});

app.put('/user', function(req, res){
  db
    .none("UPDATE users SET email = $1 WHERE email = $2 ",
      [req.body.email, req.session.user.email]
    ).catch(function(){
      res.send('Failed to update user.');
    }).then(function(){
      res.send('User updated.');
    });
});
app.put('/user', function(req, res){
  db.none("UPDATE users SET team_name = $1 WHERE team_name = $2 ",
      [req.body.team_name, req.session.user.team_name]
    ).catch(function(){
      res.send('Failed to update Team Name.');
    }).then(function(){
      res.send('Team updated.');
    });
});

app.get('/logout', function(req, res){
  req.session.user = false;
  res.redirect("/");
});

app.listen(3000, function () {
  console.log('Server running, listening on port 3000!');
});
