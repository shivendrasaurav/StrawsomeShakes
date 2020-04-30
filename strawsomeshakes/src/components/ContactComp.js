import React, {Component} from 'react';
import '../App.css';
import Topnav from './TopnavComp'
import Footer from './FooterComp'

class Contact extends Component{
    render(){
        return(
            <div>
                <Topnav></Topnav>
                
                <div class="page_container">
                    <div class="column large8 medium8 small12">
                        <form>
                            <h3>How can we help you?</h3><br /><br />
                            <input type="text" /><br />
                            <label>Name</label><br /><br />
                            <input type="email" /><br />
                            <label>Email</label><br /><br />
                            <input type="number" /><br />
                            <label>Phone Number</label><br /><br />
                            <textarea class="ta"></textarea><br />
                            <label>Enter your message</label><br /><br /><br />
                            <button type="submit" class="primary_blue small zi2">
                                Send Message
                            </button>
                            <br /><br />
                        </form>
                    </div>
                </div>
                
                <Footer></Footer>
            </div>
        );
    }
}

export default Contact;