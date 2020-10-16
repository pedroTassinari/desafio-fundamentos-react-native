import { RevealFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  TextContainer,
  NumberOfItensText,
  TotalPriceText,
} from './styles';

const PageFooter: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <Icon name="shopping-cart" color="#FFFFFF" size={30} />
        <NumberOfItensText>16 itens</NumberOfItensText>
      </TextContainer>

      <TotalPriceText>R$ 5.597,00</TotalPriceText>
    </Container>
  );
};

export default PageFooter;
