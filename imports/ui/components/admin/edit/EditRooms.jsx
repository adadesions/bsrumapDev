import React, { PropTypes } from 'react';
import { Mongo } from 'meteor/mongo';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Collection
import { Rooms } from '../../../../api/collections/rooms.jsx';

const editLayout = {
  display: 'flex',
  justifyContent: 'center',
}
const editForm = {
  marginTop: '1em',
  width: '70%',
}
export default class EditRooms extends React.Component {
  constructor(props) {
    super(props)
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onClickSubmit() {
    const building_id = $('#building-id').val();
    const room_id = $('#room-id').val();
    const description = $('#description').val();
    const newBuilding = {
      building_id,
      room_id,
      description,
    }
    const objId = new Mongo.ObjectID(this.props.result._id._str)
    Rooms.update({
        _id: objId,
      },
      {
        $set: newBuilding
      });
    FlowRouter.go('admin');
  }

  render() {
    return (
      <div style={editLayout}>
        <div style={editForm}>          
          <div className="input-field col l4">
            <input
              id="building-id"
              type="text"
              className="validate"
              defaultValue={ this.props.result.building_id }
            />
            <label className="active" htmlFor="building-id">Building ID</label>
          </div>
          <div className="input-field col l4">
            <input
              id="room-id"
              type="text"
              className="validate"
              defaultValue={ this.props.result.room_id }
            />
            <label className="active" htmlFor="room-id">Room ID</label>
          </div>
          <div className="input-field col l12">
            <input
              id="description"
              type="text"
              className="validate"
              defaultValue={ this.props.result.description }
            />
          <label className="active" htmlFor="description">Description</label>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={ this.onClickSubmit }
            >Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    )
  }
}

EditRooms.PropTypes = {
  result: PropTypes.object.isRequire,
}
