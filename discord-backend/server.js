import express from "express";
import http from "http";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const PORT = process.env.PORT || 5000;
const app = express();
connectDB();
app.use(express.json());
app.use("/api/auth", authRoutes);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.MODE} mode on port ${PORT}`.yellow.bold
  );
});
