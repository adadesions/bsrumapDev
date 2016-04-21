import React from 'react';

// Components
import Map1 from './Map1.jsx';
import Map2 from './Map2.jsx';

export default class BuildingInformation extends React.Component {

  componentDidMount(){
    $(document).ready(function () {
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
      })
    });
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
            <div className="swiper-slide slide-page-1">
              <Map1 />
            </div>
            <div className="swiper-slide slide-page-1">
              <Map2 />
            </div>
        </div>
      </div>
    );
  }
}
