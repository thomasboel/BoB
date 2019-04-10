import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Arena from './containers/Arena';
import Header from './components/Header';

const RootStack = createStackNavigator(
  {
    Arena: { screen: Arena }
  },
  {
    initialRouteName: 'Arena',
    defaultNavigationOptions: {
      header: <Header />
    }
  }
);

const App = createAppContainer(RootStack);

export default App;