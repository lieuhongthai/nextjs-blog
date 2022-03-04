import express, { Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";
import { Stream } from "stream";

export async function getVideos(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const postsDirectory = path.join(process.cwd(), "download");
  // const postsDirectory = path.join(__dirname,"../../../", 'download/video.webm')

  const fileNames = fs.readdirSync(postsDirectory);
  const range = "bytes=3000003-"; //req.headers.range;
  const videoPath = `${postsDirectory}/${fileNames[1]}`;
  if (!range) res.status(400).send("Requires Range header");
  else {
    const videoSize = fs.statSync(videoPath).size;
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "audio/mpeg",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });

    videoStream.pipe(res);

    // console.log(12005, videoPath, videoSize, "CHUNK_SIZE : %d", CHUNK_SIZE, "timer :", { start, end, contentLength, range });
    // res.status(200).send({ postsDirectory })
  }
}

export const getVideosHls = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {};

export const getImageStream = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const postsDirectory = path.join(process.cwd(), "download");

  const readStream = fs.createReadStream(postsDirectory + "/test-image.jpg");
  console.log(12005, postsDirectory + "/test-image.jpg");

  const ps = new Stream.PassThrough();
  Stream.pipeline(readStream, ps, (err) => {
    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
  });
  ps.pipe(res);
};
