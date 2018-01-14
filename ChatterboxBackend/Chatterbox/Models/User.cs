using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chatterbox.Models
{
    public class User
    {
        public long Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Image { get; set; }
        public DateTime RegisterDate { get; set; }
    }
}
