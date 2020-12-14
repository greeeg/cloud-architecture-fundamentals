import React, { FC } from "react";
import { useRequest } from "../utils/useRequest";

interface News {
  categories: string[];
  content: string;
  contentSnippet: string;
  creator: string;
  "dc:creator": string;
  guid: string;
  isoDate: string;
  link: string;
  pubDate: string;
  title: string;
}

interface Asset {
  changePercent24Hr: string;
  id: string;
  marketCapUsd: string;
  maxSupply: string;
  name: string;
  priceUsd: string;
  rank: string;
  supply: string;
  symbol: string;
  volumeUsd24Hr: string;
  vwap24Hr: string;
}

export const Home: FC = () => {
  const currencyFormatter = new Intl.NumberFormat("en", { style: "currency", currency: "USD" });
  const dateFormatter = new Intl.DateTimeFormat("en");

  const { data: news, isLoading: newsLoading } = useRequest<News[]>({
    path: "/news",
    method: "get",
  });

  const { data: assets, isLoading: assetsLoading } = useRequest<Asset[]>({
    path: "/assets",
    method: "get",
  });

  if (newsLoading || assetsLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <header>
        <h1>House of HETIC</h1>
        <p>
          Learn everything about <mark>cryptocurrencies</mark>
        </p>
      </header>

      <main>
        <section>
          <h2>Assets</h2>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price (USD)</th>
              </tr>
            </thead>

            <tbody>
              {assets?.slice(0, 10).map((asset) => (
                <tr key={asset.symbol}>
                  <td>{asset.name}</td>
                  <td>{asset.symbol}</td>
                  <td>{currencyFormatter.format(Number(asset.priceUsd))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <hr />

        <section>
          <h2>News</h2>
        </section>
        <section>
          <ul>
            {news?.map((news) => (
              <li key={news.title}>
                <h3>{news.title}</h3>
                <p>
                  {news["dc:creator"]} – {dateFormatter.format(new Date(news.isoDate))}{" "}
                </p>
                <p>
                  <a href={news.link} target="_blank" rel="noreferrer">
                    Read story
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};
