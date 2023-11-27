using MongoDB.Bson;
using MongoDB.Driver;
using OnlineGrocery.Models;

namespace OnlineGrocery.services
{
    public class MongoConnectionService
    {
        private readonly IMongoClient _client;
        private readonly IMongoDatabase _database;

        public MongoConnectionService()
        {
            string connectionString = "mongodb+srv://pxk23480:Prash%4098490@cluster0.byhj77c.mongodb.net/"; 
            string databaseName = "OnlineGroceryStore"; 

            _client = new MongoClient(connectionString);
            _database = _client.GetDatabase(databaseName);
        }


        public async Task InsertDocumentAsync(string collectionName, object document)
        {
            var collection = _database.GetCollection<BsonDocument>(collectionName);
            await collection.InsertOneAsync(document.ToBsonDocument());
        }

        public async Task UpdateDocumentAsync(string collectionName, string filter, object document)
        {
            var collection = _database.GetCollection<BsonDocument>(collectionName);
            await collection.UpdateOneAsync(filter, document.ToBsonDocument());
        }

        public async Task UpdateDocumentsAsync(string collectionName, string filter, object document)
        {
            var collection = _database.GetCollection<BsonDocument>(collectionName);
            await collection.UpdateManyAsync(filter, document.ToBsonDocument());
        }

        public async Task GetDocumentsAsync(string collectionName, string filter)
        {
            var collection = _database.GetCollection<BsonDocument>(collectionName);
            await collection.FindAsync(filter);
        }
        public  BsonDocument GetUserByUseremail(string useremail)
        {
            String CollectionName = "Customers";
            
            var filter = "{ email: " + "\"" +useremail + "\"" + "}";
            var details = _database.GetCollection<BsonDocument>("Customers").Find(filter).FirstOrDefault();
            if(details == null)
            {
                details = _database.GetCollection<BsonDocument>("Admins").Find(filter).FirstOrDefault();
                CollectionName = "Admins";
            }
            if(details == null)
            {
                details = _database.GetCollection<BsonDocument>("DeliveryExecutives").Find(filter).FirstOrDefault();
                CollectionName = "DeliveryExecutives";

            }
            details.Add(CollectionName, CollectionName);

            return details;
        }
        public  BsonDocument GetAllOrders()
        {
            BsonDocument details = null;
            var collection = _database.GetCollection<BsonDocument>();
            

            return details; 
        }

    }
}
