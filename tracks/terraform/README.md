# Infrastructure as code

Terraform is an Infrastructure-as-code tool used to provision & manage infrastructures.

Terraform uses [its own configuration language](https://www.terraform.io/docs/configuration/index.html), HCL.

## Prerequisites

- Download & install the [Terraform CLI](https://www.terraform.io/downloads.html)

Make sure `AWS_ACCESS_KEY_ID` & `AWS_SECRET_ACCESS_KEY` environment variables are defined in your path. Alternatively, you can use an [AWS credentials or configuration file](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) to specify your credentials.

## Getting started

```sh
# Install required plugins (eg. aws provider)
terraform init

# Create an execution plan & list actions that will be performed
terraform plan

# Apply changes
terraform apply

# Destroy infrastructure based on current state
terraform destroy
```
