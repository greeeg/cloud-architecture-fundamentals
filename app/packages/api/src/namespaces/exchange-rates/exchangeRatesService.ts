import fetch from "node-fetch";

export const getAllExchangeRates = async () => {
  const response = await fetch("https://api.coinbase.com/v2/exchange-rates?currency=USD");
  const json = await response.json();
  return json.data.rates;
};
