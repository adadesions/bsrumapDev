import React from 'react';

export default class Manual extends React.Component {
  constructor(props) {
    super(props);
  }

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
            <div className="swiper-slide slide-page-1">
              {/*PHOTOHERE*/}
              <img className="manual-img" src="/buildingDescription/d1.jpg" alt="" />
            </div>
            <div className="swiper-slide slide-page-1">
              {/*PHOTOHERE*/}
              <img className="manual-img" src="/buildingDescription/d1.jpg" alt="" />
            </div>
            <div className="swiper-slide slide-page-1">
              {/*PHOTOHERE*/}
              <img className="manual-img" src="/buildingDescription/d1.jpg" alt="" />
            </div>
        </div>
      </div>
    );
  }
}
