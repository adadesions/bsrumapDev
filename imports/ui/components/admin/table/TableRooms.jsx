import React from 'react';
import ResultRooms from '../result/ResultRooms.jsx'
const paddingLayout = {
  padding: '1em',
}
const textHeadTable = {
  fontSize: '14px',
}
export default class TableRooms extends React.Component {

  render() {
    return (
      <div style={paddingLayout} className="row">
        <table className="striped">
          <thead>
            <tr style={textHeadTable}>
              <th data-field="id">ID</th>
              <th data-field="name">Rooms ID</th>
              <th data-field="name">Building ID</th>
              <th data-field="name">Discription</th>
            </tr>
          </thead>
          <tbody>
            <ResultRooms />
          </tbody>
        </table>
      </div>
    )
  }
}
