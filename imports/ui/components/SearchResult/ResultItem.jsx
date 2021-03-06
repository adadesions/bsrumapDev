import React,{ PropTypes } from 'react'
import IconItem from '../admin/result/IconItem.jsx';
import { FlowRouter } from 'meteor/kadira:flow-router';

const rowTable = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: '2em',
  paddingRight: '2em',
  height: '1em',
  alignItems: 'center',
};
const tableIcon = {
  float: 'right',
  cursor: 'pointer',
};
const setColorIcon = {
  color: '#009688',
};
const setTextFloor = {
  fontSize: '20px',
}
export default class ResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      _id: this.props._id,
    }
    this.onClickIcon = this.onClickIcon.bind(this);
  }

  onClickIcon() {
    const tid = this.state._id
    const path = FlowRouter.path('teacherDetail',{ tid })
    FlowRouter.go(path)
  }

  componentWillReceiveProps() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const _id = this.props._id;
    this.setState({
      firstName,
      lastName
    })
  }

  render() {
    const showAdminTools = (itemId, collection) => {
      const isAdmin = Meteor.user().profile.isAdmin;
      const isAdminPath = FlowRouter.current().oldRoute.name === 'admin';
      const isRenderAdminTools = isAdmin && isAdminPath;
      if( isRenderAdminTools ) {
        return (
          <td>
            <IconItem id={ itemId } collection={ collection } />
          </td>
        );
      }
    }

    return (
      <tr style={rowTable}>
        { showAdminTools(this.state._id, 'teachers') }
        <td style={setTextFloor}>
          {this.state.firstName} {this.state.lastName}
        </td>
        <td style={tableIcon}>
          <i
            onClick={this.onClickIcon}
            style={setColorIcon}
            className="material-icons">
            send
          </i>
        </td>
      </tr>
    )
  }
}

ResultItem.PropTypes = {
  firstName: PropTypes.string.isRequire,
  lastName: PropTypes.string.isRequire,
  _id: PropTypes.string.isRequire,
}
