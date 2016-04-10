import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Mongo } from 'meteor/mongo';

import EditBuilding from '../ui/components/admin/edit/EditBuilding.jsx';
import EditFloors from '../ui/components/admin/edit/EditFloors.jsx';
import EditRooms from '../ui/components/admin/edit/EditRooms.jsx';
import EditTeachers from '../ui/components/admin/edit/EditTeachers.jsx';

// Collection
import { Building } from '../api/collections/building.jsx';
import { Floors } from '../api/collections/floors.jsx';
import { Rooms } from '../api/collections/rooms.jsx';
import { Teachers } from '../api/collections/teachers.jsx';

class AdminEdit extends React.Component {
  constructor(props) {
    super(props);
    this.getRenderEditForm = this.getRenderEditForm.bind(this);
  }

  getRenderEditForm() {
    const collection = this.props.collection;
    const result = this.props.result;
    switch(collection) {
      case 'building':
            return <EditBuilding result={ result }/>
            break;
      case 'floors':
            return <EditFloors result={ result }/>
            break;
      case 'rooms':
            return <EditRooms result={ result }/>
            break;
      case 'teachers':
            return <EditTeachers result={ result }/>
            break;
    }
  }

  render() {
    return (
      this.getRenderEditForm()
    )
  }
}

AdminEdit.PropTypes = {
  id: PropTypes.string.isRequire,
  collection: PropTypes.string.isRequire,
}

export default createContainer((props) => {
  const id = new Mongo.ObjectID(props.id);
  const collection = props.collection;  
  let result = {};

  switch(collection) {
    case 'building':
          result = Building.findOne({_id:id});
          break;
    case 'floors':
          result = Floors.findOne({_id:id});
          break;
    case 'rooms':
          result = Rooms.findOne({_id:id});
          break;
    case 'teachers':
          result = Teachers.findOne({_id:id});
          break;
  }
  return {
    result,
  }
}, AdminEdit);
