using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using OnlineGrocery.Models;
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
        //[HttpGet("get")]
        //public String GetAllOders()
        //{
        //    try
        //    {

        //        var user = _mongoConnService.GetAllOrders();
        //        return user.ToString();
        //    }
        //    catch (Exception ex)
        //    {
        //        return ex.Message;
        //    }
        //}
        [HttpGet("getAllCategories")]
        public List<Categories> getAllCategories()
        {
            try
            {

                var categories = _mongoConnService.GetAllCategories();
                return categories;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        [HttpGet("getProductsByCategory")]
        public List<ProductsModel> getAllProductsByCategories(List<String> Category)
        {
            try
            {

                var categories = _mongoConnService.GetAllProductsByCategories(Category);
                return categories;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [HttpPost("addToCart")]
        public async Task<IActionResult> addtocart(CartModel cartDetails)
        {
            try
            {

                await _mongoConnService.AddToCart(cartDetails.ToBsonDocument());
                return Ok("Success");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
            
            
            
        }

        [HttpGet("getCart")]
        public List<GetCartModel> getAllCartDetails(String UserEmail)
        {
            try
            {

                var details =  _mongoConnService.GetAllCartDetails(UserEmail);
                return details;
            }
            catch (Exception ex)
            {
                return null;
            }



        }
    }
}
