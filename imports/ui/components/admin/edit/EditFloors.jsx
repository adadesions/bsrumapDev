import React from 'react';

const editLayout = {
  display: 'flex',
  justifyContent: 'center',
}
const editForm = {
  marginTop: '1em',
  width: '70%',
}
export default class EditFloors extends React.Component {
  render() {
    return (
      <div style={editLayout}>
        <div style={editForm}>
          <div className="input-field col l4">
            <input disabled id="id" value="1" type="text" className="validate"/>
            <label className="active" for="id">ID</label>
          </div>
          <div className="input-field col l4">
            <input id="building-id" type="text" className="validate"/>
            <label className="active" for="building-id">Building ID</label>
          </div>
          <div className="input-field col l4">
            <input id="floor-id" type="text" className="validate"/>
            <label className="active" for="floor-id">Floor ID</label>
          </div>
          <div className="input-field col l12">
            <input id="discription-floor" type="text" className="validate"/>
            <label className="active" for="discription-floor">Discription</label>
          </div>
        </div>
      </div>
    )
  }
}
