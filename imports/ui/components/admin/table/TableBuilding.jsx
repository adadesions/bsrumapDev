import React from 'react';
import ResultBuilding from '../result/ResultBuilding.jsx'
const paddingLayout = {
  padding: '1em',
  overflowX: 'auto',
}
const textHeadTable = {
  fontSize: '14px',
}
const sizeTable = {
  width: '150%',
}
const alignText = {
  textAlign: 'center',
}
export default class TableBuilding extends React.Component {

  render() {
    return (
      <div style={paddingLayout} className="row">
        <table style={sizeTable} className="striped">
          <thead>
            <tr style={textHeadTable}>
                <th style={alignText} data-field="id">ID</th>
                <th style={alignText} data-field="name">Building ID</th>
                <th style={alignText} data-field="id">Building Name</th>
                <th data-field="name">Discription</th>
                <th style={alignText} data-field="name">Map Point</th>
                <th style={alignText} data-field="id">Floor Sum</th>
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
