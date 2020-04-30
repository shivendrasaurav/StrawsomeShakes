import React, {Component} from 'react';
import '../App.css';
import Topnav from './TopnavComp'
import Footer from './FooterComp'

class FAQ extends Component{
    render(){
        return(
            <div>
                <Topnav></Topnav>
                
                <div class="page_container">
                    <div class="column large6 medium8 small12">
                        <h5>Frequently Asked Questions</h5><br />

                        <p class="ques_box">
                            <div class="ques">Why can't I order at my location?</div>
                            You need to be within the delivery radius of our restaraunt to order food from here. If you are off that radius, we can't deliver food to your location.<br /><br />
                        </p>

                        <p class="ques_box">
                            <div class="ques">What is the normal delivery radius?</div>
                            We currently deliver in <strong>3KM</strong> radius from our shop's location. Our shop is situated in 5th Street, Vespucci, Los Santos.<br /><br />
                        </p>

                        <p class="ques_box">
                            <div class="ques">Is there a minimum order quantity?</div>
                            Yes, your order amount needs to be upwards of <strong>$10.00</strong> to be delivered. We also do bulk orders, but you need to send us a message from Contact page for that.<br /><br />
                        </p>

                        <p class="ques_box">
                            <div class="ques">How much time does it take for an average delivery?</div>
                            Delivery time depends on many factors including type of order, quantity, if streets are free or not. But even including all the worst cases possible, we have an average delivery time of <strong>26 minutes</strong> from preparing your food to delivering it to your doorsteps.<br /><br />
                        </p>

                    </div>
                </div>
                
                <Footer></Footer>
            </div>
        );
    }
}

export default FAQ;