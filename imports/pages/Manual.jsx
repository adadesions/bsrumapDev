import React from 'react';

const manualRender = (pages) => {
  let manualPages = [];
  for(let i=0; i<pages; i++){
    manualPages.push(`/manual/n${i}.jpg`);
  }
  const renderPage = (manualPages) => {
    return manualPages.map( (page,i) => {
      return (
        <div key={i} className="swiper-slide slide-page-1"><img className="manual-img" src={page} alt="" /></div>
      );
    })
  }
  return (
    <div className="swiper-wrapper">
      { renderPage(manualPages) }
    </div>
  );
}

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
        { manualRender(13) }
      </div>
    );
  }
}
