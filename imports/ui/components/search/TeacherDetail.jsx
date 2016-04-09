import React, { PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Teachers } from '../../../api/collections/teachers.jsx';
import { Mongo } from 'meteor/mongo';

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

class TeacherDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  onClickBack(){
    FlowRouter.go('searchTeacher');
  }

  render() {
    const tObj = this.props.tObj;
    const firstName = tObj.teacher_fullname || '-';
    const lastName = tObj.teacher_lastname || '-';
    const facuilty = tObj.facuilty || '-';
    const position = tObj.position || '-';
    const building = tObj.building_id === '0' ? '-' : tObj.building_id;
    const floor = tObj.floor_id === '0' ? '-' : tObj.floor_id;
    const room = tObj.room_id === '0' ? '-' : tObj.room_id;
    const phone = tObj.phone_number === '0' ? '-' : tObj.phone_number;
    return (
        <div style={paddingLayout} className="row">
          <table style={textSizeTable}>
            <tbody>
              <tr style={rowTable}>
                <td style={alignTableData}>
                  {firstName} {lastName}
                </td>
              </tr>
              <tr style={rowTable}>
                <td>อาจารย์ {facuilty}</td>
              </tr>
              <tr style={rowTable}>
                <td>อาคาร {building} ชั้น {floor} ห้อง {room}</td>
              </tr>
              <tr style={rowTable}>
                <td>ติดต่อภายใน {phone}</td>
              </tr>
            </tbody>
          </table>
          <a onClick={this.onClickBack} style={styleButton} className="waves-effect waves-light btn-large"><h4 style={styleTextButton}>Back</h4></a>
        </div>
    );
  }
}

TeacherDetail.PropTypes = {
  tid: PropTypes.string.isRequire,
  tObj: PropTypes.object.isRequire,
}

export default createContainer((props) => {
  const tid = new Mongo.ObjectID(props.tid);
  const tObj = Teachers.findOne({_id:tid});
  return {
    tid,
    tObj,
  }
}, TeacherDetail)
