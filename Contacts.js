const mongoose = require('mongoose');

const Contacts = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
},
  {
    timestamps: true,
  });

mongoose.model("contacts", Contacts);