import fetch from "node-fetch";

export type Interval = "m1" | "m5" | "m15" | "m30" | "h1" | "h2" | "h6" | "h12" | "d1";

export const getList = async () => {
  const response = await fetch("https://api.coincap.io/v2/assets");
  const json = await response.json();
  return json.data;
};

export const getHistory = async (assetId: string, interval: Interval = "d1") => {
  const response = await fetch(`https://api.coincap.io/v2/assets/${assetId}/history?interval=${interval}`);
  const json = await response.json();
  return { error: !!json.error, data: json.data };
};
