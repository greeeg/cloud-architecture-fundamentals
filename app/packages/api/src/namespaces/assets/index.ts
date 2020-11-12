import { Router } from "express";
import { getExchangeRates } from "./routes/getAssetsList";
import { getAssetHistory } from "./routes/getAssetHistory";

export const addAssetsNamespace = (router: Router) => {
  router.get("/", getExchangeRates);
  router.get("/:id/history", getAssetHistory);
};
