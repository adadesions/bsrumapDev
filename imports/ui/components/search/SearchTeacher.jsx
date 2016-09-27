import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import SearchTeacherResult from '../SearchResult/SearchTeacherResult.jsx';

const sizeInput = {
  height: '3em',
  fontSize: '20px',
}
const sizeText = {
  fontSize: '20px',
}
const paddingLayout = {
  paddingLeft: '1em',
  paddingRight: '1em',
  paddingBottom: '1em',
  paddingTop: '1em',
}
const marginTable = {
  marginTop : '3em',
  fontSize: '40px',
}



export default class SearchTeacher extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
    }
    this.onInputKeyUp = this.onInputKeyUp.bind(this);
  }

  onInputKeyUp() {
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    this.setState({
      firstName,
      lastName
    })
  }

  render() {
    return (
      <div>
        <div style={paddingLayout} className="row">
          <div style={sizeInput} className="input-field col s6">
            <input
              style={sizeInput}
              id="firstName"
              type="text"
              className="validate"
              onChange={this.onInputKeyUp}
            />
          <label style={sizeText} htmlFor="firstName">ชื่อ</label>
          </div>
          <div style={sizeInput} className="input-field col s6">
            <input
              style={sizeInput}
              id="lastName"
              type="text"
              className="validate"
              onChange={this.onInputKeyUp}
            />
            <label style={sizeText} htmlFor="lastName">นามสกุล</label>
          </div>

          <table style={marginTable} className="striped">
            <SearchTeacherResult firstName={this.state.firstName} lastName={this.state.lastName}/>
          </table>
        </div>
      </div>
    );
  }
}
