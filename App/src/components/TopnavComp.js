import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import '../App.css';

class Topnav extends Component{

    render(){
        return(
            <div class='column large12 pivot_container primary_red sticky-top'>
                <NavLink to="/home" class="pivot_button left">Strawsome Shakes</NavLink>
                <NavLink activeClassName="active" to="/faq" class="pivot_button right">FAQs</NavLink>
                <NavLink activeClassName="active" to="/contact" class="pivot_button right">Contact</NavLink>
                <NavLink activeClassName="active" to="/menu" class="pivot_button right">Menu</NavLink>
                <NavLink activeClassName="active" to="/home" class="pivot_button right">Home</NavLink>
            </div>
        );
    }

}

export default Topnav;