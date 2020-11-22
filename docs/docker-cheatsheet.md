# Docker cheatsheet

This cheatsheet lists some common operations you might want to perform with Docker. If you want to learn more about specific subjects like volumes or networks, check otu the official [Docker CLI documentation](https://docs.docker.com/engine/reference/commandline/cli/).

## Registry & repositories

Docker images can be either used from local builds or pulled from a registry. A registry is a fancy name to describe a folder on the Internet in which we can store Docker images & their associated tags in repositories.

By default, Docker will pull public images from [Docker Hub](https://hub.docker.com/) (similar to [NPM registry](npmjs.com) for Node.js packages).

### Using public images

- [`docker search`](https://docs.docker.com/engine/reference/commandline/search) searches registry for image.
- [`docker pull`](https://docs.docker.com/engine/reference/commandline/pull/) pulls an image from registry to local machine.

### Pushing your local images

- [`docker login`](https://docs.docker.com/engine/reference/commandline/login) to login to a registry.
- [`docker logout`](https://docs.docker.com/engine/reference/commandline/logout) to logout from a registry.
- [`docker push`](https://docs.docker.com/engine/reference/commandline/push) pushes an image to the registry from local machine.

## Working with containers

### Starting containers

- [`docker create`](https://docs.docker.com/engine/reference/commandline/create) creates a container but does not start it.
- [`docker start`](https://docs.docker.com/engine/reference/commandline/start) starts a container so it is running.
- [`docker run`](https://docs.docker.com/engine/reference/commandline/run) creates and starts a container in one operation.

### Stopping containers

- [`docker stop <container_name>`](https://docs.docker.com/engine/reference/commandline/stop) stops a running container.
- [`docker rm <container_name>`](https://docs.docker.com/engine/reference/commandline/rm) deletes a container.

### Analyzing containers

In order to monitor & perform common containers tasks, you can use something like [`ctop`](https://ctop.sh/).

- [`docker ps`](https://docs.docker.com/engine/reference/commandline/ps) shows running containers.
- [`docker logs <container_name>`](https://docs.docker.com/engine/reference/commandline/logs) gets logs from container.
- [`docker inspect <container_name>`](https://docs.docker.com/engine/reference/commandline/inspect) looks at all the info on a container.
- [`docker stats <container_name>`](https://docs.docker.com/engine/reference/commandline/stats) shows containers' resource usage statistics.

## Cleaning things up

```sh
# Remove unused data
docker system prune

# Delete all containers, running or stopped
docker rm -f $(docker ps -qa)

# Delete all images
docker rmi $(docker images -q)
```

## Docker-compose

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. To learn more about all the features of Compose, see the [list of features](https://docs.docker.com/compose/overview/#features).

By using the following command you can start up your application:

```
docker-compose -f <docker_compose_file> up
```

You can also run docker-compose in detached mode using `-d` flag, then you can stop it whenever needed by the following command:

```
docker-compose stop
```

## Going further

- See the [Docker Security Cheat Sheet](https://github.com/konstruktoid/Docker/blob/master/Security/CheatSheet.adoc) by [Thomas Sjögren](https://github.com/konstruktoid): some good stuff about container hardening in there.
- Snyk's [10 Docker Image Security Best Practices cheat sheet](https://snyk.io/blog/10-docker-image-security-best-practices/)
