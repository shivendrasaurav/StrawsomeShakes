import React, {Component} from 'react';
import '../App.css';

class Topnav extends Component{

    render(){
        return(
            <div class='column large12 pivot_container primary_red'>
                <a class="pivot_button left">Strawsome Shakes</a>
                <a href="./faq.html" class="pivot_button right">FAQs</a>
                <a href="./cu.html" class="pivot_button right">Contact Us</a>
                <a href="./menu.html" class="pivot_button right">Menu</a>
                <a href="./index.html" class="pivot_button right">Home</a>
            </div>
        );
    }

}

export default Topnav;