import React from 'react';
import Menu from '../ui/components/Menu.jsx';

export default class AppContainer extends React.Component{
  render(){
    return(
      <main>
        <Menu />
        {this.props.content}
      </main>
    )
  }
}
