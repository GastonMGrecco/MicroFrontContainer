import React from 'react';
import PropTypes from 'prop-types';
const AppLogin = React.lazy(() => import('login/login'));

const Login = ({ history, setToken }) => {
  return (
    <React.Suspense fallback={<div>Login...</div>}>
      <AppLogin history={history} setToken={setToken} />
    </React.Suspense>
  );
};
Login.defaultProps = {
  history: {},
  setToken: function () {}
};

Login.propTypes = {
  history: PropTypes.object.isRequired,
  setToken: PropTypes.func.isRequired
};
export default Login;
