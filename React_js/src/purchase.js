
import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
export default class Customer extends Component {
    constructor(props){
        super(props);
        this.state={deps:[],id:''}
    }
    //  componentDidMount(){
    //      this.refreshList();
    //  }
    edit(pid){

    }
    refreshList(key){
       fetch('https://localhost:44385/api/Read/Get2?id='+key)
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
        {`.navbar {display: none}`}
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
                        <th>Ticket_ID</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Depature</th>
                        <th>Return_date</th>
                        
                        
                    
                    </thead >
                    <tbody className="rand88">
                    {deps.map(dep=>
                        <tr key={dep.CID}>
                            <tr>{dep.Ticket_ID}</tr>
                        <td>{dep.Source}</td>
                        <td>{dep.Destination}</td>
                        <td>{dep.Depature}</td>
                        <td>{dep.Return_date}</td>
                       
                        
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
            </center>
            <div className="footer">
    <p>@copyright@2016 Roshan Airline.All right reserve</p>
  </div>
            </div>
            
        )
    }
}
