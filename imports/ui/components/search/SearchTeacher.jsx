import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import SearchTeacherResult from '../SearchResult/SearchTeacherResult.jsx';

const sizeInput = {
  height: '3em',
  fontSize: '32px',
}
const sizeText = {
  fontSize: '32px',
}
const paddingLayout = {
  padding: '4em',
}
const marginTable = {
  marginTop : '5em',
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
            <tbody>
                <SearchTeacherResult firstName={this.state.firstName} lastName={this.state.lastName}/>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
