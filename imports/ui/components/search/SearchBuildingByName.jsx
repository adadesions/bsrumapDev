import React from 'react';

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
export default class SearchBuildingByName extends React.Component {
  render() {
    return (
      <div>
        <div style={paddingLayout} className="row">
          <div style={sizeInput} className="input-field col s12">
            <input style={sizeInput} id="buildingName" type="text" className="validate"/>
            <label style={sizeText} htmlFor="buildingName">ชื่อาคาร</label>
          </div>

          <table style={marginTable} className="striped">
            <tbody>
              <tr>
                <td>Alvin</td>
              </tr>
              <tr>
                <td>Alan</td>
              </tr>
              <tr>
                <td>Jonathan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
