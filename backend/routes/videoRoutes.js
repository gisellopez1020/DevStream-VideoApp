import { Router } from "express";
import {
  getVideos,
  likeVideo,
  createVideo,
} from "../controllers/videoController.js";

const router = Router();

router.get("/", getVideos);
router.post("/", createVideo);
router.patch("/:id/like", likeVideo);

export default router;
