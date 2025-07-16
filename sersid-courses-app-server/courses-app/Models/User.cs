namespace courses_app.Models
{
    public class User
    {
        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Token { get; set; } = "token";

        public string Role { get; set; } = "admin";
    }
}
