const mongoose = require("mongoose");
const Users = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

mongoose.model("users", Users);
