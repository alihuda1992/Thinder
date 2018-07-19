import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Modal,Parallax,Carousel,Button, Icon} from 'react-materialize'
import Dashboard from './Dashboard';

class LandingPage extends Component {
  render() {
    return (
      <div className="landingpage">

        <div>
            <Parallax imageSrc= {require('./images/background3.jpg')}/>
            <div className="header">
                <div className="row container">
                <h2 className="header">Thinder</h2>
                {/* <Button id="login" waves='light'>Login<Icon left>cloud</Icon></Button> */}


  trigger={<Button>Login</Button>}>

              



                </div>
            </div>
        </div>
     
    </div>

    );
  }
}

export default LandingPage;
