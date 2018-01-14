using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chatterbox.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ChatterContext(
                serviceProvider.GetRequiredService<DbContextOptions<ChatterContext>>()))
            {
                // Look for any movies.
                /*if (context.Messages.Any())
                {
                    return;   // DB has been seeded
                }
                */
                context.SaveChanges();
            }
        }
    }
}
