using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Chatterbox.Models
{
    public class Conversation
    {
        public long ConversationId { get; set; }
        [ForeignKey("User")]
        public long ConversationStarterId { get; set; }
        [ForeignKey("User")]
        public long ConversationRecipientId { get; set; }
        public List<Message> Messages { get; set; }
        public String LastMessageText { get; set; }
        public DateTime LastMessageDate { get; set; }
        public DateTime ConversationDate { get; set; }
    }
}
