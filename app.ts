import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import database from "./database";
import express from "express";
import mongoose from "mongoose";
import { loggingMiddleware } from "./middleware/logging.Middleware";
import noteRouter from './route/note.route';

const app = express();

app.use(cors());
app.use(express.json());
app.use(loggingMiddleware);

app.use("/api/v1",noteRouter);

const PORT = process.env.PORT || 5000;

// Start server
const startServer = () => {
    app.listen(PORT, () => {
        database();
        console.log(`Server started on port: ${PORT}`);
    });
};

startServer();

export default app;