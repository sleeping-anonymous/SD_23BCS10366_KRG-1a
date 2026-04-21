const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const users = [];

app.post("/login", (req, res) => {
    const { username } = req.body;

    const token = jwt.sign({ username }, "SECRET_KEY");

    res.json({ token });
});

app.listen(4001, () => {
    console.log("User Service running");
});