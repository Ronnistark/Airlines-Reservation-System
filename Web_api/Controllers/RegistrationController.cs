using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Flight.Models;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using System.Data.Entity;


namespace Flight.Controllers
{
    [RoutePrefix("api/Registration")]
    public class RegistrationController : ApiController
    {
        FlightEntities3 db = new FlightEntities3();
        [HttpPost]
        [Route("Create")]
        public string Create(Rgstration1 reg)
        {
            try
            {
                db.Registrations.Add(new Registration
                {

                    First_Name = reg.First_Name,
                    Last_Name = reg.Last_Name,
                    DOB = reg.DOB,
                    Country = reg.Country,
                    Nationality = reg.Nationality,
                    Email = reg.Email,
                    Alternate_Email = reg.Alternate_Email,
                    phone_no = reg.phone_no,
                    Password = reg.Password
                });
                db.SaveChanges();
                return "Addedd Successfully";
            }
            catch (Exception)
            {
                return "Failed to Add";
            }
        }
        [Route("Login")]

        [HttpPost]

        public Response Login(Login login)
        {
            var log = db.Registrations.Where(x => x.Email.Equals(login.Email) && x.Password.Equals(login.Password)).FirstOrDefault();

            if (log == null)
            {
                return new Response { Status = "Invalid", Message = "Invalid user" };
            }
            else

                return new Response { Status = "Success", Message = "Login Successful" };
        }
        [Route("Already")]

        [HttpPost]

        public string Already(Login login)
        {
            var log = db.Registrations.Where(x => x.Email.Equals(login.Email)).FirstOrDefault();

            if (log == null)
            {
                return "Successful";
            }
            else

                return "Unsuccessful";
        }
        [HttpPost]
        [Route("Create1")]
        public string Create1(Message2 reg)
        {
            try
            {
                db.Messages.Add(new Message
                {
                    Name = reg.Name,
                    Email = reg.Email,
                    Phone_no = reg.Phone_no,
                    Message1 = reg.Message1


                });
                db.SaveChanges();
                return "Addedd Successfully";
            }
            catch (Exception)
            {
                return "Failed to Add";
            }
        }

        [HttpPut]
        [Route("Update")]


        public string Update(Rgstration1 reg)
        {



            var existingStudent = db.Registrations.Where(s => s.CID ==reg.CID)
                                                    .FirstOrDefault();

            if (existingStudent != null)
            {
                existingStudent.First_Name = reg.First_Name;
                existingStudent.Last_Name = reg.Last_Name;
              
              
               
                existingStudent.Country = reg.Country;
                existingStudent.Nationality = reg.Nationality;
                existingStudent.Alternate_Email = reg.Alternate_Email;
               
                

                db.SaveChanges();
            }
            else
            {
                return "not found";
            }

            return "ok";

        }

        [Route("Search")]

        [HttpPost]

        public Response Search(Schedule1 login1)
        {
            var log = db.Schedules.Where(x => x.Source.Equals(login1.Source) && x.Destinatiom.Equals(login1.Destinatiom)).FirstOrDefault();
               

            if (log == null)
            {
                return new Response { Status = "Invalid", Message = "Invalid user" };
            }
            else

                return new Response { Status = "Success", Message = "Login Successful" };
        }



        [Route("admin")]

        [HttpPost]

        public Response admin(Login login2)
        {
            var log = db.Admins.Where(x => x.UserName.Equals(login2.Email) && x.Password.Equals(login2.Password)).FirstOrDefault();

            if (log == null)
            {
                return new Response { Status = "Invalid", Message = "Invalid user" };
            }
            else

                return new Response { Status = "Success", Message = "Login Successful" };
        }

    }

}





   


