import React from 'react';
import PropTypes from 'prop-types';
const NavApp = React.lazy(() => import('nav/nav'));
// import style from './style.module.css';

const Nav = ({ history, setToken, token }) => {
  return (
        <>
           <NavApp history={history} setToken={setToken} token={token}/>
        </>
  );
};
Nav.defaultProps = {
  history: {},
  token: '',
  setToken: function () {}
};

Nav.propTypes = {
  history: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  setToken: PropTypes.func.isRequired
};
export default Nav;
