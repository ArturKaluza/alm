import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from './Navigation.css';

const Navigation = () => (
  <header>
    <div className="container">
      <NavLink to="/" className="navLink" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/agd" className="navLink" activeClassName="is-active">AGD</NavLink>
      <NavLink to="/rtv" className="navLink" activeClassName="is-active">RTV</NavLink>
      <NavLink to="/others" className="navLink" activeClassName="is-active">Others</NavLink>
    </div>
  </header>
);

export default Navigation;