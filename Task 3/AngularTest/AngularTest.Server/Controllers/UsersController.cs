using AngularTest.Server.DTOs;
using AngularTest.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;

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

        [HttpPost("addService")]
        public IActionResult addService([FromForm] addServiceDTO serviceDTO )
        {
            var folder = Path.Combine(Directory.GetCurrentDirectory(), "UploadsImages");
            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }

            var fileImage = Path.Combine(folder, serviceDTO.ServiceImage.FileName);

            if (_db.Services.Any(s => s.ServiceName == serviceDTO.ServiceName))
            {
                return Conflict("A service with the same name already exists.");
            }

            using (var stream = new FileStream(fileImage, FileMode.Create))
            {
                 serviceDTO.ServiceImage.CopyToAsync(stream); 
            }

            var newService = new Service
            {
                ServiceName = serviceDTO.ServiceName,
                ServiceDescription = serviceDTO.ServiceDescription,
                ServiceImage = serviceDTO.ServiceImage.FileName,
            };

            _db.Services.Add(newService);
             _db.SaveChangesAsync(); 
            return Ok(newService);




        }
    }
}
