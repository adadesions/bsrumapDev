import React from 'react';
import IconItem from '../result/IconItem.jsx'

const textDetailTable = {
  fontSize: '10px',
}
export default class ResultRooms extends React.Component {
  render() {
    return (
      <tr style={textDetailTable}>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <IconItem />
      </tr>
    );
  }
}
