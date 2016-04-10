import React from 'react';
import ResultRooms from '../result/ResultRooms.jsx'
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Rooms } from '../../../../api/collections/rooms.jsx';

const paddingLayout = {
  padding: '1em',
}
const textHeadTable = {
  fontSize: '14px',
}
class TableRooms extends React.Component {
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
            <ResultRooms result={ this.props.result }/>
        </table>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    result: Rooms.find().fetch()
  }
}, TableRooms);
