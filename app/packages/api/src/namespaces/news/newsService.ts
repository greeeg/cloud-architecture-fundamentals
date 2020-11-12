import RSSParser from "rss-parser";

export const getAllNews = async () => {
  const parser = new RSSParser();
  const results = await parser.parseURL("https://www.coindesk.com/feed");
  return results.items;
};
