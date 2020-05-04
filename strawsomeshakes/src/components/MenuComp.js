import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import '../App.css';
import Topnav from './TopnavComp'
import Footer from './FooterComp'
import beverages from './menu/beverages'
import burgers from './menu/burgers'
import sandwiches from './menu/sandwiches'
import milkshakes from './menu/milkshakes'

class Menu extends Component{

    constructor(props){
        super(props);

        this.total = Number(0);

    }

    newcartitem = (price) => {
        this.total = Number(price) + Number(this.total);
    }

    renderItems(item){
        const name = [];
            name.push(
            <li key={item.id} class="column large12 medium12 small12" onClick={()=>this.newcartitem(item.price)}>
                <button class="right primary_blue padmar">Add to Cart</button>
                <span class="right">{item.price}</span>
                <span>{item.name}</span>
            </li>            
            );
        return(
            <div>{name}</div>
        );
    }

    addtocart(item){
        if(item!=null){
            return(
                <li>              
                    <span class="right">{"Rs. " + item.price}</span>
                    <span>{item.name}</span>
                </li>   
            );
        }
        else{
            return(
                <h1>Cart is Empty</h1>
            );
        }
    }

    render(){

        const sand = sandwiches.map((sandwiches) => {
            return(
                <ul>
                    {this.renderItems(sandwiches)}
                </ul>
            );
        });
        
        const burg = burgers.map((burgers) => {
            return(
                <ul>
                    {this.renderItems(burgers)}
                </ul>
            );
        });
        
        const milk = milkshakes.map((milkshakes) => {
            return(
                <ul>
                    {this.renderItems(milkshakes)}
                </ul>
            );
        });

        const bev = beverages.map((beverages) => {
            return(
                <ul>
                    {this.renderItems(beverages)}
                </ul>
            );
        });

        return(
            <div>
                <Topnav></Topnav>
                
                <div class="page_container">
                    <div class="column large6 medium6 small12">
                        <h3>Menu</h3><br /><br />
                        <h6>Sandwiches</h6>
                            {sand}

                        <h6>Burgers</h6>
                            {burg}

                        <h6>Milk Shakes</h6>
                            {milk}

                        <h6>Beverages</h6>
                            {bev}

                    </div>
                    <div class="column large6 medium6 small12 right">
                        <h3>Cart</h3><br /><br />
                            <ul>{this.total}</ul>                      
                    </div>
                </div>
                
                <Footer></Footer>
            </div>
        );
    }
}

export default Menu;