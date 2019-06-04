import React, { Component } from 'react';
import MenuLinks from './MenuLinks';

export default class NavLinks extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <MenuLinks closeHome={this.props.closeHome} />
      </div>
    );
  }
}
