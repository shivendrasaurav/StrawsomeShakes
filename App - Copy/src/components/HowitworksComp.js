import React, {Component} from 'react';
import '../App.css';
import gps from './img/gps.gif'
import menu from './img/menu.gif'
import cart from './img/cart.gif'

class HowItWorks extends Component{

    render(){
        return(
            <div class="page_container">
                <br></br><br></br>
                <h3 class='ta_center'>How it Works</h3>
                <p class='ta_center'>Order food in three easy steps</p>
                <br></br>
                <div class='column large4 medium6 small12'>
                    <img class='large8 medium8 small10 circular center zi3' src={gps} alt='GpsGif' />
                    <br></br><p class="ta_center">Check if we deliver in your area</p>
                </div>
                <div class='column large4 medium6 small12'>
                    <img class='large8 medium8 small10 circular center zi3' src={menu} alt='MenuGif' />
                    <br></br><p class="ta_center">Browse menu and add items to cart</p>
                </div>
                <div class='column large4 medium6 small12'>
                    <img class='large8 medium8 small10 circular center zi3' src={cart} alt='CartGif' />
                    <br></br><p class="ta_center">Place order and wait for delivery</p>
                </div>
            </div>
        );
    }

}

export default HowItWorks;