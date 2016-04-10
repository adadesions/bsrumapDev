import React from 'react';
import MenuAdmin from '../ui/components/admin/menu/MenuAdmin.jsx';
import TableBuilding from '../ui/components/admin/table/TableBuilding.jsx';
import TableFloors from '../ui/components/admin/table/TableFloors.jsx';
import TableRooms from '../ui/components/admin/table/TableRooms.jsx';
import TableTeachers from '../ui/components/admin/table/TableTeachers.jsx';
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
