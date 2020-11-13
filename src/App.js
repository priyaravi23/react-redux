import React, { Component } from 'react';
import { dispatchfetchRandomUsers } from "./redux/actions/random-users";
import './App.css';
import { connect } from 'react-redux';
import get from 'lodash/get';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            users: {},
            filtered: {},
            error: null
        }
    }

    componentDidMount() {
        dispatchfetchRandomUsers();
    }

    handleInputChange = e => {
          let input = e.target.value;
          let re = new RegExp(input, 'i');
          const { users } = this.props;

          let filtered = Object.values(users).filter(item => {
              return re.test(item.name);
          });

          this.setState({ filtered });
        
      };

    render() {
        const { isLoading, error } = this.props;
        const {filtered} = this.state;

        return (
            <React.Fragment>
                <header className="App-header">
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                        <div>
                            <input type='text'
                                    placeholder='Search'
                                    autoFocus
                                    onChange={this.handleInputChange} />

                            <ul>
                                {Object.values(filtered).map(item => (
                                    <li key={item.id}
                                        value={item.name}>
                                            {item.name}
                                        </li>
                                ))}
                            </ul>
                        </div>
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