import React,{ PropTypes } from 'react'

const rowTable = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: '2em',
  paddingRight: '2em',
  alignItems: 'center',
};
const tableIcon = {
  float: 'right',
  cursor: 'pointer',
};
const setColorIcon = {
  color: '#009688',
};

export default class ResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
    }
  }

  onClickIcon() {
    FlowRouter.go('teacherDetail')
  }

  componentWillReceiveProps() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    this.setState({
      firstName,
      lastName
    })
  }

  render() {
    return (
      <tr style={rowTable}>
        <td>
          {this.state.firstName} {this.state.lastName}
        </td>
        <td style={tableIcon}>
          <i
            onClick={this.onClickIcon}
            style={setColorIcon}
            className="large material-icons">
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
}
