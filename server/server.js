import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import userRoutes from "./Routes/userRoutes.js";
import prefRoutes from "./Routes/prefRoutes.js";
import dotenv from "dotenv";

dotenv.config();

// Initialize Database Connection
connectDB();
const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", userRoutes);
app.use("/api/preference", prefRoutes);

// Port Listener
app.listen(PORT, () => {
    console.log(
      "Listening on port",
      PORT
    );
  });


