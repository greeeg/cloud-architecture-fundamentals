import { Request, Response } from "express";
import { getAllExchangeRates } from "../exchangeRatesService";

export const getExchangeRates = async (req: Request, res: Response) => {
  const results = await getAllExchangeRates();
  return res.json(results);
};
