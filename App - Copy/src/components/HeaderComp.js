import React, {Component} from 'react';
import '../App.css';
import '../Icons/css/fluent-icons.css'
import Searchbox from './SearchboxComp'

class Header extends Component{

    rendertime(){
        var status="Open Now";
        var hours = new Date().getHours();
        if(hours>=10 && hours<=20)
            status = <button class='large primary_green right zi2'>Open Now</button>;
        else
            status = <button class='large primary_red right zi2'>Sorry, We're Closed</button>;
        return status;
    }

    render(){
        return(
            <div class='page_container'>
                <div class="column large6 medium4 small12 right">
                    {this.rendertime()}
                </div>
                <div class='column large6 medium8 small12'>
                    <h4>Order Food Online</h4>
                    <p>Find best Snacks and Shakes near you</p>
                    <Searchbox />
                </div>
            </div>
        );
    }
}

export default Header;