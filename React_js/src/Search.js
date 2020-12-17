import React, { Component } from 'react'
import {Button,Table} from 'react-bootstrap';
import axios from 'axios';
import './search.css';
export default class Search extends Component {

    constructor(props){
        super(props);
        this.state={
          Status:'',
          deps:[]
        }
      }
      handleSubmit=e=>{
        e.preventDefault();
    
        const data={
          Source:this.Source,
          Destinatiom:this.Destinatiom
        };
        axios.post('https://localhost:44385/api/Registration/Search',data)
        .then(res=>{
          console.log(res)
          if(res.data.Status==="Success"){
           alert("Matching Flight Found ,start booking ticket");
           //this.props.history.push("/Ticket");
          }
          else{
            alert("No Record Found")
          }
          
        })
        .catch(err=>{
          console.log(err);
        })
      }
    render() {
      const{deps}=this.state;
        return (
          <div className="r1666">
                        <div className="madar1">
              <fieldset>
                <form onSubmit={this.handleSubmit}>
                  <center>
                 <h3>Search Flights</h3><br /><br/>
                 <label classsName="r698"
                 >Flight From:</label>&emsp;&emsp;&emsp;<input type="text" placeholder="From city"   onChange={e=>this.Source=e.target.value} className="r15"></input>&emsp;&emsp;&emsp;
                 &emsp;&emsp;
                 <label classsName="r698">Flight To:</label>&emsp;&emsp;&emsp;<input type="text" placeholder="From to" onChange={e=>this.Destinatiom=e.target.value} className="r15" ></input>&emsp;&emsp;&emsp;
                 &emsp;&emsp;<br /><br />
                 <button className="btn btn-danger">Search</button>
                 </center>
                 </form>
                 </fieldset><br />
               

           <div className="footer">
    <p>@copyright@2016 Roshan Airline.All right reserve</p>
  </div>
            </div>
            </div>

        )
    }
}
