import React from 'react';
import FloorBuilding from '../ui/components/building/FloorBuilding.jsx';
import FloorBuildingDetail from '../ui/components/building/FloorBuildingDetail.jsx';
import BuildingDescription from '../ui/components/building/BuildingDescription.jsx';

export default class BuildingInformation extends React.Component {

  componentDidMount(){
    $(document).ready(function () {
      //initialize swiper when document ready
      var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
      })
    });
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
              <BuildingDescription />
            </div>
            <div className="swiper-slide">
              <FloorBuilding />
            </div>
            <div className="swiper-slide">
              <FloorBuildingDetail />
            </div>
        </div>
      </div>
    );
  }
}
