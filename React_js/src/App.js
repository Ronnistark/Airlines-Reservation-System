import React, { Component } from 'react';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Registration';
import Login from './Login';
import Aboutus from './Aboutus';
import Header from './Header';
import Schedule from './Schedule';
import Ticket from './Ticket';
import Contact from './Contact';
import {Switch,Route} from "react-router-dom";
import Delete from './Delete';
import Customer from './Customer';
import update from './update';
import Journey from './Journey';
import purchase from './purchase';
import AdminView from './AdminView';
import Search from './Search';

export default  class App extends Component{


  render() {
    return (
     
      <div>
        
        <Home/>
      
     <Switch>
       <Route path="/header" component={Header}/>
       <Route path="/registration" component={Registration}/>
       <Route path="/login" component={Login}/>
       <Route path="/aboutus" component={Aboutus}/>
       <Route path="/Schedule" component={Schedule}/>
       <Route path="/Ticket"  component={Ticket}/>
       <Route path="/Contact" component={Contact}/>
       <Route path="/Delete" component={Delete}/>
       <Route path="/Customer" component={Customer}/>
       <Route path="/update" component={update}/>
       <Route path="/Journey" component={Journey}/>
       <Route path="/Purchase" component={purchase}/>
       <Route path="/AdminView" component={AdminView}/>
       <Route path="/Search" component={Search}/>
       
       
       
     </Switch>
        
      </div>
    )
  }
}



