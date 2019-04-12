import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { colors } from '../util/Theme';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const Wrapper = styled.View`
	position: relative;
	z-index: 15;
	flex: 1;
	display: flex;
	flex-direction: column;
	height: ${height}px;
`;

const HeaderTitle = styled.Text`
	font-family: 'Gotham-bold';
	font-size: 75px;
	margin-top: 36px;
	color: ${colors.white};
	line-height: 70px;
	width: ${width - 40}px;
`;

const BioParagraph = styled.Text`
	font-family: 'Gotham-book-italic';
	font-size: 16px;
	color: ${colors.white}; 
	width: ${width - 40}px;
	height: 170px;
	margin-top: 13px;
	line-height: 24px;
`;



class BioHole extends React.Component {
	render() {
		return (
			<Wrapper>
				<HeaderTitle>{this.props.title}</HeaderTitle>
				<BioParagraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</BioParagraph>
			</Wrapper>
		);
	}
}
export default BioHole;