import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class MenuPage extends React.Component {
  render() {
    return (
      <section>
        <ul>
          <li>
            <h1>
              <a href="/map1">MAP</a>
            </h1>
          </li>
          <li>
            <h1>
              <a href="/search">SEARCH</a>
            </h1>
          </li>
        </ul>
      </section>
    )
  }
}
