import React from 'react'
import logo from '../images/logof.png'
import { Link } from 'react-router-dom'

import Cart from '../images/cart.png'
import { Component } from 'react'
import './Navbar.css';


export class Navbar extends Component{
    render(){
        return (
            <div className="topnav">
                <a href="/"> <img src={logo} width="220x" height="32px" /></a>
              
                <input type="text" name="search" placeholder="Search..."/>
                <a href="/"><i>Home</i></a>
                <a href="/news"><i>News</i></a>
                <a href="/signin"><i>Signin</i></a>
                <a href="/signup"><i>Signup</i></a>
                <a href="/aboutus"><i>About</i></a>
                <a href="/categories"><i>Categories</i></a>
    
            </div>
        )
    }

}
   
   


export default Navbar