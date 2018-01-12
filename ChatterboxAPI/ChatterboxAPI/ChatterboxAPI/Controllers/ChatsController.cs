using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatterboxAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChatterboxAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Default")]
    public class ChatsController : Controller
    {
        private ChatterBoxContext db = new ChatterBoxContext();

        public JsonResult getAllMessages(int currentUserId, int senderId){
            var chats = db.chats.Where(chat => chat.from_id == senderId && chat.to_id == currentUserId).ToList();
            List<String> msgs = new List<String>();
            foreach (chat chat in chats) {
                msgs.Add(chat.message);
            }
            return Json(msgs);
        }

        [HttpGet]
        public JsonResult getNewMessage(int currentUserId, int senderId){
            var achat = db.chats.Where(chat => chat.from_id == senderId && chat.to_id == currentUserId && chat.viewed == false).ToList().First();
            return Json("Msg:"+achat.message);
        }

        public JsonResult sentMessage(int currentUserId, int receiverId, String msg) {
            chat newChat = new chat();
            newChat.from_id = currentUserId;
            newChat.to_id = receiverId;
            newChat.message = msg;
            newChat.viewed = false;
            newChat.date_created = new DateTime().TimeOfDay;
            try{
                db.chats.Add(newChat);
                return Json("{status:OK}");
            }catch (Exception ex) {
                Console.WriteLine(ex.Message);
                return Json("{status:ERR}");
            }
        }

    }
}