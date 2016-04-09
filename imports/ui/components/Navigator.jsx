import React from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Menu extends React.Component {
  constructor() {
    super();

    const isRoot = FlowRouter.getRouteName() === 'root';

    let displayName = "";
    if(!isRoot) {
      const path = FlowRouter.current().path;
      displayName = this.splitString(path);
    }
    else {
      displayName = "BSRUMAP";
    }

    this.state = {
      displayName,
    }
  }

  splitString(path) {
    let newPath = path.split('/');
    if(!newPath[0]) {
      newPath.shift();
    }

    if(newPath.length > 1) {
      return `${newPath[0].toUpperCase()} ${newPath[1].toUpperCase()}`;
    }
    else {
      return `${newPath[0].toUpperCase()}`;
    }
  }

  componentWillReceiveProps() {
    const isRoot = FlowRouter.getRouteName() === 'root';
    if(isRoot) {
      this.setState({
        displayName: "BSRUMAP",
      })
    }
    else {
      const path = FlowRouter.current().path;
      const displayName = this.splitString(path);
      console.log('test');
      this.setState({
        displayName,
      })
    }
  }

  onClickMenu(){
    FlowRouter.go('menu');
  }

  render() {
    return(
        <section>
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">{this.state.displayName}</a>
              <ul className="right">
                <li onClick={this.onClickMenu}><a href="/menu"><i id="icon" className="material-icons">view_module</i></a></li>
              </ul>
            </div>
          </nav>
        </section>
    )
  }
}
