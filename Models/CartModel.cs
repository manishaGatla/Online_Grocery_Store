namespace OnlineGrocery.Models
{
    public class CartModel
    {
        public object? _id { get; set; }
        public string Name { get; set; }

        public string Previous_Price { get; set; }
        public string Price_Per_Each { get; set; }
        public string Category { get; set; }
        public string Product_URL { get; set; }
        public string CustomerEmail { get; set; }
    }
    
}
