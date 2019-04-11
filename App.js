import React from 'react';
import Ballers from './containers/Ballers';
import Arena from './containers/Arena';
import Bio from './containers/Bio';
import { View, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: 'Arena' };
  }

  componentDidMount() {
    this.setState({ currentScreen: "Arena" });
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title={this.state.currentScreen}/>
        <StatusBar barStyle="light-content" />
        <Swiper
          loop={false}
          showsPagination={false}
          onIndexChanged={(i) => {
            this.setState({ currentScreen: i == 0 ? 'Ballers' : i == 1 ? 'Arena' : 'Bio' })
          }}
          index={1}>
          <Ballers />
          <Arena />
          <Bio />
        </Swiper>
      </View>
    );
  }
}
export default App;