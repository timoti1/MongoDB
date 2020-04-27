using System;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Attributes;


namespace code
{
    public class Person
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("first_name"), BsonRequired]
        public string FirstName { get; set; }

        [BsonElement("last_name"), BsonRequired]
        public string LastName { get; set; }

        [BsonElement("birth_date"), BsonRequired]
        public DateTime BirthDate { get; set; }
    }

    class Program
    {
        protected static IMongoClient _client;
        protected static IMongoDatabase _db;

        static void Main(string[] args)
        {
            _client = new MongoClient("mongodb://mongo-server:27017");
            _db = _client.GetDatabase("test");

            //var _col = _db.GetCollection<BsonDocument>("person");
            var _col = _db.GetCollection<Person>("person");

            var all = _col.Find(new BsonDocument());

            foreach (var doc in all.ToEnumerable())
            {
                Console.WriteLine(doc.ToJson());
            }
        }
    }
}

