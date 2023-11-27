using Microsoft.AspNetCore.Mvc;
using OnlineGrocery.services;

namespace OnlineGrocery.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : Controller
    {
        private readonly MongoConnectionService _mongoConnService;

        public OrdersController(MongoConnectionService mongoConnService)
        {
            _mongoConnService = mongoConnService;
        }
        [HttpGet("get")]
        public String GetAllOders()
        {
            try
            {

                var user = _mongoConnService.GetAllOrders();
                return user.ToString();
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
}
