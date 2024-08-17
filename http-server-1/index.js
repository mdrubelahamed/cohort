const express = require("express");
const app = express();

app.get("/profile", (req, res) => {
    const originalSubdomain = req.query.originalSubdomain;
    console.log(originalSubdomain); // Output: "in"
    res.send(`Hello from ${originalSubdomain}!`);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
