import React from 'react';
import styled from 'styled-components';
import { colors } from '../util/Theme';
import BioHole from '../components/BioHole';
import { Dimensions, Animated } from 'react-native';

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
  left: ${props => 255 - (props.scrollY / 1.8)}px;
	top: 450px;
`;

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrollY: 0 };
  }

  handleScroll(e) {
    console.log(e.nativeEvent.contentOffset.y);
    this.setState({ scrollY: e.nativeEvent.contentOffset.y });
  }

  render() {
    return (
      <Wrapper>
        <PoolTable scrollY={this.state.scrollY} source={require('../assets/pool_table.png')} />
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
        
      </Wrapper>
    );
  }
}
export default Bio;