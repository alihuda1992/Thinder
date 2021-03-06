import React, { Component } from 'react';
import logo from './logo.svg';
import './dashboard.css';
import {Modal,Row,SideNav,SideNavItem,Col,CardTitle,Card,Parallax,Carousel,Button, Icon} from 'react-materialize'
import images from './images.json'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Livestream from './LiveStream';


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
      image: require ('./images/me.jpg'),
      name: 'Ali Huda',
      email: 'alihuda1992@gmail.com'
    }}
  />
  <Button><Link to='/'>Logout</Link></Button>
</SideNav>

<h2>Available Trainers</h2>


  <Col m={7} s={12}>
 <Card horizontal header={<CardTitle image={require('./images/Leaveil.jpg')}></CardTitle>}
 actions={[
   <Modal
   header='Enjoy your workout!'
   trigger={<Button>Connect With Leaveil!</Button>}>
   <p><Row>
   <Livestream/>
 </Row></p>
 </Modal>
 ]}>
     <p>My name is Leaveil, I love JSX and CrossFit. HMU if you need a tutor/trainer!</p>
   </Card>
</Col>


<Col m={7} s={12}>
 <Card horizontal header={<CardTitle image={require('./images/malcolm.jpg')}></CardTitle>}
 actions={[
   <Modal
   header='Enjoy your workout!'
   trigger={<Button>Connect With Malcolm!</Button>}>
   <p><Row>
   <Livestream/>
 </Row></p>
 </Modal>
 ]}>
     <p>Hi my name is Malcolm, I like Kickboxing, Hot Yoga and Pilates, connect now to align your Chakras!</p>
   </Card>
</Col>



<Col m={7} s={12}>
 <Card horizontal header={<CardTitle image={require('./images/Musa.jpg')}></CardTitle>}
 actions={[
   <Modal
   header='Enjoy your workout!'
   trigger={<Button>Connect With Musa!</Button>}>
   <p><Row>
   <Livestream/>
 </Row></p>
 </Modal>
 ]}>
     <p>They call me Musa the Abuse-ah. Connect now if you're not a wimp.</p>
   </Card>
</Col>


<Col m={7} s={12}>
 <Card horizontal header={<CardTitle image={require('./images/trainer5.jpeg')}></CardTitle>}
 actions={[
   <Modal
   header='Enjoy your workout!'
   trigger={<Button>Connect With Suzy!</Button>}>
   <p><Row>
   <Livestream/>
 </Row></p>
 </Modal>
 ]}>
     <p>My name is Suzy and Gucci think I love him!</p>
   </Card>
</Col>


<Col m={7} s={12}>
 <Card horizontal header={<CardTitle image={require('./images/trainerM.jpg')}></CardTitle>}
 actions={[
   <Modal
   header='Enjoy your workout!'
   trigger={<Button>Roll up the partition with Meroncay!</Button>}>
   <p><Row>
   <Livestream/>
 </Row></p>
 </Modal>
 ]}>
     <p>Quen Meroncay at your service. Ready to serve looks and take names.</p>
   </Card>
</Col>





</div>
     
     
    </div>

    );
  }
}

export default Dashboard;
























