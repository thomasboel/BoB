import React from 'react';
import styled from 'styled-components';
import { Dimensions, View } from 'react-native';
import { colors } from '../util/Theme';

var width = Dimensions.get('window').width;

const Wrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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

const UserEntryWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${width - 40}px;
  height: 105px;
`;

const GroupOne = styled.View`
  display: flex;
  flex-direction: column;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.darkGrey};
  padding-bottom: 7px;
`;

const ScoreEntry = styled.Text`
  font-size: 16px;
  color: ${colors.darkGrey};
`;

const GroupTwo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
`;

const WinPercantageText = styled.Text`
  font-size: 16px;
  color: ${colors.darkGrey};
`;

const WinPercantage = styled.Text`
  font-size: 30px;
  color: ${colors.yellow};
  margin-top: 12px;
  align-self: flex-end;
`;

const Seperator = styled.View`
  width: ${width}px;
  height: 1px;
  background-color: ${colors.grey};
`;

class Ballers extends React.Component {
  render() {
    return (
      <Wrapper>
        <ScrollContainer showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <UserEntryWrapper>
            <GroupOne>
              <Name>Hakim</Name>
              <ScoreEntry>Wins 50</ScoreEntry>
              <ScoreEntry>Losses 10</ScoreEntry>
            </GroupOne>
            <GroupTwo>
              <WinPercantageText>Win percentage</WinPercantageText>
              <WinPercantage>80%</WinPercantage>
            </GroupTwo>
          </UserEntryWrapper>
          <Seperator />
          <UserEntryWrapper>
            <GroupOne>
              <Name>Thomas</Name>
              <ScoreEntry>Wins 50</ScoreEntry>
              <ScoreEntry>Losses 10</ScoreEntry>
            </GroupOne>
            <GroupTwo>
              <WinPercantageText>Win percentage</WinPercantageText>
              <WinPercantage>80%</WinPercantage>
            </GroupTwo>
          </UserEntryWrapper>
          <Seperator />
          <UserEntryWrapper>
            <GroupOne>
              <Name>Fardur</Name>
              <ScoreEntry>Wins 999</ScoreEntry>
              <ScoreEntry>Losses 0</ScoreEntry>
            </GroupOne>
            <GroupTwo>
              <WinPercantageText>Win percentage</WinPercantageText>
              <WinPercantage>100%</WinPercantage>
            </GroupTwo>
          </UserEntryWrapper>
          <Seperator />
          <UserEntryWrapper>
            <GroupOne>
              <Name>Jens-Peter</Name>
              <ScoreEntry>Wins 50</ScoreEntry>
              <ScoreEntry>Losses 10</ScoreEntry>
            </GroupOne>
            <GroupTwo>
              <WinPercantageText>Win percentage</WinPercantageText>
              <WinPercantage>80%</WinPercantage>
            </GroupTwo>
          </UserEntryWrapper>
          <Seperator />
          <UserEntryWrapper>
            <GroupOne>
              <Name>Mikkel</Name>
              <ScoreEntry>Wins 50</ScoreEntry>
              <ScoreEntry>Losses 10</ScoreEntry>
            </GroupOne>
            <GroupTwo>
              <WinPercantageText>Win percentage</WinPercantageText>
              <WinPercantage>80%</WinPercantage>
            </GroupTwo>
          </UserEntryWrapper>
          <Seperator />
          <UserEntryWrapper>
            <GroupOne>
              <Name>Allan</Name>
              <ScoreEntry>Wins 50</ScoreEntry>
              <ScoreEntry>Losses 10</ScoreEntry>
            </GroupOne>
            <GroupTwo>
              <WinPercantageText>Win percentage</WinPercantageText>
              <WinPercantage>80%</WinPercantage>
            </GroupTwo>
          </UserEntryWrapper>
          <Seperator />
          <UserEntryWrapper>
            <GroupOne>
              <Name>Moe</Name>
              <ScoreEntry>Wins 50</ScoreEntry>
              <ScoreEntry>Losses 10</ScoreEntry>
            </GroupOne>
            <GroupTwo>
              <WinPercantageText>Win percentage</WinPercantageText>
              <WinPercantage>80%</WinPercantage>
            </GroupTwo>
          </UserEntryWrapper>
          <Seperator />
          <UserEntryWrapper>
            <GroupOne>
              <Name>Hjarnaa</Name>
              <ScoreEntry>Wins 50</ScoreEntry>
              <ScoreEntry>Losses 10</ScoreEntry>
            </GroupOne>
            <GroupTwo>
              <WinPercantageText>Win percentage</WinPercantageText>
              <WinPercantage>80%</WinPercantage>
            </GroupTwo>
          </UserEntryWrapper>
          <Seperator />
          <UserEntryWrapper>
            <GroupOne>
              <Name>Jonas :(</Name>
              <ScoreEntry>Wins 50</ScoreEntry>
              <ScoreEntry>Losses 10</ScoreEntry>
            </GroupOne>
            <GroupTwo>
              <WinPercantageText>Win percentage</WinPercantageText>
              <WinPercantage>80%</WinPercantage>
            </GroupTwo>
          </UserEntryWrapper>
          <Seperator />
        </ScrollContainer>
      </Wrapper>
    );
  }
}
export default Ballers;