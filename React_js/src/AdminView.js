import React, { Component } from 'react';
import {Table } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import './Schedule.css';
export default class Schedule extends Component {
    constructor(props){
        super(props);
        this.state={deps:[]}
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
       fetch('https://localhost:44385/api/Read/Get4')
       .then(response=>response.json())
       .then(data=>{
        this.setState({deps:data});
       }
        );
       
       
    }
    render() {
        const{deps}=this.state;
        return (
            <div>
            
                <h3>Our Flight Schedule</h3>
                <center>
                <img src="https://cdn.thinglink.me/api/image/792008968430944257/1024/10/scaletowidth" className="r16" alt=""/>
                </center>
                
                <center>
                 <div className="mt-5 d-flex justify-content-left">
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead className="rand">
                        <th>Ticket_ID</th>
                        <th>Customer_ID</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Depature</th>
                        <th>Return_date</th>
                    </thead>
                    <tbody>
                        {deps.map(dep=>
                        <tr key={dep.Ticket_ID}>
                        <td>{dep.Ticket_ID}</td>
                        <td>{dep.CID}</td>
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
