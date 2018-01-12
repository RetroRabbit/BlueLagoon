using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChatterboxAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Auth")]
    public class AuthController : Controller
    {
        public JsonResult Login(String email, String password)
        {
            return Json("{id:1,username:Alph,img:img_url}");
        }

        public JsonResult Register(String email, String username, String password)
        {
            return Json("{id:1,username:Alph,img:img_url}");
        }
    }
}