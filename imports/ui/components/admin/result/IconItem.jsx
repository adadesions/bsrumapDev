import React from 'react';

const styleIcon = {
  display: 'flex',
  justifyContent: 'space-around',
}
const icon = {
  cursor: 'pointer'
}
export default class IconItem extends React.Component {
  render() {
    return (
      <td>
        <div style={styleIcon}>
          <i style={icon} className="material-icons">mode_edit</i>
          <i style={icon} className="material-icons">delete</i>
        </div>
      </td>
    );
  }
}
