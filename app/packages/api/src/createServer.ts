import { createTerminus } from "@godaddy/terminus";
import compression from "compression";
import cors from "cors";
import express, { Application, Router } from "express";
import helmet from "helmet";
import http from "http";

const createApp = (): Application => {
  const app = express();
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
  app.use(compression());
  app.set("etag", false);
  app.use(helmet());
  app.use(express.json({}));
  app.use(express.urlencoded({ extended: true }));

  return app;
};

const createServer = (app: Application) => {
  const server = http.createServer(app);
  return createTerminus(server, {
    healthChecks: {
      "/healthz": () => Promise.resolve(true),
    },
  });
};

export const createAPIServer = () => {
  const app = createApp();
  const server = createServer(app);

  return {
    getApp: () => app,
    addNamespace: (namespace: string, addNamespaceFunction: (router: Router) => void) => {
      const router = Router();
      addNamespaceFunction(router);
      app.use(namespace, router);
    },
    listen: (port: number, callback: () => void) => {
      server.listen(port, callback);
    },
    close: () => {
      server.close();
    },
  };
};
