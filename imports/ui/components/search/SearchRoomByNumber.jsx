import React from 'react';
import SearchRoomNumberResult from '../SearchResult/SearchRoomNumberResult'

const sizeInput = {
  height: '3em',
  fontSize: '22px',
}
const sizeText = {
  fontSize: '22px',
}
const paddingLayout = {
  paddingLeft: '1em',
  paddingRight: '1em',
  paddingBottom: '1em',
  paddingTop: '2em',
}
const marginTable = {
  marginTop : '3em',
  fontSize: '40px',
}
export default class SearchRoomByNumber extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      roomNumber: ''
    }
  }

  onInputChange() {
    const roomNumber = $('#roomNumber').val();
    this.setState({
      roomNumber
    })
  }

  render() {
    return (
      <div>
        <div style={paddingLayout} className="row">
          <div style={sizeInput} className="input-field col s12">
            <input
              style={sizeInput}
              id="roomNumber"
              type="text"
              className="validate"
              onChange={this.onInputChange}
              />
            <label style={sizeText} htmlFor="numRoom">เลขห้อง</label>
          </div>

          <table style={marginTable} className="striped">
            <SearchRoomNumberResult roomNumber={this.state.roomNumber}/>
          </table>
        </div>
      </div>
    );
  }
}
