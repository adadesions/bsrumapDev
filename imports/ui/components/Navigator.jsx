import React from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Menu extends React.Component {
  constructor() {
    super();
    const splitString = (path) => {
      let newPath = path.split('/');
      newPath.shift();
      return `${newPath[0].toUpperCase()} ${newPath[1]}`;
    }
    const isRoot = FlowRouter.getRouteName() === 'root';

    let displayName = "";
    if(!isRoot) {
      displayName = splitString(FlowRouter.current().path);
    }
    else {
      displayName = "BSRUMAP";
    }

    this.state = {
      displayName,
    }
  }

  componentWillReceiveProps() {
    const isRoot = FlowRouter.getRouteName() === 'root';
    if(isRoot) {
      this.setState({
        displayName: "BSRUMAP",
      })
    }
  }

  render() {
    return(
        <section>
          <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">{this.state.displayName}</a>
              <ul className="right">
                <li><a href="#"><i className="material-icons">view_module</i></a></li>
              </ul>
            </div>
          </nav>
        </section>
    )
  }
}
