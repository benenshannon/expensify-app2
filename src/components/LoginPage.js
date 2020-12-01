import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <div>
      <h1>Login page</h1>
      <button onClick={startLogin}>click here to log in</button>
    </div>  
  ); 
  const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
  });

  export default connect(undefined, mapDispatchToProps)(LoginPage);