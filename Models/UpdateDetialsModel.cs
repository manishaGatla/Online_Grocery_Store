namespace OnlineGrocery.Models
{
    public class UpdateDetialsModel
    {
        public string filter { get; set; }
        public DeliveryExecutives? updateData { get; set; }
        public Customer? updateCustomer { get; set; }
        
        public string? role { get; set; }
    }
   
}
