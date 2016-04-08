import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import AppContainer from '../../layouts/AppContainer.jsx';

import Map1 from '../../pages/Map1.jsx';
import Map2 from '../../pages/Map2.jsx';

import Login from '../../pages/Login.jsx';
import Register from '../../pages/Register.jsx';
import MainSearch from '../../pages/MainSearch.jsx';
import SearchTeacher from '../../ui/components/SearchTeacher.jsx';
import SearchRoomByNumber from '../../ui/components/SearchRoomByNumber.jsx';
import SearchBuildingByName from '../../ui/components/SearchBuildingByName.jsx';
import SearchRoomByName from '../../ui/components/SearchRoomByName.jsx';
import TeacherDetail from '../../ui/components/TeacherDetail.jsx';

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

FlowRouter.route('/mainsearch', {
  name: 'mainsearch',
  action(){
    mount(AppContainer, {
      content: <MainSearch />
    })
  }
})

FlowRouter.route('/searchTeacher', {
  name: 'searchTeacher',
  action(){
    mount(AppContainer, {
      content: <SearchTeacher />
    })
  }
})

FlowRouter.route('/teacherDetail', {
  name: 'teacherDetail',
  action(){
    mount(AppContainer, {
      content: <TeacherDetail />
    })
  }
})

FlowRouter.route('/searchRoomByNumber', {
  name: 'searchRoomByNumber',
  action(){
    mount(AppContainer, {
      content: <SearchRoomByNumber />
    })
  }
})

FlowRouter.route('/searchBuildingByName', {
  name: 'searchBuildingByName',
  action(){
    mount(AppContainer, {
      content: <SearchBuildingByName />
    })
  }
})

FlowRouter.route('/searchRoomByName', {
  name: 'searchRoomByName',
  action(){
    mount(AppContainer, {
      content: <SearchRoomByName />
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
