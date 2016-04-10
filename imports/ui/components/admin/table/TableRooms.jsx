import React from 'react';
import ResultRooms from '../result/ResultRooms.jsx'
const paddingLayout = {
  padding: '1em',
}
const textHeadTable = {
  fontSize: '14px',
}
const alignText = {
  textAlign: 'center',
}
export default class TableRooms extends React.Component {

  render() {
    return (
      <div style={paddingLayout} className="row">
        <table className="striped">
          <thead>
            <tr style={textHeadTable}>
              <th style={alignText} data-field="id">ID</th>
              <th style={alignText} data-field="name">Rooms ID</th>
              <th style={alignText} data-field="name">Building ID</th>
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
