using Chatterbox.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chatterbox.Controllers
{
    [Route("api/[controller]")]
    public class ChatController:Controller
    {
        private readonly ChatterContext _context;

        public ChatController(ChatterContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Conversation > GetAll()
        {
            return _context.Conversations.ToList();
        }
        
        [HttpPost("newmessage")]
        public IActionResult Create([FromBody] MessageReceived message)
        {
            Console.WriteLine("NEW POST FOR MESSAGE");
            if (message == null)
            {
                Console.WriteLine("ERROR");
                return BadRequest();
            }
            var conversation = _context.Conversations.FirstOrDefault(t => t.ConversationId== message.ConversationId);
            Message newMessage = new Message();
            newMessage.DateSent = DateTime.Now;
            newMessage.UserIdFrom = message.MyId;
            if (message.MyId != conversation.ConversationRecipientId)
                newMessage.UserIdto = conversation.ConversationRecipientId;
            else
                newMessage.UserIdto = conversation.ConversationStarterId;

            newMessage.Text = message.Message;
            if (conversation.Messages == null)
            {
                conversation.Messages = new List<Message>();
                Console.WriteLine("NEW MESSAGE");
            }

            conversation.Messages.Add(newMessage);
            conversation.LastMessageText = message.Message;
            conversation.LastMessageDate = newMessage.DateSent;

            //_context.Messages.Add(newMessage);
            _context.SaveChanges();

            return new NoContentResult(); 
        }

        [HttpGet("conversations/{id}", Name = "GetTodo")]
        public IActionResult GetById(long id)
        {
            var items = _context.Conversations.Where(c=>(c.ConversationStarterId == id || c.ConversationRecipientId == id));//.ToList();


            if (items == null)
            {
                return NotFound();
            }
            List<ConversationReturn> conv=new List<ConversationReturn>(); 
            foreach (var item in items)
            {
                ConversationReturn c = new ConversationReturn();
                c.ConversationId = item.ConversationId;
                if (item.ConversationRecipientId != id)
                {
                    c.ConverseTo = item.ConversationRecipientId;
                }else{
                    c.ConverseTo = item.ConversationStarterId;
                }
                c.LastMessage = item.LastMessageText;
                c.LastMessageDate = item.LastMessageDate;
                conv.Add(c);

                Console.WriteLine(item.ConversationId);
            }
            var ConversationIDs = from c in items
                                  select c.ConversationId;
            var Chats = from ch in conv
                        join u in _context.Users
                        on ch.ConverseTo equals u.Id 
                        select new {Conversation=ch,User=u };
            return new ObjectResult(Chats);
        }

        [HttpGet("conversations/{id}/messages", Name = "GetMessages")]
        public IActionResult GetMessagesById(long id)
        {
            var items = _context.Messages.Where(t => t.ConversationId==id);


            if (items == null)
            {
                Console.WriteLine("NO MESSAGES");
                return NotFound();
            }
            Console.WriteLine("MESSAGES");
            return new ObjectResult(items.ToList());
        }
        class ConversationReturn
        {
            public long ConversationId { get; set; }
            public long ConverseTo { get; set; }
            public String LastMessage { get; set; }
            public DateTime LastMessageDate { get; set; }
        }
        public class MessageReceived
        {
            public long ConversationId { get; set; }
            public long MyId { get; set; }
            public String Message { get; set; }
        }
    }
}
