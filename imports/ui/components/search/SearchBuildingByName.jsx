import React, { PropTypes } from 'react';
import SearchBuildingResult from '../SearchResult/SearchBuildingResult.jsx';

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
export default class SearchBuildingByName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildingName: this.props.buildingName,
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange() {
    const buildingName = $('#buildingName').val();
    this.setState({
      buildingName
    })
  }

  render() {
    return (
      <div>
        <div style={paddingLayout} className="row">
          <div style={sizeInput} className="input-field col s12">
            <input
              style={sizeInput}
              id="buildingName"
              type="text"
              className="validate"
              onChange={this.onInputChange}
            />
          <label style={sizeText} htmlFor="buildingName">ชื่ออาคาร</label>
          </div>
          <table style={marginTable} className="striped">
            <SearchBuildingResult buildingName={this.state.buildingName} />
          </table>
        </div>
      </div>
    );
  }
}

SearchBuildingByName.PropTypes = {
  buildingName: PropTypes.string.isRequire,
}
