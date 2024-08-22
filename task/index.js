const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();

const allUsers = [
    {
        username: "user1@example.com",
        password: "simplepassword123",
        name: "John Doe",
    },
    {
        username: "user2@example.com",
        password: "mypassword456",
        name: "Jane Smith",
    },
    {
        username: "user3@example.com",
        password: "password789",
        name: "Alice Johnson",
    },
];

function userExits(username, password) {
    // write the logic if user exits or not tru or false
    // in allUser array
    return allUsers.some((user) => user.username == username && user.password === password);
}

// Middleware to parse JSON bodies
app.use(express.json());

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExits(username, password)) {
        res.status(403).json({
            msg: "User doesn't exits in our database.",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try {
        const decode = jwt.verify(token, jwtPassword);
        const username = decode.username;
        res.json({
            users: allUsers,
        });
    } catch (error) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);
