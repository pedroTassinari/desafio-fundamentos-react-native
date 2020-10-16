import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 55px;
  background: #e83f5b;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 25px;

  position: absolute;
  bottom: 0;
`;

export const TextContainer = styled.View`
  height: 100%;
  width: 80px;

  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

export const NumberOfItensText = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  color: #ffffff;
  font-size: 16px;
  line-height: 16px;

  margin-left: 15px;
`;

export const TotalPriceText = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  color: #ffffff;
  font-size: 20px;
  line-height: 23px;

  margin-right: 15px;
`;
