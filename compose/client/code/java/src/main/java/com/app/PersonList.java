package com.app;

import com.mongodb.MongoClient;
import com.mongodb.MongoDatabase;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoCollection;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;

public class PersonList {
    private static MongoClient client;
    private static MongoDatabase db;

    public static void main(String[] args) {
        try {
            client = new MongoClient(new ServerAddress("mongo-server", 27017));
            db = client.getDatabase("test");

            final MongoCollection<Document> col = db.getCollection("person");

	    List<Document> results = col.find(
                                                 new Document("last_name", "Gavrilenko")
                                                     .append("first_name", "Timofey")
                                             )
		                    .into(new ArrayList<Document>());

        }
        catch (Exception e) {
            e.printStackTrace();
        }

        for (Document doc: results) {
            System.out.println(doc.toJson());
        }
    }
}
