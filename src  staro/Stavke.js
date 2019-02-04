import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire';



class Details extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
      curentUser: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
    const { currentUser } = fire.auth();
    this.setState({ currentUser });
    console.log(currentUser.toJSON());
    
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {      
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
        console.log(user.uid);
        console.log(user);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (  
      <div> 
         <h3>Spisak stavki</h3>
        
      </div>   
    );
  }
}

export default Details;

