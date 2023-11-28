using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using OnlineGrocery.Models;
using OnlineGrocery.services;

namespace OnlineGrocery.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UpdateController : Controller
    {
        private readonly MongoConnectionService _mongoConnService;
        public UpdateController(MongoConnectionService mongoConnService)
        {
            _mongoConnService = mongoConnService;
        }
        [HttpPost("update")]
        public async Task<String> UpdateUserDetails([FromBody] UpdateDetialsModel userData)
        {
            string email = userData.filter;
            string type = userData.role;

            if (type == "Admins" || type == "DeliveryExecutives")
            {
                try
                {
                    await _mongoConnService.UpdateDetails(email, userData.updateData, type);

                }
                catch (Exception ex)
                {
                    var result1 = new BsonDocument("error", ex.Message);
                    return result1.ToString();
                }

            }
            else
            {
                try
                {
                    var updateDetails = userData.updateCustomer;
                    await _mongoConnService.UpdateCustomerDetails(email, updateDetails, type);
                }
                catch (Exception ex)
                {
                    var result1 = new BsonDocument("error", ex.Message);
                    return result1.ToString();
                }
            }

            var result = new BsonDocument("success", "Added");
            return result.ToString();


        }
        [HttpPost("updateCart")]
        public async Task<String> updateCart(String id, int quantity)
        {
            try
            {
                object _id = ObjectId.Parse(id);
                _mongoConnService.UpdateCart(_id, quantity);
                var result = new BsonDocument("success", "Updated");
                return result.ToString();
            }
            catch(Exception ex)
            {
                var result = new BsonDocument("error", ex.Message);
                return result.ToString();
            }

        }
    }
}
