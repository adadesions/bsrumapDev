import React, { PropTypes } from 'react';
import IconItem from '../result/IconItem.jsx'

const textDetailTable = {
  fontSize: '10px',
}
export default class ResultFloors extends React.Component {
  constructor(props) {
    super(props);
    this.getRenderResult =  this.getRenderResult.bind(this);
  }

  getRenderResult() {
    return this.props.result.map((r,i) => {
      return (
        <tr key={r._id} style={textDetailTable}>
          <td>{ i+1 }</td>
          <td>{ r.floor_id }</td>
          <td>{ r.building_id }</td>
          <td>{ r.description }</td>
          <IconItem id={ r._id } collection="floors" />
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

ResultFloors.PropTypes = {
  result: PropTypes.array.isRequire,
}
