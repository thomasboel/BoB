import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Arena from './containers/Arena';

const RootNavigator = createStackNavigator(
  {
    Arena: { screen: Arena }
  }
);

class App extends React.Component {
  render() {
    return (
      createAppContainer(RootNavigator)
    );
  }
}
export default App;