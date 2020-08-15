import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const navBarLinksLeft = [
  {
    to: '/products',
    title: 'Products',
  },
  {
    to: '/solutions',
    title: 'Solutions',
  },
  {
    to: '/devs',
    title: 'Developers',
  },
  {
    to: '/pricing',
    title: 'Pricing',
  },
];

const navBarLinksRight = [
  {
    to: '/signin',
    title: 'Sign In',
    className: 'btn-text',
  },
  {
    to: '/signup',
    title: 'Sign Up',
    className: 'btn-contained',
  },
];

const Navbar = ({ currentUser, signoutUser }) => {
  const signedIn = currentUser && (
    <li>
      <p>Hello, {currentUser.firstName}</p>
      <button onClick={signoutUser} type="button">
        Sign Out
      </button>
    </li>
  );

  const signedOut = navBarLinksRight.map(({ to, title, className }) => (
    <li key={to}>
      <NavLink to={to} className={className}>
        {title}
      </NavLink>
    </li>
  ));

  const navLinksRight = currentUser ? signedIn : signedOut;

  return (
    <nav>
      <div className="flex-left">
        <h1>SignDocs</h1>
        <ul className="nav-links">
          {navBarLinksLeft.map(({ to, title }) => (
            <li key={to}>
              <NavLink to={to}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-right">
        <ul className="nav-links">{navLinksRight}</ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }),
  signoutUser: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  currentUser: null,
};

export default Navbar;
