import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Wrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 36px;

`;

class Arena extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text>Arena</Text>
        <Button text={"New match"} />
      </Wrapper>
    );
  }
}
export default Arena;