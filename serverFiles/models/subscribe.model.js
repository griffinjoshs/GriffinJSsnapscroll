const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subscriberSchema = new Schema({
  // CODE HERE
  firstName: {
    type: String,
    trim: true,
    required: "first name is required"
  },

  lastName: {
    type: String,
    trim: true,
    required: "last name is required"
  },

  email: {
    type: String,
    trim: true,
    required: "email is required"
  },

  message: {
    type: String,
    trim: true,
    // required: "message is required"
  }, 
},
{ timestamps: true }
);

module.exports.Subscriber = mongoose.model("Subscriber", subscriberSchema);
