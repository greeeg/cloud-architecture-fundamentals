import { Router } from "express";
import { getExchangeRates } from "./routes//getExchangeRates";

export const addExchangeRatesNamespace = (router: Router) => {
  router.get("/", getExchangeRates);
};
