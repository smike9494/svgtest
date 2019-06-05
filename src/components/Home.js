import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
import Hamburger from './Hamburger';
//import Buttons from './Button';
//import SVG from './SVG';

//? testing git branching

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data => this.setState({ users: data, isLoading: false }))
      .then(() => console.log(this.state))
      .catch(error => this.setState({ error }));

    //console.log(this.state, 'did this appear before or after the fetch?');
  };

  render() {
    const { isLoading, users, error } = this.state;
    return (
      <header className='App-header'>
        <Hamburger />
        {/* <SVG /> */}
        {/* <div className='cta'>
          <h1 className='cta__heading'>VIPO</h1>
          <div className='cta__buttons'>
            <Buttons path='/' name='PORTFOLIO' />
            <Buttons path='/users' name='CONTACT' />
          </div>
        </div> */}
        {console.log(users)}
        {/* Display a message if we encounter an error */}
        {error ? <p>{error.message}</p> : null}
        {/* Here's our data check */}
        {!isLoading ? (
          users.map(user => {
            const { username, name, email, id } = user;
            return (
              <div key={username}>
                <p>{id}</p>
                <p>Name: {name}</p>
                <p>Email Address: {email}</p>
                <hr />
              </div>
            );
          })
        ) : (
          // If there is a delay in data, let's let the user know it's loading
          <h3>Loading...</h3>
        )}
      </header>
    );
  }
}

export default Home;
