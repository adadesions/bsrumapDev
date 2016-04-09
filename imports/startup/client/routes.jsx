import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import AppContainer from '../../layouts/AppContainer.jsx';

// Pages
import Map1 from '../../pages/Map1.jsx';
import Map2 from '../../pages/Map2.jsx';
import Login from '../../pages/Login.jsx';
import Register from '../../pages/Register.jsx';
import MainSearch from '../../pages/MainSearch.jsx';
import MenuPage from '../../pages/MenuPage.jsx';
import SearchTeacher from '../../ui/components/search/SearchTeacher.jsx';
import SearchRoomByNumber from '../../ui/components/search/SearchRoomByNumber.jsx';
import SearchBuildingByName from '../../ui/components/search/SearchBuildingByName.jsx';
import SearchRoomByName from '../../ui/components/search/SearchRoomByName.jsx';
import TeacherDetail from '../../ui/components/search/TeacherDetail.jsx';
import BuildingInformation from '../../pages/BuildingInformation.jsx';

FlowRouter.route('/', {
  name: 'root',
  action(){
    mount(AppContainer, {
      content: <Login />
    })
  }
})

FlowRouter.route('/map1', {
  name: 'map1',
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

FlowRouter.route('/menu', {
  name: 'menu',
  action(){
    mount(AppContainer, {
      content: <MenuPage />
    })
  }
})

const search = FlowRouter.group({
  prefix: '/search'
})

search.route('/', {
  name: 'mainsearch',
  action(){
    mount(AppContainer, {
      content: <MainSearch />
    })
  }
})

search.route('/teacher', {
  name: 'searchTeacher',
  action(){
    mount(AppContainer, {
      content: <SearchTeacher />
    })
  }
})

search.route('/teacher/detail', {
  name: 'teacherDetail',
  action(){
    mount(AppContainer, {
      content: <TeacherDetail />
    })
  }
})

search.route('/room/number', {
  name: 'searchRoomByNumber',
  action(){
    mount(AppContainer, {
      content: <SearchRoomByNumber />
    })
  }
})

search.route('/room/name', {
  name: 'searchRoomByName',
  action(){
    mount(AppContainer, {
      content: <SearchRoomByName />
    })
  }
})

search.route('/building/name', {
  name: 'searchBuildingByName',
  action(){
    mount(AppContainer, {
      content: <SearchBuildingByName />
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
      content: <BuildingInformation />
    })
  }
})
