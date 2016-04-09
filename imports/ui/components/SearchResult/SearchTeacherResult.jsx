import React, { PropTypes } from 'react';
import { Teachers } from '../../../api/collections/teachers.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import Lazy from 'lazy.js';

const rowTable = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: '2em',
  paddingRight: '2em',
  alignItems: 'center',
};
const tableIcon = {
  float: 'right',
  cursor: 'pointer',
};
const setColorIcon = {
  color: '#009688',
};

class SearchTeacherResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    }
  }

  onClickIcon() {
    FlowRouter.go('teacherDetail')
  }

  render() {
    return (
      <tr style={rowTable}>
        <td>
          {this.props.firstName} {this.props.lastName}
        </td>
        <td style={tableIcon}>
          <i
            onClick={this.onClickIcon}
            style={setColorIcon}
            className="large material-icons">
            send
          </i>
        </td>
      </tr>
    )
  }
}

SearchTeacherResult.PropTypes = {
  firstName: PropTypes.string.isRequire,
  lastName: PropTypes.string.isRequire
}

export default createContainer((props) => {
  const teachers = Teachers.find().fetch();
  const findTeacher = (teachers) => {
    let result = [];
    teachers.map((t) => {
      const includeFirstName = t.teacher_fullname.includes(props.firstName)
      const includeLastName = t.teacher_lastname.includes(props.lastName)
      if(includeFirstName || includeLastName) {
        result.push(t)
      }
    })
  }
  let result = findTeacher(teachers)
  console.log(result);

  return {
    firstName: props.firstName,
    lastName: props.lastName,
  }
}, SearchTeacherResult);
