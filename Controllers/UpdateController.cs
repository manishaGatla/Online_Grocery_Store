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
        public async Task<IActionResult> UpdateUserDetails([FromBody] UpdateDetialsModel userData)
        {
            string email = userData.filter;
            string type = userData.role;

            if (type == "Admins" || type == "DeliveryExecutives")
            {
                try
                {
                    //var updateDetails = Builders<BsonDocument>.Update
                    //    .Set("name": )

                    //var
                    //await _mongoConnService.UpdateDetails(email, updateDetails, type);
                }
                catch (Exception ex)
                {
                    return StatusCode(500, $"Error: {ex.Message}");
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
                    return StatusCode(500, $"Error: {ex.Message}");
                }
            }

            return Ok("Document Updated to MongoDB");


        }
    }
}
