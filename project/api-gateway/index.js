const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use("/auth", proxy("http://localhost:4001"));

app.use("/tasks", proxy("http://localhost:4002"));

app.listen(4000, () => {
    console.log("API Gateway running on port 4000");
});