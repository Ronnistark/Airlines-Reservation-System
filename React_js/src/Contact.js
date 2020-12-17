import React, { Component } from 'react'
import './contact.css';
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: ''
        };
      }
      onCreateEmployee=()=>{
        let empInfo={
              
              Name:this.refs.Name.value,
              Phone_no:this.refs.Phone_no.value,
              
              Email:this.refs.Email.value,
              Message1:this.refs.Message1.value,
            };
            fetch('https://localhost:44385/api/Registration/Create1',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
          body: JSON.stringify(empInfo)
      }).then(r=>r.json()).then(res=>{
        if(res){
          this.setState({message:'Your Response have been Recorded'});
        }
      });
        }
    render() {
        return (
            <div className="r15rr">
            <div className="rosh">
            <p>{this.state.message}</p>
                <h2>Contact us</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.4815785473943!2d77.08941921430755!3d13.320292210736186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02ea2e47be715%3A0xd11867fcac2dd566!2sSri%20Siddhartha%20Institute%20Of%20Technology!5e0!3m2!1sen!2snp!4v1607426207378!5m2!1sen!2snp" 
                className="roshan" ></iframe>
                <h3>Head office:</h3>
                <h5>12, Power house chowck,Birgunj</h5>
                <h6>Shreepur,Parsa</h6>
                <br /><br />
                <h6 className="rohan">Telephone no:9845265072,&nbsp; 9811151874</h6>
                <br />
                <p><a href="mailto:someone@example.com">Send email:someone@example.com</a></p>
            </div>&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;
            &emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <div className="rosh">
            <h2>Send Us a Message</h2>
            <label>Name:</label><br />
            <input type="text" ref="Name" placeholder="Enter your Name"/><br />
            <label>Email:</label><br />
            <input type="text" ref="Email" placeholder="enter your mail"/><br />
            <label>Phone no:</label><br />
            <input type="text" ref="Phone_no" placeholder="phone no"/><br />
            <label>Message for us</label><br />
            <input type="text" ref="Message1" placeholder="enter your message"/><br /><br />
            <button className="btn btn-danger" onClick={this.onCreateEmployee} type="button" >Submit</button>
            
            </div>
            <div className="footer">
    <p>@copyright@2016 Roshan Airline.All right reserve</p>
    </div>
            </div>
        )
    }
}
