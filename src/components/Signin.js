import React, { Component } from 'react'
import Logog from '../images/customer4.png'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Signin.css'
import Footer from './Footer.js'
import Navbar from './Navbar.js'

export default class Signin extends Component{

    constructor(props){
        super(props);
    }

   

	state = {
        email: '',
        password: ''
	}
	
	handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
	}
	handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8181/signin', {
            email: this.state.email,
            password: this.state.password
        }).then((res) => {
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
            <div className="container1" style={{ marginTop: '170px', marginBottom: '70px',width:'40%'}}>
                  <div className="modal-body">
            <div id="vertical-flip" className="card">
                   
	            <div className="flip">
		            <div className="front">
			            <div className="logo" color="red">
						<img src={Logog} alt="Netlflix"/>
			            </div>
		            </div>

		            <div className="back">
			            <form onSubmit={this.handleSubmit}>
                           
				        <div className="box-input">
					       
                         <input type="email" name="email" id="email" placeholder="Enter your Email" value={this.state.email} onChange={this.handleChange} required />
                    <input type="password" name="password" id="password" placeholder="Enter your Password" value={this.state.password} onChange={this.handleChange} required />
					<button className="buttonpress" type="submit">SIGN IN</button>
                    <div>
                    <a href="/resetcredentials??"><h3 ><u><i>Forgotten account ?</i></u></h3></a>
                    <br/>
                    <a href="/doctor/signin"><h3 ><u><i>Access as Doctor</i></u></h3></a>
                  
                    </div>
                    </div>
                   
			</form>
		</div>
        </div>
        </div>
        </div>
            <Footer/>
        </div>
        )
    }
}