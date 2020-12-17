import React, { Component } from 'react'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class update extends Component {
    constructor(props){
        super(props);
        this.state={deps:[],
            CID:'',
            message:''
    }
    }
   
   rand(){
    let empInfo={
        CID:this.refs.CID.value,
        First_Name:this.refs.First_Name.value,
        Last_Name:this.refs.Last_Name.value,
        // DOB:this.refs.DOB.value,
        Country:this.refs.Country.value,
        Nationality:this.refs.Nationality.value,
        // Email:this.refs.Email.value,
        Alternate_Email:this.refs.Alternate_Email.value,
        // phone_no:this.refs.phone_no.Value,
        // Password:this.refs.Password.Value
    
       
      
  
      };
    fetch('https://localhost:44385/api/Registration/Update',{
        method: 'PUT',
        headers:{'Content-type':'application/json'},
          body: JSON.stringify(empInfo)
      }).then(r=>r.json()).then(res=>{
        if(res){
          this.setState({message:' profile updated succesfully'});
          
          //this.props.history.push("/login");
        }
      });
   }   

  
    refreshList(key){
        
       fetch('https://localhost:44385/api/Read/Get9?id='+key)
       .then(response=>response.json())
       .then(data=>{
        this.setState({deps:data});
       }
        );
       
       
    }
    render() {
        const{deps}=this.state;
        

        return (
            <div className="r698">
                 <h3>Update Details</h3>
                 <p>{this.state.message}</p>
                 <style type="text/css">
      {`.navbar {display: none}`}
    </style>
                <center>
                <img src="https://cdn.thinglink.me/api/image/792008968430944257/1024/10/scaletowidth" className="r16" alt=""/>
               <br /><br /> <label className="rand88">Enter your Customer _ID:</label>&nbsp;
                <input type="text" onChange={(event)=>this.refreshList(event.target.value)} ref="CID"
                className="rand88"
                /><br /><br />
                               </center>
            
    
                   
                            {deps.map(dep=>
                                <div className="rand88">
                                    <center>                              
                                 <label>First_Name:</label><br />
                                <input type="text" defaultValue={dep.First_Name} ref="First_Name"/><br/>
                                <label>Last_Name</label><br/>
                                <input type="text" defaultValue={dep.Last_Name} ref="Last_Name" /><br/>
                                {/* <label>DOB</label><br/>
                                <input type="text" defaultValue={dep.DOB} ref="DOB"/><br/> */}
                                <label>Country</label><br/>
                                <input type="text" defaultValue={dep.Country} ref="Country"/><br/>
                                <label>Nationality</label><br/>
                                <input type="text" defaultValue={dep.Nationality} ref="Nationality"/><br/>
                                {/* <label>Email</label><br/>
                                <input type="text" defaultValue={dep.Email} ref="Email"/><br/> */}
                                <label>Alternate_Email</label><br/>
                                <input type="text" defaultValue={dep.Alternate_Email} ref="Alternate_Email"/><br/>
                             <br/>
                                {/* <label>Phone_no</label><br/>
                                <input type="text" defaultValue={dep.phone_no} ref="phone_no"/><br/> 
                                 <label>Password</label><br/>
                                <input type="text" defaultValue={dep.Password} ref="Password"/><br/>  */}
                                <Button onClick={()=>{this.rand()}}>Submit</Button>
                                </center>
                                <Link to="/Ticket"> <Button>Back</Button></Link> 
                                </div>
                                )}
                
                   
               
            
        
            
            <br />
            <div className="footer">
    <p>@copyright@2016 Roshan Airline.All right reserve</p>
  </div>
            </div>
            
        )
    }
}
