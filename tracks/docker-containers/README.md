# Containerized application

[Docker](https://www.docker.com/) is standardized software packaging solution used to run applications in isolation, anywhere in the Cloud.

## Prerequisites

- Install [Docker for Desktop](https://www.docker.com/products/docker-desktop)

## Docker on an AWS EC2 instance

Once an EC2 instance is up and running, execute the followings commands to set up Docker.

```sh
# SSH into your instance
ssh -i "private-key.pem" ec2-user@ec2-public-ip.region.compute.amazonaws.com

# Update dependencies
sudo yum update -y

# Install Docker optimized for EC2
sudo amazon-linux-extras install docker

# Start Docker service on instance
sudo service docker start

# Add user to docker group to avoid using sudo with each Docker commands
sudo usermod -a -G docker ec2-user

# Log out & Log in SSH session to pick up new permissions
exit
ssh -i "private-key.pem" ec2-user@ec2-public-ip.region.compute.amazonaws.com

# Docker should be running
docker info
```
