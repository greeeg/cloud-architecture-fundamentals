import { Request, Response } from "express";
import { getList } from "../assetsService";

export const getExchangeRates = async (req: Request, res: Response) => {
  const results = await getList();
  return res.json(results);
};
