import React from 'react';
import MenuAdmin from '../ui/components/admin/menu/MenuAdmin.jsx';
import TableBuilding from '../ui/components/admin/table/TableBuilding.jsx';
import TableFloors from '../ui/components/admin/table/TableFloors.jsx';
import TableRooms from '../ui/components/admin/table/TableRooms.jsx';
import TableTeachers from '../ui/components/admin/table/TableTeachers.jsx';

import EditBuilding from '../ui/components/admin/edit/EditBuilding.jsx';
import EditFloors from '../ui/components/admin/edit/EditFloors.jsx';
import EditRooms from '../ui/components/admin/edit/EditRooms.jsx';
import EditTeachers from '../ui/components/admin/edit/EditTeachers.jsx';

export default class Admin extends React.Component {

  render() {
    return (
      <div className="admin-layout">
        <div className="row">
          <div className="col l2">
            <MenuAdmin />
          </div>
          <div className="col l10">
            <TableBuilding />
          </div>
        </div>
      </div>
    );
  }
}
