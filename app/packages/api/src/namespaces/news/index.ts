import { Router } from "express";
import { getNews } from "./routes/getNews";

export const addNewsNamespace = (router: Router) => {
  router.get("/", getNews);
};
