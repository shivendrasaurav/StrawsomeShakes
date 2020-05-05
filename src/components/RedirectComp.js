import {Redirect} from 'react-router-dom'
import React, { Component } from 'react';

class Redr extends Component{
    render(){
        return(
            <Redirect from="/" to="/home" />
        );
    }
}

export default Redr;