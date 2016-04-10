import React from 'react';
import SearchOption from '../ui/components/search/SearchOption.jsx';

const searchLayout = {
  padding: '1em',
}

export default class MainSearch extends React.Component {
  render() {
    return (
      <div style={searchLayout}>
        <SearchOption name='teacher'/>
        <SearchOption name='building'/>
        <SearchOption name='roomNumber'/>
        <SearchOption name='roomName'/>
      </div>
    )
  }
}
