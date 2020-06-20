import React, { Component } from 'react'
import myntra from '../images/myntra.jpg'
import './Offer.css'

var randomToken = require('random-token').create('COUPONONCALLDOCTOR0123456789');
var token = randomToken(8);

var couponcode=token;

export default class Offer extends Component{
    constructor(){
        super()

        this.state={

                whislist:"Add to Whishlist",
                coupontext:"Use the below coupon code"
                               
        }
    }

    checking(){

        if(this.state="Add to Whishlist"){
          
          this.addToWhishlist()
        }
        else{
          this.removeFromWhishlist()
        }
    }
    
    addToWhishlist(){

       

        this.setState({
            
            whislist:"Remove From Whishlist"
            
        })
        this.state="Remove From Whishlist";
    }

removeFromWhishlist(){
    this.setState({
        whislist:"Add to Whishlist"
    })
}




    render(){

        

        return(
            <div>
            <div className="zooming">
                <img className="imgdisplay" src={myntra} alt="Avatar"/>
                <br>
                </br>
                <div className="coupondesc">
               <h5>
               Big discounts on the latest styles and trends for men, women and kids. Rs.500 Off on First Purchase + Free delivery on all orders for 1 month. 30 Days Return. COD available. 3000+ Brands. 7 Lakh + Styles. Types: Shoes, T-Shirts, Dresses, Party Wear, Casual Wear.
               </h5>
               </div>
                </div>
               
            <div className="exbutton">
            <h3><b>{this.state.coupontext}</b></h3><br/>
        <h2><i>{couponcode}</i></h2>
           

        <button className="whishlistbutton" width="40px" onClick={()=>this.checking()}><i>{this.state.whislist}</i></button><br></br>
        <a href="https://www.myntra.com/" target="_blank"><button type="submit" ><i>Go to Website</i></button></a>
      
            </div>
            </div>
           

        )
    }
}
