import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Row,Input,Modal,Parallax,Carousel,Button, Icon} from 'react-materialize'
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Link } from 'react-router-dom'


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
  header='Get Started Here'
  trigger={<Button>Login</Button>}>
  <p><Row>
    <Input placeholder="Username" s={6} label="" />
    <Input s={6} label="Password" />
    <Button><Link to='/dashboard'>Login</Link></Button>    {/* <Input s={12} label="disabled" defaultValue="I am not editable" disabled /> */}
    {/* <Input type="password" label="password" s={12} /> */}
    {/* <Input type="email" label="Email" s={12} /> */}
</Row></p>
</Modal>

              



                </div>
            </div>
        </div>
     
    </div>

    );
  }
}

export default LandingPage;
