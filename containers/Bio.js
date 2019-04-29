import React from 'react';
import styled from 'styled-components';
import { colors } from '../util/Theme';
import { Text } from 'react-native'
import BioHole from '../components/BioHole';
import { Dimensions, Animated, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import { animateNext, animatePrev } from '../util/PoolTable';

var width = Dimensions.get('window').width;

const Wrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.darkGrey};
`;

const ScrollContainer = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    // position: 'relative',
    // zIndex: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    width: width
  }
}))``;

const PoolTable = styled.Image`
	position: absolute;
  z-index: 1;
  left: ${props => 250 + props.poolTable.xPos}px;
	top: ${props => 450 + props.poolTable.yPos}px;
`;

// const PoolTable = styled.Image`
// 	position: absolute;
//   z-index: 1;
//   left: ${props => 255 - (props.scrollY / 1.8)}px;
// 	top: 450px;
// `;

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      scrollY: 0,
      poolTable: {
        sequence: 0,
        xPos: 0, 
        yPos: 0
      }
     };
     tnhis.moveAnimation = new Animated.ValueXY({ x: 250, y: 450 });
  }

  animate() {
    Animated.spring(this.moveAnimation, {
      toValue: {
        x: 275, 
        y: 450
      }
    }).start();
  }

  handleScroll(e) {
    console.log(e.nativeEvent.contentOffset.y);
    this.setState({ scrollY: e.nativeEvent.contentOffset.y });
  }

  render() {
    console.log(this.state.poolTable);
    
    return (
      <Wrapper>
        {/* <PoolTable scrollY={this.state.scrollY} source={require('../assets/pool_table.png')} /> */}
        <PoolTable poolTable={this.state.poolTable} source={require('../assets/pool_table.png')} />
        <ScrollContainer 
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ],
          { listener: this.handleScroll.bind(this) },
          {
            useNativeDriver: true
          })} 
          showsVerticalScrollIndicator={false}>
          <BioHole title={"Kyllingen"}/>
          <BioHole title={"Pacman"}/>
        </ScrollContainer>
        <TouchableOpacity onPress={() => {
          this.setState({ poolTable: animateNext(this.state.poolTable) });
          // this.animate();
        }}>
          <Button text={"Next"} marginBottom={"55px"}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.setState({ poolTable: animatePrev(this.state.poolTable) });
        }}>
          <Button text={"Prev"} marginBottom={"55px"}/>
        </TouchableOpacity>
      </Wrapper>
    );
  }
}
export default Bio;