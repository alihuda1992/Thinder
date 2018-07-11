import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Carousel,Button, Icon} from 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="App">
  
      <div class ="iris">
      <div class = "card transparent z-depth-5">
    
      </div>
      <Button waves='light'>Login<Icon left>cloud</Icon></Button>
      </div>

      <div>
      <Carousel options={{ fullWidth: false }} images={[
        'https://static1.squarespace.com/static/572e050c4d088ea3a8f0ac9d/596f6d18d482e9ec36ac9b92/596f6d5cbe659421e3aebe12/1500474734283/business-headshots-professional-8.jpg?format=300w',
        'https://static1.squarespace.com/static/572e050c4d088ea3a8f0ac9d/596f6d18d482e9ec36ac9b92/596f6d97e3df289cfa5d0465/1500474794971/business-headshots-professional-30.jpg?format=300w',
        'https://static1.squarespace.com/static/572e050c4d088ea3a8f0ac9d/596f6d18d482e9ec36ac9b92/596f6d73d2b857de696e21c6/1500474754660/business-headshots-professional-15.jpg?format=300w',
        'https://static1.squarespace.com/static/572e050c4d088ea3a8f0ac9d/596f6d18d482e9ec36ac9b92/596f6d8d893fc01a296d1147/1500474781694/business-headshots-professional-26.jpg?format=300w',
        'https://static1.squarespace.com/static/572e050c4d088ea3a8f0ac9d/596f6d18d482e9ec36ac9b92/596f6da9e3df289cfa5d054a/1500474814125/business-headshots-professional-34.jpg?format=300w'
      ]} />
    </div>
    <Button waves='light'>Connect with me!<Icon left>call made</Icon></Button>
      </div>
      
     
      

    );
  }
}

export default App;
