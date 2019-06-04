import React, { Component } from 'react';

export default class CloseNav extends Component {
  render() {
    return (
      <p className={this.props.className} onClick={this.props.onClick}>
        close
      </p>
    );
  }
}
