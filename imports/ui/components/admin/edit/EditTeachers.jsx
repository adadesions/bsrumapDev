import React from 'react';

const editLayout = {
  display: 'flex',
  justifyContent: 'center',
}
const editForm = {
  marginTop: '1em',
  width: '70%',
}
export default class EditTeachers extends React.Component {
  render() {
    return (
      <div style={editLayout}>
        <div style={editForm}>
          <div className="input-field col l6">
            <input disabled id="id" value="1" type="text" className="validate"/>
            <label className="active" for="id">ID</label>
          </div>
          <div className="input-field col l6">
            <input id="teacher-id" type="text" className="validate"/>
            <label className="active" for="teacher-id">Teacher ID</label>
          </div>
          <div className="input-field col l4">
            <input id="building-id" type="text" className="validate"/>
            <label className="active" for="building-id">Building ID</label>
          </div>
          <div className="input-field col l4">
            <input id="floor-id" type="text" className="validate"/>
            <label className="active" for="floor-id">Floor ID</label>
          </div>
          <div className="input-field col l4">
            <input id="room-id" type="text" className="validate"/>
            <label className="active" for="room-id">Room ID</label>
          </div>
          <div className="input-field col l12">
            <input id="teacher-name" type="text" className="validate"/>
            <label className="active" for="teacher-name">Teacher Name</label>
          </div>
          <div className="input-field col l12">
            <input id="teacher-lastname" type="text" className="validate"/>
            <label className="active" for="teacher-lastname">Teacher Lastname</label>
          </div>
          <div className="input-field col l12">
            <input id="position" type="text" className="validate"/>
            <label className="active" for="position">Position</label>
          </div>
          <div className="input-field col l12">
            <input id="facuilty" type="text" className="validate"/>
            <label className="active" for="facuilty">Facuilty</label>
          </div>
          <div className="input-field col l12">
            <input id="phone-number" type="text" className="validate"/>
            <label className="active" for="phone-number">Phone Number</label>
          </div>
        </div>
      </div>
    )
  }
}
