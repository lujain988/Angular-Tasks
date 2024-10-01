using System;
using System.Collections.Generic;

namespace AngularTest.Server.Models;

public partial class Subscription
{
    public int Id { get; set; }

    public string SubscriptionName { get; set; } = null!;

    public decimal SubscriptionAmount { get; set; }

    public string? SubscriptionDescription { get; set; }

    public virtual ICollection<UserSubscription> UserSubscriptions { get; set; } = new List<UserSubscription>();
}
