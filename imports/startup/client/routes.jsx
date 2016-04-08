import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import AppContainer from '../../layouts/AppContainer.jsx';

import Mapcut1 from '../../ui/components/Map1.jsx';
import Mapcut2 from '../../ui/components/Map2.jsx';

FlowRouter.route('/', {
  name: 'root',
  action(){
    mount(AppContainer, {
      content: <Mapcut1 />
    })
  }
})

FlowRouter.route('/map2', {
  name: 'map2',
  action(){
    mount(AppContainer, {
      content: <Mapcut2 />
    })
  }
})
