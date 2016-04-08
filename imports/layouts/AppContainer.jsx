import React from 'react';
import Navigator from '../ui/components/Navigator.jsx';

export default class AppContainer extends React.Component{
  render(){
    return(
      <main>
        <Navigator />
        {this.props.content}
      </main>
    )
  }
}
