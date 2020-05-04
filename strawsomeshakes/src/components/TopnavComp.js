import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import '../App.css';

class Topnav extends Component{

    render(){
        return(
            <div class='column large12 pivot_container primary_red sticky-top'>
                <NavLink to="/" class="pivot_button left">Strawsome Shakes</NavLink>
                <NavLink to="/faq" class="pivot_button right">FAQs</NavLink>
                <NavLink to="/contact" class="pivot_button right">Contact</NavLink>
                <NavLink to="/menu" class="pivot_button right">Menu</NavLink>
                <NavLink to="/home" class="pivot_button right">Home</NavLink>
            </div>
        );
    }

}

export default Topnav;