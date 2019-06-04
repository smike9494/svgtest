import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class MenuLinks extends Component {
  componentDidMount(props) {
    //console.log(props);
  }

  render() {
    return (
      //-- If all "to" are not declared, console.log will show an error
      <div>
        <Link onClick={this.props.closeHome} to='/'>
          Home
        </Link>
        <Link onClick={this.props.closeHome} to='/users'>
          About
        </Link>
        <Link to='/team'>Team</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/signin'>Sign In</Link>
        <Link to='/singup'>Sign Up</Link>
      </div>
    );
  }
}
