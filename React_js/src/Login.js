import axios from 'axios';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Login.css';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      Status:'',
      msg:'',
      logstatus:'invalid'
    
    
    }
  }
  
  
  handleSubmit=e=>{
    e.preventDefault();

    const data={
      Email:this.Email,
      Password:this.Password
    };
    axios.post('https://localhost:44385/api/Registration/Login',data)
    .then(res=>{
      console.log(res)
      if(res.data.Status==="Success"){
       alert("Login successful");
       this.setState({logstatus:'valid'});
       this.props.history.push("/Ticket");
      }
      else{
        axios.post('https://localhost:44385/api/Registration/admin',data)
        .then(res=>{
          console.log(res)
          if(res.data.Status==="Success"){
            alert("Welcome Admin");
            this.props.history.push("/Journey");
           }
           else{
             alert ("invalid record");
           }
        })
      }
      
    })
    .catch(err=>{
      console.log(err);
    })
  }
  render() {
    return (
      <div className="r99">
        <center>
        <form onSubmit={this.handleSubmit}>
          <img  className=" r77"src="data:image/jpeg;base64,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" alt=""/>
       <fieldset>
        <h2>Login Form</h2>
        <div>
        <label><b>Email</b></label><br />
        <input type="text" className="form-control" onChange={e=>this.Email=e.target.value} className="tty5"/><br />
        <label><b>Password</b></label><br />
        <input type="password" onChange={e=>this.Password=e.target.value} className="tty5"/><br /><br />
       
        <button className="btn btn-success" >Login</button><br />
        
       <input type="checkbox" ></input> <label>Remember me</label>
        
        </div>
      
        <p>Don't have a Account</p><br />
        <Link to="/Registration" className="t55">Create a Account</Link><br/>
        </fieldset>
        <div className="footer">
    <p>@copyright@2016 Roshan Airline.All right reserve</p>
  </div>
        
        </form>
        </center>
      </div>
    )
  }
}
