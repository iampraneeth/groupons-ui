import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Aboutus from './pages/Aboutus';
import News from './pages/News';
import Welcome from './components/Welcome'

function App() {
  return (
    <Router>
    <div className="App">
      
    <Navbar/>
                <Switch>
                    
                    <Route path="/signin" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/aboutus" component={Aboutus} />
                    <Route path="/news" component={News} />
                    <Route path="/welcome" component={Welcome} />

                    
                </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
