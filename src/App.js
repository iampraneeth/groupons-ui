import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Aboutus from './pages/Aboutus';
import News from './pages/News';
import Welcome from './components/Welcome';
import DoctorSignin from './components/DoctorSignin';
import DoctorSignUp from './components/DoctorSignUp';
import '../src/components/Signin.css';
import '../src/pages/Aboutus.css';
import '../src/components/Navbar.css'
import '../src/components/Footer.css'
import Coupons from './components/Coupons';
import Offer from './components/Offer';
import Payment from './components/Payment';
import Home from './pages/Home';
import DoctorList from './components/DoctorList';
import MyPayments from './components/MyPayments';
import MyWhishlist from './components/MyWhishlist';
import Admin from './components/Admin';
import AdminDoctorList from './components/AdminDoctorList';
import AdminCustomerList from './components/AdminCustomerList';

function App() {
  return (
    <div>
          
          <Navbar />

    
                <Router>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/signin" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/aboutus" component={Aboutus} />
                    <Route path="/news" component={News} />
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/doctor/signin" component={DoctorSignin} />
                    <Route path="/doctor/signup" component={DoctorSignUp} />
                    <Route path="/coupons" component={Coupons}/>
                    <Route path ="/offer" component={Offer}/>
                    <Route path="/payment" component={Payment}/>
                    <Route path="/list/doctors" component={DoctorList}/>
                    <Route path="/my/payments" component={MyPayments}/>
                    <Route path="/my/whishlist" component={MyWhishlist}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/doctor/list/admin" component={AdminDoctorList}/>
                    <Route path="/customer/list/admin" component={AdminCustomerList}/>

                </Switch> 
                </Router>
                <Footer/>


    </div>
  );
}

export default App;
