const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); //used for hashing passwords

// TODO: redefine this
const userSchema = new mongoose.Schema({
   username: String,
   password: String,
   events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Events' }],
   email: String
});

module.exports = mongoose.model("Users", userSchema);

// returns a hash of the given password
module.exports.hashPassword = (password) => {
  bcrypt.genSalt(10, (salt) => {
    bcrypt.hash(password, salt, (hash) => {
      return hash;
    }).catch(err => console.log(err));
  }).catch(err => console.log(err));
}

module.exports.comparePassword = (compared, hash, cb) => {
  bcrypt.compare(compared, hash, isMatch => {
    cb(null, isMatch);
  }).catch(err => cb(err, false));
}
