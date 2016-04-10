import React, { PropTypes } from 'react';
import { Mongo } from 'meteor/mongo';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Collection
import { Teachers } from '../../../../api/collections/teachers.jsx';

const editLayout = {
  display: 'flex',
  justifyContent: 'center',
}
const editForm = {
  marginTop: '1em',
  width: '70%',
}
export default class EditTeachers extends React.Component {
  constructor(props) {
    super(props)
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onClickSubmit() {
    const teacher_id = $('#teacher-id').val();
    const teacher_fullname = $('#teacher-name').val();
    const teacher_lastname = $('#teacher-lastname').val();
    const position = $('#position').val();
    const facuilty = $('#facuilty').val();
    const phone_number = $('#phone-number').val();
    const building_id = $('#building-id').val();
    const floor_id = $('#floor-id').val();
    const room_id = $('#room-id').val();
    const newBuilding = {
      teacher_id,
      teacher_fullname,
      teacher_lastname,
      position,
      facuilty,
      phone_number,
      building_id,
      floor_id,
      room_id,
    }
    const objId = new Mongo.ObjectID(this.props.result._id._str)
    Teachers.update({
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
          <div className="input-field col l6">
            <input
              id="teacher-id"
              type="text"
              className="validate"
              defaultValue={ this.props.result.teacher_id }
            />
            <label className="active" htmlFor="teacher-id">Teacher ID</label>
          </div>
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
              id="floor-id"
              type="text"
              className="validate"
              defaultValue={ this.props.result.floor_id }
            />
            <label className="active" htmlFor="floor-id">Floor ID</label>
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
              id="teacher-name"
              type="text"
              className="validate"
              defaultValue={ this.props.result.teacher_fullname }
            />
            <label className="active" htmlFor="teacher-name">Teacher Name</label>
          </div>
          <div className="input-field col l12">
            <input
              id="teacher-lastname"
              type="text"
              className="validate"
              defaultValue={ this.props.result.teacher_lastname }
            />
            <label className="active" htmlFor="teacher-lastname">Teacher Lastname</label>
          </div>
          <div className="input-field col l12">
            <input
              id="position"
              type="text"
              className="validate"
              defaultValue={ this.props.result.position }
            />
            <label className="active" htmlFor="position">Position</label>
          </div>
          <div className="input-field col l12">
            <input
              id="facuilty"
              type="text"
              className="validate"
              defaultValue={ this.props.result.facuilty }
            />
            <label className="active" htmlFor="facuilty">Facuilty</label>
          </div>
          <div className="input-field col l12">
            <input
              id="phone-number"
              type="text"
              className="validate"
              defaultValue={ this.props.result.phone_number }
            />
            <label className="active" htmlFor="phone-number">Phone Number</label>
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

EditTeachers.PropTypes = {
  result: PropTypes.object.isRequire,
}
