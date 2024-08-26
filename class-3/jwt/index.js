const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const user = {
    userId: "123456",
    username: "johndoe",
    role: "admin",
};
const secretKey = "secret";

app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "password") {
        const token = jwt.sign(user, secretKey);
        res.status(200).json({
            token,
        });
    } else {
        res.status(403).json({
            msg: "Username or Password in incorrect.",
        });
    }
});

app.get("/protected", (req, res) => {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(403).json({ msg: "Token is required." });
    }
    const decoded = jwt.verify(token, secretKey);

    try {
        res.status(200).json({
            msg: "Access granted.",
            user: decoded,
        });
    } catch (error) {
        res.status(403).json({ msg: "Invalid token" });
    }
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        msg: "Something is wrong",
    });
});

app.listen(3000, () => {
    console.log(`Sever is up on port 3000`);
});
