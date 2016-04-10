import React, { PropTypes } from 'react';
import { Mongo } from 'meteor/mongo';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Collection
import { Building } from '../../../../api/collections/building.jsx';

const editLayout = {
  display: 'flex',
  justifyContent: 'center',
}
const editForm = {
  marginTop: '1em',
  width: '70%',
}
export default class EditBuilding extends React.Component {
  constructor(props) {
    super(props)
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onClickSubmit() {
    const building_id = $('#building-id').val();
    const building_name = $('#building-name').val();
    const description = $('#description').val();
    const map_point = $('#map-point').val();
    const floor_sum = $('#floor-sum').val();
    const newBuilding = {
      building_id,
      building_name,
      description,
      map_point,
      floor_sum,
    }    
    const objId = new Mongo.ObjectID(this.props.result._id._str)
    Building.update({
        _id: objId,
      },
      {
        $set: newBuilding
      });
    FlowRouter.go('admin');
  }

  render() {
    return (
      <div style={editLayout}>
        <div style={editForm}>
          <div className="input-field col l6">
            <input
              id="building-id"
              type="text"
              className="validate"
              defaultValue={ this.props.result.building_id }
            />
            <label className="active" htmlFor="building-id">Building ID</label>
          </div>
          <div className="input-field col l12">
            <input
              id="building-name"
              type="text"
              className="validate"
              defaultValue={ this.props.result.building_name }
            />
            <label className="active" htmlFor="building-name">Building Name</label>
          </div>
          <div className="input-field col l12">
            <input
              id="description"
              type="text"
              className="validate"
              defaultValue={ this.props.result.description }
            />
            <label className="active" htmlFor="description">Description</label>
          </div>
          <div className="input-field col l12">
            <input
              id="map-point"
              type="text"
              className="validate"
              defaultValue={ this.props.result.map_point }
            />
            <label className="active" htmlFor="map-point">Map Point</label>
          </div>
          <div className="input-field col l12">
            <input
              id="floor-sum"
              type="text"
              className="validate"
              defaultValue={ this.props.result.floor_sum }
            />
            <label className="active" htmlFor="floor-sum">Floor Sum</label>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={ this.onClickSubmit }
            >Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    )
  }
}

EditBuilding.PropTypes = {
  result: PropTypes.object.isRequire,
}
