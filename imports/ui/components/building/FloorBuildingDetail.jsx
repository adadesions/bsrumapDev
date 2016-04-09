import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

const paddingLayout = {
  padding: '4em',
}
const textSizeTable = {
  fontSize: '40px',
}
const rowTable = {
  display: 'flex',
  justifyContent: 'center',
  paddingLeft: '2em',
  paddingRight: '2em',
  alignItems: 'center',
}
const styleButton = {
  marginTop: '1em',
  fontSize: '28px',
  width: '100%',
  height: '3em',
  paddingRight: '1em',
  paddingLeft: '1em',
}
const styleTextButton = {
  marginTop: '0.8em',
  fontWeight: 'bold',
}
const alignTableData = {
  textAlign: 'center',
}

export default class FloorBuildingDetail extends React.Component {
  constructor() {
    super();
    this.onClickBack = this.onClickBack.bind(this);
  }

  onClickBack(){
    FlowRouter.go('floorBuilding');
  }

  render() {
    return (
        <div style={paddingLayout} className="row">
          <table style={textSizeTable} className="striped">
            <tbody>
              <tr style={rowTable}>
                <td>Alvin</td>
              </tr>
              <tr style={rowTable}>
                <td>Alvin</td>
              </tr>
              <tr style={rowTable}>
                <td>Alvin</td>
              </tr>
            </tbody>
          </table>
        </div>
    );
  }
}
