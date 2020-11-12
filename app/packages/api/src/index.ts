import { createAPIServer } from "./createServer";
import { addNewsNamespace } from "./namespaces/news";
import { addExchangeRatesNamespace } from "./namespaces/exchange-rates";

const setup = () => {
  const server = createAPIServer();
  server.addNamespace("/news", addNewsNamespace);
  server.addNamespace("/exchange-rates", addExchangeRatesNamespace);

  server.listen(9999, () => {
    console.log("Server listening in port 9999");
  });
};

void setup();
