import React from 'react'
import logo from '../images/logof.png'
import { Link } from 'react-router-dom'

import Cart from '../images/cart.png'
const Navbar = () => {
   
    return (
        <div className="topnav">
            <a href="/"> <img src={logo} width="200x" height="29px" /></a>
           
            
         
            
            <a href="/"><i>Home</i></a>
            
          
            
           
    

            <a href="/news"><i>News</i></a>
            <a href="/signin"><i>Signin</i></a>
            <a href="/signup"><i>Signup</i></a>
            <a href="/about"><i>About</i></a>
        </div>
    )
}

export default Navbar