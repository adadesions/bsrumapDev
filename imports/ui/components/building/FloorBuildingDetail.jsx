import React, { PropTypes } from 'react';
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
  constructor(props) {
    super(props);
    this.onClickBack = this.onClickBack.bind(this);
    this.getRenderRooms = this.getRenderRooms.bind(this);
  }

  onClickBack(){
    FlowRouter.go('floorBuilding');
  }

  getRenderRooms() {
    return this.props.rooms.map(r => {
      return (
        <tr key={r._id} style={rowTable}>
          <td style={alignRoomNumber}>
            {r.room_id}
          </td>
          <td style={alignRoomName}>
            {r.description}
          </td>
        </tr>
      )
    });
  }

  render() {
    return (
        <div style={paddingLayout} className="row">
          <table className="striped">
            <tbody>
              {this.getRenderRooms()}
            </tbody>
          </table>
        </div>
    );
  }
}

FloorBuildingDetail.PropTypes = {
  rooms: PropTypes.array.isRequire,
}
