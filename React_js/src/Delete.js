import React from 'react';
import axios from 'axios';
import './Delete.css';
export default class Delete extends React.Component {
  state = {
    Ticket_ID: '',
  }

  handleChange = event => {
    this.setState({ Ticket_ID: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://localhost:44385/api/Read/Delete/?id=${this.state.Ticket_ID}`)
      .then((res)=>{
        alert('deleted successful');
      })
    
      
  }

  render() {
    return (
      <div>
        <style type="text/css">
        {`.navbar {display: none}`}
      </style>
          <center>
        <form onSubmit={this.handleSubmit}><br />
            <img src="https://cdn.thinglink.me/api/image/792008968430944257/1024/10/scaletowidth" className="rand" alt=""/>
         <br /> <br /><label>
            Ticket_ID:
            <input type="text" name="Ticket_ID" onChange={this.handleChange}  />
          </label><br /><br />
          <button type="submit">Delete</button><br /><br /><br /><br /><br />
          <div className="footer">
    <p>@copyright@2016 Roshan Airline.All right reserve</p>
  </div>
        </form>
        </center>
      </div>
    )
  }
}