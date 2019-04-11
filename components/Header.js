import React from 'react';
import styled from 'styled-components';
import { LinearGradient } from 'expo';
import { colors } from '../util/Theme';

const Wrapper = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
  width: 100%;
	height: 100px;
`;

const BoB = styled.Image`
	width: 67px;
	height: 37px;
	margin: auto 0 18px 20px;
`;

const Title = styled.Text`
	font-size: 20px;
	color: white;
	margin: auto 20px 20px auto;
`;

class Arena extends React.Component {
	render() {
		return (
			<Wrapper>
				<LinearGradient 
					start={[0, 1]}
					end={[1, 0]}
					colors={[colors.blue, colors.yellow]}
					style={{
						position: 'absolute',
						left: 0, right: 0, top: 0,
						height: 100
					}}
				/>
				<BoB source={require('../assets/BoB.png')}/>
				<Title>{this.props.title}</Title>
			</Wrapper>
		);
	}
}
export default Arena;