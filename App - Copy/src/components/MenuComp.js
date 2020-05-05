import React, {Component} from 'react';
import '../App.css';
import Topnav from './TopnavComp'
import Footer from './FooterComp'
import beverages from './menu/beverages'
import burgers from './menu/burgers'
import sandwiches from './menu/sandwiches'
import milkshakes from './menu/milkshakes'
import cartItems from './cart/CartItems'
import cartPrices from './cart/CartPrices'
import Address from './AddressComp'


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
        this.ifCartEmpty();
    }

    renderItems(item){
        const name = [];
            name.push(
            <li key={item.id} class="column large12 medium12 small12" onClick={() => this.newcartitem(item.price, item.name)}>
                <button class="right primary_blue padmar" onClick={() => this.ifCartEmpty() }>Add to Cart</button>
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

    ifCartEmpty(){
        if(total >= 60){
            document.getElementById("ifCartEmpty").style.display = "block";
        }
        else{
            document.getElementById("ifCartEmpty").style.display = "none";
        }
    }

    openmod(){
        document.getElementById("modwin").style.display="Block";
        document.getElementById("body").style.filter="saturate(250%) blur(25px)";
    }

    closemod(){
        document.getElementById("modwin").style.display="None";
        document.getElementById("body").style.filter="saturate(100%) blur(0px)";
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
            <body>
                <div id="body">
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
                            <div id="ifCartEmpty">
                                <button onClick={() => this.openmod()}>Proceed to Order</button>
                            </div>
                            <br></br><br></br><br></br>
                            <p>You neeed to add cart items worth atleast <strong>Rs. 60</strong> for being applicable to delivery</p>
                        
                        </div>
                    </div>
                    
                    <Footer></Footer>
                </div>
                <div class="modal_container" id="modwin">
                    <div class="modal_content zi3" id="modct1">
                        <div class="dialogue_pane large12">
                            <button class="primary_red right ta_center mod_close_btn" onClick={() => this.closemod()}>X</button>
                        </div>
                        <div class="page_container">
                            <Address />
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}

export default Menu;