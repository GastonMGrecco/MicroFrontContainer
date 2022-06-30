import React from 'react';
import PropTypes from 'prop-types';
const AppLogup = React.lazy(() => import('logup/logup'));
// import style from './style.module.css';

const SignUp = ({ history }) => {
  return (
    <React.Suspense fallback={<div>Login...</div>}>
      <AppLogup history={history}/>
    </React.Suspense>
  );
};
SignUp.defaultProps = {
  history: {}
};

SignUp.propTypes = {
  history: PropTypes.object.isRequired
};
export default SignUp;
