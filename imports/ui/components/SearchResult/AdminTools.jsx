import React from 'react';
import { Meteor } from 'meteor/meteor';

import IconItem from '../admin/result/IconItem.jsx';

const AdminTools = (itemId, collection) => {
  const isAdmin = Meteor.user().profile.isAdmin;
  if( isAdmin ) {
    return (
       <IconItem id={ itemId } collection={ collection } />
    );
  }
}

export default AdminTools
