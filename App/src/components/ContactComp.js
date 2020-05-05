import React, {Component} from 'react';
import '../App.css';
import Topnav from './TopnavComp'
import Footer from './FooterComp'
import ifisStatus from './cart/lastrouteComp'
import Timer from './StatusComp'

class Contact extends Component{
    
    checkStatus(){
        console.log({ifisStatus});
        if(ifisStatus[0] === "http://localhost:3000/#/status"){
            return(
                <span>Time remaining for your order to be delivered
                <span class="ta_xl"><Timer /></span>
                </span>
            );
        }
    }

    popupsuccess(){
        var a=document.getElementById("name").value;
        var b=document.getElementById("email").value;
        var c=document.getElementById("number").value;
        var d=document.getElementById("ta").value;
        if(a!=="" && b!=="" && c!=="" && d!==""){
            document.getElementById("message").innerHTML = "Your message has been sent";
            a="";
            b="";
            c="";
            d="";
        }
    }

    render(){
        return(
            <div>
                <Topnav></Topnav>
                
                <div class="page_container">
                    <div class="column large8 medium8 small12">
                        <form>
                            <h3>How can we help you?</h3><br /><br />
                            <input type="text" id="name" required/><br />
                            <label>Name</label><br /><br />
                            <input type="email" id="email" required/><br />
                            <label>Email</label><br /><br />
                            <input type="number" id="number" required/><br />
                            <label>Phone Number</label><br /><br />
                            <textarea class="ta" id="ta" required></textarea><br />
                            <label>Enter your message</label><br /><br /><br />
                            <button type="submit" class="primary_blue small zi2" onClick={() => this.popupsuccess()}>
                                Send Message
                            </button>
                            <br /><br />
                            <p id="message"></p>
                        </form>
                    </div>
                    <div class="primary_green floatright">
                            <span class="ta_center">{this.checkStatus()}</span>
                    </div>
                </div>
                
                <Footer></Footer>
            </div>
        );
    }
}

export default Contact;