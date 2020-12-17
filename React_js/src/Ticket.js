import React, { Component, createContext } from 'react'
import './Ticket.css';
import {Link} from 'react-router-dom';
export default class Ticket extends Component {
   


    constructor(props) {
        super(props);
        this.state = {
          
          message: '',
          value2:'',
          value1:'',
          Show:false,
         Date:'2020-12-17'
          


        };
      }
   
       
        CustomerContext=createContext();
      handleChange = event => {
        this.setState({ CID: event.target.value });
      }
      
    divstatus = (e) =>{
        this.setState({value2: e.target.value});
        
       }  
       divstatus1 = (e) =>{
        this.setState({value1: e.target.value});
        
        
       } 
     rand(){
     
      if(this.state.value2==this.state.value1)
      
      {alert('Source and Destination can not be same')}
     

      else{
        
        let empInfo={
              CID:this.refs.CID.value,
              Source:this.state.value2,
              Destination:this.state.value1,
              Depature:this.refs.Depature.value,
              Return_date:this.refs.Return_date.value,

             
            };
            fetch('https://localhost:44385/api/Read/Create',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
          body: JSON.stringify(empInfo)
      }).then(r=>r.json()).then(res=>{
        if(res){
         alert("Ticket Booked Successfully");
         // this.props.history.push("/header");
         
          
        }
      });
        }
}

    render() {
        return (
            <div className="rr88" >
        
        <style type="text/css">
      {`.navbar {display: none}`}
    </style>
     
   
   
                    <div className="ri">
            <p>{this.state.message}</p>
            
                <h2>Rwenzori Airlines</h2><br />
                <label>CID</label><br />
                <input type="text" ref="CID" onChange={this.handleChange}/><br />
                <label>Flying From</label><br />
                <select onChange={this.divstatus} className="tty" >
              
                <option value="Bangalore">Bangalore</option>
                 <option value="Delhi">Delhi</option>
                 <option value="pune">pune</option>
                 <option value="Mumbai" >Mumbai</option>
                 <option value="patna" >Patna</option>
                 <option value="Mysore" >Mysore</option>
                 <option value="Hyderbad" >Hyderbad</option>
                </select>
              
                <br />
                 <label>Moving to</label><br />
                
                <select onChange={this.divstatus1} className="tty">
                  
                <option value="Bangalore">Bangalore</option>
                 <option value="Delhi">Delhi</option>
                 <option value="pune">pune</option>
                 <option value="Mumbai" >Mumbai</option>
                 <option value="patna" >Patna</option>
                 <option value="Mysore" >Mysore</option>
                 <option value="Hyderbad" >Hyderbad</option>
                </select>
              
                <br />
                
               
                
                 <label>Depature:</label><br />
                 <input type="text" ref="Depature" placeholder="dd-mm-yyyy"/><br />
                 <label>Return_date:(Leave blank if one way trip)</label><br />
                 <input type="text" ref="Return_date" placeholder="dd-mm-yyyy"/><br /><br />

                

                 <button onClick={()=>{this.rand()}} type="button">Submit</button>
            </div>
            <div className="ri">
                <div className="ros">
            <h2>control panel</h2><br />
            <ul>
            <li>
            <Link to ="/Customer">Home</Link><br/></li>
            <li> <Link to="/update">update profile Information</Link></li>
           <li> <Link to ="/Schedule">View flight details</Link><br /></li>
           <li> <Link to ="/purchase">View purchase Tickets</Link><br /></li>
           <li> <Link to ="/Delete">Cancel</Link><br /></li>
           <li> <Link to ="/Ticket">Book flight Ticket</Link><br /></li>
           <li> <Link to ="/header">Log out</Link><br />
            </li>
            </ul>
            </div>
            </div><br /><br /><br /><br /><br />
            <div className="footer">
    <p>@copyright@2016 Roshan Airline.All right reserve</p>
  </div>
            </div>
        )
    }
}

