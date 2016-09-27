import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Rooms } from '../../../api/collections/rooms.jsx';
import IconItem from '../admin/result/IconItem.jsx';

const fontSize18 = {
  'fontSize': '30px',
  'fontWeight': 'bold'
}

const alignCenter = {
  'textAlign': 'center'
}
const styleCol = {
  width: '20%',
  fontSize: '20px',
}
const styleColDetail = {
  width: '40%',
  fontSize: '20px',
}
class SearchRoomNameResult extends React.Component {
  constructor(props) {
    super(props);
    this.getRenderResult = this.getRenderResult.bind(this);
  }

  getRenderHeader(description) {
    return (
      <tr>
        <td>{description}</td>
      </tr>
    )
  }

  getRenderResult() {
    const splitToBuilding = (roomNumber) => {
      let result = '';
      if(roomNumber.length >= 4) {
        result = `${roomNumber.charAt(0)}${roomNumber.charAt(1)}`
      }
      else if(roomNumber.length === 3) {
        result = `${roomNumber.charAt(0)}`
      }
      return result;
    }

    const splitToFloor = (roomNumber) => {
      let result = '';
      if(roomNumber.length === 5) {
        result = `${roomNumber.charAt(2)}${roomNumber.charAt(3)}`
      }
      if(roomNumber.length === 4) {
        result = `${roomNumber.charAt(2)}`
      }
      else if(roomNumber.length === 3) {
        result = `${roomNumber.charAt(1)}`
      }
      return result;
    }

    const splitToRoom = (roomNumber) => {
      const lastIndex = (roomNumber.length) - 1;
      let result = roomNumber.charAt(lastIndex);
      if(result === '0') {
        result = '-'
      }
      return result;
    }

    const showAdminTools = (itemId, collection) => {
      const isAdmin = Meteor.user().profile.isAdmin;
      if( isAdmin ) {
        return (
           <IconItem id={ itemId } collection={ collection } />
        );
      }
    }

    return this.props.result.map(r => {
      return (
          <tr key={r._id} style={fontSize18} className="tr-align-td-center" >
            <td style={styleCol}>อาคาร {r.building_id}</td>
            <td style={styleCol}>ชั้น {splitToFloor(r.room_id)}</td>
            <td style={styleCol}>ห้อง {splitToRoom(r.room_id)}</td>
            <td style={styleColDetail}>{r.description}</td>
            <td>
              { showAdminTools(r._id._str, 'rooms') }
            </td>
          </tr>
      )
    })
  }

  componentWillReceiveProps() {
    this.setState ({
      roomNumber: this.props.roomNumber
    })
  }

  render() {
    return (
      <tbody>
        {this.getRenderResult()}
      </tbody>
    )
  }
}

SearchRoomNameResult.PropTypes = {
  roomName: PropTypes.string.isRequire,
  result: PropTypes.array.isRequire
}

export default createContainer((props) => {
  const roomName = props.roomName;
  const rooms = Rooms.find().fetch();
  const findRoomName = (rooms) => {
    let result = [];
    rooms.map((r) => {
      const includeRoomNumber = r.description.includes(roomName)
      if(includeRoomNumber) {
        result.push(r)
      }
    })
    return result;
  }
  const isRoomNumberEmpty = !!roomName

  let result = [];
  if(isRoomNumberEmpty) {
    result = findRoomName(rooms);
  }
  else {
    result = Rooms.find({}, { limit: 100 }).fetch();
  }
  return {
    result,
  }
}, SearchRoomNameResult)
