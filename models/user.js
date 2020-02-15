const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); //used for hashing passwords

// TODO: redefine this
const userSchema = new mongoose.Schema({
   username: String,
   password: String,
   bio: String,
   events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
   email: String
   //posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
   //pic: String //Using type String for now, bound to change
});

module.exports = mongoose.model("User", userSchema);

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
