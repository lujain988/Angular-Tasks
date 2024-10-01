using AngularTest.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularTest.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly  MyDbContext _db;
        public ServiceController(MyDbContext db) { 
        _db = db;
        
        }


        [HttpGet]
        public IActionResult GetService() { 
        var service = _db.Services.ToList();
            return Ok(service);
        }
    }
}
