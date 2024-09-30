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

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
