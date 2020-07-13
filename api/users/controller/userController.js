const User = require("../models/User");
const passport = require("passport");

//setting up pasport
passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

exports.registerNewUser = async (req, res) => {
  //REGISTER

  User.register(
    {
      username: req.body.username,
      email: req.body.email,
    },
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, () => {
          res.status(201).json({ user });
        });
      }
    }
  );
};
exports.loginUser = async (req, res) => {
  //LOGIN
  const loginUser = req.body.username;
  const loginPassword = req.body.password;
  const user = new User({
    username: loginUser,
    password: loginPassword,
  });
  req.login(user, (err) => {
    if (err) {
      console.log(err);
    } else {
      if (!user) {
        return res
          .status(401)
          .json({ error: "Login failed! Check authentication credentials" });
      } else {
        passport.authenticate("local")(req, res, () => {
          //YOUR res.redirect here
          res.send("this works");
        });
      }
    }
  });
};
exports.getUserDetails = async (req, res) => {
  if (req.isAuthenticated()) {
    await res.json(req.user);
  } else {
    res.send("Please login");
  }
};

exports.userLogout = async (req, res) => {
  req.logout();
  res.send("Logout!");
};
