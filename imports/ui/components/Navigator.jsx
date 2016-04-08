import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class Menu extends React.Component {
  render() {
    return(
        <section>
          <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">BsruMap</a>
              <ul className="right">
                <li><a href="#"><i className="material-icons">view_module</i></a></li>
              </ul>
            </div>
          </nav>
        </section>
    )
  }
}
