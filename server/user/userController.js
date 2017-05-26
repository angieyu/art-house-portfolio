const User = require('./userModel');
const bodyParser = require('body-parser')

const userController = {};

userController.createUser = (req, res, next) => {

  // User.remove({}, function (error, result) {
  //   if (error || !result) {
  //     console.log('Error occured: ', error);
  //   }
  //   else {
  //     console.log("Delete succeeded");
  //     return next();
  //   }
  // })

  console.log("^^^^^");
  console.log(req.body);
  var userObj = new User({
    'username': req.body.username,
    'password': req.body.password,
    'samples': req.body.samples
  });
  console.log(userObj);
  User.create(userObj, function (error, result) {
    if (error || !result) {
      console.log('Error occured: ', error);
    }
    else {
      console.log("user creation succeeded");
      // console.log(res.locals);
      res.locals.username = result.username;
      res.locals.samples = result.samples;
      return next();
    }
  });
}

userController.verifyUser = (req, res, next) => {
  console.log("we are in the user controller, about to verify user");
  var username = req.body.username;
  User.findOne({ 'username': req.body.username }, function (error, result) {
    if (error || !result) {
      console.log(error);
    }
    else {
      console.log("user found");
      res.locals.username = result.username;
      res.locals.samples = result.samples;
      return next();
    }
  })

}


module.exports = userController;
