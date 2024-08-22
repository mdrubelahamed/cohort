const express = require("express");
const app = express();

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != "rubel" || password != "focus") {
        res.status(403).json({
            msg: "Username or password is wrong.",
        });
    } else {
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            msg: "Wrong kidney input.",
        });
    } else {
        next();
    }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    res.json({ msg: "Your kidney is fine." });
});

app.listen(3000);
