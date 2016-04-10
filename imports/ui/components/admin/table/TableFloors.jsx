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
class TableFloors extends React.Component {

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
