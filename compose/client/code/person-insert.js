//use test;
connect("mongo-server/test");

const person_list = 
[
    { "first_name" : "Timofey", "last_name" : "Gavrilenko", "birth_date" : ISODate("1980-04-12T00:00:00Z") },
    { "first_name" : "Olga", "last_name" : "Gavrilenko", "birth_date" : ISODate("1980-02-08T00:00:00Z") },
    { "first_name" : "Ilya", "last_name" : "Gavrilenko", "birth_date" : ISODate("2006-06-20T00:00:00Z") },
    { "first_name" : "Elena", "last_name" : "Bykova", "birth_date" : ISODate("1981-10-09T00:00:00Z") },
    { "first_name" : "Vitaliy", "last_name" : "Bykov", "birth_date" : ISODate("1980-03-12T00:00:00Z") }
]

db.person.remove({});

db.person.insert(person_list);

//db.person.find({});

