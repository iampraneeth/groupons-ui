import React from 'react'
import logo from '../images/logof.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Cart from '../images/cart.png'
import { Component } from 'react'
import './Navbar.css';
import MyPayments from './MyPayments'

export class Navbar extends Component{

    constructor(props){
        super()

        this.state={

                whishlist:"Whishlist",
                myaccount:"My Account",
                               
        }
    }

    handleSubmit = () => {
        axios.get('http://localhost:8187/paymentlist', {
           
        }).then((res) => {
            console.log(res);
                            this.props.history.push({
                
                                pathname: "/my/payments",
                                state: { data: res.data },
            })
            })
            .catch((err) => {
                console.log(err);
            })
    }




    

    render(){
        return (
            <div className="topnav">
                <a href="/home"> <img src={logo} width="220x" height="32px" /></a>
            <a></a>
                <form className="example" action="/working" >
                    <input type="search" placeholder="Search.." name="search"/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
                <a href="/home"><i>Home</i></a>
                <a href="/news"><i>News</i></a>
                <a href="/signin"><i>Signin</i></a>
                <a href="/signup"><i>Signup</i></a>
                <a href="/my/whishlist"><i>{this.state.whishlist}</i></a>
                <a href="/categories"><i>Categories</i></a>

                <a href="/aboutus"><i>About</i></a>
                <div className="dropdown">
                <button className="dropbtn">{this.state.myaccount}
                        <br></br>
                       {/* <i class="fa fa-caret-down"></i>*/}
                    </button>
                <div className="dropdown-content">
                    <a href="/coupons">Coupons</a>
                    <a href="/list/doctors">Make Appointment</a>
                    <a href="/my/payments">My Payments</a>

                    <a href="/home">Logout</a>
                </div>
  </div> 

    
            </div>
        )
    }

}
   
   


export default Navbar