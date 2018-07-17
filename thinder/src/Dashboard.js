import React, { Component } from 'react';
import logo from './logo.svg';
import './dashboard.css';
import {Parallax,Carousel,Button, Icon} from 'react-materialize'
import images from './images.json'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">

<div class="container">

<div class = "row-md-6">
<Carousel options={{ fullWidth: false }} images={images.images} />
</div> 
  {/* ^closing row */}

<Button id="login" waves='light'>Connect with me!<Icon left>call made</Icon></Button>


</div>
     
     
    </div>

    );
  }
}

export default Dashboard;
























