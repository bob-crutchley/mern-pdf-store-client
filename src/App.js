import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "services are not available"
        };
    }
    componentDidMount() {
        axios.get("http://localhost:3001").then(response => {
            this.setState({message: response.data})
        }).catch(e => {
            console.error(e);
        });
    }
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                {this.state.message}
            </p>
          </div>
        );
    }
}

export default App;
