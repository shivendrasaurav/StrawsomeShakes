import React, {Component} from 'react';
import '../App.css';

class Searchbox extends Component{

    deliver(){
        if(document.getElementById("search").value === "800014"){
            document.getElementById("status").innerHTML = "<p>We deliver in your area</p>";
        }
        else{
            document.getElementById("status").innerHTML = "<p>We don't deliver in your area yet</p>";
        }
    }

    render(){
        return(
        <div>
            <span class="column large12 medium12 small12 search_box skeu" tabindex="1234">
                <button><i class="ms-Icon ms-Icon--Search" aria-hidden="true"></i></button>
                <input id="search" type="text" placeholder="Enter your pincode to check if we deliver in your area" class='transparent' onKeyUp={() => this.deliver()} />
            </span>
            <span id="status"></span>
        </div>
        );
    }
}

export default Searchbox;