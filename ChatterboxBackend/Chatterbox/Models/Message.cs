using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Chatterbox.Models
{
    public class Message
    {
        public long Id { get; set; }
        [ForeignKey("User")]
        public long UserIdFrom { get; set; }
        [ForeignKey("User")]
        public long UserIdto { get; set; }
        [ForeignKey("Conversation")]
        public long ConversationId { get; set; }
        public string Text { get; set; }
        public DateTime DateSent { get; set; }
    }
}
