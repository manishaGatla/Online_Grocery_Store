using MongoDB.Bson;
using MongoDB.Driver;
using OnlineGrocery.Models;
using System.Collections;
using System.Security.Cryptography;

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
        public  String GetUserByUseremail(string useremail)
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

            if (details != null) {
                details.Add("isAdmin", CollectionName == "Admins" ? true : false);
                details.Add("isCustomer", CollectionName == "Customers" ? true : false);
                details.Add("isDeliveryExec", CollectionName == "DeliveryExecutives" ? true : false);
                return details.ToString();
            }
            return ("No Data Found");
            
        }
        //public  BsonDocument GetAllOrders()
        //{
        //    BsonDocument details = null;
        //    var collection = _database.GetCollection<BsonDocument>();
            

        //    return details; 
        //}


        public async Task UpdateCustomerDetails(string email, Customer updateDetails, string type)
        {
            var filter = "{ email: " + "\"" + email + "\"" + "}";
            var collection = _database.GetCollection<BsonDocument>(type);
            await collection.UpdateManyAsync(filter, updateDetails.ToBsonDocument());
        }
        public async Task UpdateDetails(string email, DeliveryExecutives updateDetails, string type)
        {
            var filter = "{ email: " + "\"" + email + "\"" + "}";
            var collection = _database.GetCollection<BsonDocument>(type);
            await collection.UpdateManyAsync(filter, updateDetails.ToBsonDocument());

        }
        public BsonDocument GetCartDetails(String email)
        {
            var filter = "{ email: " + "\"" + email + "\"" + ", orderStatus:" + "\"In Cart\"" + "}";
            var collection = _database.GetCollection<BsonDocument>("Orders");
            var details = collection.FindAsync(filter).ToBsonDocument();
            return details;

        }
        public void GetDeliveredDetails(String email)
        {
            var ordersCollection = _database.GetCollection<Order>("Orders");
            var deliveryOrderDetailsCollection = _database.GetCollection<DeliveryExecutives>("DeliveryExecutives");
            var deliveryExecutivesCollection = _database.GetCollection<DeliveryDetails>("DeliveryOrderDetails");

            // Specify the delivery executive's email


            // Query to get delivered order details for a specific delivery executive
            //var filter = Builders<Order>.Filter.Eq("orderStatus", "Delivered");
            //var deliveredOrderDetails = ordersCollection.AsQueryable()
            //    .Join(deliveryOrderDetailsCollection.AsQueryable(),
            //        order => order._id,
            //        deliveryOrderDetail => deliveryOrderDetail.orderId,
            //        (order, deliveryOrderDetail) => new { order, deliveryOrderDetail })
            //    .Join(deliveryExecutivesCollection.AsQueryable(),
            //        combined => combined.deliveryOrderDetail.deliveryExecutiveId,
            //        deliveryExecutive => deliveryExecutive._id,
            //        (combined, deliveryExecutive) => new
            //        {
            //            OrderId = combined.order._id,
            //            DeliveryExecutiveName = deliveryExecutive.name,
            //            // Add more properties as needed
            //        })
            //    .Where(result => result.DeliveryExecutiveName == email)
            //    .ToList();






        }



    }
}
