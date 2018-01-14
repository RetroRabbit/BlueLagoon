using Chatterbox.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chatterbox.Controllers
{
    [Route("api/[controller]")]
    public class UserController:Controller
    {
        private readonly ChatterContext _context;

        public UserController(ChatterContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public IActionResult LogMeIn([FromBody] LoginDetails details)
        {
            Console.WriteLine("NEW LOG",details.Email);
            var emailCheck = _context.Users.FirstOrDefault(t => t.Email == details.Email);


            if (emailCheck == null)
            {
                return new ObjectResult(new { status = "failed",message="No such user", user = "" });
            }

            var items = _context.Users.FirstOrDefault(t => t.Email == details.Email && t.Password == details.Password);


            if (items == null)
            {
                return new ObjectResult(new { status = "failed",message="Incorrect password", user = "" });
            }
            var userDeets = new
            {
                id = items.Id,
                name=items.Name,
                email=items.Email,
                image=items.Image
            };
            
            return new ObjectResult(new {status="successful",user=userDeets});
        }
        [HttpPost("register/stepone")]
        public IActionResult RegisterStepOne([FromBody] RegisterDetails details)
        {
            var items = _context.Users.FirstOrDefault(t => t.Email == details.Email);


            if (items != null)
            {
                return new ObjectResult(new { status = "failed",message="User already exists"});
            }
            User user = new User();
            user.Password = details.Password;
            user.Email = details.Email;
            user.Name = details.Name;
            user.RegisterDate = DateTime.Now;
            _context.Users.Add(user);
            return new ObjectResult(new { status = "successful", message = "User registered",user=user});
        }
        public class LoginDetails
        {
            public String Password { get; set; }
            public String Email { get; set; }
        }
        public class RegisterDetails
        {
            public String Password { get; set; }
            public String Email { get; set; }
            public String Name { get; set; }
        }
    }
}
