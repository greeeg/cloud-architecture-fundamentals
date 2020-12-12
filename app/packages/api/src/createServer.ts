import compression from "compression";
import cors from "cors";
import express, { Application, Router } from "express";
import helmet from "helmet";

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

export const createAPIServer = () => {
  const app = createApp();

  return {
    getApp: () => app,
    addNamespace: (namespace: string, addNamespaceFunction: (router: Router) => void) => {
      const router = Router();
      addNamespaceFunction(router);
      app.use(namespace, router);
    },
  };
};
