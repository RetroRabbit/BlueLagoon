using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatterboxAPI.Models
{
    public class chat
    {
        public long chatId { get; set; }
        public int from_id { get; set; }
        public int to_id { get; set; }
        public string message { get; set; }
        public bool viewed { get; set; }
        public TimeSpan date_created { get; set; }
    }
}
