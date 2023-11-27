using Microsoft.AspNetCore.Mvc;
using OnlineGrocery.Models;
using OnlineGrocery.services;

namespace OnlineGrocery.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailsController : Controller
    {
        
        
        private readonly MongoConnectionService _mongoConnService;

        public UserDetailsController(MongoConnectionService mongoConnService)
        {
            _mongoConnService = mongoConnService;
        }

        [HttpGet("get")]
        public String GetUsers(String UserEmail )
        {
            try
            {

                var user = _mongoConnService.GetUserByUseremail(UserEmail);
                return user.ToString();
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
