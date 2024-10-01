using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace AngularTest.Server.Models;

public partial class MyDbContext : DbContext
{
    public MyDbContext()
    {
    }

    public MyDbContext(DbContextOptions<MyDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Service> Services { get; set; }

    public virtual DbSet<SubService> SubServices { get; set; }

    public virtual DbSet<Subscription> Subscriptions { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserSubscription> UserSubscriptions { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-BACGF4K;Database=ecommerceAngular;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Service>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Service__3214EC07488B3F59");

            entity.ToTable("Service");

            entity.Property(e => e.ServiceDescription).HasColumnType("text");
            entity.Property(e => e.ServiceImage)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.ServiceName)
                .HasMaxLength(255)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SubService>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__SubServi__3214EC07A9D5902D");

            entity.ToTable("SubService");

            entity.Property(e => e.SubServiceDescription).HasColumnType("text");
            entity.Property(e => e.SubServiceImage)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.SubServiceName)
                .HasMaxLength(255)
                .IsUnicode(false);

            entity.HasOne(d => d.Service).WithMany(p => p.SubServices)
                .HasForeignKey(d => d.ServiceId)
                .HasConstraintName("FK__SubServic__Servi__398D8EEE");
        });

        modelBuilder.Entity<Subscription>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Subscrip__3213E83F880717A9");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.SubscriptionAmount)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("subscription_amount");
            entity.Property(e => e.SubscriptionDescription)
                .HasColumnType("text")
                .HasColumnName("subscription_description");
            entity.Property(e => e.SubscriptionName)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("subscription_name");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Users__1788CCACBDBB9BAD");

            entity.HasIndex(e => e.Email, "UQ__Users__A9D105347196A35D").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.Address).HasMaxLength(255);
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.Phone).HasMaxLength(20);
            entity.Property(e => e.UserName).HasMaxLength(100);
        });

        modelBuilder.Entity<UserSubscription>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__user_sub__3213E83F739181DF");

            entity.ToTable("user_subscription");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.EndDate)
                .HasColumnType("datetime")
                .HasColumnName("endDate");
            entity.Property(e => e.StartDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("startDate");
            entity.Property(e => e.SubServiceId).HasColumnName("subServiceId");
            entity.Property(e => e.SubscriptionId).HasColumnName("subscriptionId");
            entity.Property(e => e.UserId).HasColumnName("userId");

            entity.HasOne(d => d.SubService).WithMany(p => p.UserSubscriptions)
                .HasForeignKey(d => d.SubServiceId)
                .HasConstraintName("FK__user_subs__subSe__4CA06362");

            entity.HasOne(d => d.Subscription).WithMany(p => p.UserSubscriptions)
                .HasForeignKey(d => d.SubscriptionId)
                .HasConstraintName("FK__user_subs__subsc__4D94879B");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
