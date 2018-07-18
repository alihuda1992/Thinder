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
            <Parallax imageSrc= {require('./images/background.jpg')}/>
            <div className="header">
                <div className="row container">
                <h2 className="header">Thinder</h2>
                {/* <Button id="login" waves='light'>Login<Icon left>cloud</Icon></Button> */}


              <Modal
  header='Modal Header'
  trigger={<Button>Login</Button>}>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
</Modal>

              



                </div>
            </div>
        </div>
     
    </div>

    );
  }
}

export default LandingPage;
