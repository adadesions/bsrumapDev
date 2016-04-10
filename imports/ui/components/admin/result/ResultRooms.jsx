import React, { PropTypes } from 'react';
import IconItem from '../result/IconItem.jsx'

const textDetailTable = {
  fontSize: '10px',
}
const alignText = {
  textAlign: 'center',
}
export default class ResultRooms extends React.Component {
  constructor(props) {
    super(props);
    this.getRenderResult =  this.getRenderResult.bind(this);
  }

  getRenderResult() {
    return this.props.result.map((r,i) => {
      return (
        <tr key={r._id} style={textDetailTable}>
          <td style={alignText} >{ i+1 }</td>
          <td style={alignText} >{ r.room_id }</td>
          <td style={alignText} >{ r.building_id }</td>
          <td style={alignText} >{ r.description }</td>
          <IconItem id={ r._id._str } collection="rooms" />
        </tr>
      )
    })
  }

  render() {
    return (
      <tbody>
        { this.getRenderResult() }
      </tbody>
    );
  }
}
