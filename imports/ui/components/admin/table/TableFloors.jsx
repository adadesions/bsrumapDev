import React from 'react';
import ResultFloors from '../result/ResultFloors.jsx';
import { createContainer } from 'meteor/react-meteor-data';

// Collections
import { Floors } from '../../../../api/collections/floors.jsx';

const paddingLayout = {
  padding: '1em',
}
const textHeadTable = {
  fontSize: '14px',
}
const alignText = {
  textAlign: 'center',
}

class TableFloors extends React.Component {
  render() {
    return (
      <div style={paddingLayout} className="row">
        <table className="striped">
          <thead>
            <tr style={textHeadTable}>
                <th style={alignText} data-field="id">ID</th>
                <th style={alignText} data-field="name">Floor ID</th>
                <th style={alignText} data-field="name">Building ID</th>
                <th data-field="name">Description</th>
            </tr>
          </thead>
            <ResultFloors result={this.props.result} />
        </table>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    result: Floors.find().fetch()
  }
}, TableFloors);
