import React from 'react';
import ResultTeachers from '../result/ResultTeachers.jsx'
const paddingLayout = {
  padding: '1em',
  overflowX: 'auto',
}
const textHeadTable = {
  fontSize: '14px',
}
const sizeTable = {
  width: '200%',
}
const alignText = {
  textAlign: 'center',
}
export default class TableTeachers extends React.Component {
  render() {
    return (
      <div style={paddingLayout} className="row">
        <table style={sizeTable} className="striped">
          <thead>
            <tr style={textHeadTable}>
              <th style={alignText} data-field="id">ID</th>
              <th style={alignText} data-field="name">Teacher ID</th>
              <th style={alignText} data-field="id">Teacher Name</th>
              <th style={alignText} data-field="name">Teacher Lastname</th>
              <th style={alignText} data-field="id">Position</th>
              <th style={alignText} data-field="name">Facuilty</th>
              <th style={alignText} data-field="id">Phone Number</th>
              <th style={alignText} data-field="id">Building ID</th>
              <th style={alignText} data-field="name">Floor ID</th>
              <th style={alignText} data-field="id">Room ID</th>
            </tr>
          </thead>
          <tbody>
            <ResultTeachers />
          </tbody>
        </table>
      </div>
    )
  }
}
