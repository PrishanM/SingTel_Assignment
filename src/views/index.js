import React, {useEffect} from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import MainView from "./MainView";

const views = Actions.create(
  <Scene key={'root'}>
    <Scene key={'home'}
           initial={true}
           hideNavBar={true}
           component={MainView}/>

  </Scene>
)

const Root = () => {

  return (
    <Router scenes={views} getSceneStyle={() => ({backgroundColor: 'white'})}/>
  )

}

export default Root;
