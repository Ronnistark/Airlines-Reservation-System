using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Http.Headers;
using Flight.Models;
using Newtonsoft;
using System.Data;
using Newtonsoft.Json;

namespace Flight.Controllers
{
    [RoutePrefix("api/Read")]
    public class ReadController : ApiController
    {
        FlightEntities3 db = new FlightEntities3();

        [HttpGet]
        [Route("Get")]
        public HttpResponseMessage Get()
        {
            try
            {
                var Products = db.Schedules.Select(p => new Schedule1()
                {
                    Day = p.Day,
                    Source = p.Source,
                    Destinatiom = p.Destinatiom,
                    Arrival = p.Arrival,
                    Depature = p.Depature,
                    price = p.price

                }).ToList();
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                response.Content = new StringContent(JsonConvert.SerializeObject(Products));
                response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                return response;
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }
        [HttpPost]
        [Route("Create")]
        public string Create(Ticket1 reg)
        {
            try
            {
                db.Ticket_Form.Add(new Ticket_Form
                {
                    CID = reg.CID,
                    Source = reg.Source,
                    Destination = reg.Destination,
                    Depature = reg.Depature,
                    Return_date = reg.Return_date


                });
                db.SaveChanges();
                return "Addedd Successfully";
            }
            catch (Exception)
            {
                return "Failed to Add";
            }
        }
            [HttpPost]
            [Route("Create9")]
            public string Create9(Schedule1 reg)
            {
                try
                {
                    db.Schedules.Add(new Schedule
                    {
                        Day = reg.Day,
                        Source = reg.Source,
                        Destinatiom = reg.Destinatiom,
                        Depature = reg.Depature,
                        Arrival = reg.Arrival,
                        price=reg.price,


                    });
                    db.SaveChanges();
                    return "Addedd Successfully";
                }
                catch (Exception)
                {
                    return "Failed to Add";
                }



            }
        [HttpDelete]




        public string Delete(int id)
        {


            try
            {

                var student = db.Ticket_Form
                    .Where(s => s.Ticket_ID == id)
                    .FirstOrDefault();

                db.Entry(student).State = System.Data.Entity.EntityState.Deleted;
                db.SaveChanges();


                return "Deleted";
            }
            catch (Exception)
            {
                return "Invalid id";
            }

        }

        [HttpGet]
        [Route("Get1")]
        public HttpResponseMessage Get1(int id)
        {
            try
            {
                var Products = db.Registrations
                                .Where(st => st.CID == id)
                                .Select(st => new
                                {

                                    First_Name = st.First_Name,
                                    Last_Name = st.Last_Name,
                                    DOB = st.DOB,
                                    Country = st.Country,
                                    Nationality = st.Nationality,
                                    Email = st.Email,
                                    Alternate_Email = st.Alternate_Email
                                }).ToList();

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                response.Content = new StringContent(JsonConvert.SerializeObject(Products));
                response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                return response;
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }

        [HttpGet]
        [Route("Get2")]
        public HttpResponseMessage Get2(int id)
        {
            try
            {
                var Products = db.Ticket_Form
                                .Where(st => st.CID == id)
                                .Select(st => new
                                {
                                    Ticket_ID = st.Ticket_ID,
                                    Source = st.Source,
                                    Destination = st.Destination,
                                    Depature = st.Depature


                                }).ToList();

                var response = new HttpResponseMessage(HttpStatusCode.OK);
                response.Content = new StringContent(JsonConvert.SerializeObject(Products));
                response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                return response;
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }







        [HttpGet]
        [Route("Get4")]
        public HttpResponseMessage Get4()
        {
            try
            {
                var Products = db.Ticket_Form.Select(p => new Ticket1()
                {
                    Ticket_ID = p.Ticket_ID,
                    CID = p.CID,
                    Source = p.Source,
                    Destination = p.Destination,
                    Depature = p.Depature


                }).ToList();
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                response.Content = new StringContent(JsonConvert.SerializeObject(Products));
                response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                return response;
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }


        [HttpGet]
        [Route("Get5")]
        public HttpResponseMessage Get5(string Email)
        {
            try
            {
                var Products = db.Registrations
                              .Where(st => st.Email == Email)
                              .Select(st => new
                              {
                                  CID = st.CID
                              });
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                response.Content = new StringContent(JsonConvert.SerializeObject(Products));
                response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                return response;
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }
        [HttpPost]
        [Route("Create2")]
        public string Create2(Schedule1 reg)
        {
            try
            {
                db.Schedules.Add(new Schedule
                {
                    Day = reg.Day,
                    Source = reg.Source,
                    Destinatiom = reg.Destinatiom,
                    Depature = reg.Depature,
                    Arrival = reg.Arrival,
                    price = reg.price


                });
                db.SaveChanges();
                return "Addedd Successfully";
            }
            catch (Exception)
            {
                return "Failed to Add";
            }
        }
            [HttpGet]
            [Route("Get9")]
            public HttpResponseMessage Get9(int id)
            {
                try
                {
                    var Products = db.Registrations
                                    .Where(st => st.CID == id)
                                    .Select(st => new
                                    {

                                        First_Name = st.First_Name,
                                        Last_Name = st.Last_Name,
                                        DOB = st.DOB,
                                        Country = st.Country,
                                        Nationality = st.Nationality,
                                        Email = st.Email,
                                        Alternate_Email = st.Alternate_Email,
                                        phone_no=st.phone_no,
                                        Password=st.Password
                                    }).ToList();

                    var response = new HttpResponseMessage(HttpStatusCode.OK);
                    response.Content = new StringContent(JsonConvert.SerializeObject(Products));
                    response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                    return response;
                }
                catch
                {
                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
                }
            }

    }
}
