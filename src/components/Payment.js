import React, { Component } from "react";
import './Payment.css'
import axios from 'axios'

export default class Payment extends Component{



  state = {
    email: '',
    address: '',
    city:'',
    state:'',
    zip:'',
    cardHolderName:'',
    cardNumber:'',
    expMonth:'',
    expYear:'',
    cvv:''
}

handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
}
handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8181/payment', 
    {
      address: this.state.address,
      city:this.state.city,
      state:this.state.state,
      zip:this.state.zip,
       cardDetails: {
        cardHolderName:this.state.cardHolderName,
        cardName:this.state.cardName,
        expMonth:this.state.expMonth,
        expYear:this.state.expYear,
        cvv:this.state.cvv
        }
       

    }).then((res) => {
     

      alert("Transaction succesfully completed")
        console.log(res);
                        this.props.history.push({
  
                            pathname: "/coupons",
                            state: { data: res.data },
        })
        })
        .catch((err) => {
            console.log(err);
        })
}


    render(){




        return(
            <div>
                 <h2><i>Payments</i></h2>
                 <form onSubmit={this.handleSubmit}>

            <div className="paymentContainer">
            <div className="rowp">
            <div className="col-75">
              <div className="containerp">
                  <div className="row">
                    <div className="col-50">
                     <br/>
                      <input type="email" className="inputpayment" id="email" name="email" placeholder="Enter Your Email Address"  value={this.state.email} onChange={this.handleChange} />
                      <input type="text" className="inputpayment" id="address" name="address" placeholder="Enter Your Full Address"  value={this.state.address} onChange={this.handleChange} required/>
                      <input type="text" className="inputpayment" id="city" name="city" placeholder="Enter Your City name"  value={this.state.city} onChange={this.handleChange} required/>
                      <input type="text" className="inputpayment" id="state" name="state" placeholder="Enter your State name"  value={this.state.state} onChange={this.handleChange} required/>
                      <input type="number" className="inputpayment" id="zip" name="zip" placeholder="Enter your Zip code"  value={this.state.zip} onChange={this.handleChange} required/>
                      </div>
                      </div>

                      <div className="rowp">
                        
                        <div className="col-50">
                          <input type="name" className="cardpayment" id="cardHolderName" name="cname" placeholder=" Name on Card"  value={this.state.cardHolderName} onChange={this.handleChange} required/>
                          <input type="number" className="cardpayment" id="cardName" name="cnumber" placeholder="Card Number"  value={this.state.cardName} onChange={this.handleChange} required/>
                          <input type="number" className="cardpayment" id="expiryDate" name="expmonth" placeholder="Expiration month "  value={this.state.expiryDate} onChange={this.handleChange} required/>
                          <input type="number" className="cardpayment" id="expyear" name="expyear" placeholder=" Expiration year"  value={this.state.expyear} onChange={this.handleChange} required />
                          <input type="number" className="cardpayment" id="cvv" name="cvv" placeholder="Enter cvv"  value={this.state.cvv} onChange={this.handleChange} required/>

                        </div>

       
                    
                  </div>
                  <br></br>
                  <br></br>

                  <button  className="buttonpress" type="submit">Make Appointment</button>

                 
                  <br/>
              </div>
            </div>
            <div className="col-25">
                      
            </div>
          </div>

          </div>
          </form>
          </div>
           
        )
    }
}