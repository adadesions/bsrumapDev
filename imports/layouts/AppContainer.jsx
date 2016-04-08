import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Navigator from '../ui/components/Navigator.jsx';

export default class AppContainer extends React.Component{
  render(){
    return(
      <main>
        <Navigator header={FlowRouter.current().path} />
        {this.props.content}
      </main>
    )
  }
}
