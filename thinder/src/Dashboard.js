import React, { Component } from 'react';
import logo from './logo.svg';
import './dashboard.css';
import {SideNav,SideNavItem,Col,CardTitle,Card,Parallax,Carousel,Button, Icon} from 'react-materialize'
import images from './images.json'
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">

<div class="container">

<SideNav 
  trigger={<Button>My Profile</Button> }
  options={{ closeOnClick: true }}
  >
  <SideNavItem userView
    user={{
      background: require('./images/sidenavback.jpg'),
      image: require('./images/me.jpg'),
      name: 'Ali Huda',
      email: 'alihuda1992@gmail.com'
    }}
  />
  <Button><Link to='/'>Logout</Link></Button>
</SideNav>

<h2>Available Trainers</h2>


  <Col m={7} s={12}>
  <Card horizontal header={<CardTitle image={require('./images/trainer6.jpeg')}></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
      <p>I am a very simple card. I am good at containing small bits of information</p>
    </Card>
</Col>

 <Col m={7} s={12}>
  <Card horizontal header={<CardTitle image={require('./images/trainer7.jpeg')}></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
      <p>I am a very simple card. I am good at containing small bits of information</p>
    </Card>
</Col>

 <Col m={7} s={12}>
  <Card horizontal header={<CardTitle image={require('./images/trainer3.jpeg')}></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
      <p>I am a very simple card. I am good at containing small bits of information</p>
    </Card>
</Col>

 <Col m={7} s={12}>
  <Card horizontal header={<CardTitle image={require('./images/trainer4.jpeg')}></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
      <p>I am a very simple card. I am good at containing small bits of information</p>
    </Card>
</Col>

 <Col m={7} s={12}>
  <Card horizontal header={<CardTitle image={require('./images/trainer5.jpeg')}></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
      <p>I am a very simple card. I am good at containing small bits of information</p>
    </Card>
</Col>

 <Col m={7} s={12}>
  <Card horizontal header={<CardTitle image={require('./images/trainer8.jpeg')}></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
      <p>I am a very simple card. I am good at containing small bits of information</p>
    </Card>
</Col>

</div>
     
     
    </div>

    );
  }
}

export default Dashboard;
























