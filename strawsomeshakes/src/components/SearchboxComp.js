import React, {Component} from 'react';
import '../App.css';

class Searchbox extends Component{
    render(){
        return(
            <span class="column large12 medium12 small12 search_box skeu" tabindex="1234">
                <button><i class="ms-Icon ms-Icon--Search" aria-hidden="true"></i></button>
                <input type="search" placeholder="Find food to eat" class='transparent' />
            </span>
        );
    }
}

export default Searchbox;