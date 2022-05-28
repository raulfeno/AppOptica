import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import TerapiaVisual from './TerapiaVisual';
import Progresivos from './Progresivos';
import Audiologia from './Audiologia';
import Lentillas from './Lentillas';
import Home from './Home'
import Login from './Login'

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer ScreenOptions={{ headerShown: false }}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Terapia Visual" component={TerapiaVisual} />
        <Drawer.Screen name="Progresivos" component={Progresivos} />
        <Drawer.Screen name="Audiologia" component={Audiologia} />
        <Drawer.Screen name="Lentillas" component={Lentillas} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
