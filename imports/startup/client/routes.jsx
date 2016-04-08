import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import AppContainer from '../../layouts/AppContainer.jsx';

import Map1 from '../../pages/Map1.jsx';
import Map2 from '../../pages/Map2.jsx';
import Login from '../../ui/components/Login.jsx';
import Register from '../../ui/components/Register.jsx';

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

FlowRouter.route('/login', {
  name: 'login',
  action(){
    mount(AppContainer, {
      content: <Login />
    })
  }
})

FlowRouter.route('/register', {
  name: 'register',
  action(){
    mount(AppContainer, {
      content: <Register />
    })
  }
})

const building = FlowRouter.group({
  prefix: '/building'
})

building.route('/:id', {
  name: building,
  action(params) {
    console.log(params.id);
  }
})
