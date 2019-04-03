#!/bin/bash
db_host=localhost
db_port=27017
database_name=dev
user=appAdmin
password=password
keepLimitHours=2

mongo $db_host:$db_port/$database_name -u $user -p $password --eval "var keepLimitHours = '$keepLimitHours'" agile-tools-purge.js