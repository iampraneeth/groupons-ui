import React, { Component } from 'react'
import Footer from '../components/Footer.js'
import Logog from '../images/doctorbg3.jpg'


export default class Home extends Component{

    render(){

        return(
           
                <div>
                    <h2><i>
                       Welcome to On-Call-Doctor
                       </i></h2>
                    <br/>
                   

                <img src={Logog} width="1400px" height="450px"/>

                  


                </div>
        )
    }
}