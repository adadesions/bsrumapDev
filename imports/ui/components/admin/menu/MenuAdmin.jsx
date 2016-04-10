import React from 'react';

const justifyCard = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '1.5em',
  cursor: 'pointer',
}
const setTextFloor = {
  fontSize: '22px',
  fontWeight: 'bold',
}
const paddingLayout = {
  padding: '1em',
}
export default class MenuAdmin extends React.Component {
  render() {
    return (
      <div style={paddingLayout}>
        <div id='building' style={justifyCard} className="card-panel teal">
          <span style={setTextFloor} className="white-text">Building</span>
        </div>
        <div id='floors' style={justifyCard} className="card-panel teal">
          <span style={setTextFloor} className="white-text">Floors</span>
        </div>
        <div id='rooms' style={justifyCard} className="card-panel teal">
          <span style={setTextFloor} className="white-text">Rooms</span>
        </div>
        <div id='teachers' style={justifyCard} className="card-panel teal">
          <span style={setTextFloor} className="white-text">Teachers</span>
        </div>
      </div>
    );
  }
}
