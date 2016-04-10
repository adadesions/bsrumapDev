import React from 'react';
import ResultBuilding from '../result/ResultBuilding.jsx'
const paddingLayout = {
  padding: '1em',
}
const textHeadTable = {
  fontSize: '14px',
}
export default class TableBuilding extends React.Component {

  render() {
    return (
      <div style={paddingLayout} className="row">
        <table className="striped">
          <thead>
            <tr style={textHeadTable}>
                <th data-field="id">ID</th>
                <th data-field="name">Building ID</th>
                <th data-field="id">Building Name</th>
                <th data-field="name">Discription</th>
                <th data-field="id">Picture</th>
                <th data-field="name">Map Point</th>
                <th data-field="id">Floor Sum</th>
            </tr>
          </thead>
          <tbody>
            <ResultBuilding />
          </tbody>
        </table>
      </div>
    )
  }
}
