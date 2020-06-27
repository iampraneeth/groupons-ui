import React, { Component } from "react";
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
import Footer from './Footer.js'

class Coupons extends Component {
    render() {
        return (
            <div>

            <div class="row">
            <div class="column">
            <div class="zoom"> <a href="/going"><img className="imgsize" src={udemy} alt="Avatar"/></a> <h3><i> Hurry up !!!! 30 % off on all cources</i></h3> <h5></h5> </div>            </div>
            <div class="column">
            <div class="zoom"> <a href="/going"><img className="imgsize" src={pizza} alt="Avatar"/></a> <h3><i> Avail the coupon by booking on dominos app</i></h3> <h5>Pay using Amazon Pay and get 150 ₹ Cashback</h5> </div>            </div>
            <div class="column">
            <div class="zoom"> <a href="/offer"><img className="imgsize" src={myntra} alt="Avatar"/></a> <h3><i>Flat 20% off on all Men's wear</i></h3> </div>            </div>
           
            </div>

            <div class="row">
            <div class="column">
            <div class="zoom"> <a href="/going"><img className="imgsize" src={pvr} alt="Avatar"/></a> <h3><i>Flat 100 ₹ Cashback on Movie tickets</i></h3> <h5> Use Coupon to watch movie with unlimited snacks</h5></div>            </div>
            <div class="column">
            <div class="zoom"> <a href="/going"><img className="imgsize" src={nike} alt="Avatar"/></a> <h3><i>!5 % off on all sport wear</i></h3><h5>Grab the coupon here</h5> </div>            </div>
            <div class="column">
            <div class="zoom"> <a href="/going"><img className="imgsize" src={pb} alt="Avatar"/></a> <h3><i>Free home delivery on Purchase of Pottery Barn Furniture</i></h3> </div>            </div>
           
          </div>


            <div class="row">
            <div class="column">
            <div class="zoom"> <a href="/going"><img className="imgsize" src={mmt} alt="Avatar"/></a> <h3><i> Flat 1000 ₹ off on Flight bookings</i></h3> <h5>Book By 20 th August</h5></div>            </div>
            <div class="column">
            <div class="zoom"> <a href="/going"><img className="imgsize" src={flipcart} alt="Avatar"/></a> <h3><i>John Doe</i></h3> </div>            </div>
            <div class="column">
            <div class="zoom"> <a href="/going"><img className="imgsize" src={amazon} alt="Avatar"/></a> <h3><i>John Doe</i></h3> </div>            </div>
            
          </div>

          <div class="row">
            <div class="column">
            <div class="zoom"> <a href="/going"><img className="imgsize" src={pvr} alt="Avatar"/></a> <h3><i>Flat 100 ₹ Cashback on Movie tickets</i></h3> <h5> Use Coupon to watch movie with unlimited snacks</h5></div>            </div>
            <div class="column">
            <div class="zoom"> <a href="/going"><img className="imgsize" src={nike} alt="Avatar"/></a> <h3><i>!5 % off on all sport wear</i></h3><h5>Grab the coupon here</h5> </div>            </div>
            <div class="column">
            <div class="zoom"> <a href="/going"><img className="imgsize" src={pb} alt="Avatar"/></a> <h3><i>Free home delivery on Purchase of Pottery Barn Furniture</i></h3> </div>            </div>
           
          </div>
          
         


          <Footer/>

          </div>
          
            
        );
    }
}

export default Coupons;