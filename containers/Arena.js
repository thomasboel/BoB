import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import Button from '../components/Button';
import { colors } from '../util/Theme';

var width = Dimensions.get('window').width;

const Wrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ScrollContainer = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
  }
}))``;

const VersusEntry = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${width - 40}px;
  height: 77px;
`;

const TeamScore = styled.Text`
  width: 30px;
  font-size: 16px;
  color: ${props => props.winning ? colors.yellow : colors.darkGrey};
  text-align: ${props => props.right ? 'right' : 'left'};
`;

const TeamName = styled.Text`
  width: 110px;
  font-size: 16px;
  color: ${colors.darkGrey};
  text-align: ${props => props.right ? 'left' : 'right'};
`;

const VS = styled.Text`
  width: 25px;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
`;

const Seperator = styled.View`
  width: ${width}px;
  height: 1px;
  background-color: ${colors.grey};
`;

class Arena extends React.Component {
  render() {
    return (
      <Wrapper>
        <ScrollContainer>
          <VersusEntry>
            <TeamScore winning={true}>44</TeamScore>
            <TeamName>Børnebordet</TeamName>
            <VS>VS</VS>
            <TeamName right>Projektlederne</TeamName>
            <TeamScore right winning={false}>37</TeamScore>
          </VersusEntry>
          <Seperator />
          <VersusEntry>
            <TeamScore winning={false}>24</TeamScore>
            <TeamName>Børnebordet</TeamName>
            <VS>VS</VS>
            <TeamName right>Udviklerne</TeamName>
            <TeamScore right winning={true}>43</TeamScore>
          </VersusEntry>
          <Seperator />
          <VersusEntry>
            <TeamScore winning={true}>21</TeamScore>
            <TeamName>Projektlederne</TeamName>
            <VS>VS</VS>
            <TeamName right>Udviklerne</TeamName>
            <TeamScore right winning={false}>15</TeamScore>
          </VersusEntry>
          <Seperator />
        </ScrollContainer>
        <Button text={"New match"} />
      </Wrapper>
    );
  }
}
export default Arena;