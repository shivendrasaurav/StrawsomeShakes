import React, {Component} from 'react';
import '../App.css';
import Topnav from './TopnavComp'
import Footer from './FooterComp'
import ifisStatus from './cart/lastrouteComp'

class Contact extends Component{
    
    render(){
        return(

            <form class="large8 medium8 small12 center">
                <br></br>
                <h5>Enter your Address</h5><br></br><br></br>
                <input type="text" /><br></br>
                <label>Name</label><br></br><br></br>
            </form>

        );
    }
}

export default Contact;