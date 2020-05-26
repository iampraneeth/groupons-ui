import React, { Component } from 'react'
import Logog from '../images/logog.png'
import axios from 'axios'

export default class Signin extends Component{


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
                                pathname: "/welcome",
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
                    <h3><b><i>SIGN IN </i></b></h3>
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
					<input type="password" name="password" id="password" placeholder="Enter your password" value={this.state.password} onChange={this.handleChange} required />
					<button type="submit">SIGN IN</button>
                    </div>
			</form>
		</div>
        </div>
        </div>
        )
    }
}