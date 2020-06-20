import React, { Component } from 'react'
import './Coupons.css';
import udemy from '../images/udemy.jpg';
import flipcart from '../images/flipkart.jpg';
import amazon from '../images/amazon.jpg';
import pizza from '../images/pizza1.jpg';
import mmt from '../images/mmt.jpg'
import myntra from '../images/myntra.jpg'
import pvr from '../images/pvr.jpg'
import nike from '../images/nike.jpg'
import pb from '../images/pb.jpg'

export default class DoctorList extends Component{


    render(){

        const doctorList=[]

        return(


            <div>
                    <div class="row">
            <div class="column">
            <div class="zoomdoctor"> <a href="/appointment/confirm">Doctor Name : Ram Praneeth <h3><i> Hurry up !!!! 30 % off on all cources</i></h3> <h5></h5></a> </div>            </div>
            <div class="column">
            <div class="zoom"> <a href="/going"><img className="imgsize" src={pizza} alt="Avatar"/></a> <h3><i> Avail the coupon by booking on dominos app</i></h3> <h5>Pay using Amazon Pay and get 150 ₹ Cashback</h5> </div>            </div>
            <div class="column">
            <div class="zoom"> <a href="/offer"><img className="imgsize" src={myntra} alt="Avatar"/></a> <h3><i>Flat 20% off on all Men's wear</i></h3> </div>            </div>
           
            </div>

           
            
            </div>

        )
    }

}