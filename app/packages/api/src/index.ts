import { ErrorRequestHandler, RequestHandler } from "express";
import serverlessAdapter from "serverless-http";
import { createAPIServer } from "./createServer";
import { logger } from "./lib/logger";
import { addAssetsNamespace } from "./namespaces/assets";
import { addNewsNamespace } from "./namespaces/news";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  console.log(err);

  res.status(500).json({ message: "Internal error" });
};

const monitoringHandler: RequestHandler = (req, res, next) => {
  const startTime = Date.now();
  const resourceName = `${req.method} ${req.originalUrl}`;

  const context: Record<string, string | number> = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    method: req.method,
    resource_name: resourceName,
    http_version: req.httpVersion,
    http_url: req.path,
    http_method: req.method,
  };

  res.on("finish", () => {
    const requestDuration = (Date.now() - startTime) / 1000;
    const message = "Request processed";

    context.http_status_code = res.statusCode;
    context.duration = requestDuration;

    switch (Math.floor(res.statusCode / 100)) {
      case 4:
        logger.warn(message, context);
        break;
      case 5:
        logger.error(message, context);
        break;
      default:
        logger.info(message, context);
        break;
    }
  });

  return next();
};

const server = createAPIServer();
server.getApp().use(monitoringHandler);
server.addNamespace("/news", addNewsNamespace);
server.addNamespace("/assets", addAssetsNamespace);

server.getApp().use((req, res) => res.status(404).json({ status: 404, message: "Error: Not Found" }));
server.getApp().use(errorHandler);

export const app = serverlessAdapter(server.getApp());
