/// <reference types="react-scripts" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      ENVIRONMENT: Environment;
      PORT: number;
      METRICS_PORT: number;
      LOG_LEVEL: PinoLogLevel;
      JNSIGHT_DD_AGENT_HOST: string;
      JNSIGHT_REPORTER_HOST: string;
      SENTRY_DSN: string;
      MAX_ACCEPTABLE_REQUEST_DURATION: number;
      READINESS_PROBE_INTERVAL_SECONDS: number;
      READINESS_PROBE_FAILURE_THRESHOLD: number;
    }
  }
}
