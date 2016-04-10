import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Building } from '../../../api/collections/building.jsx';
import { Floors } from '../../../api/collections/floors.jsx';
import { Rooms } from '../../../api/collections/rooms.jsx';

class BuildingDescription extends React.Component {
  render() {
    return (
      <section>
        <center>
          <div>
            <h1>Description</h1>
            <h3>
              Building {this.props.buildingId}
            </h3>
            <img src={this.props.buildingImg} alt="" />
          </div>
        </center>
      </section>
    )
  }
}

BuildingDescription.PropTypes = {
  buildingId: PropTypes.string.isRequire,
  building: PropTypes.object.isRequire,
}

export default createContainer(() => {
  const buildingId = FlowRouter.getParam('id');
  const building = Building.findOne({building_id: buildingId});
  let buildingImg = '';
  if (building){
    buildingImg = `/buildingDescription/${building.description}`;
  }

  return {
    buildingId,
    building,
    buildingImg,
  }
}, BuildingDescription);
