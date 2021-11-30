import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #293845;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const CounterBox = styled.View`
  justify-content: center;
  align-items: center;

  padding-right: 48px;
  padding-left: 48px;
  padding-bottom: 16px;
  padding-top: 16px;

  border: solid 2px #9eadba;

  background-color: #dfe6ed;
`;

export const Counter = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #2c88d9;
`;
