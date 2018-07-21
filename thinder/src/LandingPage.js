import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Row,Input,Modal,Parallax,Carousel,Button, Icon} from 'react-materialize'
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import API from './utils/API'


class LandingPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  login = () => {
    console.log('called')
    API.userAuth(this.state)
    .then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div className="landingpage">

        <div>
            <Parallax imageSrc= {require('./images/background3.jpg')}/>
            <div className="header">
                <div className="row container">
                <h2 className="header">Thinder</h2>
                {/* <Button id="login" waves='light'>Login<Icon left>cloud</Icon></Button> */}



   <Modal
  header='Get Started Here'
  trigger={<Button>Login</Button>}>
  <p><Row>
    <Input 
    placeholder="Username" s={6} 
    label="Username"
    onChange={this.handleInputChange}
    value={this.username}
    name="username" />

    <Input 
    placeholder= "Password"s={6} 
    label="Password"
    onChange={this.handleInputChange}
    value={this.password}
    name="password" />

    <Button onClick={this.login}>Submit</Button>   
    
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
