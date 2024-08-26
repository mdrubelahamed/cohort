const express = require("express");
const app = express();
const port = 3000;

let numberOfRequest = 0;
function calculateRequest(req, res, next) {
    numberOfRequest++;
    console.log(`Number of request ${numberOfRequest}`);
    next();
}

function isAStudent(req, res, next) {
    const isAStudent = req.headers.isastudent;
    if (isAStudent !== "true") {
        res.status(200).json({
            msg: "You are not student.",
        });
        return;
    } else {
        next();
    }
}

function isEligible(req, res, next) {
    const isEligible = req.query.isEligible;
    if (isEligible !== "true") {
        res.status(200).json({
            msg: "You are not eligible.",
        });
    } else {
        next();
    }
}

function hasResources(req, res, next) {
    const hasResources = req.query.hasResources;
    if (hasResources !== "true") {
        res.status(200).json({
            msg: "You have not all the resources.",
        });
    } else {
        next();
    }
}

// calling from here

app.use(calculateRequest);

app.post("/admission", isAStudent, isEligible, hasResources, (req, res) => {
    res.status(200).json({
        msg: "You can take admission.",
    });
});

//global catches
app.use((err, req, res, next) => {
    res.status(500).json({
        msg: "Something problem with our server",
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
