import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  justify-content: center;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;

  border: solid 2px #9eadba;
  background-color: #dfe6ed;
`;

export const MissingName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

export const Title = styled.Text`
  font-weight: bold;

  margin-top: 8px;
`;

export const Age = styled.Text`
  text-align: center;
`;

export const Avatar = styled.Image`
  align-self: center;

  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin-bottom: 8px;
`;

export const Button = styled.Button`
  background-color: red;
`;
