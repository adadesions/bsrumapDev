import React,{ PropTypes } from 'react';


const justifyCard = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '4em',
  paddingRight: '3em',
}
const setTextFloor = {
  fontSize: '26px',
  fontWeight: 'bold',
}
const setTextNameFloor = {
  fontSize: '22px',
  width: '60%',
  wrapWord: 'break-word',
}
const setColorIcon = {
  color: '#fff',
}
const paddingLayout = {
  paddingRight: '1em',
  paddingLeft: '1em',
  paddingTop: '0.5em',
}
export default class FloorBuilding extends React.Component {

  render() {
    return (
      <div style={paddingLayout}>
        <div style={justifyCard} className="card-panel teal">
          <span style={setTextFloor} className="white-text">Floor 1</span>
          <span style={setTextNameFloor} className="white-text">ชั้นโรงอาหาร</span>
        </div>
      </div>
    );
  }
}
