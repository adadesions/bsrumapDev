import React, { PropTypes } from 'react';
import MenuAdmin from '../ui/components/admin/menu/MenuAdmin.jsx';
import TableBuilding from '../ui/components/admin/table/TableBuilding.jsx';
import TableFloors from '../ui/components/admin/table/TableFloors.jsx';
import TableRooms from '../ui/components/admin/table/TableRooms.jsx';
import TableTeachers from '../ui/components/admin/table/TableTeachers.jsx';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state  = {
      renderTable: 'building',
    }
    this.getRenderTables = this.getRenderTables.bind(this);
  }

  componentDidMount() {
    const binding = (ele, table) => {
      ele.bind('click', () => {
        this.setState({renderTable: table})
      })
    }
    const building = $('#building');
    const floors = $('#floors');
    const rooms = $('#rooms');
    const teachers = $('#teachers');
    
    binding(building, 'building');
    binding(floors, 'floors');
    binding(rooms, 'rooms');
    binding(teachers, 'teachers');

  }

  getRenderTables() {
    const render = this.state.renderTable
    switch(render) {
      case 'building':
            return <TableBuilding />;
            break;
      case 'floors':
            return <TableFloors />;
            break;
      case 'rooms':
            return <TableRooms />;
            break;
      case 'teachers':
            return <TableTeachers />;
            break;
    }
  }

  render() {
    return (
      <div className="admin-layout">
        <div className="row">
          <div className="col l2">
            <MenuAdmin />
          </div>
          <div className="col l10">
            { this.getRenderTables() }
          </div>
        </div>
      </div>
    );
  }
}
