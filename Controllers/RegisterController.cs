using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using OnlineGrocery.Models;
using OnlineGrocery.services;

namespace OnlineGrocery.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly MongoConnectionService _mongoConnService;

        public RegisterController(MongoConnectionService mongoConnService)
        {
            _mongoConnService = mongoConnService;
        }

        [HttpPost("newUser/deliveryExec")]
        public async Task<IActionResult> AddDeliveryExecutive([FromBody]BsonDocument  deliveryExcData)
        {
            try
            {
                // Example: Inserting a document into MongoDB
                await _mongoConnService.InsertDocumentAsync("DeliveryExecutives", deliveryExcData);
                return Ok("Document added to MongoDB");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

        [HttpPost("newUser/customer")]  
        public async Task<IActionResult> AddCustomer([FromBody] BsonDocument customerData)
        {
            try
            {
                // Example: Inserting a document into MongoDB
                await _mongoConnService.InsertDocumentAsync("Customers", customerData);
                return Ok("Document added to MongoDB");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

    }
}
