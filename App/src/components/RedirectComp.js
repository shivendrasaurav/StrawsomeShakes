import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class REDr extends Component{
    render(){
        return(
            <Redirect to="/home" />
        );
    }
}

export default REDr;