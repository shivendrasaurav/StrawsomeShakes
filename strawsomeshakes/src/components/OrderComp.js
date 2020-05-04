import React, {Component} from 'react';
import '../App.css';
import Topnav from './TopnavComp'
import Footer from './FooterComp'
import cartItems from './cart/CartItems'
import Timer from './StatusComp'
import { NavLink } from 'react-router-dom';

class Order extends Component{

    render(){
        return(
            <body>
                <Topnav />

                <div class="page_container">
                    <div class="coulumn large6 medium8 small12 center">

                        <h4 class="ta_center">Thank You</h4>
                        <p class="ta_center">Your Order Has Been Placed, Time Remaining Till Delivery</p>
                        <br></br>
                        <div class="primary_blue center circular timer">
                            <h1><Timer /></h1>
                            <p>Minutes : Seconds</p>
                        </div>


                    </div>
                    <NavLink to="/home" class="button right">Goto Home</NavLink>

                </div>

                <Footer />            
            </body>
        );
    }

}

export default Order;