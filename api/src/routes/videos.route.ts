import { Router } from "express";
import {
  getImageStream,
  getVideos,
} from "../controllers/videos.controller/video.controller";

const videoRouter = Router();

videoRouter.get("/", getVideos);
videoRouter.get("/stream-image", getImageStream);

export default videoRouter;
