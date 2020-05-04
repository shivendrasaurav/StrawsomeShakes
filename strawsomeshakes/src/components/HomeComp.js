import React, {Component} from 'react';
import '../App.css';
import Topnav from './TopnavComp'
import Header from './HeaderComp'
import HowItWorks from './HowitworksComp'
import Footer from './FooterComp'
import Timer from './StatusComp'


class Home extends Component{

    checkStatus(){
        if(document.referrer == "http://localhost:3000/"){
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
                <HowItWorks />
                <div class="primary_green floatright">
                    <span class="ta_center">{this.checkStatus()}</span>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;