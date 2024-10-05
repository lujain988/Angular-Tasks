using AngularTest.Server.DTOs;
using AngularTest.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularTest.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly MyDbContext _db;
        public ServiceController(MyDbContext db) {
            _db = db;

        }


        [HttpGet]
        public IActionResult GetService() {
            var service = _db.Services.ToList();
            return Ok(service);
        }
        [HttpPut("{id}")]
        public IActionResult PutService(int id, [FromForm] addServiceDTO serviceDTO)
        {
            var existingService = _db.Services.FirstOrDefault(s => s.Id == id);
            if (existingService == null)
            {
                return NotFound("Service not found");
            }
            if (serviceDTO.ServiceImage != null)
            {
                var folder = Path.Combine(Directory.GetCurrentDirectory(), "UploadsImages");
                if (!Directory.Exists(folder))
                {
                    Directory.CreateDirectory(folder);
                }

                var fileImage = Path.Combine(folder, serviceDTO.ServiceImage.FileName);

                using (var stream = new FileStream(fileImage, FileMode.Create))
                {
                    serviceDTO.ServiceImage.CopyTo(stream);
                }

                existingService.ServiceImage = serviceDTO.ServiceImage.FileName;
            }

            existingService.ServiceName = serviceDTO.ServiceName;
            existingService.ServiceDescription = serviceDTO.ServiceDescription;

            _db.SaveChanges();

            return Ok(existingService);
        }

        [HttpGet("{id}")]
        public IActionResult GetService(int id) { 
        
        var service = _db.Services.FirstOrDefault(a=>a.Id == id);
            return Ok(service);
        }

    }
}
