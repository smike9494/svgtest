import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class MenuLinks extends Component {


  render() {
    return (
      //-- If all "to" are not declared, console.log will show an error
      <div>
        <Link onClick={this.props.closeHome} to='/'>
          Home
        </Link>
        <Link onClick={this.props.closeHome} to='/work'>
          Work
        </Link>
        <Link to='/portfolio'>Media Agency</Link>
        <Link to='/portfolio'>Advertise</Link>
        <Link to='/team'>Team</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    );
  }
}
