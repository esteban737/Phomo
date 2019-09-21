import React from 'react';
import Initial from '../screens/Initial'
import Feed from '../screens/Feed'
import Camera from '../components/Camera'
import { Router, Scene, Stack, ActionConst, Actions } from 'react-native-router-flux';

const RouterComponent = () => {
    return (
      <Router>
     <Scene key = "root">
     <Scene key = "Initial"
     component={Initial}
     />
     <Scene key = "Feed"
     component={Feed}
     />
     <Scene key = "Camera"
     component={Camera}
     />
     </Scene>
      </Router>
    );
  };
  
  export default RouterComponent;