import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import '../App.css';
import Topnav from './TopnavComp'
import Footer from './FooterComp'
import beverages from './menu/beverages'
import burgers from './menu/burgers'
import sandwiches from './menu/sandwiches'
import milkshakes from './menu/milkshakes'
import cartItems from './cart/CartItems.js'
import cartPrices from './cart/CartItems.js'
var total = 0;
var i=0;

class Menu extends Component{

    constructor(props){
        super(props);

        this.newval = 0;
    }

    newcartitem(price, item){
        total = parseInt(price) + total;
        cartItems.push(item);
        cartPrices.push(price);
        console.log(total);
        console.log(cartItems);
        console.log(cartPrices);
//        document.getElementById("cartitems").innerHTML = {cartPrices: 0};
        this.renderCart();
    }

    renderItems(item){
        const name = [];
            name.push(
            <li key={item.id} class="column large12 medium12 small12" onClick={() => this.newcartitem(item.price, item.name)}>
                <button class="right primary_blue padmar">Add to Cart</button>
                <span class="right">{item.price}</span>
                <span>{item.name}</span>
            </li>            
            );
        return(
            <div>{name}</div>
        );
    }

    renderCart(){
        document.getElementById("cartitem").innerHTML = cartItems[i];
        document.getElementById("cartitem").id = "cartitem" + i;
        var a = document.createElement("li");
        a.id = "cartitem";
        document.getElementById("cart").appendChild(a);
        i++;
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

        const cartItemsRender = cartItems;


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
                            <ul id="cart">
                                <li id="cartitem"></li>
                            </ul>
                    </div>
                </div>
                
                <Footer></Footer>
            </div>
        );
    }
}

export default Menu;