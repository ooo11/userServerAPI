require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const session = require("express-session");
const passport = require("passport");

const app = express();

//configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: process.env.MY_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize()); //initialize passport to star using
app.use(passport.session()); //connect the passport w the session that have been set up

mongoose
  .connect("mongodb://localhost:27017/blueDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log({ database_error: err });
  });
mongoose.set("useCreateIndex", true);

const userRoutes = require("./api/users/routes/user"); //bring in our user routes
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
