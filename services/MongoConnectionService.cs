using MongoDB.Bson;
using MongoDB.Driver;

namespace OnlineGrocery.services
{
    public class MongoConnectionService
    {
        private readonly IMongoClient _client;
        private readonly IMongoDatabase _database;

        public MongoConnectionService()
        {
            string connectionString = "mongodb://localhost:27017"; 
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

    }
}
