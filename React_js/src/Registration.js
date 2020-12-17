import {React,Component} from 'react';
import './Registration.css';
import axios from 'axios';
import {Table,Modal,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FlagIcon from '@material-ui/icons/Flag';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LockIcon from '@material-ui/icons/Lock';

// import {Table} from 'react-bootstrap';
export default class Registration extends Component {
  constructor(props) {
      super(props);
      this.state = {
        message: '',
        deps:[],
        Status:'',
       errors:{
          First_Name:'',
          Last_Name:'',
          DOB:'',
          Country:'',
          Nationality:'',
          Email:'',
          Alternate_Email:'',
          Phone_no:'',
          Password:'',
           showid:'true'
       },
        
        
        

      };
    }

   changeHandler=(event)=>{
     let name=event.target.name;
     let value=event.target.value;
     let errors=this.state.errors;

     switch (name) {
       case 'First_Name':
         errors.First_Name=value.length<5?"First_Name must ne 5 character length":"";
         break;
         case 'Last_Name':
         errors.Last_Name=value.length<5?"Last_Name must ne 5 character length":"";
         break;
         case 'DOB':
          errors.DOB=value.length<5?"username must ne 5 character length":"";
          break;
          case 'Country':
            errors.Country=value.length<5?"Country is not valid":"";
            break;
            case 'Nationality':
              errors.Nationality=value.length<5?"Nationality is not valid":"";
              break;
              case 'Email':
                errors.Email=value.length<5?"username must ne 5 character length":"";
                let apos=value.indexOf('@');
                let dotpos=value.lastIndexOf('.');
                if(apos<1||dotpos-apos<2){
                  errors.Email="please enter valid email id";
                }
                break;
                case 'Alternate_Email':
                  errors.Alternate_Email=value.length<5?"Email must ne 5 character length":"";
                  let apos1=value.indexOf('@');
                let dotpos1=value.lastIndexOf('.');
                if(apos1<1||dotpos1-apos1<2){
                  errors.Alternate_Email="please enter valid email id";
                }
                  break;
                  case 'Phone_no':
                    errors.Phone_no=value.length===10?"Invalid phone no":"";
                  
                    break;
                    case 'Password':
                      errors.Password=value.length<5?"password must ne 5 character length":"";
                      break;
       default:
         break;
     }
     this.setState({errors,[name]:value})
   };
  
  
    componentWillMount(){
     
      this.render5();
    }
    
    submitHandler(){
      if(
            this.state.errors.First_Name===0 && this.state.errors.Last_Name===0 && this.state.errors.DOB===0 &&
            this.state.errors.Country===0 && this.state.errors.Nationality===0 && this.state.errors.Email===0 &&
            this.state.errors.Alternate_Email===0 && this.state.errors.Phone_no==0 && this.state.errors.Password===0 
      ){
        
      }
      else{
        alert("form is invalid");
      }
    
  }
  
    render5(){
     

        
    
       fetch('https://localhost:44385/api/Read/Get5?Email=roshan111@gmail.com')
       .then(response=>response.json())
       .then(data=>{
        this.setState({deps:data});
        // this.setState({
        //   showid:!this.setState.showid
        // })
       }
        );
      }
      // r15(){
      // this.props.history.push("/login");
      // }
 
      
    
    
    onCreateEmployee=()=>{
     
        
    
      const data={
        Email:this.refs.Email.value
      };
      axios.post('https://localhost:44385/api/Registration/Already',data)
      .then(res=>{
        console.log(res)
        if(res.data==="Unsuccessful"){
         alert("Email id Already exist in our Database");
        }
       
        else{

      let empInfo={
            
            First_Name:this.refs.First_Name.value,
            Last_Name:this.refs.Last_Name.value,
            DOB:this.refs.DOB.value,
            Country:this.refs.Country.value,
            Nationality:this.refs.Nationality.value,
            Email:this.refs.Email.value,
            Alternate_Email:this.refs.Alternate_Email.value,
            Phone_no:this.refs.Phone_no.value,
            Password:this.refs.Password.value,
           
          
      
          };
  
          
         
          fetch('https://localhost:44385/api/Registration/Create',{
      method: 'POST',
      headers:{'Content-type':'application/json'},
        body: JSON.stringify(empInfo)
    }).then(r=>r.json()).then(res=>{
      if(res){
        this.setState({message:'New User is Created Successfully'});
         this.setState({
          showid:!this.setState.showid
         })
        //this.props.history.push("/login");
      }
    });
          }
        
        
      
    });
  }
    
  
     componentDidUpdate(){
      this.render5();
      
     }
    
   
    
    render(){
      const{deps}=this.state;
      const {errors}=this.state;
     
      
      return(
        <div className="r4">
          
          <p>{this.state.message}</p>
          
          
          <center>
          <h2>Air Membership Registration</h2>
          <p>{errors.First_Name}</p>&emsp;<p>{errors.Country}</p>&emsp;
          <p>{errors.Last_Name}</p>&emsp;<p>{errors.Email}</p>&emsp;
          <p>{errors.Nationality}</p>&emsp;<p>{errors.Password}</p>
          <p>{errors.Alternate_Email}</p>
          </center>
          {
            this.state.showid?
          
          <Modal show={this.state.showid}>
  <Modal.Header closeButton>
    <Modal.Title>Roshan Airlines</Modal.Title>
  </Modal.Header>

  <Modal.Body>
          <Table className="mt-4" striped bordered hover size="sm" >
      
          

               
                      <p>Customer ID  Should be Noted Down </p><br/>
                    
                        
                
                
  
                    <tbody>
                        {deps.map(dep=>
                        <tr>
                          
                        <td>{dep.CID}</td>
                        
                        </tr>
                            )}
                    </tbody>
                </Table>
                </Modal.Body>
<Modal.Footer>
  <Link to="/Login"><Button variant="secondary">Close</Button></Link>
  
</Modal.Footer>
</Modal>
:null
}
          
          <form>          
            <p>
           &emsp;
            <label>First_Name :<br />
            <AccountCircleIcon />< input type="text" ref="First_Name" name="First_Name" placeholder="First_Name" onChange={this.changeHandler} required></input></label>
            
            &emsp;&emsp;&emsp;&emsp;
          
            <AccountCircleIcon /><label>Last_Name :<br /> <input type="text" ref="Last_Name" placeholder="Last_name" name="Last_Name" onChange={this.changeHandler} required></input></label>
            
            
            &emsp;&emsp;&emsp;&emsp;
            <CalendarTodayIcon/> <label>DOB : <br /><input type="text" ref="DOB" name="DOB" placeholder="DOB"onChange={this.changeHandler} required placeholder="dd-mm-yyyy"></input></label>
            
   </p>
          <p>
          &emsp;
          <FlagIcon/>   <label>Country :<br /> <input type="text" name="Country"  placeholder="Country"onChange={this.changeHandler} ref="Country" required></input></label>
            
            &emsp;&emsp;&emsp;&emsp;
            <FlagIcon/>  <label>Nationality :<br /> <input type="text" placeholder="Nationality" name="Nationality"ref="Nationality" onChange={this.changeHandler}required></input></label>
            
            &emsp;&emsp;&emsp;&emsp;
            <EmailIcon/> <label>Email :<br /> <input type="email" ref="Email" placeholder="Email" name="Email"onChange={this.changeHandler} required></input></label>
            
          </p>
          <p>
          &emsp;&emsp;
          <EmailIcon/>  <label>Alternate_Email : <br /><input type="text"onChange={this.changeHandler} placeholder="Alternate_Email" name="Alternate_Email" ref="Alternate_Email" required></input></label>
            
            &emsp; &emsp; &emsp; 
            <PhoneAndroidIcon/> <label>Phone_no :<br /> <input type="text" ref="Phone_no"onChange={this.changeHandler} placeholder="Phone_no"name="Phone_no" required></input></label>
           
            &emsp;&emsp;&emsp;&emsp;
            < LockIcon/>  <label>Password :<br /> <input type="password" ref="Password"onChange={this.changeHandler}placeholder="Passowrd" name="Password" required></input></label>
            
          </p>
          <br />
          <p>
          <center>
          <button  onClick={()=>{this.onCreateEmployee();}} type="button" class="btn btn-primary">Submit</button>
          &emsp;
          <input class="btn btn-primary" type="reset"  value="Reset"></input><br />
          
     
          <p>Registered Member <br />Click <Link to="/Login">Here</Link> to Login</p>
                </center>
                </p>
               
                </form>
                
                <div className="footer">
    <p>@copyright@2016 Roshan Airline.All right reserve</p>
  </div>
                </div>
                
                
      )
    }
  }