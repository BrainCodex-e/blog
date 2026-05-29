# Docker

A small, practical cheatsheet (no whale worship required).

## Images

- Build: `docker build -t myapp:dev .`
- List: `docker images`
- Remove: `docker rmi myapp:dev`

## Containers

- Run (interactive): `docker run --rm -it myapp:dev bash`
- Run (port mapping): `docker run --rm -p 8080:8080 myapp:dev`
- List running: `docker ps`
- List all: `docker ps -a`
- Stop: `docker stop <container>`

## Cleanup

- Prune stopped containers, dangling images, unused networks: `docker system prune`
- Aggressive prune (includes unused images): `docker system prune -a`

## Compose

- Up: `docker compose up -d`
- Logs: `docker compose logs -f`
- Down: `docker compose down`

## Handy one-liners

- Shell into running container: `docker exec -it <container> sh`
- Copy file out: `docker cp <container>:/path/in/container ./local-path`
