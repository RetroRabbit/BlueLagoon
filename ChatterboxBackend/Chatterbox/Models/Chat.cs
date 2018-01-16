using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Chatterbox.Models
{
    public class Chat
    {
        public int Id { get; set; }
        [ForeignKey("Conversation")]
        public int ConversationId { get; set; }
        public DateTime LastMessageTime { get; set; }
        public List<Message> Messages { get; set; }
    }
}
