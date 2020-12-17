import React, { Component } from 'react';
import {Table } from 'react-bootstrap';
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
       fetch('https://localhost:44385/api/Read/Get')
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
            <div className="madar">
                <h3>Our Flight Schedule</h3>
                <center>
                <img src="https://www.aviation24.be/wp-content/uploads/2018/05/xiamen-airlines-Boeing-737-MAX-1-1024x510.jpg" className="r16" alt=""/>
                </center>
                </div>
                <center>
                 <div className="mt-5 d-flex justify-content-left">
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead className="rand">
                        <th>Day</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Depature</th>
                        <th>Arrival</th>
                        <th>price</th>
                    </thead>
                    <tbody>
                        {deps.map(dep=>
                        <tr key={dep.day}>
                        <td>{dep.Day}</td>
                        <td>{dep.Source}</td>
                        <td>{dep.Destinatiom}</td>
                        <td>{dep.Depature}</td>
                        <td>{dep.Arrival}</td>
                        <td>{dep.price}</td>
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
