const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const userController = require('./server/user/userController');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, './build/')));

app.post('/register', userController.createUser, (req, res, next) => {

  console.log("*created the user*");
  console.log(res.locals.username);
  // redirect to profile page of the user
  res.status(200).json({ username: res.locals.username, samples: res.locals.samples });
});

app.post('/login', userController.verifyUser, (req, res, next) => {

  console.log("*fetched the user*"+res.locals.username);
  // redirect to profile page of the user
  res.status(200).json({ username: res.locals.username, samples: res.locals.samples });
});

app.listen(3000);

