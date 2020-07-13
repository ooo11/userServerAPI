const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
userSchema.plugin(passportLocalMongoose); //set up a plugin for the schema

const User = mongoose.model("User", userSchema);
module.exports = User;
