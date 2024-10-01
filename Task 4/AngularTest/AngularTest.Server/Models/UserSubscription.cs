using System;
using System.Collections.Generic;

namespace AngularTest.Server.Models;

public partial class UserSubscription
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public int SubscriptionId { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public int SubServiceId { get; set; }

    public virtual SubService SubService { get; set; } = null!;

    public virtual Subscription Subscription { get; set; } = null!;
}
