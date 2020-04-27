#!/bin/bash
echo '----------------------------------------------------'

mongo --host mongo-server --quiet < person-insert.js
echo '----------------------------------------------------'

# mongo --host mongo-server --quiet --eval 'db.getSiblingDB("test").getCollection("person").find({},{_id:0}).toArray()'
# echo '----------------------------------------------------'

# node get_person_list.js
# echo '----------------------------------------------------'

# python3 get_person_list.py
# echo '----------------------------------------------------'

# # dotnet run /code/cs/bin/Debug/netcoreapp3.1/code.dll

# dotnet run --project /code/cs
# echo '----------------------------------------------------'
