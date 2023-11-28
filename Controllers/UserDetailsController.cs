﻿using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
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
        public String GetUsers (String UserEmail )
        {
            try
            {

                var user = _mongoConnService.GetUserByUseremail(UserEmail);
                return user;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
        [HttpGet("getCartItems")]
        public String getCartDetails(String UserEmail)
        {
            try
            {
                var details = _mongoConnService.GetCartDetails(UserEmail);
                return details.ToString();
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
            
        }
        [HttpGet("getDeliveredOrders")]
        public string getDeliveredOrders(String UserEmail)
        {
            try
            {
                 _mongoConnService.GetDeliveredDetails(UserEmail);
                //return details.ToString();
                return null;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
        [HttpGet("getAllProducts")]
        public List<ProductsModel> GetAllProducts()
        {
            try
            {
                var details = _mongoConnService.GetAllProducts();
                return details;
                 

            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
