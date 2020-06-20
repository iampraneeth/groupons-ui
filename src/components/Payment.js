import React, { Component } from "react";
import './Payment.css'

export default class Payment extends Component{


    render(){

        return(
            <div>
                 <h2><i>Payments</i></h2>
           
            <div className="paymentContainer">
            <div class="rowp">
            <div class="col-75">
              <div class="containerp">
                
                  <div class="row">
                    <div class="col-50">
                     <br/>
                      <input type="text" id="email" name="email" placeholder="Enter Your Email Address"/>
                      <input type="text" id="adr" name="address" placeholder="Enter Your Full Address"/>
                      <input type="text" id="city" name="city" placeholder="Enter Your City name"/>
                      <input type="text" id="state" name="state" placeholder="Enter your State name"/>
                      <input type="number2" id="zip" name="zip" placeholder="Enter your Zip code"/>
                      </div>
                      </div>

                      <div class="rowp">
                        
                        <div class="col-50">
                          <input type="text1" id="cname" name="cname" placeholder=" Name on Card"/>
                          <input type="number1" id="cnumber" name="cnumber" placeholder="Card Number"/>
                          <input type="text1" id="expmonth" name="expmonth" placeholder="Expiration month "/>
                          <input type="number1" id="expyear" name="expyear" placeholder=" Expiration year"/>

                          <input type="number1" id="cvv" name="cvv" placeholder="Enter Name on Card"/>

                        </div>


                    
                  </div>
                  <br></br>
                  <br></br>

                  <button type="submit">Place order</button>

                 
                  <br/>
              </div>
            </div>
            <div class="col-25">
                      
            </div>
          </div>

          </div>
          </div>
           
        )
    }
}