import React, { Component } from 'react'
import Logog from '../images/customer4.png'
import axios from 'axios'

export default class Signup extends Component{


	state = {
        username: '',
        number: '',
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
        axios.post('http://localhost:8181/signup', {
			username: this.state.username,
			password: this.state.password,
            number: this.state.number,
            email: this.state.email
            
        })
            .then((res) => {
                console.log(res);
                this.props.history.push({
                    pathname: "/signin",
                    state: { data: res.data }
})
            })
            .catch((err) => {
                console.log(err);
            })
    }


    

    render(){

        return(
           

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
                             <input type="name" name="text" id="username" placeholder="Enter your Full Name" value={this.state.username} onChange={this.handleChange} required />
                             <input type="tel" name="number" id="number" placeholder="Enter your Mobile number" value={this.state.number} onChange={this.handleChange} required/>
					        <input type="email" name="email" id="email" placeholder="Enter your Email" value={this.state.email} onChange={this.handleChange} required />
					        <input type="password" name="password" id="password" placeholder="Set your Password" value={this.state.password} onChange={this.handleChange} required />
                            <input type="password" name="password" placeholder="Confirm your Password" required />
					        <button className="buttonpress" type= "submit">REGISTER</button>
                    </div>
			</form>
		</div>
        </div>
        </div>
        )
    }
}