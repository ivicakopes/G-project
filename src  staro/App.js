import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from './Navbar';

class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <div className="App">  
            <Navbar/>
        </div> 
      </BrowserRouter>       
    );
  }
}

export default App;