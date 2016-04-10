import React, { PropTypes } from 'react';
import { Teachers } from '../../../api/collections/teachers.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import ResultItem from './ResultItem.jsx';
import Lazy from 'lazy.js';


export default class SearchTeacherResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    }
    this.getRenderResult = this.getRenderResult.bind(this);
  }

  getRenderResult() {
    return this.props.result.map(t => {
      return <ResultItem key={t._id} _id={t._id} firstName={t.teacher_fullname} lastName={t.teacher_lastname} />
    })
  }

  render() {
    return (
      <tbody>
        {this.getRenderResult()}
      </tbody>
    )
  }
}

SearchTeacherResult.PropTypes = {
  firstName: PropTypes.string.isRequire,
  lastName: PropTypes.string.isRequire
}

export default createContainer((props) => {
  const firstName = props.firstName;
  const lastName = props.lastName;
  const teachers = Teachers.find().fetch();
  const findTeacher = (teachers) => {
    let result = [];
    teachers.map((t) => {
      const includeFirstName = t.teacher_fullname.includes(firstName)
      const includeLastName = t.teacher_lastname.includes(lastName)
      if(includeFirstName && includeLastName) {
        result.push(t)
      }
    })
    return result;
  }
  const isFirstNameEmpty = !firstName;
  const isLastNameEmpty = !lastName;

  let result = [];
  if(!isFirstNameEmpty || !isLastNameEmpty) {
    result = findTeacher(teachers)
  }
  else {
    result = Teachers.find({}, { limit: 100 }).fetch();
  }
  return {
    result,
  }
}, SearchTeacherResult);
