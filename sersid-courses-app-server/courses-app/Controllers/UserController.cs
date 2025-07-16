using courses_app.Models;
using Microsoft.AspNetCore.Mvc;

namespace courses_app.Controllers
{
    [ApiController]
    [Route("")]
    public class UserController : ControllerBase
    {
        private static readonly List<User> RegisteredUsers = [new User()
        {
            Name = "sergey",
            Email = "sergey@mail.com",
            Password = "password"
        }];

        private static readonly List<User> LoggedUsers = new();

        [HttpPost("register")]
        public ActionResult<Data<string>> Register(User user)
        {
            RegisteredUsers.Add(user);
            return Ok(new Data<string> { Successful = true });
        }

        [HttpPost("/login")]
        public ActionResult<Data<string>> Login(User user)
        {
            var registeredUser = RegisteredUsers.FirstOrDefault(u => u.Email == user.Email && u.Password == user.Password);
            if (registeredUser is null)
              return Ok(new Data<string> { Successful = false });
            LoggedUsers.Add(registeredUser);
            return Ok(new Data<string> { Successful = true, User = new User() {Name = registeredUser.Name, Email = registeredUser.Email }, Result = registeredUser.Token});
        }

        [HttpDelete("/logout")]
        public ActionResult<Data<string>> Logout(string token)
        {
            var registeredUser = RegisteredUsers.FirstOrDefault(u => u.Token == token);
            if (registeredUser is null)
                return Ok(new Data<string> { Successful = false });
            LoggedUsers.RemoveAll(_ => true);
            return Ok(new Data<string> { Successful = true});
        }

        [HttpGet("/users/me")]
        public ActionResult<Data<User>> Me()
        {
            var registeredUser = RegisteredUsers.FirstOrDefault();
            if (registeredUser is null)
                return Ok(new Data<User> { Successful = false });
           
            return Ok(new Data<User> { Successful = true, User = new User() { Name = registeredUser.Name, Email = registeredUser.Email }, Result = registeredUser });
        }
    }
}
