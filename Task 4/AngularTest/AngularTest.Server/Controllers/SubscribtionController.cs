using AngularTest.Server.DTOs;
using AngularTest.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularTest.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscribtionController : ControllerBase
    {
        private readonly MyDbContext _db;

        public SubscribtionController(MyDbContext db)
        {
            _db = db;

        }

        [HttpGet]
        public IActionResult getSubscriptions()
        {
            var subscriptions = _db.Subscriptions.ToList();
            return Ok(subscriptions);
        }
        [HttpPost("addSubscriptionUser")]
        public IActionResult addSubscriptionUser([FromBody] usersubscriptionDTO us)
        {
            var subscription = _db.Subscriptions.Where(a => a.Id == us.SubscriptionId).FirstOrDefault();

            if (subscription == null)
            {
                return NotFound("Subscription not found");
            }

            // Assuming SubscriptionAmount is of type decimal
            var amount = subscription.SubscriptionAmount;

            var startDate = DateTime.Now;
            var endDate = DateTime.Now;

            switch (amount)
            {
                case 4.99m: // decimal literal
                    endDate = startDate.AddDays(3); // Example duration for 4.99
                    break;
                case 9.99m:
                    endDate = startDate.AddDays(7);
                    break;
                case 19.99m:
                    endDate = startDate.AddMonths(1);
                    break;
                case 29.99m:
                    endDate = startDate.AddMonths(2);
                    break;
                case 39.99m:
                    endDate = startDate.AddMonths(6);
                    break;
                case 90m:
                    endDate = startDate.AddMonths(3);
                    break;
                case 365m:
                    endDate = startDate.AddYears(1);
                    break;
                default:
                    return BadRequest("Unknown subscription amount.");
            }

            var newUser = new UserSubscription
            {
                UserId = us.UserId,
                SubscriptionId = us.SubscriptionId,
                SubServiceId = us.SubServiceId,
                StartDate = startDate,
                EndDate = endDate,
            };

            _db.UserSubscriptions.Add(newUser);
            _db.SaveChanges();

            return Ok();
        }

    }
}
