import { rest } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  rest.get("http://api.tech/assets", async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "bitcoin",
          rank: "1",
          symbol: "BTC",
          name: "Bitcoin",
          supply: "18535643.0000000000000000",
          maxSupply: "21000000.0000000000000000",
          marketCapUsd: "296663521144.4373318923305309",
          volumeUsd24Hr: "8871210247.5763559994284896",
          priceUsd: "16005.0299385048218663",
          changePercent24Hr: "2.3162654447668889",
          vwap24Hr: "15815.1160670972699963",
        },
        {
          id: "ethereum",
          rank: "2",
          symbol: "ETH",
          name: "Ethereum",
          supply: "113316269.1865000000000000",
          maxSupply: null,
          marketCapUsd: "52049532468.2770252842759471",
          volumeUsd24Hr: "3585957360.8211766216402690",
          priceUsd: "459.3297400447594049",
          changePercent24Hr: "-0.6391644025912683",
          vwap24Hr: "464.6124624029526855",
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);
export { server };
