import React, { Component } from 'react';
import fire from './config/Fire';
import AppRouter from './AppRouter';
//import Log from './MenuAppBar';
import Navbar from './Navbar';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                 <Navbar/>
                <h1>Welcome to Home</h1>
                <br/>
                <button onClick={this.logout}>Logout</button>
                <hr/>
                <AppRouter/>
                <hr/>
                
            </div>
        );
    }
}

export default Home;
