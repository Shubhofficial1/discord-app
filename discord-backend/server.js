import express from "express";
import http from "http";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;
const app = express();
connectDB();
app.use(express.json());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT} in ${process.env.MODE} mode`
  );
});
