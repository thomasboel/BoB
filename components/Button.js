import React from 'react';
import styled from 'styled-components';
import { colors } from '../util/Theme';

const ButtonContainer = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
  width: 140px;
	height: 50px;
	border-radius: 2px;
	background-color: ${colors.yellow};
`;

const ButtonText = styled.Text`
	font-size: 20px;
	color: white;
`;

class Button extends React.Component {
	render() {
		return (
			<ButtonContainer>
				<ButtonText>{this.props.text}</ButtonText>
			</ButtonContainer>
		);
	}
}
export default Button;