import React, { Component } from 'react'
import myntra from '../images/myntra.jpg'
import './Offer.css'
import axios from 'axios';

var randomToken = require('random-token').create('COUPONONCALLDOCTOR0123456789');
var token = randomToken(8);

var couponcode=token;

export default class Offer extends Component{

 state={

        whishlist:"Add to whishlist",
        coupontext:"Use the below coupon code",
        couponName:"Myntra",
        couponid:couponcode,
        couponDescription:"Big discounts on the latest styles and trends for men, women and kids. Rs.500 Off on First Purchase + Free delivery on all orders for 1 month. 30 Days Return. COD available. 3000+ Brands. 7 Lakh + Styles. Types: Shoes, T-Shirts, Dresses, Party Wear, Casual Wear",
        couponRate:"1$"
                       
}

    



handleSubmit=(e)=>{

this.setState({
    whishlist:"Added to Whishlist"
})
alert("Your Coupon  has been added to whishlist"+this.state.couponid)

    axios.post('http://localhost:8181/addwhishlist', 
    
    {
   
        couponId: this.state.couponid,
        couponName: this.state.couponName,
        couponDescription: this.state.couponDescription,
        couponRate: this.state.couponRate
    
        
    })
        .then((res) => {
            console.log(res);
            alert(res)
                this.props.history.push({
                    pathname: "/signin",

})
        })
        .catch((err) => {
            alert("catch")
            console.log(err);
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
             {this.state.couponDescription}
               </h5>
               </div>
                </div>
               
            <div className="exbutton">
            <h3><b>{this.state.coupontext}</b></h3><br/>
        <h2><b>{couponcode}</b></h2>
           
        <form onSubmit={this.handleSubmit}>
        <button  className="buttonpress" width="40px" ><i>{this.state.whishlist}</i></button><br></br>
        </form>
        <a href="https://www.myntra.com/" target="_blank"><button  className="buttonpress" type="submit" ><i>Go to Website</i></button></a>
            



            </div>
            </div>
           

        )
    }
}
