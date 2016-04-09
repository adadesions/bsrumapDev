import React from 'react';
import SearchRoomNumberResult from '../SearchResult/SearchRoomNumberResult'

const sizeInput = {
  height: '3em',
  fontSize: '32px',
}
const sizeText = {
  fontSize: '32px',
}
const paddingLayout = {
  padding: '4em',
}
const marginTable = {
  marginTop : '5em',
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
          <div style={sizeInput} className="input-field col s6">
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
