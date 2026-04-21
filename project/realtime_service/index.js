const { Server } = require("socket.io");
const redis = require("redis");

const io = new Server(5000, {
    cors: { origin: "*" }
});

const sub = redis.createClient();

sub.subscribe("TASK_UPDATES");

sub.on("message", (channel, message) => {
    console.log("Event received:", message);

    // Broadcast to all clients
    io.emit("task_update", JSON.parse(message));
});

io.on("connection", (socket) => {
    console.log("Client connected");
});