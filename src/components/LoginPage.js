import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({startLogin}) => (
      //className lets us bring in style elements
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expenses</h1>
        <p>Keep track of your expenses</p>
        <button onClick={startLogin} className="button">Log in with Google</button>
      </div>
    </div>  
  ); 
  const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
  });

  export default connect(undefined, mapDispatchToProps)(LoginPage);