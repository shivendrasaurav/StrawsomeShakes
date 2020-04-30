import React, {Component} from 'react';
import '../App.css';
import Topnav from './TopnavComp'
import Header from './HeaderComp'
import HowItWorks from './HowitworksComp'
import Footer from './FooterComp'

class Home extends Component{
    render(){
        return(
            <div>
                <Topnav />
                <Header />
                <HowItWorks />
                <Footer />
            </div>
        );
    }
}

export default Home;