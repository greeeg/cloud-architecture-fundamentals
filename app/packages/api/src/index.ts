import { ErrorRequestHandler } from "express";
import { createAPIServer } from "./createServer";
import { addAssetsNamespace } from "./namespaces/assets";
import { addNewsNamespace } from "./namespaces/news";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  console.log(err);

  res.status(500).json({ message: "Internal error" });
};

const setup = () => {
  const server = createAPIServer();
  server.addNamespace("/news", addNewsNamespace);
  server.addNamespace("/assets", addAssetsNamespace);

  server.getApp().use((req, res) => res.status(404).json({ status: 404, message: "Error: Not Found" }));
  server.getApp().use(errorHandler);

  server.listen(9999, () => {
    console.log("Server listening in port 9999");
  });
};

void setup();
