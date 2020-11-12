import { Request, Response } from "express";
import { getAllNews } from "../newsService";

export const getNews = async (req: Request, res: Response) => {
  const results = await getAllNews();
  return res.json(results);
};
