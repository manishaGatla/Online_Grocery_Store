using Microsoft.AspNetCore.Mvc;
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
                    var updateDetails = userData.updateData;
                    await _mongoConnService.UpdateDetails(email, updateDetails, type);
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
