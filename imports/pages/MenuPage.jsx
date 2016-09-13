import React from 'react';

const rowTopMenu = {
  display: 'flex',
  justifyContent: 'space-around',
  flexFlow: 'row',
  height: '100%',
  alignItems: 'center',
  background: '#092756',
  background: '-moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%)',
	background: '-webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%)',
	background: '-o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%)',
	background: '-ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%)',
	background: '-webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%)',
}

let stage,
  search,
  map,
  manual,
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
     { id: 'manual', src: '/iconMenu/manual.png'},
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
                    50,
                    20,
                    60,
                    50);
    this.objectImage('map',
                    map,
                    '/iconMenu/map.png',
                    gallerry.getResult('map'),
                    280,
                    60,
                    20,
                    40);
    this.objectImage('manual',
                    manual,
                    '/iconMenu/manual.png',
                    gallerry.getResult('manual'),
                    500,
                    35,
                    60,
                    20);
      this.objectImage('contact',
                      contact,
                      '/iconMenu/contact.png',
                      gallerry.getResult('contact'),
                      160,
                      180,
                      150,
                      190);
    this.objectImage('website',
                    website,
                    '/iconMenu/web.png',
                    gallerry.getResult('website'),
                    380,
                    190,
                    150,
                    170);
  }

  objectImage(id, name,imgDefault, imgSrc, x, y, yTarget, yEnd) {
    let objId = id,
        localImgSrc = imgSrc,
        nameObject = name;
        nameObject = new createjs.Bitmap(gallerry.getResult(id));
        nameObject.x = x;
        nameObject.y = y;
        nameObject.scaleX = 0.5;
        nameObject.scaleY = 0.5;
        nameObject.addEventListener('click', (route) => {
          const isAdmin = Meteor.user().profile.isAdmin;
          if(objId === 'contact') {
            if (isAdmin) {
              FlowRouter.go(`/admin`);
            }
            else {
              alert('You have no permission for this section.')
            }
          }
          else {
            FlowRouter.go(`/${objId}`);
          }
        })
    stage.addChild(nameObject);
    createjs.Tween.get(nameObject, {loop: true})
          .to({y: yTarget}, 5500, createjs.Ease.getPowInOut(1))
          .to({y: yEnd}, 5500, createjs.Ease.getPowInOut(1))
          .to({y: y}, 5500, createjs.Ease.getPowInOut(1))

  }

  tick() {
    stage.update();
  }

  render() {
    return (
      <div className="menu-layout" style={rowTopMenu}>
        <canvas id="menuTop" width="650px" height="294px"></canvas>
      </div>
    )
  }
}
