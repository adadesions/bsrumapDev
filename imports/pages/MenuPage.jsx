import React from 'react';

const rowTopMenu = {
  background: '#ffebee',
  display: 'flex',
  justifyContent: 'space-around',
  flexFlow: 'row',
  height: '90vh',
  alignItems: 'center',
  background: '-moz-radial-gradient(0% 100%, ellipse cover, rgba(255,195,160,.2) 10%,rgba(229,175,144,0) 40%),-moz-linear-gradient(top,  rgba(160,122,100,.25) 0%, rgba(96,73,60,.4) 100%), -moz-linear-gradient(-45deg,  #261d18 0%, #ff815e 100%)',
	background: '-webkit-radial-gradient(0% 100%, ellipse cover, rgba(255,195,160,.2) 10%,rgba(229,175,144,0) 40%), -webkit-linear-gradient(top,  rgba(160,122,100,.25) 0%,rgba(96,73,60,.4) 100%), -webkit-linear-gradient(-45deg,  #261d18 0%,#ff815e 100%)',
	background: '-o-radial-gradient(0% 100%, ellipse cover, rgba(255,195,160,.2) 10%,rgba(229,175,144,0) 40%), -o-linear-gradient(top,  rgba(160,122,100,.25) 0%,rgba(96,73,60,.4) 100%), -o-linear-gradient(-45deg,  #261d18 0%,#ff815e 100%)',
	background: '-ms-radial-gradient(0% 100%, ellipse cover, rgba(255,195,160,.2) 10%,rgba(229,175,144,0) 40%), -ms-linear-gradient(top,  rgba(160,122,100,.25) 0%,rgba(96,73,60,.4) 100%), -ms-linear-gradient(-45deg,  #261d18 0%,#ff815e 100%)',
	background: '-webkit-radial-gradient(0% 100%, ellipse cover, rgba(255,195,160,.2) 10%,rgba(229,175,144,0) 40%), linear-gradient(to bottom,  rgba(160,122,100,.25) 0%,rgba(96,73,60,.4) 100%), linear-gradient(135deg,  #261d18 0%,#ff815e 100%)',
}
const sizeImg = {
  width: '10em',
  height: '10em',
}

let stage,
  search,
  map,
  ebook,
  website,
  contact,
  gallerry;

export default class MenuPage extends React.Component {
  constructor() {
    super();
    this.handleImageLoad = this.handleImageLoad.bind(this);
  }
  componentDidMount() {
    stage = new createjs.Stage('menuTop');

    gallerry = new createjs.LoadQueue();
    gallerry.addEventListener('complete', this.handleImageLoad);
    gallerry.loadManifest([
     { id: 'search', src: '/iconMenu/search.png'},
     { id: 'map', src: '/iconMenu/map.png'},
     { id: 'ebook', src: '/iconMenu/ebook.png'},
     { id: 'website', src: '/iconMenu/web.png'},
     { id: 'contact', src: '/iconMenu/contact.png'},
    ]);
  }

  handleImageLoad() {
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', this.tick);
    this.objectImage('search',
                    search,
                    '/iconMenu/search.png',
                    gallerry.getResult('search'),
                    80,
                    20,
                    60,
                    50);
    this.objectImage('map',
                    map,
                    '/iconMenu/map.png',
                    gallerry.getResult('map'),
                    410,
                    60,
                    20,
                    40);
    this.objectImage('ebook',
                    ebook,
                    '/iconMenu/ebook.png',
                    gallerry.getResult('ebook'),
                    730,
                    35,
                    60,
                    20);
    this.objectImage('website',
                    website,
                    '/iconMenu/web.png',
                    gallerry.getResult('website'),
                    250,
                    230,
                    200,
                    260);
    this.objectImage('contact',
                    contact,
                    '/iconMenu/contact.png',
                    gallerry.getResult('contact'),
                    550,
                    280,
                    260,
                    220);
  }

  objectImage(id, name,imgDefault, imgSrc, x, y, yTarget, yEnd) {
    let objId = id,
        localImgSrc = imgSrc,
        nameObject = name;
        nameObject = new createjs.Bitmap(gallerry.getResult(id));
        nameObject.x = x;
        nameObject.y = y;
        nameObject.scaleX = 0.8;
        nameObject.scaleY = 0.8;
        nameObject.addEventListener('click', (route) => {
          FlowRouter.go(`/${objId}`);
        })
    stage.addChild(nameObject);
    createjs.Tween.get(nameObject, {loop: true})
          .to({y: yTarget}, 2500, createjs.Ease.getPowInOut(2))
          .to({y: yEnd}, 2500, createjs.Ease.getPowInOut(2))
          .to({y: y}, 2500, createjs.Ease.getPowInOut(2))

  }

  tick() {
    stage.update();
  }

  render() {
    return (
      <div className="menu-layout" style={rowTopMenu}>
          <canvas id="menuTop" width="750px" height="250px"></canvas>
      </div>
    )
  }
}
