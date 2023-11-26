namespace OnlineGrocery.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string PhoneNumber { get; set; }


    }

    public class DeliveryExecutives
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string PhoneNumber { get; set; }

        public string NameOnCard { get; set; }

        public string AccountNumber { get; set; }

        public string RoutingNumber { get; set; }

    }
}
