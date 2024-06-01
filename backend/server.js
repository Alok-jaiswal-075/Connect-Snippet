import cors from "cors";
import express, { json } from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { WebSocketServer } from "ws";
import http from "http";
dotenv.config();

// Create express app
const app = express();

// Middlewares
app.use(cors());
app.use(json());

// Get language code and version according to JDoodle API
const languagesMap = {
  cpp: ["cpp14", "3"],
  c: ["c", "3"],
  java: ["java", "5"],
  python: ["python3", "3"],
  typescript: ["typescript", "0"],
  javascript: ["nodejs", "4"],
  ruby: ["ruby", 5],
  rust: ["rust", 5],
  sql: ["sql", 5],
  dart: ["dart", 5],
  kotlin: ["kotlin", 4],
  php: ["php", 5],
  pert: ["pert", 5],
};

// Post request to create submission
app.post("/api/submission", async (req, res) => {
  // //console.log(process.env.JDOODLE_CLIENT_ID);
  try {
    const [language, versionIndex] = languagesMap[req.body.language];

    const inputParams = {
      ...req.body,
      language,
      versionIndex,
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET,
    };

    // //console.log(inputParams);

    const resp = await fetch("https://api.jdoodle.com/v1/execute", {
      method: "POST",
      body: JSON.stringify(inputParams),
      headers: { "Content-type": "application/json" },
    });

    if (!resp.ok) {
      const errorData = await resp.json();
      console.error("Error from JDoodle API:", errorData);
      return res.status(resp.status).json(errorData);
    }

    const data = await resp.json();

    // //console.log(data);
    res.status(200).json(data);
  } catch (err) {
    // //console.log(err.message);
    res.status(400).json({ error: err.message });
  }
});

// Create HTTP server
const server = http.createServer(app);

// Create WebSocket server
const wsServer = new WebSocketServer({ server });

wsServer.on("connection", (connection, request) => {
  //console.log("New WebSocket connection:", request.url);

  connection.on("message", (message) => {
    //console.log("Received WebSocket message:", message.toString());
    // Process WebSocket message here if needed
  });

  connection.on("close", () => {
    //console.log("WebSocket connection closed");
  });
});

// Start server
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server started at port ${port}`));
