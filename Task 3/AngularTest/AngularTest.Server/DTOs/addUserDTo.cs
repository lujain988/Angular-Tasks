namespace AngularTest.Server.DTOs
{
    public class addUserDTo
    {
        public string UserName { get; set; } = null!;

        public string Email { get; set; } = null!;
        public string? Password { get; set; }
    }
}
