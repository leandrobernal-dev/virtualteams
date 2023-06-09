# virtual_teams

## Notes:

#### update api.js apiBaseUrl

#### uncomment last db config server dbConnect.js authentication

#### update server .env DB_URL to mongodb localhost

## Notes when running/restarting the server:

1. Start MongoDB container first then the Server API

## To run development docker:

```
docker build -t <build_name> .
docker run -it -p 3500:3500 -v $(pwd):/app virtualteams
```

## Using docker-compose:

```
docker compose up
```

## To access mongodb shell through docker:

```
docker exec -it <container_name> <mongo/mongosh>
```

## Remove unused containers:

```
docker rm $(docker ps --filter status=exited -q)
```
