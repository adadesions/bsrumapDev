import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import AppContainer from '../../layouts/AppContainer.jsx';

// Pages
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
import Manual from '../../pages/Manual.jsx';
import Admin from '../../pages/Admin.jsx';
import AdminEdit from '../../pages/AdminEdit.jsx';
import BuildingMap from '../../pages/BuildingMap.jsx';

FlowRouter.route('/', {
  name: 'root',
  action(){
    mount(AppContainer, {
      content: <Login />
    })
  }
})

FlowRouter.route('/map', {
  name: 'map',
  action(){
    mount(AppContainer, {
      content: <BuildingMap />
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


FlowRouter.route('/manual', {
  name: 'manual',
  action(){
    mount(AppContainer, {
      content: <Manual />
    })
  }
})


FlowRouter.route('/website', {
  name: 'website',
  action(){
    Meteor.logout(() => {
      FlowRouter.go('login');
    });
  }
})

FlowRouter.route('/floorBuilding', {
  name: 'floorBuilding',
  action(){
    mount(AppContainer, {
      content: <FloorBuilding />
    })
  }
})

FlowRouter.route('/floorBuildingDetail', {
  name: 'floorBuildingDetail',
  action(){
    mount(AppContainer, {
      content: <FloorBuildingDetail />
    })
  }
})

FlowRouter.route('/contact', {
  name: 'contact',
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

search.route('/teacher/detail/:tid', {
  name: 'teacherDetail',
  action(params){
    mount(AppContainer, {
      content: <TeacherDetail tid={ params.tid }/>
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

const admin = FlowRouter.group({
  prefix: '/admin'
})

admin.route('/', {
  name: 'admin',
  action() {
    mount(AppContainer, {
      content: <Admin />
    })
  }
})

admin.route('/edit/:collection/:id', {
  name: 'adminEdit' ,
  action(params) {
    mount(AppContainer, {
      content: <AdminEdit id={params.id} collection={params.collection} />
    })
  }
})
