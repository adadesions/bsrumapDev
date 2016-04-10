import React from 'react';
import IconItem from '../result/IconItem.jsx'

const textDetailTable = {
  fontSize: '10px',
}
export default class ResultTeachers extends React.Component {
  constructor(props) {
    super(props);
    this.getRenderResult =  this.getRenderResult.bind(this);
  }

  getRenderResult() {
    return this.props.result.map((r,i) => {
      return (
        <tr key={r._id} style={textDetailTable}>
          <td>{ i+1 }</td>
          <td>{ r.teacher_id }</td>
          <td>{ r.teacher_fullname }</td>
          <td>{ r.teacher_lastname }</td>
          <td>{ r.position }</td>
          <td>{ r.facuilty }</td>
          <td>{ r.phone_number }</td>
          <td>{ r.building_id }</td>
          <td>{ r.floor_id }</td>
          <td>{ r.room_id }</td>
          <IconItem id={ r._id } collection="teachers" />
        </tr>
      )
    })
  }

  render() {
    return (
      <tbody>
        {  this.getRenderResult() }
      </tbody>
    );
  }
}
