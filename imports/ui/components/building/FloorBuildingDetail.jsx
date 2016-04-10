import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

const paddingLayout = {
  padding: '1em',
}
const rowTable = {
  display: 'flex',
  justifyContent: 'space-between',
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
const alignRoomName = {
  width: '63%',
  wrapWord: 'break-word',
  fontSize: '22px',
}
const alignRoomNumber = {
  width: '37%',
  wrapWord: 'break-word',
  textAlign: 'center',
  fontSize: '26px',
  fontWeight: 'bold',
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
          <table className="striped">
            <tbody>
              <tr style={rowTable}>
                <td style={alignRoomNumber}>231</td>
                <td style={alignRoomName}>ห้องอาจารย์คณะวิทย์</td>
              </tr>
            </tbody>
          </table>
        </div>
    );
  }
}
