import React, { Component } from 'react';

export default class NavPage extends Component {
  render() {
    return (
      <div className={this.props.className} onClick={this.props.onClick} />
    );
  }
}
