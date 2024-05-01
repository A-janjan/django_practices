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


for enrolling:

`curl -i -X POST -u student:password http://127.0.0.1:8000/api/courses/1/enroll/`


## some important tips

django request/response cycle:

![django req/res cycle](docs/django_cycle.png)

django Channels request/response cycle:

![django channels req/res cycle](docs/django_channels_cycle.png)



## some UI


![ui1](docs/ui1.png)

---

![ui2](docs/ui2.png)

---

![ui3](docs/ui3.png)

---