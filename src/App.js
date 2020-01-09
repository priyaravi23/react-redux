import React, { Component } from 'react';
import { dispatchfetchRandomUsers } from "./redux/actions/random-users";
import './App.css';
import logo from './logo.svg';
import { connect } from 'react-redux';
import get from 'lodash/get';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            users: {},
            error: null
        }
    }

    componentDidMount() {
        dispatchfetchRandomUsers();
    }

    render() {
        const { isLoading, users, error } = this.props;

        return (
            <React.Fragment>
                <header className="App-header">
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                        Object.values(users).map(user => {
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

/**
 * @desc Pull out the props from the reducer state that will be
 *   passed along as props to the component.
 * */

const mapStateToProps = reduxState => {
    return {
        users: get(reduxState, 'users') || [],
        fetchInProgress: get(reduxState, 'fetchInProgress') || false,
    }
};

const WrappedAppComponent = connect(mapStateToProps)(App);

export default WrappedAppComponent;