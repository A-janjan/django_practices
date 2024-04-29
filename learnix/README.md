# Learnix App

-> E-Learning Platform

## some commands


for caching system :

`docker pull memcached`

and:

`docker run -it --rm --name memcached -p 11211:11211 memcached -m 64`


or for Redis:

`docker run -it --rm --name redis -p 6379:6379 redis`

consuming api example:

`curl http://127.0.0.1:8000/api/subjects/ | json_pp`