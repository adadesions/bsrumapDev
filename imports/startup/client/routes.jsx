import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import AppContainer from '../../layouts/AppContainer.jsx';

import Map1 from '../../pages/Map1.jsx';
import Map2 from '../../pages/Map2.jsx';
import BuildingDescription from '../../pages/BuildingDescription.jsx';

FlowRouter.route('/', {
  name: 'root',
  action(){
    mount(AppContainer, {
      content: <Map1 />
    })
  }
})

FlowRouter.route('/map2', {
  name: 'map2',
  action(){
    mount(AppContainer, {
      content: <Map2 />
    })
  }
})

const building = FlowRouter.group({
  prefix: '/building'
})

building.route('/:id', {
  name: building,
  action(params) {
    mount(AppContainer, {
      content: <BuildingDescription id={params.id}/>
    })
  }
})
