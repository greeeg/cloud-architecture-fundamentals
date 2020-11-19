# Serverless framework

The Serverless framework is an abstraction to simplify the development, deployment & management of function-based serverless applications.

## Prerequisites

- Install the [Serverless CLI](https://www.serverless.com/framework/docs/providers/aws/guide/installation/)

Make sure `AWS_ACCESS_KEY_ID` & `AWS_SECRET_ACCESS_KEY` environment variables are defined in your path. Alternatively, you can use an [AWS credentials or configuration file](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) to specify your credentials.

## Getting started

```sh
# Install dependencies
yarn

# Start serverless-offline
yarn start

# Deploy functions to AWS Lambda
serverless deploy
```
