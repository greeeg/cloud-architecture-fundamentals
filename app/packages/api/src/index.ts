import { ErrorRequestHandler } from "express";
import serverlessAdapter from "serverless-http";
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

const server = createAPIServer();
server.addNamespace("/news", addNewsNamespace);
server.addNamespace("/assets", addAssetsNamespace);

server.getApp().use((req, res) => res.status(404).json({ status: 404, message: "Error: Not Found" }));
server.getApp().use(errorHandler);

export const app = serverlessAdapter(server.getApp());
