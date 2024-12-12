# Jane-tonic

## Deploy 

On the ubuntu server : 

docker compose up 


## Update 

docker compose down
docker rmi $(docker images -q)
docker system prune
git pull 
docker compose up