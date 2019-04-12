import React from 'react';
import Ballers from './containers/Ballers';
import Arena from './containers/Arena';
import Bio from './containers/Bio';
import { View, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import { Font, LinearGradient } from 'expo';
import Header from './components/Header';
import NavigationSlider from './components/NavigationSlider';
import { colors } from './util/Theme';
import { Platform } from 'expo-core';
import { red } from 'ansi-colors';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false, currentScreen: 1 };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Gotham-bold': require('./assets/fonts/Gotham-Bold_0.otf'),
      'Gotham-bold-italic': require('./assets/fonts/Gotham-BoldItalic.otf'),
      'Gotham-book': require('./assets/fonts/Gotham-Book.otf'),
      'Gotham-book-italic': require('./assets/fonts/Gotham-BookItalic.otf')
    });

    this.setState({ fontLoaded: true });
  }
  
  render() {
    return this.state.fontLoaded ? (
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
        <View style={{
          position: 'absolute',
          zIndex: 5,
          left: 0, right: 0, bottom: 0,
          height: 40
        }}>
          <LinearGradient 
            start={[1, 0]}
            end={[1, 6]}
            colors={Platform.OS === 'ios' ? ['rgba(60, 60, 60, 0)', 'rgba(0, 0, 0, 1)'] : ['rgba(255, 255, 255, 0)', colors.darkGrey]}
            style={{
              position: 'absolute',
              zIndex: 5,
              left: 0, right: 0, bottom: 0,
              height: 60,
            }}
          />
          <NavigationSlider index={this.state.currentScreen}/>
        </View>
      </View>
    ) : (<View></View>);
  }
}
export default App;