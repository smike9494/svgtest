import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/button_homepage.scss';

const Button = props => {
  return <Link to={props.path}>{props.name}</Link>;
};

export default Button;
