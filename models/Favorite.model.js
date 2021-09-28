const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const favSchema = new Schema({
  username: {
    type: String,
    // unique: true -> Ideally, should be unique, but its up to you
  },
  password: String,
});

const Favorite = model("Favorite", favSchema);

module.exports = Favorite;