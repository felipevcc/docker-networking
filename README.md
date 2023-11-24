# Docker Networking

Simple example of Docker networks. Creating the environment manually and with Docker Compose.

This environment is composed of a Node.js application that depends on a Mongo database, each one in a different container connected through a network.

## To configure it manually

Command to create the network:
```bash
docker network create --attachable appnet
```

To build the Node application image run the following command:
```bash
docker build -t mongoapp .
```

To run the containers from the images:
```bash
docker run -d --name db mongo
docker run -d --name app -p 3000:3000 --env MONGO_URL=mongodb://db:27017/test mongoapp
```

And finally, to connect the containers to the network previously created, execute each of these commands:
```bash
docker network connect appnet db
docker network connect appnet app
```

## To configure it using Docker Compose

Command to create and start the environment:
```bash
docker-compose up -d
```

Command to stop and delete the environment:
```bash
docker-compose up -d
```

For more information about Docker Compose consult its [documentation](https://docs.docker.com/compose/)
