// Build a simple Express.js API that allows User to register, log in, and access a protected route. Use JWT for authentication and authorization

const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://hellojs:hello12345@cluster0.tzhvj.mongodb.net/userDatabase2"
);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.use(express.json());

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let existingUser = false;
    existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(403).json({
        msg: "User already exits.",
      });
    } else {
      const user = new User({
        username: username,
        email: email,
        password: password,
      });
      user.save();
      res.status(200).json({
        msg: "User added to database successfully.",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "An error occurred while adding the user.",
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Sever is up on port 3000");
});
