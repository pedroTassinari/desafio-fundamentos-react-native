import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/logo.png';
import cadeira from '../../assets/cadeira.png';

import {
  Container,
  Logo,
  Card,
  CardsContainer,
  CardImage,
  TextContainer,
  ProductTitle,
  ProductPrice,
  ProductInfoFooter,
  ButtonsContainer,
  Button,
} from './styles';

const ShoppingCart: React.FC = () => {
  return (
    <Container>
      <Logo source={logo} />

      <CardsContainer>
        <Card>
          <CardImage source={cadeira} />
          <TextContainer>
            <ProductTitle>Cadeira Gamer Charles</ProductTitle>
            <ProductPrice>R$ 300,00</ProductPrice>
            <ProductInfoFooter>2x R$ 600,00</ProductInfoFooter>
          </TextContainer>
          <ButtonsContainer>
            <Button>
              <Icon name="plus" size={20} color="#e83f5b" />
            </Button>
            <Button>
              <Icon name="minus" size={20} color="#e83f5b" />
            </Button>
          </ButtonsContainer>
        </Card>

        <Card>
          <CardImage source={cadeira} />
          <TextContainer>
            <ProductTitle>Cadeira Gamer Charles</ProductTitle>
            <ProductPrice>R$ 300,00</ProductPrice>
            <ProductInfoFooter>2x R$ 600,00</ProductInfoFooter>
          </TextContainer>
          <ButtonsContainer>
            <Button>
              <Icon name="plus" size={20} color="#e83f5b" />
            </Button>
            <Button>
              <Icon name="minus" size={20} color="#e83f5b" />
            </Button>
          </ButtonsContainer>
        </Card>

        <Card>
          <CardImage source={cadeira} />
          <TextContainer>
            <ProductTitle>Cadeira G. Rivatti</ProductTitle>
            <ProductPrice>R$ 300,00</ProductPrice>
            <ProductInfoFooter>1x R$ 600,00</ProductInfoFooter>
          </TextContainer>
          <ButtonsContainer>
            <Button>
              <Icon name="plus" size={20} color="#e83f5b" />
            </Button>
            <Button>
              <Icon name="minus" size={20} color="#e83f5b" />
            </Button>
          </ButtonsContainer>
        </Card>

        <Card>
          <CardImage source={cadeira} />
          <TextContainer>
            <ProductTitle>Cadeira Gamer AwesomeJob</ProductTitle>
            <ProductPrice>R$ 300,00</ProductPrice>
            <ProductInfoFooter>3x R$ 600,00</ProductInfoFooter>
          </TextContainer>
          <ButtonsContainer>
            <Button>
              <Icon name="plus" size={20} color="#e83f5b" />
            </Button>
            <Button>
              <Icon name="minus" size={20} color="#e83f5b" />
            </Button>
          </ButtonsContainer>
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default ShoppingCart;
