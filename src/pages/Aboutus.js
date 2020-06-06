import React, { Component } from 'react'
import businessstd from  '../images/logof.png'
import techstory from  '../images/logof.png'
import './Aboutus.css'

export default class Aboutus extends Component{

    render(){

        return(
           
            <div className="about-us-container">
                <div className="aboutUs-wrapper">
                    {/* <div class="title">About Us</div> */}
                    <h3 className="textfont">About Us</h3>
                    <div className="about-desc">
                        <p>
                            Founded in 2010, Deals & Coupons is headquartered in Mumbai with
                            a tech office in Bengaluru. Deals & Coupons receives about
<b>
                                 5.2 million monthly visits, lists coupons from 2000+ online
                                brands
</b>
including top stores like Flipkart, Amazon, MakeMyTrip, PayTM
and BookMyShow, has
<b>7.5 million email subscribers</b> and
<b>more than 2 million App downloads</b>. Deals & Coupons has
grown to become India's largest discount and offer destination.
<br />
                        </p>
                        <p>
                            {" "}
At Deals & Coupons, we help you save money through our
comprehensive listing of coupons, offers, deals and discounts
from top online brands and websites. You can also earn reliable
Cashback on top of the merchant discounts every time you shop
through us. You can make better shopping decisions through our
powerful Price Comparison Browser Extension. <br />
                        </p>
                        <p>
                            Deals & Coupons is a trusted brand and a pioneer in affiliate
                            e-commerce scene in India. We are known for maintaining high
                            quality standards through our unique user interface and user
                            experience. We have been sustaining and preserving our USP,
                            which is to provide the most authentic and updated coupons and
                            deals. Today, Deals & Coupons is the top player in the coupons
                            and deals industry. But we aren’t new to media coverage, in fact
                            the biggest news channels and newspapers in the country along
                            with technological blogs have featured us on their platform. The
                            likes of 'CNBC Awaaz' have hailed us as Internet Heroes thus
                            recognizing one of the most successful E-commerce affiliate
                            start-ups from India. Our strategic B2B partnerships with some
                            powerful e-commerce companies and strong network in the IT
                            sector has benefited not only us but also our affiliates.
                            Through our business partnership programs, we help a company
                            increase its revenue, create brand awareness and expand its
                            reach. Our network includes a wide range of merchants and
                            strategic companies and our aim is to cross-promote each other
                            in providing the best deals to the end-consumer. GrabOn receives
                            partnership requests in bulk everyday but we intent to partner
                            with businesses that offer our users just what they want from
                            us. In the end it’s all about helping our users save on
                            everything!
</p>
                    </div>
                   
                </div>
            </div>
    
               
        )
    }
}


