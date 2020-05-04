import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import '../App.css';
import Topnav from './TopnavComp'
import Footer from './FooterComp'
import beverages from './menu/beverages'
import burgers from './menu/burgers'
import sandwiches from './menu/sandwiches'
import milkshakes from './menu/milkshakes'
import cartItems from './cart/CartItems'
import cartPrices from './cart/CartPrices'


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
        var d = document.getElementById("cart");
        var c = document.createElement("li");
        c.id = "cartitem";
        c.classList = "rot";
        d.appendChild(c);
    
        document.getElementById("itemname").innerHTML = cartItems[i];
        document.getElementById("itemname").id = "item" + i;
        var a = document.createElement("span");
        a.id = "itemname";
        c.appendChild(a);

        document.getElementById("itemprice").innerHTML = "Rs. " + cartPrices[i];
        document.getElementById("itemprice").id = "itemprice" + i;
        var b = document.createElement("span");
        b.id = "itemprice";
        b.classList = "right"
        c.appendChild(b);

        c.id = "cartitem" + i;

        document.getElementById("total").innerHTML = total;

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
                    <div class="column large6 medium6 small12 right float">
                        <h3>Cart</h3><br /><br />
                        <ul id="cart" class="cart">
                            <li id="cartitem" class="rot">
                                <span id="itemname">Items added to Cart will be displayed here</span>
                                <span id="itemprice" class="right">Item price will be displayed here</span>
                            </li>
                        </ul>
                        <h6 class="center primary_blue padmar">
                            <span>Total (In Rupees) :</span>
                            <span class="right" id="total">0</span>
                        </h6>
                        <br></br>
                        <NavLink to="/status" class="button right">Order Now</NavLink>
                        <br></br><br></br><br></br>
                        <p>We only support <strong>Pay on Delivery</strong> as of now, we will add other payment options soon</p>

                    </div>
                </div>
                
                <Footer></Footer>
            </div>
        );
    }
}

export default Menu;