const mongoose = require("mongoose");
const express = require("express");
const app = express();

const connectToDatabase = require("../mongoDB-database-connection");
(async () => {
    await connectToDatabase();
})();

const Users = mongoose.model("Users", { username: String, email: String, password: String });

app.use(express.json());

app.post("/signin", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await Users.findOne({ email: email });
    if (existingUser) {
        return res.status(400).json({
            msg: "User already exist.",
        });
    } else {
        const user = new Users({ username: username, email: email, password: password });
        user.save();
        res.status(200).json({
            msg: "User created successfully.",
        });
    }
});

app.listen(3000, () => {
    console.log(`Server is up on port 3000`);
});
