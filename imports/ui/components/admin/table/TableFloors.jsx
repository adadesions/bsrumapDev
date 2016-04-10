import React from 'react';
import ResultFloors from '../result/ResultFloors.jsx'
const paddingLayout = {
  padding: '1em',
}
const textHeadTable = {
  fontSize: '14px',
}
export default class TableFloors extends React.Component {

  render() {
    return (
      <div style={paddingLayout} className="row">
        <table className="striped">
          <thead>
            <tr style={textHeadTable}>
                <th data-field="id">ID</th>
                <th data-field="name">Floor ID</th>
                <th data-field="name">Building ID</th>
                <th data-field="name">Discription</th>
            </tr>
          </thead>
          <tbody>
            <ResultFloors />
          </tbody>
        </table>
      </div>
    )
  }
}
