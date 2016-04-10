import React from 'react';
import IconItem from '../result/IconItem.jsx'

const textDetailTable = {
  fontSize: '10px',
}
const alignText = {
  textAlign: 'center',
}
export default class ResultRooms extends React.Component {
  render() {
    return (
      <tr style={textDetailTable}>
        <td style={alignText}>test</td>
        <td style={alignText}>test</td>
        <td style={alignText}>test</td>
        <td>test</td>
        <IconItem />
      </tr>
    );
  }
}
