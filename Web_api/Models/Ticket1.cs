using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Flight.Models
{
    public class Ticket1

    {
        public int Ticket_ID { get; set; }
        public Nullable<int> CID { get; set; }
        public string Source { get; set; }
        public string Destination { get; set; }
        public Nullable<System.DateTime> Depature { get; set; }
        public Nullable<System.DateTime> Return_date { get; set; }
    }
}