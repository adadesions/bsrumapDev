import React from 'react';
import SearchRoomNameResult from '../SearchResult/SearchRoomNameResult'

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
          <div style={sizeInput} className="input-field col s12">
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
