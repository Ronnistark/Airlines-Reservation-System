//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Flight.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Ticket_Form
    {
        public int Ticket_ID { get; set; }
        public Nullable<int> CID { get; set; }
        public string Source { get; set; }
        public string Destination { get; set; }
        public Nullable<System.DateTime> Depature { get; set; }
        public Nullable<System.DateTime> Return_date { get; set; }
    }
}
