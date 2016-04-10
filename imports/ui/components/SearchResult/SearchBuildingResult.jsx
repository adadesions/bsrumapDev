import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Building } from '../../../api/collections/building.jsx';

const tableHead = {
  'fontSize': '20',
  'textAlign': 'center',
}
const setTextNameNumber = {
  fontSize: '20px',
  width: '20%',
  wrapWord: 'break-word',
  textAlign: 'center',
}
const setTextName = {
  fontSize: '20px',
  width: '80%',
  wrapWord: 'break-word',
}
const setTextHeadNameNumber = {
  fontSize: '20px',
  width: '50%',
  wrapWord: 'break-word',
  textAlign: 'center',
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
          <td style={setTextName}>{b.building_name}</td>
          <td style={setTextNameNumber}>{b.map_point}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <tbody>
        <tr style={tableHead}>
          <th style={setTextName}>ชื่ออาคาร</th>
          <th style={setTextHeadNameNumber}>เลขที่อาคารบนแผนที่</th>
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
