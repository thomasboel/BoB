import React from 'react';
import styled from 'styled-components';
import { colors } from '../util/Theme';
import { Dimensions, View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import BioHole from '../components/BioHole';

var width = Dimensions.get('window').width;

const Wrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.darkGrey};
`;

const PoolTable = styled.Image`
	position: absolute;
  z-index: 1;
  left: ${props => 255 - (props.scrollY / 1.8)}px;
	top: 450px;
`;

class BioTest extends React.Component {
	render() {
		return (
			<Wrapper>
				{/* <PoolTable scrollY={this.state.scrollY} source={require('../assets/pool_table.png')} /> */}
				<Swiper
				horizontal={true}
					loop={false}
					showsPagination={true}
					index={0}>
					<View><BioHole title={"Left"} /></View>
					<View>
						<Swiper horizontal={false} loop={false} index={1}>
						<View><BioHole title={"Middle Top"} /></View>
						<View><BioHole title={"Middle Mid"} /></View>
						<View><BioHole title={"Middle Bottom"} /></View>
						</Swiper>
					</View>
					<View><BioHole title={"Right"} /></View>
				</Swiper>
			</Wrapper>
		);
	}
}
export default BioTest;