import { Request, Response } from "express";
import { getHistory, Interval } from "../assetsService";

const validIntervals: Interval[] = ["m1", "m5", "m15", "m30", "h1", "h2", "h6", "h12", "d1"];

export const getAssetHistory = async (req: Request<{ id: string }, {}, {}, { interval: Interval }>, res: Response) => {
  const interval = validIntervals.includes(req.query.interval) ? req.query.interval : undefined;
  const { data, error } = await getHistory(req.params.id, interval);

  if (error) {
    return res.status(400).json({
      message: "Bad request",
    });
  }

  return res.json(data);
};
