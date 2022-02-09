import { Router } from "express";
import { getVideos } from "../controllers/videos.controller/video.controller";


const videoRouter = Router();

videoRouter.get("/", getVideos);

export default videoRouter;