import winston, { Logger } from "winston";
import datadogWinston from "datadog-winston";

const createLogger = (): Logger => {
  const logger = winston.createLogger();

  if (process.env.DATADOG_API_KEY) {
    logger.add(
      new datadogWinston({
        apiKey: process.env.DATADOG_API_KEY!,
        hostname: process.env.AWS_LAMBDA_FUNCTION_NAME ?? "local",
        service: "api",
        ddsource: "nodejs",
      }),
    );
  } else {
    logger.warn("No Datadog API key set, falling back to classic logger");
  }

  return logger;
};

export const logger = createLogger();
