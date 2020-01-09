import React, { Component } from 'react';
import { dispatchfetchRandomUsers } from "./actions/random-users";
import './App.css';
import logo from './logo.svg';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            users: [],
            error: null
        }
    }

    componentDidMount() {
        dispatchfetchRandomUsers();
    }

    render() {
        const { isLoading, users, error } = this.state;

        return (
            <React.Fragment>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                        users.map(user => {
                            const { username, name, email } = user;
                            return (
                                <div key={username}>
                                    <p>Name: {name}</p>
                                    <p>Email Address: {email}</p>
                                    <hr />
                                </div>
                            );
                        })
                        // If there is a delay in data, let's let the user know it's loading
                    ) : (
                        <h3>Loading...</h3>
                    )}
                </header>
            </React.Fragment>
        );
    }
}

export default App;
