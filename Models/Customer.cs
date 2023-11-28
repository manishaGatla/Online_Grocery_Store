namespace OnlineGrocery.Models
{
    public class Customer
    {
        public object? _id { get; set; }
        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string PhoneNumber { get; set; }


    }
    public class InsertCustomer
    {
       
        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string PhoneNumber { get; set; }


    }

    public class DeliveryExecutives
    {
        public object? _id { get; set; }
        public string name { get; set; }

        public string email { get; set; }

        public string password { get; set; }

        public string phoneNumber { get; set; }

        public string NameOnCard { get; set; }

        public string accountNumber { get; set; }

        public string routingNumber { get; set; }

    }
    public class InsertDeliveryExecutives
    {
        public string name { get; set; }

        public string email { get; set; }

        public string password { get; set; }

        public string phoneNumber { get; set; }

        public string NameOnCard { get; set; }

        public string accountNumber { get; set; }

        public string routingNumber { get; set; }

    }
}
