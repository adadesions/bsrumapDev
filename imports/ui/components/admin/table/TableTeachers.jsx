import React from 'react';
import ResultTeachers from '../result/ResultTeachers.jsx'
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Teachers } from '../../../../api/collections/teachers.jsx';

const paddingLayout = {
  padding: '1em',
}
const textHeadTable = {
  fontSize: '14px',
}
export default class TableTeachers extends React.Component {
  render() {
    return (
      <div style={paddingLayout} className="row">
        <table className="striped">
          <thead>
            <tr style={textHeadTable}>
              <th data-field="id">ID</th>
              <th data-field="name">Teacher ID</th>
              <th data-field="id">Teacher Name</th>
              <th data-field="name">Teacher Lastname</th>
              <th data-field="id">Position</th>
              <th data-field="name">Facuilty</th>
              <th data-field="id">Phone Number</th>
              <th data-field="id">Building ID</th>
              <th data-field="name">Floor ID</th>
              <th data-field="id">Room ID</th>
            </tr>
          </thead>
            <ResultTeachers result={ this.props.result }/>          
        </table>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    result: Teachers.find().fetch()
  }
}, TableTeachers);
