import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

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
const setColorIcon = {
  color: '#009688',
}
const tableIcon = {
  float: 'right',
  cursor: 'pointer',
}
const rowTable = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: '2em',
  paddingRight: '2em',
  alignItems: 'center',
}
export default class SearchTeacher extends React.Component {

  onClickIcon(){
    FlowRouter.go('teacherDetail')
  }

  render() {
    return (
      <div>
        <div style={paddingLayout} className="row">
          <div style={sizeInput} className="input-field col s6">
            <input style={sizeInput} id="firstName" type="text" className="validate"/>
            <label style={sizeText} for="firstName">ชื่อ</label>
          </div>
          <div style={sizeInput} className="input-field col s6">
            <input style={sizeInput} id="lastName" type="text" className="validate"/>
            <label style={sizeText} for="lastName">นามสกุล</label>
          </div>

          <table style={marginTable} className="striped">
            <tbody>
              <tr style={rowTable}>
                <td>Alvin</td>
                <td style={tableIcon}><i onClick={this.onClickIcon} style={setColorIcon} className="large material-icons">send</i></td>
              </tr>
              <tr style={rowTable}>
                <td>Alan</td>
                <td style={tableIcon}><i onClick={this.onClickIcon} style={setColorIcon} className="large material-icons">send</i></td>
              </tr>
              <tr style={rowTable}>
                <td>Jonathan</td>
                <td style={tableIcon}><i onClick={this.onClickIcon} style={setColorIcon} className="large material-icons">send</i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
