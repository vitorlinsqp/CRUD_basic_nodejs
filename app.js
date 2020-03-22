const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("./models/Users");
const Users = mongoose.model("users");

// require("./models/Contacts");
// const Contacts = mongoose.model("contacts");

require("./models/About");
const About = mongoose.model("about");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});


mongoose.connect("mongodb://localhost/celke", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connetion with success");
}).catch(err => {
  console.log("Error: MongoDB not connected" + err);
});

//CRUD USERS
app.get("/users", (req, res) => {
  Users.find({

  }).then((users) => {
    return res.json(users)
  }).catch((err) => {
    return res.status(400).json({
      error: true,
      message: "No user registered!"
    })
  })
});
app.get("/users/:id", (req, res) => {
  Users.findOne({ _id: req.params.id }).then((user) => {
    return res.json(user);
  }).catch((err) => {
    return res.status(400).json({
      error: true,
      message: "User Id not finded!"
    })
  })
})

app.post("/users", (req, res) => {
  Users.create(req.body, err => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Error: User register failure."
      });
    return res.json({
      error: false,
      message: "User successfully registered!"
    });
  });
});

app.put("/users/:id", (req, res) => {
  Users.updateOne({ _id: req.params.id }, req.body, (err) => {
    if (err) return res.status(400).json({
      error: true,
      message: "User not edited!"
    });
    return res.json({
      error: false,
      message: "User edited with success"
    });
  });
});

app.delete("/users/:id", (req, res) => {
  Users.deleteOne({ _id: req.params.id }, (err) => {
    if (err) return res.status(400).json({
      error: true,
      message: "ERROR: User not deleted"
    });
    return res.json({
      error: false,
      message: "User deleted"
    })
  })
});

//CRUD of the page ABOUT
app.get("/about", (req, res) => {
  About.findOne({}).then((about) => {
    return res.json(about);
  }).catch((err) => {
    return res.status(400).json({
      error: true,
      message: "There's no register founded"
    })
  })
})

app.post("/about", (req, res) => {
  About.create(req.body, err => {
    if (err)
      return res.status(400).json({
        error: true,
        message: "Error: Failure to add content"
      });
    return res.json({
      error: false,
      message: "Content of the page About successfully added"
    });
  });
});

app.listen(8080, () => {
  console.log("Server executed at: Door 8080 -> http://localhost:8080");
});
