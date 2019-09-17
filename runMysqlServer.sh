#!/bin/bash

docker run -p 7306:3306 --name ris-v2-db -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7