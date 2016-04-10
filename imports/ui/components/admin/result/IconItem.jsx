import React from 'react';

const styleIcon = {
  display: 'flex',
  justifyContent: 'space-around',
}
export default class IconItem extends React.Component {
  render() {
    return (
      <td>
        <div style={styleIcon}>
          <i className="material-icons">mode_edit</i>
          <i className="material-icons">delete</i>
        </div>
      </td>
    );
  }
}
