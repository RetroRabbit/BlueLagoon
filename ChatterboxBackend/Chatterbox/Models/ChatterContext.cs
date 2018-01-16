using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chatterbox.Models
{
    public class ChatterContext:DbContext
    {
        public ChatterContext(DbContextOptions<ChatterContext> options) : base(options)
        {
        }

        public DbSet<Conversation> Conversations { get; set; }
        //public DbSet<Chat> Chats { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
