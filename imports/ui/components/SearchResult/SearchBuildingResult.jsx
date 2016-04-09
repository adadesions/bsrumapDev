import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Building } from '../../../api/collections/building.jsx';

const tableHead = {
  'fontSize': '24',
  'textAlign': 'center',
}

class SearchBuildingResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildingName: this.props.buildingName
    }
    this.getRenderItem = this.getRenderItem.bind(this);
  }

  componentWillReceiveProps() {
    this.setState ({
      buildingName: this.props.buildingName
    })
  }

  getRenderItem() {
    return this.props.result.map(b => {
      return (
        <tr key={b._id}>
          <td>{b.building_name}</td>
          <td>{b.map_point}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <tbody>
        <tr style={tableHead}>
          <th>ชื่ออาคาร</th>
          <th>เลขที่อาคารบนแผนที่</th>
        </tr>
        {this.getRenderItem()}
      </tbody>
    )
  }
}

SearchBuildingResult.PropTypes = {
  buildingName: PropTypes.string.isRequire,
}

export default createContainer((props) => {
  const buildingName = props.buildingName;
  const building = Building.find().fetch();
  const findBuilding = (building) => {
    let result = [];
    building.map((b) => {
      const includeBuildlingName = b.building_name.includes(buildingName)
      if(includeBuildlingName) {
        result.push(b)
      }
    })
    return result;
  }
  const isBuildingNameEmpty = !!buildingName

  let result = [];
  if(isBuildingNameEmpty) {
    result = findBuilding(building);
  }
  else {
    result = building;
  }
  return {
    result,
  }
}, SearchBuildingResult);
