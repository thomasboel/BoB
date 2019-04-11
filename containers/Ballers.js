import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 36px;

`;

class Ballers extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text>Ballers</Text>
      </Wrapper>
    );
  }
}
export default Ballers;