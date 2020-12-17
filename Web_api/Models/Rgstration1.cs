using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Flight.Models
{
    public class Rgstration1
    {
        public int CID { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public Nullable<System.DateTime> DOB { get; set; }
        public string Country { get; set; }
        public string Nationality { get; set; }
        public string Email { get; set; }
        public string Alternate_Email { get; set; }
        public Nullable<long> phone_no { get; set; }
        public string Password { get; set; }
    }
}