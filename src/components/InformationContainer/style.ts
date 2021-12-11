import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const Information = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const InformationTitle = styled.Text`
  max-width: 130px;
  font-weight: bold;
  margin-bottom: 6px;
  margin-top: 16px;
`;
