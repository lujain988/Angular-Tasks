using AngularTest.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularTest.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        private readonly MyDbContext _db;
        public ProductController(MyDbContext db)
        {
            _db = db;

        }

        [HttpGet]
        public IActionResult Products()
        {


            var products = _db.Products.ToList();
            return Ok(products);
        }
    }
}
