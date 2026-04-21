const express = require("express");
const mongoose = require("mongoose");
const redis = require("redis");

const app = express();
app.use(express.json());

// MongoDB
mongoose.connect("mongodb://localhost:27017/tasks");

const Task = mongoose.model("Task", {
    title: String,
    status: String,
});

// Redis Pub/Sub
const pub = redis.createClient();
const sub = redis.createClient();

app.post("/", async (req, res) => {
    const task = await Task.create(req.body);

    // Publish event
    pub.publish("TASK_UPDATES", JSON.stringify(task));

    res.json(task);
});

app.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.listen(4002, () => {
    console.log("Task Service running");
});