import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import '../sass/hamburger.scss';
//import MenuLinks from './MenuLinks';
import NavPage from './NavPage';
import NavLinks from './NavLinks';
import CloseNav from './CloseNav';

class Hamburger extends Component {
  //! USE CONSTRUCTOR TO BE ABLE TO USE PROPS THAT WERE PASSED DOWN
  //! TO THIS COMPONENT, AND CAN REFER TO THE PROP WITH "PROP.WHATEVER IS PASSED DOWN"
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     counter: 0
  //   };
  // }

  state = {
    counter: 0,
    openNavClassName: '',
    visibility: '',
    openedNav: ''
  };

  addClassName = e => {
    const visibility = 'visibility';
    const elementNav =
      '<div class="navContainer__nav--hamburger"></div>' ||
      '<div class="navContainer__nav"></div>';

    e.target = elementNav
      ? this.setState({
          openNavClassName: 'scale',
          visibility,
          openedNav: 'openedNav'
        })
      : this.removeClassName();
  };

  removeClassName = () => {
    this.setState({
      openNavClassName: !this.state.openNavClassName,
      visibility: !this.state.visibility,
      openedNav: !this.state.openedNav
    });
  };

  render() {
    return (
      <div className='navContainer'>
        <nav
          onClick={this.addClassName}
          className={`navContainer__nav ${this.state.openedNav}`}
        >
          <div
            className={`navContainer__nav--hamburger ${this.state.openedNav}`}
          />
          <div
            className={`navContainer__nav--hamburger ${this.state.openedNav}`}
          />
          <div
            className={`navContainer__nav--hamburger ${this.state.openedNav}`}
          />
        </nav>

        <NavPage
          className={`navContainer__navPage ${this.state.openNavClassName}`}
          onClick={this.removeClassName}
        />
        <NavPage
          className={`navContainer__navPage--2 ${this.state.openNavClassName}`}
          onClick={this.removeClassName}
        />

        <NavLinks
          className={`navContainer__navLinks ${this.state.visibility}`}
          closeHome={this.removeClassName}
        />

        <CloseNav
          className={`navContainer__closeBtn ${this.state.visibility}`}
          onClick={this.removeClassName}
        />
      </div>
    );
  }
}

export default Hamburger;
