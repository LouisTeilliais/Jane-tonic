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


INSERT INTO public.sessions (place,"level","date","hour",number_user_max,number_user_reserved,session_type_id,is_full) VALUES
	 ('JARDIN PUBLIC','Capbreton','2025-02-03 23:00:00','9H',10,0,2,false),
	 ('JARDIN PUBLIC','Capbreton','2025-02-03 23:00:00','18H30',10,0,2,false),
	 ('JARDIN PUBLIC','Capbreton','2025-02-06 23:00:00','18H30',10,0,2,false),
	 ('YOGA SEARCHER','Benesse Maremme','2025-02-02 23:00:00','18h',10,1,1,false),
	 ('YOGA SEARCHER','Benesse Maremme','2025-02-09 23:00:00','18H',10,0,1,false),
	 ('JARDIN PUBLIC','Capbreton','2025-02-10 23:00:00','9H',10,0,2,false),
	 ('JARDIN PUBLIC','Capbreton','2025-02-10 23:00:00','18H30',10,0,2,false),
	 ('COWORKING SPOT','Capbreton','2025-02-11 23:00:00','9H',8,0,3,false),
	 ('COWORKING SPOT','Capbreton','2025-02-12 23:00:00','12H30',8,0,1,false),
	 ('BOUHEBE','Capbreton','2025-02-13 23:00:00','9H',6,0,1,false);
