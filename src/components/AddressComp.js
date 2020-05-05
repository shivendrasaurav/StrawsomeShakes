import React, {Component} from 'react';
import '../App.css';
import Searchbox from './SearchboxComp';

class Contact extends Component{
    
    render(){
        return(

            <form class="large8 medium8 small12 center" action="https:/shivendrasaurav.github.io/StrawsomeShakes/status">
                <br></br>
                <h5>Enter your Address</h5><br></br><br></br>
                <input type="text" required /><br></br>
                <label>Name</label><br></br><br></br>
                <input type="text"  required/><br></br>
                <label>Street Address</label><br></br><br></br>
                <input type="text"  required/><br></br>
                <label>Locality</label><br></br><br></br>
                <Searchbox/><br></br>
                <label>Pin Code</label><br></br><br></br><br></br>
                <button type="submit">Place Order</button>
            </form>

        );
    }
}

export default Contact;