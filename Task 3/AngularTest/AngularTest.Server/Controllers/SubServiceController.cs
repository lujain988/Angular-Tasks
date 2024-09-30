using AngularTest.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularTest.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubServiceController : ControllerBase
    {

        private readonly MyDbContext _db;
        public SubServiceController(MyDbContext db)
        {
            _db = db;

        }


        [HttpGet("getSubServiceByServiceId/{id}")]
        public IActionResult GetService(int id)
        {
            var subServices = _db.SubServices.Where(x => x.ServiceId == id).ToList();

            return Ok(subServices);
        }

        [HttpGet]
        public IActionResult GetSubServices() { 
        var subservices = _db.SubServices.ToList(); 
            return Ok(subservices);
        }



        [HttpGet("getSubServiceDetails/{id}")]
        public IActionResult Detials(int id) {

            var subServices = _db.SubServices.Where(x => x.ServiceId == id).FirstOrDefault();

            return Ok(subServices);
        }
    }
}
