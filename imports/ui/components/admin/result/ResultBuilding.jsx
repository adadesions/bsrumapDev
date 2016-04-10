import React, { PropTypes } from 'react';
import IconItem from '../result/IconItem.jsx'

const textDetailTable = {
  fontSize: '10px',
}
export default class ResultBuilding extends React.Component {
  constructor(props) {
    super(props);
    this.getRenderResult =  this.getRenderResult.bind(this);
  }

  getRenderResult() {
    return this.props.result.map((r,i) => {
      return (
        <tr key={r._id} style={textDetailTable}>
          <td>{ i+1 }</td>
          <td>{ r.building_id }</td>
          <td>{ r.building_name }</td>
          <td>{ r.description }</td>
          <td>{ r.picture }</td>
          <td>{ r.map_point }</td>
          <td>{ r.floor_sum }</td>
          <IconItem id={ r._id } collection="building" />
        </tr>
      )
    })
  }

  render() {
    return (
      <tbody>
        {this.getRenderResult()}
      </tbody>
    );
  }
}

ResultBuilding.PropTypes = {
  result: PropTypes.array.isRequire,
}
