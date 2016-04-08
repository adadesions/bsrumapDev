import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

const paddingLayout = {
  padding: '4em',
}
const textSizeTable = {
  fontSize: '40px',
}
const rowTable = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: '2em',
  paddingRight: '2em',
  alignItems: 'center',
}
const styleButton = {
  marginTop: '1em',
  fontSize: '28px',
  width: '100%',
  height: '3em',
  paddingRight: '1em',
  paddingLeft: '1em',
}
const styleTextButton = {
  marginTop: '0.8em',
  fontWeight: 'bold',
}

export default class TeacherDetail extends React.Component {

  onClickBack(){
    FlowRouter.go('searchTeacher');
  }

  render() {
    return (
        <div style={paddingLayout} className="row">
          <table style={textSizeTable} className="striped">
            <tbody>
              <tr style={rowTable}>
                <td>Alvin</td>
              </tr>
              <tr style={rowTable}>
                <td>Alan</td>
              </tr>
              <tr style={rowTable}>
                <td>Jonathan</td>
              </tr>
            </tbody>
          </table>
          <a onClick={this.onClickBack} style={styleButton} className="waves-effect waves-light btn-large"><h4 style={styleTextButton}>Back</h4></a>
        </div>
    );
  }
}
