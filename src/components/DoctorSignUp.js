import React, { Component } from 'react'
import Logog from '../images/doctor1.png'
import axios from 'axios'

export default class DoctorSignUp extends Component{


	state = {
        email: '',
        password: '',
        doctorname: '',
        doctorQualification: '',
        doctorPrice: '',
        availability: '',
        address: '',
        number: '',
		
	}
	
	handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
	}
	handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8187/signup/doctor', {
           
            email: this.state.email,
            password: this.state.password,
            doctorname: this.state.doctorname,
            doctorQualification:this.state.doctorQualification,
            doctorPrice:this.state.doctorPrice,
            availability:this.state.availability,
            address:this.state.address,
            number: this.state.number,
            
            
        })
            .then((res) => {
                console.log(res);
                this.props.history.push({
                    pathname: "/doctor/signin",
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
                             <input type="email" name="email" id="email" placeholder="Enter your Email" value={this.state.email} onChange={this.handleChange} required />
                             <input type="password" name="password" id="password" placeholder="Set your Password" value={this.state.password} onChange={this.handleChange} required />
                             <input type="name" name="text" id="doctorname" placeholder="Enter your Full Name" value={this.state.doctorname} onChange={this.handleChange} required />
                             <input type="name" name="text" id="doctorQualification" placeholder="Enter your Qualification" value={this.state.doctorQualification} onChange={this.handleChange} required />
                             <input type="name" name="text" id="doctorPrice" placeholder="Enter your Fee" value={this.state.doctorPrice} onChange={this.handleChange} required />
                             <input type="name" name="text" id="address" placeholder="Enter your Full address" value={this.state.address} onChange={this.handleChange} required />
                             <input type="tel" name="number" id="number" placeholder="Enter your Mobile number" value={this.state.number} onChange={this.handleChange} required/>

					       
					        <button  className="buttonpress" type= "submit">REGISTER</button>
                    </div>
			</form>
		</div>
        </div>
        </div>
        )
    }
}