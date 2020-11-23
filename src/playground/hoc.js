//higher order components (HOC) - a regular react component (HOC) that
// renders another component(s)
//this allows for reuse of code, render hijacking, prop manipulation, abstract states


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
      <h1>Info</h1>
      <p> The info is : {props.info}</p>
    </div>
);

//the const below is the HOC
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
          {props.isAdmin && <p>This is private info, please dont share!</p>}
          <WrappedComponent {...props}/>
        </div>
    );
};

//requireAuthentication will return the HOC, and means the function below doesnt
//need to be repeated wherever it is needed
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
          {props.isAuthenticated ? (<WrappedComponent {...props} />) 
          : 
          (<p>You do not have access</p>)}
        </div>
        //{!props.isAuthenticated && <p>You do not have access</p>}
        //{props.isAuthenticated && <WrappedComponent {...props}/>}
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='This is the detail' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='This is the detail' />, document.getElementById('app'));