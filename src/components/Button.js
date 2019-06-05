import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/button_homepage.scss';

const Button = props => {
  ////////console.log(props);
  //<a href={props.path}>{props.name} </a>;
  return <Link to={props.path}>{props.name}</Link>;
};

export default Button;
