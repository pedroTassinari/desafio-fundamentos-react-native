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
  flex-direction: column;
  flex: 1;
  margin-top: 25px;

  /* justify-content: center; */
`;

export const Card = styled.View`
  height: 125px;
  width: 330px;
  background: #ffffff;
  margin: 10px;
  border-radius: 5px;

  flex-direction: row;
`;

export const CardImage = styled.Image`
  height: 90px;
  width: 90px;
  margin: 16px 0 16px 16px;
`;

export const TextContainer = styled.View`
  width: 80px;
  height: 100%;
  margin-bottom: 8px;

  flex-direction: column;
  flex: 1;
  margin-left: 16px;
`;

export const ProductTitle = styled.Text`
  width: 110px;
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: #3d3d4d;
  line-height: 20px;
  margin-top: 16px;
  height: 40px;
`;

export const ProductPrice = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  line-height: 14px;
  color: #a0a0b3;
  margin-top: 8px;
`;

export const ProductInfoFooter = styled.Text`
  font-family: 'Roboto-Regular';
  color: #e83f5b;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-top: 8px;
`;

export const ButtonsContainer = styled.View`
  height: 80%;
  width: 50px;

  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding-right: 18px;
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  border-radius: 5px;
  background: rgba(232, 63, 91, 0.1);

  align-items: center;
  justify-content: center;

  margin-top: 8px;
`;
