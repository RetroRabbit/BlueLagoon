using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatterboxAPI.Models
{
    public class ChatterBoxContext:DbContext
    {
        public DbSet<chat> chats { get; set; }
        //public DbSet<contact> contacts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=ChatterBoxDB;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) 
        {
            modelBuilder.Entity<chat>()
                .Property(b => b.message)
                .IsRequired();
        }
    }
}
