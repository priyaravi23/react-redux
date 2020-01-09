import React, { Component } from 'react';
import { dispatchfetchRandomUsers } from "./actions/random-users";
import './App.css';
import logo from './logo.svg';

class App extends Component {

    componentDidMount() {
        dispatchfetchRandomUsers();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Fetching data from an api using React/Redux
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
