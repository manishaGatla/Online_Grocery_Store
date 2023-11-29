namespace OnlineGrocery.Models
{
    public class Customer
    {
        public object? _id { get; set; }
        public string name { get; set; }

        public string email { get; set; }

        public string password { get; set; }

        public string phoneNumber { get; set; }


    }
    public class InsertCustomer
    {
        public string? _id { get; set; }
        public string name { get; set; }

        public string email { get; set; }

        public string password { get; set; }

        public string phoneNumber { get; set; }


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
        public int isApprovedByAdmin { get; set; }

    }
    public class InsertDeliveryExecutives
    {
        public string? _id { get; set; }
        public string name { get; set; }

        public string email { get; set; }

        public string password { get; set; }

        public string phoneNumber { get; set; }

        public string NameOnCard { get; set; }

        public string accountNumber { get; set; }

        public string routingNumber { get; set; }

        public int isApprovedByAdmin { get; set; } = 0;

    }
}
