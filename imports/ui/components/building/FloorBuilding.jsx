import React from 'react';

const justifyCard = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: '4em',
  paddingRight: '3em',
}
const setTextCard = {
  fontSize: '46px',
  lineHeight: '1.8em',
}
const setColorIcon = {
  color: '#fff',
}

export default class FloorBuilding extends React.Component {
  
  render() {
    return (
      <div id="floor" className="row">
        <div className="col s12">
          <div style={justifyCard} className="card-panel teal z-depth-1">
            <span style={setTextCard} className="white-text">Floor 1 ชั้นโรงอาหาร</span>
            <i style={setColorIcon} className="large material-icons">send</i>
          </div>
        </div>
      </div>
    );
  }
}
