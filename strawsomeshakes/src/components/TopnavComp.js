import React, {Component} from 'react';
import '../App.css';

class Topnav extends Component{

    render(){
        return(
            <div class='column large12 pivot_container primary_red sticky-top'>
                <a class="pivot_button left">Strawsome Shakes</a>
                <a href="./faq" class="pivot_button right">FAQs</a>
                <a href="./cu" class="pivot_button right">Contact Us</a>
                <a href="./menu" class="pivot_button right">Menu</a>
                <a href="./index" class="pivot_button right">Home</a>
            </div>
        );
    }

}

export default Topnav;