import React from 'react';
import Ballers from './containers/Ballers';
import Arena from './containers/Arena';
import Bio from './containers/Bio';
import { View, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo';
import Header from './components/Header';
import NavigationSlider from './components/NavigationSlider';
import { colors } from './util/Theme';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: 1 };
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header index={this.state.currentScreen}/>
        <StatusBar barStyle="light-content" />
        <Swiper
          loop={false}
          showsPagination={false}
          onIndexChanged={(i) => {
            this.setState({ currentScreen: i })
          }}
          index={1}>
          <Ballers />
          <Arena />
          <Bio />
        </Swiper>
        <LinearGradient 
					start={[1, 0]}
					end={[1, 7]}
					colors={['rgba(255, 255, 255, 0)', colors.darkGrey]}
					style={{
						position: 'absolute',
						left: 0, right: 0, bottom: 0,
						height: 80
					}}
				/>
        <NavigationSlider index={this.state.currentScreen}/>
      </View>
    );
  }
}
export default App;