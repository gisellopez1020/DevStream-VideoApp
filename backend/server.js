import router from "./routes/videoRoutes.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { logger } from "./middlewares/logger.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/videos", router);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});
