import React from 'react';

const editLayout = {
  display: 'flex',
  justifyContent: 'center',
}
const editForm = {
  marginTop: '1em',
  width: '70%',
}
export default class EditBuilding extends React.Component {
  render() {
    return (
      <div style={editLayout}>
        <div style={editForm}>
          <div className="input-field col l6">
            <input disabled id="id" value="1" type="text" className="validate"/>
            <label className="active" for="id">ID</label>
          </div>
          <div className="input-field col l6">
            <input id="building-id" type="text" className="validate"/>
            <label className="active" for="building-id">Building ID</label>
          </div>
          <div className="input-field col l12">
            <input id="building-name" type="text" className="validate"/>
            <label className="active" for="building-name">Building Name</label>
          </div>
          <div className="input-field col l12">
            <input id="discription-building" type="text" className="validate"/>
            <label className="active" for="discription-building">Discription</label>
          </div>
          <div className="input-field col l12">
            <input id="map-point" type="text" className="validate"/>
            <label className="active" for="map-point">Map Point</label>
          </div>
          <div className="input-field col l12">
            <input id="floor-sum" type="text" className="validate"/>
            <label className="active" for="floor-sum">Floor Sum</label>
          </div>
        </div>
      </div>
    )
  }
}
