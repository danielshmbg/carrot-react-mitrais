import React, { Component } from 'react';
import NavBar from './components/NavCarrot';
import Jumbotron from './components/Jumbotron';
import axios from 'axios';

class App extends Component {
  
  
  render() {
    const style = {
      marginTop:20
    };
    
    return (
        <div>
          <NavBar />
          <div className="container"  style={style}>
          <Jumbotron />
          </div>
        </div>
    );
  }
}

export default App;
