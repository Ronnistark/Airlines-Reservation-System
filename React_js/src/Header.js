import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            logstatus:'invalid',
        }
            this.handle=this.handle.bind(this);
        
        
    }
   
    handle(event){
        if(this.state.logstatus=='invalid'){
        alert("Must login First");
        this.props.history.push("/login");

    }
    else{
   alert("start booking ticket");
   this.props.history.push("/Ticket");
    }
}
    render() {
        return (
            <div className="r999">
            <div className="r1">
                
              <h2 className>Roshan Airlines</h2><br />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Egyptair.a330-200.su-gce.arp.jpg/1200px-Egyptair.a330-200.su-gce.arp.jpg" alt="" className="r9"/>
               
              <p>
               Roshan Airline is aimed at bringing the best in Airline
               travels to you.<br />Our oustanding records among Airlines
               makes us achieve this.<br />Our staff members are adequate .We are aimed at giving you the best services.    
               <br />
           <Link to="/Aboutus">   <input class="btn btn-danger" type="submit" value="Read more"></input><br /></Link>

              </p>
                 
               
              </div><br /><br />
              <div className="r1">
                  <h2>Flight Booking</h2><br />
              <img src="https://5.imimg.com/data5/IV/PR/GLADMIN-37026135/flight-booking-services-500x500.jpg" className="ra" alt=""/>
              <div className="raos">
                <label>Flying From</label><br />
                <select className="tty2">
                <option value="none" selected disabled hidden>Choose here</option>
                <option value="Bangalore">Bangalore</option>
                 <option value="Delhi">Delhi</option>
                 <option value="pune">pune</option>
                 <option value="Mumbai" selected>Mumbai</option>
                 <option value="patna" selected>Patna</option>
                 <option value="Mysore" selected>Mysore</option>
                 <option value="Hyderbad" selected>Hyderbad</option>
                </select>
              <br/>
                <label>Moving to</label><br />
                <select onChange={this.divstatus} className="tty2" >
                <option value="none" selected disabled hidden>Choose here</option>
                <option value="Bangalore">Hyderbad</option>
                 <option value="Delhi">Delhi</option>
                 <option value="pune">pune</option>
                 <option value="Mumbai" selected>Mumbai</option>
                 <option value="patna" selected>Patna</option>
                 <option value="Mysore" selected>Mysore</option>
                 <option value="Hyderbad" selected>Bangalore</option>
                </select>
              
                <br />
                <label>Depature</label><br />
                <input type="text" placeholder="dd-mm-yyyy"/><br />
                <label>Return_time(Leave blank if one way trip) </label><br />
                <input type="text" placeholder="dd-mm-yyyy"/><br /><br />
                <input onClick={this.handle} class="btn btn-primary" type="submit"value="Book"></input><br />
              </div>
              </div><br />
              <div className="footer">
    <p>@copyright@2016 Roshan Airline.All right reserve</p>
  </div>
            </div>
        )
    }
}
