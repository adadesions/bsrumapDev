import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Accounts } from 'meteor/accounts-base';

const layoutLogin = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  background: '#092756',
  background: '-moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%)',
	background: '-webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%)',
	background: '-o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%)',
	background: '-ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%)',
	background: '-webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%)',
};
const blogLogin = {
  width: '70%',
  height: '60%',
  textAlign: 'center',
};
const boxInput = {
  paddingLeft: '3em',
  paddingRight: '3em',
};
const textLogin = {
  color: '#fff',
  textShadow: '0 0 10px rgba(0,0,0,0.3)',
  letterSpacing: '1px',
};
export default class Register extends React.Component {
  onClickBack() {
    FlowRouter.go('login');
  }

  onClickSubmit() {
    const email = $('#email').val();
    const username = $('#username').val();
    const password = $('#password').val();
    Accounts.createUser({
      email,
      username,
      password,
    })
    FlowRouter.go('menu');
  }
  render() {
    return(
      <div style={layoutLogin} className="login-layout">
        <div style={blogLogin}>
          <h1 style={textLogin}>Register</h1><br/>
            <input id="username" type="text" placeholder="Username" className="box-input"/>
            <input id="password" type="password" placeholder="Password" className="box-input"/>
            <input id="email" type="email" placeholder="Email" className="box-input"/>
            <a
              onClick={this.onClickSubmit}
              className="waves-effect waves-light btn-large"
              >
              <h4>Submit</h4></a>
            <a
              onClick={this.onClickBack}
              className="waves-effect waves-light btn-large"
              >
              <h4>Back</h4></a>
        </div>
      </div>
    )
  }
}
