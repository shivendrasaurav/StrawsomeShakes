import React, {Component} from 'react';
import '../App.css';
import Topnav from './TopnavComp'
import Header from './HeaderComp'
import HowItWorks from './HowitworksComp'
import Footer from './FooterComp'
import Timer from './StatusComp'
import ifisStatus from './cart/lastrouteComp';


class Home extends Component{

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
  
  
    render(){
        return(
            <div>
                <Topnav />
                <Header />        
        
                <div class="primary_green floatright">
                    <span class="ta_center">{this.checkStatus()}</span>
                </div>

                <HowItWorks />
                <Footer />
            </div>
        );
    }
}

export default Home;