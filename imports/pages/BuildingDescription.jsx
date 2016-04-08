import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';

class BuildingDescription extends React.Component {
  render() {
    return (
      <section>
        <center>
          <h1>Description</h1>
          <h3>
            Building {this.props.buildingId}
          </h3>
        </center>
      </section>
    )
  }
}

BuildingDescription.PropTypes = {
  buildingId: PropTypes.any.isRequire,
}

export default createContainer(() => {  
  return {
    buildingId: FlowRouter.getParam('id'),
  }
}, BuildingDescription);
