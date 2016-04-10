import React, { PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

const justifyCard ={
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '3em',
  paddingRight: '3em',
}
const setTextCard = {
  fontSize: '22px',
}
const setColorIcon = {
  color: '#fff',
}

export default class SearchOption extends React.Component {
  constructor(props) {
    super(props);
    this.getLabelName = this.getLabelName.bind(this);
    this.onClickCard = this.onClickCard.bind(this);
  }

  onClickCard(){
    const routeSet = {
      teacher: 'searchTeacher',
      building: 'searchBuildingByName',
      roomNumber: 'searchRoomByNumber',
      roomName: 'searchRoomByName',
    }
    const prop = this.props.name;
    FlowRouter.go(routeSet[prop]);
  }

  getLabelName() {
    const labelSet = {
      teacher: 'ค้นหาอาจารย์',
      building: 'ค้นหาอาคารด้วยชื่อ',
      roomNumber: 'ค้นหาห้องด้วยเลขห้อง',
      roomName: 'ค้นหาห้องด้วยชื่อห้อง',
    }
    const prop = this.props.name;

    return labelSet[prop];
  }

  render() {
    return (
      <div className="col s12">
        <div onClick={this.onClickCard} style={justifyCard} className="card-panel teal z-depth-1">
          <span style={setTextCard} className="white-text">
            {this.getLabelName()}
          </span>
          <i style={setColorIcon} className="material-icons">send</i>
        </div>
      </div>
    );
  }
}

SearchOption.PropTypes = {
  name: PropTypes.string.isRequire
}
