import React, { Component } from 'react'
import './Ticket.css';
import {Link} from 'react-router-dom';
export default class Journey extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: ''
        };
      }
      onCreateEmployee=()=>{
        let empInfo={
              Day:this.refs.Day.value,
              Source:this.refs.Source.value,
              Destinatiom:this.refs.Destinatiom.value,
              Depature:this.refs.Depature.value,
              Arrival:this.refs.Arrival.value,
              price:this.refs.price.value
            };
            fetch('https://localhost:44385/api/Read/Create9',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
          body: JSON.stringify(empInfo)
      }).then(r=>r.json()).then(res=>{
        if(res){
          //  this.setState({message:'Added successfully'});
         // this.props.history.push("/header");
          alert("Flight Schedule added Successfully");
        }
      });
        }
    render() {
        return (
            <div  className="r199">
                
            <div className="ri">
            <p>{this.state.message}
        
            </p>
                <h2>Roshan Airlines</h2><br />
                <label>Day</label><br />
                <input type="text" ref="Day"/><br />
                <label>Source</label><br />
                <input type="text" ref="Source"/><br />
                 <label>Destination</label><br />
                <input type="text" ref="Destinatiom"/><br />
                
                
                 <label>Depature:</label><br />
                 <input type="text" ref="Depature"/><br />
                 <label>Arrival</label><br />
                 <input type="text" ref="Arrival" /><br />
                 <label>price:</label><br />
                 <input type="text" ref="price"/><br /><br />
                 <button className="btn btn-info" onClick={this.onCreateEmployee} type="button">Submit</button>
            </div>
            <div className="ri">
                <div className="ros">
            <h2>control panel</h2><br />
            <ul>
            <li>
            <Link to ="/journey">Home</Link><br/></li>
           <li> <Link to ="/Journey">Add New Flight Schedule</Link><br /></li>
           <li> <Link to ="/Schedule">View flight details</Link><br /></li>
           <li> <Link to ="/AdminView">View purchase  flight Tickets</Link><br /></li>
           
        
           <li> <Link to ="/header">Log out</Link><br />
            </li>
            </ul>
            </div>
            </div><br /><br />
            <div className="footer">
    <p>@copyright@2016 Roshan Airline.All right reserve</p>
  </div>
            </div>
        )
    }
}
