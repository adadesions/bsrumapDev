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
  justifyContent: 'center',
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
const alignTableData = {
  textAlign: 'center',
}

export default class TeacherDetail extends React.Component {

  onClickBack(){
    FlowRouter.go('searchTeacher');
  }

  render() {
    return (
        <div style={paddingLayout} className="row">
          <table style={textSizeTable}>
            <tbody>
              <tr style={rowTable}>
                <td style={alignTableData}>ดร.สมชาย ดำดี</td>
              </tr>
              <tr style={rowTable}>
                <td>อาจารย์ คณะมนุษศาสตร์</td>
              </tr>
              <tr style={rowTable}>
                <td>อาคาร 4 ชั้น 1 ห้อง 1</td>
              </tr>
              <tr style={rowTable}>
                <td>ติดต่อภายใน 3300</td>
              </tr>
            </tbody>
          </table>
          <a onClick={this.onClickBack} style={styleButton} className="waves-effect waves-light btn-large"><h4 style={styleTextButton}>Back</h4></a>
        </div>
    );
  }
}
