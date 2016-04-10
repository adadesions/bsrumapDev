import React from 'react';
import SearchRoomNameResult from '../SearchResult/SearchRoomNameResult'

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
export default class SearchRoomByName extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      roomName: ''
    }
  }

  onInputChange() {
    const roomName = $('#roomName').val();
    this.setState({
      roomName
    })
  }

  render() {
    return (
      <div>
        <div style={paddingLayout} className="row">
          <div style={sizeInput} className="input-field col s6">
            <input
              style={sizeInput}
              id="roomName"
              type="text"
              className="validate"
              onChange={this.onInputChange}
              />
            <label style={sizeText} htmlFor="numRoom">ชื่อห้อง</label>
          </div>

          <table style={marginTable} className="striped">
            <SearchRoomNameResult roomName={this.state.roomName}/>
          </table>
        </div>
      </div>
    );
  }
}
