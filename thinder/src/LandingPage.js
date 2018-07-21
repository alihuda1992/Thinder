import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Row,Input,Modal,Parallax,Carousel,Button, Icon} from 'react-materialize'
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import API from './utils/API';
import $ from 'jquery';


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
    API.userAuth(this.state)
    .then(res => {
      console.log(res)
      if (res.data === 'authorized') {
        this.props.history.push('/dashboard')
        this.setState({unauthorized: false})
      } else {
        this.setState({unauthorized: true})
      }


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
              {this.state.unauthorized ? <h2 style={{color: 'red'}}>Sorry, Try Again</h2> : null}
              <Input 
              placeholder="Username" s={6} 
              onChange={this.handleInputChange}
              value={this.username}
              style={{ borderBottomColor: this.state.unauthorized ? 'red' : 'darkgray'}}
              name="username" />

              <Input 
              placeholder= "Password"s={6} 
              onChange={this.handleInputChange}
              value={this.password}
              style={{ borderBottomColor: this.state.unauthorized ? 'red' : 'darkgray'}}
              name="password" />

              <Button onClick={this.login}>Submit</Button>   
            </div>
          </div>
        </div>
    </div>

    );
  }
}

export default LandingPage;
