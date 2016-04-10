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
const alignText = {
  textAlign: 'center',
}

class TableRooms extends React.Component {

  render() {
    return (
      <div style={paddingLayout} className="row">
        <table className="striped">
          <thead>
            <tr style={textHeadTable}>
              <th style={alignText} data-field="id">ID</th>
              <th style={alignText} data-field="name">Rooms ID</th>
              <th style={alignText} data-field="name">Building ID</th>
              <th data-field="name">Description</th>
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
