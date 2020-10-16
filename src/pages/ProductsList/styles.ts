import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 25px;

  background: #e5e5e5;
`;

export const Logo = styled.Image`
  margin-top: 30px;

  height: 25px;
  width: 185px;
`;

export const CardsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  margin-top: 25px;

  /* justify-content: center; */
`;

export const Card = styled.View`
  height: 240px;
  width: 150px;
  background: #ffffff;
  margin: 10px;
  border-radius: 5px;

  flex-direction: column;
`;

export const CardImage = styled.Image`
  height: 122px;
  width: 122px;
  margin: 20px 8px 0 26px;
`;

export const CardTitle = styled.Text`
  width: 110px;
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: #3d3d4d;
  line-height: 20px;

  margin: 16px 40px 0 16px;

  flex: 1;
`;

export const CardFooter = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const CardFooterText = styled.Text`
  font-family: 'Roboto-Regular';
  color: #e83f5b;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-left: 16px;
`;
