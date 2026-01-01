const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const db = admin.firestore();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Connected:", socket.id);

  socket.on("join_room", async ({ roomId, userId }) => {
    try {
      const snap = await db.collection("consultations").doc(roomId).get();

      if (!snap.exists) return;

      const { doctorId, patientId } = snap.data();

      if (userId !== doctorId && userId !== patientId) return;

      socket.join(roomId);
      console.log(`User ${userId} joined room ${roomId}`);
    } catch (err) {
      console.error(err);
    }
  });

  socket.on("send_message", (msg) => {
    socket.to(msg.roomId).emit("r_message", msg);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);
  });
});

server.listen(5000, () => console.log("Socket server running on port 5000"));
