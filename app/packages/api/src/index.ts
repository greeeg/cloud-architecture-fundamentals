import { createAPIServer } from "./createServer";
import { addAssetsNamespace } from "./namespaces/assets";
import { addNewsNamespace } from "./namespaces/news";

const setup = () => {
  const server = createAPIServer();
  server.addNamespace("/news", addNewsNamespace);
  server.addNamespace("/assets", addAssetsNamespace);

  server.listen(9999, () => {
    console.log("Server listening in port 9999");
  });
};

void setup();
