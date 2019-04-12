import React from 'react';
import styled from 'styled-components';
import { colors } from '../util/Theme';
import { Platform } from 'react-native';

const Wrapper = styled.View`
	position: absolute;
	z-index: 10;
	align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
	flex-direction: row;
	top: ${Platform.OS === 'ios' ? 6 : 15};
  width: 66px;
  height: 12px;
`;

const Circle = styled.View`
	width: 12px;
	height: 12px;
	border-radius: 6px;
	border: 1px solid ${colors.white};
	background-color: ${props => props.index == props.i ? colors.white : 'transparent'};
`;

class NavigationSlider extends React.Component {
	render() {
		return (
			<Wrapper>
				<Circle index={this.props.index} i={0}/>
				<Circle index={this.props.index} i={1}/>
				<Circle index={this.props.index} i={2}/>
			</Wrapper>
		);
	}
}
export default NavigationSlider;