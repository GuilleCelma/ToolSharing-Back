const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const reviewSchema = new Schema({
    productId: String,
    userId: String,
    content: String,
    rating: Number,


})

const Review = model("Review", reviewSchema);

module.exports = Review;