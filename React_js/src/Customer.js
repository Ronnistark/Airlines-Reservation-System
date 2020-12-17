import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Customer.css';
export default class Customer extends Component {
    constructor(props){
        super(props);
        this.state={deps:[],id:''
    }
    }
   
    //  componentDidMount(){
    //      this.refreshList();
    //  }
    
    refreshList(key){
       fetch('https://localhost:44385/api/Read/Get1?id='+key)
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
                
                 <style type="text/css">
      {`.navbar {display:none}`}
    </style>
  
                 <h3>Customer Details</h3>
                <center>
                <img src="https://cdn.thinglink.me/api/image/792008968430944257/1024/10/scaletowidth" className="r16" alt=""/>
               <br /><br /> <label className="rand88">Enter your Customer _ID:</label>&nbsp;
                <input type="text" onChange={(event)=>this.refreshList(event.target.value)} className="rand88"/><br /><br />
                               </center>
                <center>
                 <div className="mt-5 d-flex justify-content-left">
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead className="rand88">
                        
                        <th>First_Name</th>
                        <th>Last_Name</th>
                        <th>DOB</th>
                        <th>Country</th>
                        <th>Nationality</th>
                        <th>Email</th>
                        <th>Alternate_Email</th>
                      
                        
                    
                    </thead>
                    <tbody className="rand88">
                    {deps.map(dep=>
                        <tr key={dep.CID}>
                            
                        <td>{dep.First_Name}</td>
                        <td>{dep.Last_Name}</td>
                        <td>{dep.DOB}</td>
                        <td>{dep.Country}</td>
                        <td>{dep.Nationality}</td>
                        <td>{dep.Email}</td>
                        <td>{dep.Alternate_Email}</td>
                        <td>
                           </td>
                        
                        </tr>
                    )}
                    </tbody>
                </Table>
       
            </div>
            </center>
            <br />
            <Link to="/Ticket" >    <button className="btn btn-danger">Back to home page</button></Link><br />
            <div className="footer">
    <p>@copyright@2016 Roshan Airline.All right reserve</p>
  </div>
            </div>
            
        )
    }
}
