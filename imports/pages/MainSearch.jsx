import React from 'react';
import SearchOption from '../ui/components/SearchOption.jsx';

const searchLayout = {
  padding: '3em',
}

export default class MainSearch extends React.Component {
  render() {
    return (
      <div style={searchLayout}>
        <SearchOption />
      </div>
    )
  }
}
