import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/logo.png';
import cadeira from '../../assets/cadeira.png';

import {
  Container,
  Logo,
  Card,
  CardsContainer,
  CardImage,
  CardTitle,
  CardFooter,
  CardFooterText,
} from './styles';

const ProductsList: React.FC = () => {
  return (
    <Container>
      <Logo source={logo} />

      <CardsContainer>
        <Card>
          <CardImage source={cadeira} />
          <CardTitle>Cadeira Gamer Charles</CardTitle>
          <CardFooter>
            <CardFooterText>R$300,00</CardFooterText>
            <Icon
              name="plus"
              size={20}
              color="#d7d7e6"
              style={{ marginRight: 20 }}
            />
          </CardFooter>
        </Card>

        <Card>
          <CardImage source={cadeira} />
          <CardTitle>Cadeira G. Rivatti</CardTitle>
          <CardFooter>
            <CardFooterText>R$300,00</CardFooterText>
            <Icon
              name="plus"
              size={20}
              color="#d7d7e6"
              style={{ marginRight: 20 }}
            />
          </CardFooter>
        </Card>

        <Card>
          <CardImage source={cadeira} />
          <CardTitle>Cadeira G. Rivatti</CardTitle>
          <CardFooter>
            <CardFooterText>R$300,00</CardFooterText>
            <Icon
              name="plus"
              size={20}
              color="#d7d7e6"
              style={{ marginRight: 20 }}
            />
          </CardFooter>
        </Card>

        <Card>
          <CardImage source={cadeira} />
          <CardTitle>Cadeira Gamer AwesomeJob</CardTitle>
          <CardFooter>
            <CardFooterText>R$300,00</CardFooterText>
            <Icon
              name="plus"
              size={20}
              color="#d7d7e6"
              style={{ marginRight: 20 }}
            />
          </CardFooter>
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default ProductsList;
