import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  position: relative;

  padding: 30px;
  padding-top: 60px;
  background-color: #fff;
`;

export const Logo = styled.Image`
  height: 44px;
  width: 120px;

  position: absolute;
  right: 40%;
  bottom: 100%;
`;
