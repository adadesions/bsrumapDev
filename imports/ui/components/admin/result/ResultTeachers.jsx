import React from 'react';
import IconItem from '../result/IconItem.jsx'

const textDetailTable = {
  fontSize: '10px',
}
const alignText = {
  textAlign: 'center',
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
          <td style={alignText} >{ i+1 }</td>
          <td style={alignText} >{ r.teacher_id }</td>
          <td style={alignText} >{ r.teacher_fullname }</td>
          <td style={alignText} >{ r.teacher_lastname }</td>
          <td style={alignText} >{ r.position }</td>
          <td style={alignText} >{ r.facuilty }</td>
          <td style={alignText} >{ r.phone_number }</td>
          <td style={alignText} >{ r.building_id }</td>
          <td style={alignText} >{ r.floor_id }</td>
          <td style={alignText} >{ r.room_id }</td>
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
