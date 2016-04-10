import React, { PropTypes } from 'react';
import ResultBuilding from '../result/ResultBuilding.jsx';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Building } from '../../../../api/collections/building.jsx';

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

class TableBuilding extends React.Component {

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
            <ResultBuilding result={ this.props.result }/>
        </table>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    result: Building.find().fetch()
  }
}, TableBuilding);
