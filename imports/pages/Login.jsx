import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';

const layoutLogin = {
  width: '100%',
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
  width: '80%',
  height: '80%',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'column',
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

export default class Login extends React.Component {

  componentDidMount() {
    if (Meteor.userId()) {
      FlowRouter.go('menu');
    }
  }

  onClickRegister() {
    FlowRouter.go('register');
  }

  onClickLogin() {
    const username = $("#username").val();
    const email = username;
    const password = $('#password').val();

    Meteor.loginWithPassword({
      email,
    },password, () => {
      if(Meteor.user()){
        FlowRouter.go('menu');
      }
      else {
        alert("Username or Password is wrong!");
      }
    })
  }

  render(){
    return(
      <div style={layoutLogin} className="login-layout">
        <div style={blogLogin}>
          <h1 style={textLogin}>Login</h1><br/>
            <input id="username" type="text" placeholder="Email" className="box-input"/>
            <input id="password" type="password" placeholder="Password" className="box-input"/>
            <a
              onClick={this.onClickLogin}
              className="waves-effect waves-light btn-large"
            >
            <h4>Let me in !!</h4></a>
            <a
              onClick={this.onClickRegister}
              className="waves-effect waves-light btn-large"
            >
            <h4>Register</h4></a>
        </div>
      </div>
    )
  }
}
