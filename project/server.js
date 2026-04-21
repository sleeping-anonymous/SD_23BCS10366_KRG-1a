import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

socket.on("task_update", (data) => {
    console.log("Live update:", data);
});