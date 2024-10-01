using AngularTest.Server.DTOs;
using AngularTest.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularTest.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private readonly MyDbContext _db;

        public UsersController(MyDbContext db)
        {
            _db = db;

        }

        [HttpPost]
        public IActionResult addUser([FromForm] addUserDTo userDto)
        {
            var user = _db.Users.Where(x => x.Email == userDto.Email).FirstOrDefault();
            if (user != null)
            {
                return BadRequest("user alrady exist");
            }

            var newUser = new User
            {
                UserName = userDto.UserName,
                Email = userDto.Email,
                Password = userDto.Password,
            };
            _db.Users.Add(newUser);
            _db.SaveChanges();
            return Ok(newUser);
        }


        [HttpPost("Login")]
        public IActionResult Login([FromForm] LoginUserDTO user)
        {
            var users = _db.Users.Where(a => a.Email == user.Email && a.Password == user.Password).FirstOrDefault();
            if (users != null)
            {
                return Ok(users);
            }
            return BadRequest("You dont have account please register");

        }
    }
}
